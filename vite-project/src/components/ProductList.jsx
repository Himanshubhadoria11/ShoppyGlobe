/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// import { useEffect } from "react";
// import ProductItem from "./ProductItem";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { addProducts } from "../utils/store/slices/productsSlice";
// import useFetch from "../utils/hooks/useFetch";
// import ProductListShimmerUI from "./ProductListShimmerUI";

// function ProductList({ filteredProducts, setFilteredProducts }) {
//     const products = useSelector(state => state.productsSlice.products);
//     const dispatch = useDispatch();
//      const { data, loading, error } = useFetch("https://dummyjson.com/products");

//     useEffect(() => {
      
//         if (products.length === 0 && !loading) {
//             localStorage.setItem("products", JSON.stringify(data?.products));
//             dispatch(addProducts(data?.products));
//         }
//     }, [data]);

//     useEffect(() => {
//         setFilteredProducts(products);
//     }, [products]);

//     if (loading) {
//         return <ProductListShimmerUI />;
//     }

//     if (error) {
//         return "Error";
//     }

//     return (
//         <section className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-5 gap-y-10">
//             {
//                 filteredProducts.length ?
//                     filteredProducts?.map(product => <ProductItem key={product.id} data={product} />)
//                     :
//                     <h2 className="text-2xl font-bold">No Products Found!</h2>
//             }
//         </section>
//     )
// }

// export default ProductList;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "../utils/store/slices/productsSlice";
import ProductItem from "./ProductItem";
import ProductListShimmerUI from "./ProductListShimmerUI";

function useFetchProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const result = await response.json();
                setProducts(result.products);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return { products, loading, error };
}

function ProductList({ filteredProducts, setFilteredProducts }) {
    const reduxProducts = useSelector(state => state.productsSlice.products);
    const dispatch = useDispatch();
    const { products, loading, error } = useFetchProducts();

    useEffect(() => {
        if (reduxProducts.length === 0 && !loading && products.length) {
            localStorage.setItem("products", JSON.stringify(products));
            dispatch(addProducts(products));
        }
    }, [products, loading]);

    useEffect(() => {
        setFilteredProducts(reduxProducts);
    }, [reduxProducts]);

    if (loading) return <ProductListShimmerUI />;
    if (error) return <h2 className="text-red-500">Error: {error}</h2>;

    return (
        <section className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-5 gap-y-10 ">
            {filteredProducts.length ? (
                filteredProducts.map(product => <ProductItem key={product.id} data={product} />)
            ) : (
                <h2 className="text-2xl font-bold">No Products Found!</h2>
            )}
        </section>
    );
}

export default ProductList;

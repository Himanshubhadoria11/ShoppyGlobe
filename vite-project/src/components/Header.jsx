// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// function Header() {
//     const cartItems = useSelector(state => state.cartSlice.cartItems);

//     return (
//         <header className="fixed top-0 shadow-lg rounded-b-[30px] bg-purple-400 z-10 w-full flex items-center justify-between px-5 py-5 min-[500px]:px-10">
//             <figure>
//                 <Link to="/">
//                     <img className="w-25 min-[500px]:w-25" src="/shopping-bag.png" />
//                     {/* w-32 min-[500px]:w-52 */}
//                 </Link>
//             </figure>
//               <h1 className='text-2xl  font-bold mr-270 text-orange-600'>ShoppyGlobe</h1>
//          {/* Hamburger Menu Button */}
//             <button 
//                 className="text-white text-2xl min-[500px]:hidden"
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 aria-label="Toggle menu"
//             >
//                 <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
//             </button>
//              <nav>
               
//                  <ul className="flex gap-x-6 min-[500px]:-mt-5 ">
                    
//                      <Link to="/"><li className="font-semibold  text-white text-lg hover:underline hover:text-blue-500">Home</li></Link>
                     
                     
//                      <Link to="/cart">
//                          <li className=" flex flex-row relative font-semibold">
//                              <FontAwesomeIcon className='mt-1 text-lg text-amber-500' icon={faCartShopping} />
                           
//                              <h1 className='text-white hover:underline font-bold'>Cart</h1>
//                              <span className='absolute -top-2 -right-3 text-lg text-white'>{cartItems.length ? cartItems.length : 0}</span>
//                          </li>
//                      </Link>
//                 </ul>
//              </nav>
//          </header>
//      )
//  }

//  export default Header;


// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes, faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// function Header() {
//     const cartItems = useSelector(state => state.cartSlice.cartItems);
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <header className="fixed top-0 shadow-lg rounded-b-[30px] bg-purple-400 z-10 w-full flex items-center justify-between px-5 py-2 min-[500px]:px-10">
//             {/* Logo */}
//             <figure>
//                 <Link to="/">
//                     <img className="w-25 min-[500px]:w-25" src="/shopping-bag.png" alt="ShoppyGlobe Logo" />
//                 </Link>
//             </figure>

//             {/* Site Name */}
//             <h1 className='text-2xl font-bold text-orange-600'>ShoppyGlobe</h1>

//             {/* Navigation (Desktop) */}
//             <nav className="hidden min-[500px]:flex justify-end flex-grow">
//                 <ul className="flex gap-x-6">
//                     <Link to="/">
//                         <li className="font-semibold text-white text-lg hover:underline hover:text-blue-500">Home</li>
//                     </Link>

//                     <Link to="/cart">
//                         <li className="flex flex-row relative font-semibold">
//                             <FontAwesomeIcon className='mt-1 text-lg text-amber-500' icon={faCartShopping} />
//                             <h1 className='text-white hover:underline font-bold'>Cart</h1>
//                             <span className='absolute -top-2 -right-3 text-lg text-white'>{cartItems.length ? cartItems.length : 0}</span>
//                         </li>
//                     </Link>
//                 </ul>
//             </nav>

//             {/* Hamburger Menu Button */}
//             <button 
//                 className="text-white text-2xl min-[500px]:hidden"
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 aria-label="Toggle menu"
//             >
//                 <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
//             </button>

//             {/* Mobile Navigation */}
//             <nav className={`${menuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-purple-500 rounded-b-lg min-[500px]:hidden`}>
//                 <ul className="flex flex-col gap-y-4 text-center">
//                     <Link to="/" onClick={() => setMenuOpen(false)}>
//                         <li className="font-semibold text-white text-lg hover:underline hover:text-blue-500">Home</li>
//                     </Link>

//                     <Link to="/cart" onClick={() => setMenuOpen(false)}>
//                         <li className="flex flex-row relative font-semibold justify-center">
//                             <FontAwesomeIcon className='text-lg text-amber-500' icon={faCartShopping} />
//                             <h1 className='text-white hover:underline font-bold'>Cart</h1>
//                             <span className='absolute -top-2 -right-3 text-lg text-white'>{cartItems.length ? cartItems.length : 0}</span>
//                         </li>
//                     </Link>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Header;

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const cartItems = useSelector(state => state.cartSlice.cartItems);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 shadow-lg rounded-b-[30px] bg-purple-400 z-10 w-full flex items-center justify-between px-5 py-1 min-[500px]:px-10">
            {/* Logo */}
            <figure>
                <Link to="/">
                    <img className="w-25 min-[500px]:w-25" src="/shopping-bag.png" alt="ShoppyGlobe Logo" />
                </Link>
            </figure>

            {/* Site Name */}
            <h1 className='text-2xl font-bold text-orange-600'>ShoppyGlobe</h1>

            {/* Navigation (Desktop) */}
            <nav className="hidden min-[500px]:flex justify-end flex-grow">
                <ul className="flex gap-x-6">
                    <Link to="/">
                        <li className="font-semibold text-white text-lg hover:underline hover:text-blue-500">Home</li>
                    </Link>
                    <Link to="/cart">
                        <li className="flex flex-row relative font-semibold">
                            <FontAwesomeIcon className='mt-1 text-lg text-amber-500' icon={faCartShopping} />
                            <h1 className='text-white hover:underline font-bold'>Cart</h1>
                            <span className='absolute -top-2 -right-3 text-lg text-white'>{cartItems.length ? cartItems.length : 0}</span>
                        </li>
                    </Link>
                </ul>
            </nav>

            {/* Hamburger Menu Button */}
            <button 
                className="text-white text-2xl min-[500px]:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>

            {/* Mobile Navigation - Opens Below Header */}
            <nav className={`${menuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-purple-500 rounded-xl    rounded-b-lg min-[500px]:hidden transition-transform duration-300`}>
                <ul className="flex flex-col gap-y-4 text-center p-4">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <li className="font-semibold text-white text-lg hover:underline hover:text-blue-500">Home</li>
                    </Link>
                    <Link to="/cart" onClick={() => setMenuOpen(false)}>
                        <li className="flex flex-row relative font-semibold justify-center">
                            <FontAwesomeIcon className='text-lg text-amber-500' icon={faCartShopping} />
                            <h1 className='text-white hover:underline font-bold'>Cart</h1>
                            <span className='absolute -top-2 -right-3 text-lg text-white'>{cartItems.length ? cartItems.length : 0}</span>
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;


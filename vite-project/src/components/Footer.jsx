// function Footer() {
//     return (
//         <footer className="mt-7 bg-purple-400 py-3 px-10 rounded-t-3xl">
//             <figure>
//                 <img className="w-36" src="/shopping-bag.png" />
//             </figure>

//             <article className="mt-5 min-[630px]:mt-0 flex flex-col items-center">
//                 <p className="text-white font-semibold text-center text-sm min-[400px]:text-base min-[630px]:text-md">Copyright Reserved - Himanshu Singh Bhadoria</p>
//             </article>
//         </footer>
//     )
// }

// export default Footer;

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


function Footer() {
    return (
        <footer className="mt-7 bg-purple-400 py-5 px-10 rounded-t-3xl text-white">
            <div className="flex flex-wrap justify-between items-center">
                {/* Logo Section */}
                <figure>
                    <img className="w-36" src="/shopping-bag.png" alt="Shopping Bag Logo" />
                </figure>

                {/* Navigation Links */}
                <nav className="flex gap-6 text-sm">
                    <a href="/about" className="hover:underline font-bold text-xl">About Us</a>
                    <a href="/contact" className="hover:underline font-bold text-xl">Contact</a>
                    <a href="/privacy" className="hover:underline font-bold text-xl">Privacy Policy</a>
                    <a href="/terms" className="hover:underline font-bold text-xl">Terms of Service</a>
                </nav>

                {/* Social Media Icons */}
                <div className="flex gap-4 ">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={50} className="bg-orange-400 rounded-full" />


                     
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                       <FaTwitter size={50} className="bg-orange-400 rounded-full"/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                       <FaInstagram size={50} className="bg-orange-400 rounded-full" />
                    </a>
                </div>

                {/* Copyright Notice */}
                <p className="text-sm font-semibold">
                    © {new Date().getFullYear()} Himanshu Singh Bhadoria. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;










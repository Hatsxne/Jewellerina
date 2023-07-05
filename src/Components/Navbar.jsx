
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <h1>Jewellerina</h1>
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/sale">Sale</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/reviews">Reviews</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
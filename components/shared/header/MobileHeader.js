import dynamic from 'next/dynamic';
import Image from 'next/image';
import NextLink from 'next/link';
import * as React from 'react'
import logo from '../../../assets/img/logo-black.png'
import {Store} from '../../../utils/Store';
import MiniCart from '../../miscellaneous/MiniCart'

const MobileHeader = () => {
    const {
        state: {
            cart: {
                cartItems
            }
        }
    } = React.useContext(Store)
    const [isOpen,
        setIsOpen] = React.useState(false);
    const [navbarOpen,
        setNavbarOpen] = React.useState(false);
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    const links = [
        {
            id: 1,
            path: "/",
            value: "Home"
        }, {
            id: 2,
            path: "/about/about",
            value: "About Us"
        }, {
            id: 3,
            path: "/services/services",
            value: "Services"
        }, {
            id: 3,
            path: "/portfolio/portfolio",
            value: "Portfolio"
        }, {
            id: 4,
            path: "/shop/shop",
            value: "Shop"
        }, {
            id: 5,
            path: "/blogs/blog",
            value: "Blogs"
        }, {
            id: 6,
            path: "/contact/contact",
            value: "Contact us"
        }
    ]
    return (
        <header className="header-mobile">
            <div className="container clearfix menu-container">
                <div className="logo pull-left">
                    <NextLink href="/" passHref>
                        <Image alt="logo" src={logo} width="171px" height="38px"/>
                    </NextLink>
                </div>

                <div className="header-button pull-right clearfix">
                    <div className="canvas-menu-button pull-right">
                        <button className='menu-mobile-btn' onClick={handleToggle}>
                            {navbarOpen
                                ? <i className="zmdi zmdi-close"></i>
                                : <i className="zmdi zmdi-menu"></i>
}
                        </button>
                    </div>
                    <div className="mini-cart pull-right">
                        <button
                            id="cart-button"
                            className="mini-cart-btn"
                            onClick={() => setIsOpen(!isOpen)}>
                            <i className="zmdi zmdi-case"></i>
                            <span className="mini-cart-counter">{cartItems.length}</span>
                        </button>
                    </div>
                </div>
                <div
                    className="header-button pull-right clearfix"
                    style={{
                    marginRight: '20px'
                }}>
                    <div className="canvas-menu-button pull-right">
                        <NextLink
                            passHref
                            href="/"
                            onClick={() => {
                            return false;
                        }}>
                            <a>
                                <i className="zmdi zmdi-search"></i>
                            </a>
                        </NextLink>
                    </div>
                    <form className="form form-header pull-left" role="form">
                        <input
                            type="text"
                            id="header-input"
                            className="form__input form__input--hidden"
                            placeholder="Search here..."/>
                    </form>
                </div>
            </div>
            <nav
                className={`menu-mobile ${navbarOpen
                ? " showMenu"
                : ""}`}>
                <ul className="ul--inline ul--no-style">
                    {links.map((link) => (
                        <li key={link.id} onClick={() => closeMenu()}>
                            <NextLink href={link.path} passHref>
                                <a>{link.value}</a>
                            </NextLink>
                        </li>
                    ))
}
                </ul>
            </nav>
            <div
                className={`cart-dropdown ${isOpen
                ? ""
                : "cart-dropdown--hidden"}`}>
                {cartItems.length === 0
                    ? <MiniCart/>
                    : (
                        <div className="cart-list ul--no-style">
                            {cartItems.map((prod) => (
                                <div key={prod._id}>
                                    <div className="cart__item">
                                        <div className="img-thumb">
                                            <Image src={prod.image} alt={prod.name} width="50px" height="40px"/>
                                            <span className="mini-cart-counter mini-cart-counter--gray">
                                                {prod.quantity}
                                            </span>
                                        </div>
                                        <div className="pro-detail">
                                            <h6>
                                                {prod.name}
                                            </h6>
                                            <p>
                                                <em>${prod.price}</em>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="total-checkout">
                                <p className="total">
                                    Subtotal:
                                    <span className="sum">${' '} {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}</span>
                                </p>
                                <div className="checkout-flex">
                                    <NextLink href="/cart" passHref>
                                        <button className="checkout-btn">My cart</button>
                                    </NextLink>
                                    <NextLink href="/checkout/checkout" passHref>
                                        <button className="checkout-btn">Checkout</button>
                                    </NextLink>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </header>
    )
}

export default dynamic(() => Promise.resolve(MobileHeader), {ssr: false});
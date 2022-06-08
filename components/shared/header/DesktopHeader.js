import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react'
import logo from '../../../assets/img/logo-black.png'
import {Store} from '../../../utils/Store';
import MiniCart from '../../miscellaneous/MiniCart'

const DesktopHeader = () => {
    const { state } = React.useContext(Store);
    const { cart } = state;
    const [isOpen,
        setIsOpen] = React.useState(false);
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
        <header className="header-desktop header1">
            <div className="container clearfix">
                <div className="logo pull-left">
                    <Link href="/">
                        <Image alt="logo" src={logo} width="171px" height="38px"/>
                    </Link>
                </div>

                <div className="header-button pull-right clearfix">
                    <div className="canvas-menu-button pull-right">
                        <Link
                            href="/"
                            onClick={() => {
                            return false;
                        }}>
                            <a>
                                <i className="zmdi zmdi-menu"></i>
                            </a>
                        </Link>
                    </div>
                    <div className="mini-cart pull-right">
                        <div>
                            <button className="mini-cart-btn" onClick={() => setIsOpen(!isOpen)}>
                                <i className="zmdi zmdi-case"></i>
                            </button>
                            <div className="mini-cart-counter">{cart.cartItems.length}</div>
                        </div>
                        <div
                            className={`cart-dropdown ${isOpen
                            ? ""
                            : "cart-dropdown--hidden"}`}>
                            {cart.cartItems.length === 0
                                ? <MiniCart/>
                                : (
                                    <div className="cart-list ul--no-style">
                                        {cart.cartItems.map((prod) => (
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
                                                <span className="sum">${' '} {cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}</span>
                                            </p>
                                            <div className="checkout-flex">
                                                <Link href="/cart">
                                                    <button className="checkout-btn">My cart</button>
                                                </Link>
                                                <Link href="/checkout/checkout">
                                                    <button className="checkout-btn">Checkout</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
                <div
                    className="header-button pull-right clearfix"
                    style={{
                    marginRight: '20px'
                }}>
                    <div className="canvas-menu-button pull-right">
                        <Link
                            href="/"
                            onClick={() => {
                            return false;
                        }}>
                            <a>
                                <i className="zmdi zmdi-search"></i>
                            </a>
                        </Link>
                    </div>
                    <form className="form form-header pull-left" role="form">
                        <input
                            type="text"
                            id="header-input"
                            className="form__input form__input--hidden"
                            placeholder="Search here..."/>
                    </form>
                </div>
                <nav className="menu-desktop menu-desktop--show pull-right">
                    <ul className="ul--inline ul--no-style">
                        {links.map((link) => (
                            <li key={link.id}>
                                <Link href={link.path}>
                                    <a>{link.value}</a>
                                </Link>
                            </li>
                        ))
}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default dynamic(() => Promise.resolve(DesktopHeader), {ssr: false});
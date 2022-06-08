import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../assets/img/logo-white.png'

const Footer = () => {
    const links = [
        {
            id: 1,
            path: "/about",
            value: "About Us"
        }, {
            id: 2,
            path: "/services",
            value: "Services"
        }, {
            id: 3,
            path: "/portfolio",
            value: "Portfolio"
        }, {
            id: 4,
            path: "/shop",
            value: "Shop"
        }, {
            id: 5,
            path: "/blog",
            value: "Blog"
        }, {
            id: 6,
            path: "/contact",
            value: "Contact us"
        }
    ]
    return (
        <>
            <footer>
                <div className="overlay overlay--dark"></div>
                <div className="parallax parallax--footer">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-md-9 col-12">
                                <h1>
                                    <Link href="/">
                                        <Image alt="Logo" src={logo} width="171px" height="38px"/>
                                    </Link>
                                </h1>
                                <form method="post" className="form-footer">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form__input"
                                        placeholder="Your Email..."/>
                                    <button
                                        type="submit"
                                        className="au-btn au-btn--yellow au-btn--white au-btn--submit">
                                        Send
                                    </button>
                                </form>
                                <ul className="ul--inline ul--footer">
                                    {links.map((link) => (
                                        <li key={link.id}>
                                            <Link href='/'>
                                                <a>{link.value}</a>
                                            </Link>
                                        </li>
                                    ))
}
                                </ul>
                                <div className="social">
                                    <div className="social__item social__item--circle">
                                        <Link href="https://www.facebook.com/Recherch%C3%A9-Interiors-104160335015480/">
                                            <a>
                                                <i className="zmdi zmdi-facebook"></i>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="social__item social__item--circle">
                                        <Link
                                            href="https://api.whatsapp.com/send/?phone=%2B2348143101640&text=wa.me&app_absent=0">
                                            <a>
                                                <i className="zmdi zmdi-whatsapp"></i>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="social__item social__item--circle">
                                        <Link href="https://instagram.com/recherche_interiors_?utm_medium=copy_link">
                                            <a>
                                                <i className="zmdi zmdi-instagram"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            Copyright © 2021 Recherché. All rights reserved
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
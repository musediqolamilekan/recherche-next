import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import recent01 from '../../assets/img/blog-item-01.jpg'
import recent02 from '../../assets/img/blog-item-02.jpg'
import recent03 from '../../assets/img/blog-item-03.jpg'

const Right = () => {
    return (
        <div className="blogContainer__sideBox">
            <div>
                <form className="blogContainer__form">
                    <input
                        type="search"
                        className="blogContainer__search"
                        placeholder="Search here..."/>
                    <button className="blogContainer__searchBtn">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>

            <div className="blogContainer__general clearFix">
                <h3>Recent</h3>
                <div className="blogContainer__recent">
                    <div className="blogContainer__pull">
                        <Image alt="blog Image" src={recent01} width="198px" height="98px" />
                    </div>
                    <div className="blogContainer__text">
                        <h4>
                            <Link href="/">
                                <a>5 Simple Tips To Decorate Your Home</a>
                            </Link>
                        </h4>
                        <p>March, 03, 2022</p>
                    </div>
                </div>

                <div className="blogContainer__recent">
                    <div className="blogContainer__pull">
                        <Image alt="Recent Post" src={recent02} width="198px" height="98px" />
                    </div>
                    <div className="blogContainer__text">
                        <h4>
                            <Link href="/">
                                <a>MORDEN INTERIOR AND HUMAN ABILITY</a>
                            </Link>
                        </h4>
                        <p>March, 03, 2022</p>
                    </div>
                </div>

                <div className="blogContainer__recent">
                    <div className="blogContainer__pull">
                        <Image alt="Recent Post" src={recent03} width="198px" height="98px" />
                    </div>
                    <div className="blogContainer__text">
                        <h4>
                            <Link href="/">
                                <a>DETAILS ARE THE KEY OF INTERIOR</a>
                            </Link>
                        </h4>
                        <p>March, 03, 2022</p>
                    </div>
                </div>
            </div>

            {/* Category */}
            <div className="blogContainer__general">
                <h3>Category</h3>
                <ul className="blogContainer__ul">
                    <li>
                        <Link href="/">
                            <a>Design Knowledge</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Tricks and Tips</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Inferior Experience</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Question and Answer</a>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Tags */}
            <div className="blogContainer__general">
                <h3>Tags</h3>
                <div className="blogContainer__tags">
                    <Link href="/">
                        <a>Art deco</a>
                    </Link>
                    <Link href="/">
                        <a>Architecture</a>
                    </Link>
                    <Link href="/">
                        <a>ARC</a>
                    </Link>
                    <Link href="/">
                        <a>Famous Building 2017</a>
                    </Link>
                    <Link href="/">
                        <a>Au Creative</a>
                    </Link>
                    <Link href="/">
                        <a>Resort</a>
                    </Link>
                    <Link href="/">
                        <a>Minimalist style</a>
                    </Link>
                    <Link href="/">
                        <a>MH</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Right
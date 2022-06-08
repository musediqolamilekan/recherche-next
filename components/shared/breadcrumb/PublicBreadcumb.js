import Link from 'next/link'
import React from 'react'

const PublicBreadcumb = ({pageTitle}) => {
    return (
        <section className="navigation">
            <div className="parallax parallax--nav-1">
                <div className="container clearfix">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>{pageTitle === "Portfolio"
                                    ? "Past Projects"
                                    : pageTitle}</h2>
                            <ul className="breadcrumbs ul--inline ul--no-style">
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <span>/</span>

                                <li className="active">{pageTitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PublicBreadcumb
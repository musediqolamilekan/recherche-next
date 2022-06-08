import Image from "next/image";
import React from "react";
import portfolio01 from '../../assets/img/newimg/portfolio-1.jpg'
import portfolio02 from '../../assets/img/newimg/portfolio-2.jpg'
import portfolio03 from '../../assets/img/newimg/portfolio-3.jpg'
import portfolio04 from '../../assets/img/newimg/portfolio-4.jpg'
import portfolio05 from '../../assets/img/newimg/portfolio-5.jpg'

function Gallery() {
    return (
        <section className="latest-project">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-12">
                        <h2 className="title">Gallery</h2>
                        <p className="title-detail"></p>
                    </div>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-lg-3 col-md-6">
                    <div className="latest__item">
                        <Image alt="Project 1" src={portfolio01} width="371px" height="586px" />
                        <div className="overlay overlay--invisible overlay--p-15">
                            <div className="overlay--border"></div>
                        </div>
                        <div className="latest__item--content">
                            <div className="latest__item--inner">
                                <h3>
                                    <a href="project-2col-v1.html">Piety Spire</a>
                                </h3>
                                <div className="cat-name">
                                    <a href="project-2col-v1.html">
                                        <em>Bed room</em>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest__item">
                        <Image alt="Project 2" src={portfolio02} width="371px" height="557px"/>
                        <div className="overlay overlay--invisible overlay--p-15">
                            <div className="overlay--border"></div>
                        </div>
                        <div className="latest__item--content">
                            <div className="latest__item--inner">
                                <h3>
                                    <a href="project-2col-v1.html">Monster Den</a>
                                </h3>
                                <div className="cat-name">
                                    <a href="project-2col-v1.html">
                                        <em>Drawing room</em>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="latest__item">
                        <Image alt="Project 3" src={portfolio03} width="371px" height="557px"/>
                        <div className="overlay overlay--invisible overlay--p-15">
                            <div className="overlay--border"></div>
                        </div>
                        <div className="latest__item--content">
                            <div className="latest__item--inner">
                                <h3>
                                    <a href="#">Mystery Stream</a>
                                </h3>
                                <div className="cat-name">
                                    <a href="#">
                                        <em>Living room</em>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest__item">
                        <Image alt="Project 4" src={portfolio04} width="371px" height="558px"/>
                        <div className="overlay overlay--invisible overlay--p-15">
                            <div className="overlay--border"></div>
                        </div>
                        <div className="latest__item--content">
                            <div className="latest__item--inner">
                                <h3>
                                    <a href="#">Au guest</a>
                                </h3>
                                <div className="cat-name">
                                    <a href="#">
                                        <em>Guest Room</em>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="latest__item">
                        <Image alt="Project 5" src={portfolio05} width="371px" height="235px"/>
                        <div className="overlay overlay--invisible overlay--p-15">
                            <div className="overlay--border"></div>
                        </div>
                        <div className="latest__item--content">
                            <div className="latest__item--inner">
                                <h3>
                                    <a href="project-2col-v1.html">Au music</a>
                                </h3>
                                <div className="cat-name">
                                    <a href="project-2col-v1.html">
                                        <em>Music Room</em>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;

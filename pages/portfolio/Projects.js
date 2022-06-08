import Image from "next/image";
import React from "react";
import project01 from '../../assets/img/pro-45.jpg'
import project02 from '../../assets/img/pro-42.jpg'
import project03 from '../../assets/img/pro-41.jpg'
import project04 from '../../assets/img/pro-43.jpg'
import project12 from '../../assets/img/pro-53.jpg'
import project06 from '../../assets/img/pro-39.jpg'
import project07 from '../../assets/img/pro-48.jpg'
import project08 from '../../assets/img/pro-49.jpg'
import project09 from '../../assets/img/pro-50.jpg'
import project10 from '../../assets/img/pro-51.jpg'
import project11 from '../../assets/img/pro-52.jpg'
import project05 from '../../assets/img/pro-44.jpg'

function Projects() {
    return (
        <section className="project5">
            <div className="row no-gutters">
                <div className="col-md-12">
                    <div id="filter-wrap">
                        <ul id="filter" className="ul--no-style ul--inline">
                            <li className="active">
                                <span data-filter="*">All</span>
                            </li>
                            <li>
                                <span data-filter=".agency">Agency Interior</span>
                            </li>
                            <li>
                                <span data-filter=".ecomer">Ecommerce Interior</span>
                            </li>
                            <li>
                                <span data-filter=".resident">Residential Interior</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="isotope-grid" className="project--hover clearfix row no-gutters">
                <div className="col-lg-3 col-md-6 col-sm-12 item agency">
                    <div className="project__item">
                        <div className="pro__img">
                            <Image alt="Project 1" src={project01} width="400px" height="264px" />
                            <div className="pro-link">
                                <div className="pro-info pro-info--darker">
                                    <h4 className="company">
                                        <a href="#">Au creative</a>
                                    </h4>
                                    <p className="cat-name">
                                        <a href="#">
                                            <em>Agency Interior</em>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 item agency">
                    <div className="project__item">
                        <div className="pro__img">
                            <Image alt="Project 2" src={project02} width="400px" height="304px" />
                            <div className="pro-link">
                                <div className="pro-info pro-info--darker">
                                    <h4 className="company">
                                        <a href="#">Au creative</a>
                                    </h4>
                                    <p className="cat-name">
                                        <a href="#">
                                            <em>Agency Interior</em>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 item agency">
                    <div className="project__item">
                        <div className="pro__img">
                            <Image alt="Project 3" src={project03} width="400px" height="500px" />
                            <div className="pro-link">
                                <div className="pro-info pro-info--darker">
                                    <h4 className="company">
                                        <a href="#">Au creative</a>
                                    </h4>
                                    <p className="cat-name">
                                        <a href="#">
                                            <em>Agency Interior</em>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 item ecomer">
                    <div className="project__item">
                        <div className="pro__img">
                            <Image alt="Project 4" src={project04} width="400px" height="301px" />
                            <div className="pro-link">
                                <div className="pro-info pro-info--darker">
                                    <h4 className="company">
                                        <a href="#">Au creative</a>
                                    </h4>
                                    <p className="cat-name">
                                        <a href="#">
                                            <em>Ecommerce Interior</em>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 item agency">
                    <div className="project__item">
                        <div className="pro__img">
                            <Image alt="Project 12" src={project12} width="400px" height="526px"/>
                            <div className="pro-link">
                                <div className="pro-info pro-info--darker">
                                    <h4 className="company">
                                        <a href="#">Au creative</a>
                                    </h4>
                                    <p className="cat-name">
                                        <a href="#">
                                            <em>Agency Interior</em>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 item agency">
                    <div className="project__item">
                        <div className="pro__img">
                            <Image alt="Project 6" src={project06} width="400px" height="453px"/>
                            <div className="pro-link">
                                <div className="pro-info pro-info--darker">
                                    <h4 className="company">
                                        <a href="#">Au creative</a>
                                    </h4>
                                    <p className="cat-name">
                                        <a href="#">
                                            <em>Agency Interior</em>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 item agency">
                    <div className="project__item">
                        <div className="pro__img">
                            <Image alt="Project 7" src={project07} width="400px" height="415px"/>
                            <div className="pro-link">
                                <div className="pro-info pro-info--darker">
                                    <h4 className="company">
                                        <a href="#">Au creative</a>
                                    </h4>
                                    <p className="cat-name">
                                        <a href="#">
                                            <em>Agency Interior</em>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 item resident">
                    <div className="project__item">
                        <div className="pro__img">
                            <Image alt="Project 8" src={project08} width="400px" height="447px"/>
                            <div className="pro-link">
                                <div className="pro-info pro-info--darker">
                                    <h4 className="company">
                                        <a href="#">Au creative</a>
                                    </h4>
                                    <p className="cat-name">
                                        <a href="#">
                                            <em>Residential Interior</em>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 item resident">
                    <div className="project__item">
                        <div className="pro__img">
                            <Image alt="Project 9" src={project09} width="400px" height="500px"/>
                            <div className="pro-link">
                                <div className="pro-info pro-info--darker">
                                    <h4 className="company">
                                        <a href="#">Au creative</a>
                                    </h4>
                                    <p className="cat-name">
                                        <a href="#">
                                            <em>Residential Interior</em>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 item resident">
                    <div className="project__item">
                        <div className="pro__img">
                            <Image alt="Project 10" src={project10} width="400px" height="513px"/>
                            <div className="pro-link">
                                <div className="pro-info pro-info--darker">
                                    <h4 className="company">
                                        <a href="#">Au creative</a>
                                    </h4>
                                    <p className="cat-name">
                                        <a href="#">
                                            <em>Residential Interior</em>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 item agency">
                    <div className="project__item">
                        <div className="pro__img">
                            <Image alt="Project 11" src={project11} width="400px" height="400px"/>
                            <div className="pro-link">
                                <div className="pro-info pro-info--darker">
                                    <h4 className="company">
                                        <a href="#">Au creative</a>
                                    </h4>
                                    <p className="cat-name">
                                        <a href="#">
                                            <em>Agency Interior</em>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 item agency">
                    <div className="project__item">
                        <div className="pro__img">
                            <Image alt="Project 5" src={project05} width="400px" height="325px"/>
                            <div className="pro-link">
                                <div className="pro-info pro-info--darker">
                                    <h4 className="company">
                                        <a href="#">Au creative</a>
                                    </h4>
                                    <p className="cat-name">
                                        <a href="#">
                                            <em>Agency Interior</em>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;

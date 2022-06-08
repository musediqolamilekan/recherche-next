import React from "react";
import bg01 from '../../assets/img/service-01.jpg'
import bg02 from '../../assets/img/newimg/bodyslide-1.jpeg'
import bg03 from '../../assets/img/newimg/bodyslide-2.jpeg'
import bg04 from '../../assets/img/newimg/bodyslide-3.jpeg'

function OurServices() {
  return (
    <section className="service">
      <div className="service-wrap">
        <div
          className="service__item service__intro"
          style={{ backgroundImage: `url(${bg01.src})` }}
        >
          <div className="service__item-inner">
            <h3>
              <span>we are RECHERCHÉ</span>
              <br /> your best solution
            </h3>
            <p>
              We are committed to creating functional elegant spaces with
              expertise in Residential, Commercial and Retail services
              <br />
              Our interior design team brings a high level of creativity to
              every project.
            </p>
            <div>
              <a
                href="about"
                className="au-btn au-btn--big au-btn--pill au-btn--white au-btn--border au-btn--big"
              >
                See more
              </a>
            </div>
          </div>
        </div>
        <div
          className="service__item"
          style={{ backgroundImage: `url(${bg02.src})`}}
        >
          <div className="service__item-inner"></div>
        </div>
        <div
          className="service__item"
          style={{ backgroundImage: `url(${bg03.src})` }}
        >
          <div className="service__item-inner"></div>
        </div>
        <div
          className="service__item"
          style={{ backgroundImage: `url(${bg04.src})` }}
        >
          <div className="service__item-inner"></div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;

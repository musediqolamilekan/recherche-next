import Image from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import FirstSlide from '../../assets/img/newimg/slide-01.jpg'
import SecondSlide from '../../assets/img/slide-02.jpg'
import ThirdSlide from '../../assets/img/slide-03.jpg'

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};
function Slider() {
  return (
    <section className="slide">
      <div className="rev_slider_wrapper">
        <div
          id="revolution-slider1"
          className="rev_slider"
          data-version="5.4.4"
          // style="display: none;"
        >
          <AliceCarousel
            responsive={responsive}
            autoPlay
            disableButtonsControls
            infinite
            autoPlayInterval={5000}
            animationDuration={2000}
            controlsStrategy="alternate"
          >
            <div style={{ maxHeight: 600 }}>
              <Image alt="Slide 1" src={FirstSlide} width="1920px" height="820px"/>

              <div>Professional</div>

              <div>interior design</div>

              <a href="contact">Get a Quick Quote</a>
            </div>

            <div style={{ maxHeight: 600 }}>
              <Image alt="Slide 2" src={SecondSlide} width="1920px" height="820px"/>

              <div
                className="tp-caption slide-title"
                data-x="center"
                data-y="['325', '210', '210', '180']"
                data-fontsize="['36', '36', '26', '24']"
                data-whitespace="normal"
                data-textalign="['center']"
                data-frames='[{"delay":1600,"speed":1000,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
              >
                Professional
              </div>

              <div
                className="tp-caption slide-content"
                data-x="center"
                data-y="center"
                data-width="['1170', '970', '768', '480']"
                data-fontsize="['72', '72', '62', '46']"
                data-textalign="['center']"
                data-frames='[{"delay":1800,"speed":1000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
              >
                interior design
              </div>

              <a
                href="contact"
                className="tp-caption au-btn au-btn--big au-btn--pill au-btn--yellow au-btn--slide"
                data-x="center"
                data-y="[&#39;506&#39;, &#39;390&#39;, &#39;390&#39;, &#39;310&#39;]"
                data-textalign="[&#39;center&#39;]"
                data-frames='[{"delay":2200,"speed":1000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
              >
                Get a Quick Quote
              </a>
            </div>

            <div style={{ maxHeight: 600 }}>
              <Image alt="Slide 3" src={ThirdSlide} width="1920px" height="820px"/>

              <div
                className="tp-caption slide-title"
                data-x="center"
                data-y="['325', '210', '210', '180']"
                data-fontsize="['36', '36', '26', '24']"
                data-whitespace="normal"
                data-textalign="['center']"
                data-frames='[{"delay":1600,"speed":1000,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
              >
                Professional
              </div>

              <div
                className="tp-caption slide-content"
                data-x="center"
                data-y="center"
                data-width="['1170', '970', '768', '480']"
                data-fontsize="['72', '72', '62', '46']"
                data-textalign="['center']"
                data-frames='[{"delay":1800,"speed":1000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
              >
                interior design
              </div>

              <a
                href="contact"
                className="tp-caption au-btn au-btn--big au-btn--pill au-btn--yellow au-btn--slide"
                data-x="center"
                data-y="[&#39;506&#39;, &#39;390&#39;, &#39;390&#39;, &#39;310&#39;]"
                data-textalign="[&#39;center&#39;]"
                data-frames='[{"delay":2200,"speed":1000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
              >
                Get a Quick Quote
              </a>
            </div>
          </AliceCarousel>
        </div>
      </div>
    </section>
  );
}

export default Slider;

import React from "react";
import Image from "next/image";
import vorides from "../../../public/images/vorides-left.png";
import voridelogo from "../../../public/images/voride-logo.png";
import {
  Svg21Plus,
  SvgAustralia,
  SvgIOS,
  SvgKotlin,
} from "../../utils/08utilFeatProject";
// SVGs as JSX elements

const AppData = [
  {
    img: <Svg21Plus />,
    title: "21+",
  },
  {
    img: <SvgAustralia />,
    title: "Australia",
  },
  {
    img: <SvgIOS />,
    title: "IOS",
  },
  {
    img: <SvgKotlin />,
    title: "Kotlin",
  },
];

const FeaturedProject = () => {
  return (
    <section className="featured-main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center mb-3">
            <h3>
              Featured <span>Projects</span>
            </h3>
            <p>
              Using the latest technology and industry expertise, we built
              top-end Android and iOS-based applications that add value to the
              business and user experience.
            </p>
          </div>
        </div>
        <div className="row featured-bg">
          <div className="col-sm-6 col-xs-12 featured-left-image text-center p-5 d-flex align-items-center justify-content-center">
            <Image src={vorides} alt="vorides" className="center-img" />
            <Image src={voridelogo} alt="vorides-logo" className="voridelogo" />
          </div>
          <div className="col-sm-6 col-xs-12 featured-right pe-5 pt-5 pb-5">
            <div className="featured-right-content">
              <h4 className="color-wt">Vorides</h4>
              <p className="color-wt mb-4">
                Vorides is Camerofest and most affordable intercity and
                Intra-city ride-sharing platform.
              </p>
              <ul className="icon-content-main pb-4">
                {AppData.map((appdatacontent, index) => (
                  <li key={index}>
                    <div className="mb-4">{appdatacontent.img}</div>
                    <p className="color-wt mb-0">{appdatacontent.title}</p>
                  </li>
                ))}
              </ul>
              <a className="explore-btn" href="/">
                View Case Study
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-right"
                  className="svg-inline--fa fa-arrow-right "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;

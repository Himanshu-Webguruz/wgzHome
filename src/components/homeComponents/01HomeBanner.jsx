import React from "react";
const HomeBanner = () => {
  return (
    <div>
      <section className="home-banner d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 video-banner">
              {/* <video
                autoPlay
                muted
                loop
                preload="auto"
                width={"100%"}
                playsInline
              >
                <source src="/video/baner-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
            </div>
            <div className="col-sm-8 col-xs-12 banner-content">
              <h1>
                A{" "}
                <span className="animate-charcter">
                  Website & Mobile App Development Company
                </span>{" "}
                with You in Mind
              </h1>
              <p>Innovative Digital Solutions to Fuel your Growth</p>
              <form className="website-label">
                <input type="text" placeholder="Enter your Website" />
                <input type="submit" value="Send me a proposal" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;

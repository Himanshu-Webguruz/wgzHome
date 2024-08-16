import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import numbercards from "@/utils/04utilHomeNumbers";


const HomeNumbers = () => {
  return (
    <div>
      <section className="number-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center pb-5">
              <h3>
                By the <span>numbers</span>
              </h3>
              <p>
                Our best-in-class digital marketing agency impresses customers
                with impactful results and wows them with stellar customer
                service.
              </p>
              <form className="websiteInput">
                <input type="text" placeholder="Enter Your Website" />
                <input type="submit" value="Get a proposal" />
              </form>
            </div>
          </div>
          <div className="row">
            {numbercards.map((card, index) => (
              <div className="col-sm-3 col-xs-12" key={index}>
                <div className="card text-center">
                  <h4>{card.title}</h4>
                  <p>{card.para}</p>
                  <h3>{card.percentage}</h3>
                  <Link className="btn-link" href="/">
                    {card.anchor}
                    <FontAwesomeIcon icon={faArrowRight} className="ps-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeNumbers;

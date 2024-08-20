import React from "react";
import dcma from "../../public/images/dmca.png";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
      <footer className="footer-main pt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-xs-12 footer-sub one">
              <h5>About</h5>
              <ul>
                <li>
                  <Link href="/">Our company</Link>
                </li>
                <li>
                  <Link href="/">Core Team</Link>
                </li>
                <li>
                  <Link href="/">Career</Link>
                </li>
                <li>
                  <Link href="/">CSR</Link>
                </li>
                <li>
                  <Link href="/">How We Work</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 col-xs-12 footer-sub two">
              <h5>Services</h5>
              <ul>
                <li>
                  <Link href="/">Web Design</Link>
                </li>
                <li>
                  <Link href="/">Web Development</Link>
                </li>
                <li>
                  <Link href="/">CMS Development</Link>
                </li>
                <li>
                  <Link href="/">Digital Marketing</Link>
                </li>
                <li>
                  <Link href="/">It Services</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 col-xs-12 footer-sub">
              <h5>Technologies</h5>
              <ul>
                <li>
                  <Link href="/">Blockchain</Link>
                </li>
                <li>
                  <Link href="/">Artificial Intelligence</Link>
                </li>
                <li>
                  <Link href="/">AR and VR</Link>
                </li>
                <li>
                  <Link href="/">Cloud Computing</Link>
                </li>
                <li>
                  <Link href="/">Internet of Things</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 col-xs-12 footer-sub">
              <h5>Industries</h5>
              <ul>
                <li>
                  <Link href="/">Our company</Link>
                </li>
                <li>
                  <Link href="/">Core Team</Link>
                </li>
                <li>
                  <Link href="/">Career</Link>
                </li>
                <li>
                  <Link href="/">CSR</Link>
                </li>
                <li>
                  <Link href="/">How We Work</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 col-xs-12 footer-sub">
              <h5>About</h5>
              <ul>
                <li>
                  <Link href="/">Our company</Link>
                </li>
                <li>
                  <Link href="/">Core Team</Link>
                </li>
                <li>
                  <Link href="/">Career</Link>
                </li>
                <li>
                  <Link href="/">CSR</Link>
                </li>
                <li>
                  <Link href="/">How We Work</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 col-xs-12 footer-sub">
              <h5>About</h5>
              <ul>
                <li>
                  <Link href="/">Our company</Link>
                </li>
                <li>
                  <Link href="/">Core Team</Link>
                </li>
                <li>
                  <Link href="/">Career</Link>
                </li>
                <li>
                  <Link href="/">CSR</Link>
                </li>
                <li>
                  <Link href="/">How We Work</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row py-4 border-botm">
            <div className="col-sm-4 col-xs-12 footer-bottom left">
              <p>Statutory legal information</p>
            </div>
            <div className="col-sm-4 col-xs-12 footer-bottom social-icons">
              <ul>
                <li>
                  <Link href="#"></Link>
                </li>
                <li>
                  <Link href="#"></Link>
                </li>
                <li>
                  <Link href="#"></Link>
                </li>
                <li>
                  <Link href="#"></Link>
                </li>
                <li>
                  <Link href="#"></Link>
                </li>
                <li>
                  <Link href="#"></Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-xs-12 footer-bottom right">
              <div className="bottom-right-img d-flex align-items-center">
                <Image src={dcma} alt="dcma" />
                <p className="px-2 mb-0">
                  Mobile App & Web Development Company
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 col-xs-12 copyright">
              <p>
                Copyright @ 2024 Webguruz Technologies Private Limited. || All
                Right Reserved
              </p>
            </div>
            <div className="col-sm-5 col-xs-12 right-privacy">
              <ul className="d-flex align-items-center justify-content-end">
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">Term & Condition</Link>
                </li>
                <li>
                  <Link href="/">SiteMap</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

  );
};

export default Footer;

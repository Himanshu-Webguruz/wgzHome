"use client";
import React from "react";
import logo from "../../public/images/header-logo.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`hdrtopsst ${isScrolled ? "onScroll" : ""}`}>
      <section className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12"></div>
            <div className="col-sm-6 col-xs-12 contact-right">
              <ul>
                <li>
                  <Link href="#">(+91) 708 723 3361( Sales )</Link>
                </li>
                <li>
                  <Link href="#">(+91) 959 201 6444( Jobs )</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="nav navigation-main">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-4 col-xs-12 logo">
              <Image src={logo} alt="logo" />
            </div>
            <div className="col-sm-8 col-xs-12 menu">
              <ul className="d-flex m-0 p-0 justify-content-end align-items-center">
                <li className="px-3 py-2 mx-2">
                  <Link href="/">About</Link>
                </li>
                <li className="px-3 py-2  mx-2">
                  <Link href="/">Services</Link>
                </li>
                <li className="px-3 py-2 mx-2">
                  <Link href="/">Our Portfolio</Link>
                </li>
                <li className="px-3 py-2 mx-2">
                  <Link href="/">Resources</Link>
                </li>
                <li className="px-3 py-2 mx-2">
                  <Link href="/">Join Us</Link>
                </li>
                <li className="contactMain px-4">
                  <Link href="/">
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;

import React, { Component } from "react";
import homeCss from "./Home.module.css";
import ImgSvg from "../../assets/Images/avataaars.svg";

export default class Home extends Component {
  render() {
    return (
      <>
        <section className={ homeCss.main + " vh-100 d-flex justify-content-center align-items-center text-center "}>
          <div className="">
            <img src={ImgSvg} alt="" className="w-75 pb-3" />
            <h1 className="text-white fw-bold">START FRAMEWORK</h1>
            <div className={homeCss.homeInner}>
              <div className={homeCss.homeInnerI}>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>

            <p className="text-white pt-2">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </section>
      </>
    );
  }
}

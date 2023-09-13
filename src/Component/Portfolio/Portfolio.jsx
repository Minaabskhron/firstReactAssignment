import React, { Component } from "react";
import protfolioCss from "./Portfolio.module.css";
import img1 from "../../assets/Images/poert1.png";
import img2 from "../../assets/Images/port2.png";
import img3 from "../../assets/Images/port3.png";

import $ from "jquery"

export default class Portfolio extends Component {

  appearImgs(){
    const myImage = $(".myImage")
    const myLayer = $(".mainLayerClass");
    const myImageSrc = myImage.prev().attr("src");
    myLayer.removeClass("d-none");
    myLayer.addClass("d-flex");
    myLayer.children(0).attr("src",myImageSrc);
  }

  render() {
    return (
      <>
        <section>
          <div className="text-center">
            <h1 className={protfolioCss.h1Color+" pt-5 fw-bold"}>PORTFOLIO COMPONENT</h1>
            <div className={protfolioCss.homeInner}>
              <div className={protfolioCss.homeInnerI}>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>

          <div className="container pt-3 pb-5 fa-2xl">
            <div className="row g-5  ">
              <div className=" col-md-4">
                <div className={protfolioCss.portfolioImgDiv + " "}>
                  <img
                    src={img1}
                    alt=""
                    className={protfolioCss.portfolioImg + " w-100 rounded-3 "}
                  />
                  <div
                    className={
                      protfolioCss.layer +
                      " rounded-3 d-flex justify-content-center align-items-center text-white  fa-2xl myImage"
                    }
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className={protfolioCss.portfolioImgDiv}>
                  <img
                    src={img2}
                    alt=""
                    className={protfolioCss.portfolioImg + " w-100 rounded-3"}
                  />
                  <div
                    className={
                      protfolioCss.layer +
                      " rounded-3 d-flex justify-content-center align-items-center text-white myImage fa-2xl"
                    }
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className={protfolioCss.portfolioImgDiv}>
                  <img
                    src={img3}
                    alt=""
                    className={protfolioCss.portfolioImg + " w-100 rounded-3"}
                  />
                  <div
                    className={
                      protfolioCss.layer +
                      " rounded-3 d-flex justify-content-center align-items-center text-white myImage fa-2xl"
                    }
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className={protfolioCss.portfolioImgDiv}>
                  <img
                    src={img1}
                    alt=""
                    className={protfolioCss.portfolioImg + " w-100 rounded-3"}
                  />
                  <div
                    className={
                      protfolioCss.layer +
                      " rounded-3 d-flex justify-content-center align-items-center text-white myImage fa-2xl"
                    }
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className={protfolioCss.portfolioImgDiv}>
                  <img
                    src={img2}
                    alt=""
                    className={protfolioCss.portfolioImg + " w-100 rounded-3"}
                  />
                  <div
                    className={
                      protfolioCss.layer +
                      " rounded-3 d-flex justify-content-center align-items-center text-white myImage fa-2xl"
                    }
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className={protfolioCss.portfolioImgDiv}>
                  <img
                    src={img3}
                    alt=""
                    className={protfolioCss.portfolioImg + " w-100 rounded-3"}
                  />
                  <div
                    className={
                      protfolioCss.layer +
                      " rounded-3 d-flex justify-content-center align-items-center text-white myImage fa-2xl"
                    }
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </section>

        <div className={protfolioCss.mainLayer + " mainLayerClass d-none justify-content-center align-items-center"} >
          <img src="" className="w-50"/>
        </div>
      </>
    );
  }

  componentDidMount() {
    
    const myImage = $(".myImage");
    const myLayer = $(".mainLayerClass");

    // myLayer.css("bottom",-window.screen.availHeight)

    // console.log(window.screen.availHeight);
    myImage.click(this.appearImgs);
    
    myLayer.click(function(e) {
      if(this == e.target)
      {
        $(this).addClass("d-none");
      }
    })

  
  }

  componentWillUnmount(){
    const myImage = $(".myImage");
    const myLayer = $(".mainLayerClass");
    myImage.unbind();
    myLayer.unbind();
  }
}
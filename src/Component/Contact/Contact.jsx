import React, { Component } from 'react';

import protfolioCss from '../Portfolio/Portfolio.module.css';

export default class Contact extends Component {
  render() {
    return (
      <>
      <section className=' container vh-100 '>
        <div className='text-center'>
         <h1 className={protfolioCss.h1Color+" pt-5 fw-bold"}>CONATCT SECTION</h1>
         <div className={protfolioCss.homeInner}>
              <div className={protfolioCss.homeInnerI}>
                <i className="fa-solid fa-star"></i>
              </div>
          </div>
        </div>
        <div className='pt-5 w-50 m-auto'>
          <input type="text" className='form-control ' placeholder='userName'  />
          <input type="text" className='form-control mt-5' placeholder='userAge'  />
          <input type="text" className='form-control mt-5' placeholder='userEmail'  />
          <input type="text" className='form-control mt-5' placeholder='userPassword'  /> 
          <button className='btn btn-info text-white mt-3'>send Message</button>
        </div>
        
      </section>
      </>
    );
  }
}

import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
    <> 
        <footer className='myfooter  py-5 text-white'>
            <div className="container py-4 text-center">
                <div className="row">
                     <div className="col-md-4">
                     <div>
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p className='mb-0'>Clark, MO 65243</p>
                    </div>
                     </div>

                    <div className="col-md-4">
                    <div>
                        <h3>AROUND THE WEB</h3>
                        <ul className='list-unstyled d-flex justify-content-center'>
                            <li className='pe-2'><div className='myI'><i className="fa-brands fa-facebook "></i></div></li>
                            <li className='pe-2'><div className='myI'><i className="fa-brands fa-twitter "></i></div></li>
                            <li className='pe-2'><div className='myI'><i className="fa-brands fa-linkedin-in "></i></div></li>
                            <li className='pe-2'><div className='myI'><i className="fa-solid fa-globe "></i></div></li>
                        </ul>
                    </div>
                    </div>

                    
                    <div className="col-md-4">
                    <div>
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                    </div>


                    </div>

            </div>
        </footer>
    </>
    );
  }
}

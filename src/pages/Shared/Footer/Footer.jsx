import React from 'react';
import logo from '../../../assets/images/Logos/toy-store.png'
import { FaFacebook, FaFacebookSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img className='w-28' src={logo} alt="" />
                <p className='text-xl font-semibold'>ZooLand</p>
                <p>Providing animal toys since 2018.</p>
                <p>© All right reserved by ZooLand 2023</p>
            </div>
            <div>
                <span className="footer-title">Office Address</span>
                <a className="link link-hover">Aminpur, Dhaka, Bangaldesh.</a>
                <a className="link link-hover">Helpline: 01983363535 , 01609185463</a>
                <p>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
                
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className=" text-white btn bg-[#09c3d0] border-[#09c3d0] absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
            <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
      <a target='_blank' href='https://www.youtube.com/@livingisland4893'><FaYoutubeSquare className='text-3xl'></FaYoutubeSquare></a> 
      <a target='_blank' href='https://www.linkedin.com/in/mohonsaha'><FaLinkedin className='text-3xl'></FaLinkedin></a> 
      <a  target='_blank' href='https://www.facebook.com/spdmohonsaha/'><FaFacebookSquare className='text-3xl'></FaFacebookSquare></a>
    </div>
  </div>

  
        </footer>
    );
};

export default Footer;
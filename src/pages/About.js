import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const About = () => {
  const container = useRef(null);

  useEffect(() => {
    if (container.current)
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../assets/about.json"),
      });
  }, []);

  return (
    <>
    <div className="about">
      <div className="flex justify-center wrapper">
        <div className="container w-50 " ref={container}></div>
      </div>
      <div>
        
      </div>
      
      <footer className="footer-container">
      <p className="about-text">This app developed for &nbsp; <a href="https://www.patika.dev/">patika.dev</a></p>
      <p className="about-text">All Rights Reserved</p>
            <div >
                <ul className="footer-ul">
                    <li className="footer-li">  <a href="https://github.com/myamann"><i class="fab fa-github fa-lg"></i></a>  </li>
                    <li className="footer-li">  <a href="https://www.linkedin.com/in/mehmet-yaman-05b7a1167/"><i class="fab fa-linkedin fa-lg"></i></a>  </li>
                    <li className="footer-li">  <a href="https://www.instagram.com/mmehmetyamann/"> <i class="fab fa-instagram fa-lg"></i></a>   </li>
                </ul>
            </div>

            <div className="footer-copyright">
                <p>❮ <a href="https://mehmetyaman.netlify.app/">Mehmet Yaman</a> 2021 ❯</p>
            </div>




        </footer>
        </div>
    </>
  );
};

export default About;

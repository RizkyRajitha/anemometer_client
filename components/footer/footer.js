import React, { useEffect, useState } from "react";
const Footer = () => {
  return (
    <>
      {" "}
      <div className="waves">
        <svg
          width="100%"
          height="300px"
          fill="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00B4DB" />
            <stop offset="50%" stop-color="#224488" />
            <stop offset="100%" stop-color="#0083B0" />
          </linearGradient> */}
          <path
            fill="#0f4c75"
            fillOpacity="1"
            // fill="url(#grad1)"
            d="
          M0 67
          C 273,183
            822,-40
            1920.00,106 
          
          V 359 
          H 0 
          V 67
          Z"
          >
            <animate
              repeatCount="indefinite"
              //   fill="url(#grad1)"
              fill="#0099ff"
              fillOpacity="1"
              attributeName="d"
              dur="5s"
              attributeType="XML"
              values="
            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,-40
              1222,283
              1920,136 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 973,260
              1722,-53
              1920,120 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z
            "
            ></animate>
          </path>
        </svg>
      </div>
    </>
  );
};
export default Footer;

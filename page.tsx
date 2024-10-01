import Image from "next/image";
import profile from "../../Image/profile.jpg"
import React from "react";
    export default function Home() {
      return(
        <>
          <div className="home-container">
            <div className="child-container">
            
            HI 
            <br/>
            <h2>My Name is <span className="pinkcolor">Shumaila  Rehman</span></h2>
            <p>I am Next.js Developer</p>

          </div>
          <div className="child-container">
          
          <Image  className="profile-img"  src ={profile} alt ="profile" />
          </div>
          </div>
          </>

        
    

        
        
      )
    };
  
           


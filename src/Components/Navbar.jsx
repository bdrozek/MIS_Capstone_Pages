import React from 'react'
import './navbar.css'
import logo from '../assets/HelloWorldEarthLogo.png'
import agar from '../assets/agar_transparent.png'
import joPic from '../assets/Joseph Payne - Image.jpg'
import jackPic from '../assets/jack-pic.jpg'
import benPic from '../assets/ben-pic.jpg'
import koyPic from '../assets/koy-pic.jpg'
import { motion, useScroll, useMotionValue, useTransform } from "framer-motion"
import { useState } from 'react'
import { useEffect } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  console.log("rotation:", rotate);

  const { scrollY } = useScroll();

  useEffect(() => {
    // Subscribe to changes in scrollY value
    return scrollY.onChange((latest) => {
      console.log("Scroll position in pixels:", latest);
      if (latest < 350){
        console.log("Hello");
        setVisible(true);
        setVisible1(false);
        setVisible2(false);
      } else if(latest > 350 && latest < 1225){
        console.log("RUHROH");
        setVisible(false);
        setVisible1(true);
        setVisible2(false);
      }else if (latest > 1225){
        setVisible(false);
        setVisible1(false);
        setVisible2(true);
      }
    });
  }, [scrollY]);



  return (
    <>
    <div className="nav-banner">
      <motion.img style ={{rotate}} src={logo} className="logo"/>
      <h1 className={visible ? "project-name visible" : "project-name"} >MIS Microbiology Dashboard</h1>
      <h1 className={visible1 ? "project-desc visible" : "project-desc"} >Project Description:</h1>
      <h1 className={visible2 ? "group-name visible" : "group-name"} >Hello World!</h1>
      <img  src={agar} className="agar" />

      <div className="project-desc-container">
          <div className="project-desc-content">
            <p className="proj-desc-p">A real-time dashboard for the Microbiology department of the LIS training simulator. The dashboard includes quality control, patient reports, quizzes, patient/order entry, assignments, and case studies. The MIS dashboard provides information systems training software that simulates “Real-World” pathology lab workflow conditions,
            provide students with clinical correlation to increase diagnostic comprehension, and eliminate gaps in laboratory analysis knowledge in order to reduce adverse healthcare events.</p>
          </div>
      </div>


      <div className="jo-container">
        <div className="jo-picture-card">
          <motion.img  whileHover={{
            scale: 1.2,
            transition: { duration: 2 },
          }}
          whileTap={{ scale: 1 }} src={joPic} className="jo-img" />
        </div> 
        <div className="jo-card-content">
          <h1 className="jo-name">Joseph Payne</h1> 
          <p className="jo-role">Group Leader</p> 
        </div>
      </div>

      <div className="jack-container">
        <div className="jack-card-content">
          <h1 className="jack-name">Jack Corwin</h1> 
          <p className="jack-role">Jack Role</p> 
          <p className="jack-desc">Working on SRS requirements and helping to develop the front-end and database implementaion of the dashboard</p>
        </div>
        <div className="jack-picture-card">
          <motion.img whileHover={{
            scale: 1.2,
            transition: { duration: 2 },
          }}
          whileTap={{ scale: 1 }} src={jackPic} className="jack-img" />
        </div> 
      </div>

      <div className="ben-container">
        <div className="jo-picture-card">
          <motion.img  whileHover={{
            scale: 1.2,
            transition: { duration: 2 },
          }}
          whileTap={{ scale: 1 }} src={benPic} className="ben-img" />
        </div> 
        <div className="jo-card-content">
          <h1 className="jo-name">Benjamin Drozek </h1> 
          <p className="jo-role">Ben Role</p> 
        </div>
      </div>
    <div className="koy-container">
        <div className="jack-card-content">
          <h1 className="jack-name">Koy Bell</h1> 
          <p className="jack-role">Koy Role</p> 
          <p className="jack-desc"></p>
        </div>
        <div className="jack-picture-card">
          <motion.img whileHover={{
            scale: 1.2,
            transition: { duration: 2 },
          }}
          whileTap={{ scale: 1 }} src={koyPic} className="koy-img" />
        </div> 
      </div>
    </div>
    

    </>
  )
}

export default Navbar
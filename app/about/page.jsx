
"use client"
import React from "react";
import styles from "../styles/aboutPage.module.css"
import Navbar from "../../components/Navbar";
const page = () => {
  return (
    <div className={styles.aboutContainer}>
    
    {}
    <Navbar/>
    <div className={styles.aboutContentContainer}>
      <div className={styles.aboutContentWrapper}>
        <div className={styles.aboutHeader}>
          <h1>About Me</h1>
        </div>
        <div className={styles.aboutName}><h2>I'm Kallen Schulz</h2></div>
      </div>
      <div className={styles.aboutContent}>
      I was born in the charming town of Hagerstown, Maryland, and currently call Melissa, Texas, my home. As I work towards earning my Computer Science degree at Collin college then later transfering to a major University.</div>
    </div>
    </div>
  );
}

export default page
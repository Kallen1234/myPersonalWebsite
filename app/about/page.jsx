
"use client"
import React from "react";
import styles from "../styles/aboutPage.module.css"
import Navbar from "../../components/Navbar";
const page = () => {
  return (
    <div className={styles.aboutContainer}>
    <div>page</div>
    {}
    <Navbar/>
    <div className={styles.aboutContentContainer}>
      <div className={styles.aboutContentWrapper}>
        <div className={styles.aboutHeader}>
          <h1>About Me</h1>
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default page
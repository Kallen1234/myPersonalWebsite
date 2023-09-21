"use client";
import React from "react";
import styles from "./styles/homePage.module.css";
import Navbar from "../components/Navbar";
function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <div className={styles.homePageHeader}>
        <div className={styles.homePageContentIntro}>
          <div className={styles.homeName}>
            <h1>
              Hey, I'm <i>Kallen Schulz</i>
            </h1>
            <div className={styles.homeIntroStatus}>
              <h2>Student + Developer</h2>
            </div>
          </div>
          <div className={styles.homeShortInfoWrap}>
            <div className={styles.homeShortInfo}>
              <h2>
                I'm a 19 year old student from Dallas, Texas. I am currently
                going to school at Collin Community college take all the classes
                I can before I transfer to The University of North Texas.{" "}
              </h2>
            </div>
          </div>
          <div className={styles.homeLongInfoWrap}>
            <div className={styles.homeLongInfo}>
              <h2>
                I am interested in <i>software engineering</i> (mainly web &
                mobile), deep learning, design (UI & UX), and cybersecurity. I
                desire to make,create, and Innovate products using my knowledge.
                I also enjoy watching sports and movies.
              </h2>
            </div>
          </div>
          <div className={styles.homeFreetimeWrap}>
            <div className={styles.homeFreetime}>
              <div className={styles.homeFreeTitle}>
                <h2>In my free time I enjoy...</h2>
                <div className={styles.homeFreeList}>
                  <ul>
                    <li>
                      <h3>Working on personal projects</h3>
                    </li>

                    <li>
                      <h3>Watching sports primarily the NFL</h3>
                    </li>
                    <li>
                      <h3>hanging out with friends and family</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

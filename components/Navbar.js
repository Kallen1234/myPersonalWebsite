import React from "react";
import Link from "next/link";
import { HiHome, HiFolder, HiOutlineTerminal } from "react-icons/hi";
import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.NavOuter}>
      <ul className={styles.NavList}>
        <li className={styles.NavItem}>
          <Link href="/">
            <span className={styles.NavLink}>
              <HiHome className={styles.NavIcon} />
              Home
            </span>
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/about">
            <span className={styles.NavLink}>
              <HiFolder className={styles.NavIcon} />
              About
            </span>
          </Link>
        </li>
        <li className={styles.NavItem}>
          <Link href="/projects">
            <span className={styles.NavLink}>
              <HiOutlineTerminal className={styles.NavIcon} />
              Projects
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import styled from "styled-components";
import Link from "next/link";
import styles from "./styles/Navbar.module.css";
import {
  HiHome,
  HiFolder,
  HiBriefcase,
  HiGlobeAlt,
  HiOutlineTerminal,
} from "react-icons/hi";
const NavContainer = styled.nav`
  background-color: #333;
  color: white;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 0 1rem;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <div className={styles.NavOuter}>
        <ul>
          <div className={styles.NavHomeCon}>
            <li>
              <div className={styles.NavIcon}>
                <HiHome />
              </div>

              <Link href="/">Home</Link>
            </li>
          </div>
          <li>
            <div className={styles.NavIcon}>
              <HiFolder />
            </div>
            <Link href="/about">About</Link>
          </li>

          <li>
            <div className={styles.NavIcon}>
              <HiOutlineTerminal />
            </div>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </NavContainer>
  );
};

export default Navbar;

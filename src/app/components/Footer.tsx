import type { NextPage } from "next";
import BottomNav from "./BottomNav";
import styles from "../styles/footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.actions, className].join(" ")}>
      <BottomNav />
    </footer>
  );
};

export default Footer;

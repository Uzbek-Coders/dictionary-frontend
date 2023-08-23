import React from "react";
import classes from "./Footer.module.css";
import {
  TbBrandTelegram,
  TbBrandInstagram,
  TbBrandFacebook,
  TbBrandYoutube,
  TbBrandTwitter,
} from "react-icons/tb";
function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <p> © 2022 — 2023 Leksika.uz </p>
        <ul>
          <li>
            <a>
              <TbBrandTelegram />
            </a>
          </li>
          <li>
            <a>
              <TbBrandInstagram />
            </a>
          </li>
          <li>
            <a>
              <TbBrandFacebook />
            </a>
          </li>
          <li>
            <a>
              <TbBrandYoutube />
            </a>
          </li>
          <li>
            <a>
              <TbBrandTwitter />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

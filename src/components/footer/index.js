"use client";

import Image from "next/image";

import { getGoogleImageUrl } from "@utils/drive";

import Facebook from "@icons/facebook";
import Instagram from "@icons/instagram";
import Twitter from "@icons/twitter";

import styles from "@components/footer/index.module.scss";

const Footer = ({ links, description, copyright, logo }) => {
  const socials = [
    {
      Component: Twitter,
      link: links.twitter,
    },
    {
      Component: Facebook,
      link: links.facebook,
    },
    {
      Component: Instagram,
      link: links.instagram,
    },
  ];

  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.logoContainer}>
        <Image
          src={getGoogleImageUrl(logo.id)}
          alt={logo.alt}
          fill
          priority
          quality={100}
        />
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.socials}>
        {socials.map((s, i) => (
          <a href={s.link} key={i}>
            <s.Component className={styles.socialIcon} />
          </a>
        ))}
      </div>

      <div className={styles.copyright}>{copyright}</div>
    </footer>
  );
};

export default Footer;

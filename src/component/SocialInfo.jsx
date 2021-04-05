import React from "react";
import styles from "./css/socialinfo.module.css";

import socialjson from "../assets/jsons/socialinfo.json";
import FeatherIcon from "feather-icons-react";

const SocialInfo = () => {
  return (
    <div className={styles["my-social-info"]}>
      {socialjson.items.map(({ icon, href }, i) => {
        return (
          <a href={href} key={i} className={styles['my-link']}>
            <FeatherIcon icon={icon} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialInfo;

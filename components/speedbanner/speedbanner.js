import React, { useEffect, useState } from "react";
import styles from "./speedbanner.module.css";
export default function SpeedBanner({ speed }) {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.firstmainitem}>
          <span className={styles.firstmainitemtitle}> Realtime data </span>
          <div className={styles.speedmain}>
            <div className={styles.speedkmphdiv}>
              <div className={styles.speedspanouterdiv}>
                <span className={styles.speedspan}> {speed[0]} </span>
                <span className={styles.speedspanlable}> KMPH</span>
              </div>

              {/* <img className={styles.windmill} src="/images/windmill.svg" /> */}
            </div>
            <div className={styles.break}></div>
            <div className={styles.firstspeedmainitem}>
              <div className={styles.speedspanouterdiv}>
                <span className={styles.speedspan}> {speed[1]} </span>
                <span className={styles.speedspanlable}> Pulse </span>
              </div>
            </div>
            <div className={styles.firstspeedmainitem}>
              <div className={styles.speedspanouterdiv}>
                <span className={styles.speedspan}>
                  {speed[2]}
                  {/* {Math.floor((Math.random() * 100) % 10)} */}
                </span>
                {/* <span className={styles.speedspan}></span> */}
                <span className={styles.speedspanlable}>
                  ms<sup>-1</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.firstmainitem}>col 2</div> */}
      </div>
    </>
  );
}

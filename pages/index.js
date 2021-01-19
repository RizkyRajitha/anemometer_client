import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import DynamicComponent from "../components/dynamicComponent/dynamicComponent";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Rizky Labs</h1>

        <DynamicComponent />
      </div>
    </>
  );
};
export default Home;

//<div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

import { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import styles from "../styles/Docs.module.css";

const Docs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Redonk docs</title>
      </Head>
      <h1>Docs</h1>
    </>
  );
};

export default Docs;

const Tabs = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const isSelected = (index: number) => selectedTab === index;

  return (
    <div
      className={styles.tabs}
      role="tablist"
      aria-label="Usage examples tabs"
    >
      <button
        id="tab0"
        role="tab"
        className={styles.tab}
        tabIndex={isSelected(0) ? 0 : -1}
        aria-selected={isSelected(0) ? "true" : "false"}
        aria-controls="tabpanel0"
      >
        State management
      </button>
      <button
        id="tab1"
        role="tab"
        className={styles.tab}
        tabIndex={isSelected(1) ? 0 : -1}
        aria-selected={isSelected(1) ? "true" : "false"}
        aria-controls="tabpanel1"
      >
        Data fetching
      </button>
      <div id="tabpanel0" role="tabpanel" tabIndex={0} aria-labelledby="tab0">
        <h1>Panel 1</h1>
      </div>
      <div id="tabpanel1" role="tabpanel" tabIndex={0} aria-labelledby="tab1">
        <h1>Panel 2</h1>
      </div>
    </div>
  );
};

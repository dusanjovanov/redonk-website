import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as React from "react";
import Link from "next/link";

const Home: NextPage = () => {
  const [isDark, setIsDark] = React.useState(true);

  const onClickCopy = () => {
    window.navigator.clipboard.writeText("npm i redonk");
  };

  const onClickThemeButton = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={
        isDark
          ? [styles.dark, styles.home].join(" ")
          : [styles.light, styles.home].join(" ")
      }
    >
      <Head>
        <title>Redonk</title>
        <meta
          name="description"
          content="Open source state management and data fetching library for React"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.firstPage}>
        <header className={styles.header}>
          <div className={styles.links}>
            <a
              href="https://www.npmjs.com/package/redonk"
              target="_blank"
              rel="noreferrer"
            >
              NPM
            </a>
            <a
              href="https://github.com/dusanjovanov/redonk"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png"
              layout="fill"
              alt="Redonk logo"
              quality={100}
              priority
            />
          </div>
        </header>
        <main className={styles.main}>
          <h2 className={styles.tagline}>
            Ridicilously simple state management {"\n"} in{" "}
            <span>pure React</span>
          </h2>
          <button
            className={styles.themeButton}
            onClick={onClickThemeButton}
            aria-label="Change theme"
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
              </svg>
            )}
          </button>
          <button className={styles.install} onClick={onClickCopy}>
            <pre>npm i redonk</pre>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z" />
            </svg>
          </button>
          <a
            className={styles.size}
            href="https://bundlephobia.com/package/redonk@4.0.5"
            target="_blank"
            rel="noreferrer"
          >
            715B / 0 dependencies
          </a>
          <Link href="/docs">
            <a className={styles.docs}>Docs</a>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;

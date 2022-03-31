import React from "react";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";

type MyComponentProps = React.PropsWithChildren<{}>;

const Layout = ({ children }: MyComponentProps) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;

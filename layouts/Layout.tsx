import styles from "../styles/Home.module.css";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode | ReactNode[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-dark-back px-20">
      <main className="h-screen">
        {children}

        <img
          className="w-3/5 fixed -bottom-1/2 -left-1/4"
          src="/images/green-blob.png"
        />
        <img
          className="w-1/4 fixed top-1/5 right-0"
          src="/images/blue-blob.png"
        />
      </main>
    </div>
  );
};

export default Layout;

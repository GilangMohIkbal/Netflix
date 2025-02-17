import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="layout">{children}</main>;
};

export default Layout;

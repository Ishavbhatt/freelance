import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }
}
export default Layout;

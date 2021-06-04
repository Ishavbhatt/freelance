import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isactive: false,
    };
  }

  handleActive = (value) => {
    this.setState({
      isactive: value,
    });
  };

  render() {
    let { isactive } = this.state;
    return (
      <>
        <div className="header lg:px-10 py-5 md:px-10 px-5 fixed lg:py-0 bg-white w-full top-0 inset-x-0 shadow-lg bg-white z-50">
          <div className="flex justify-between items-center">
            <div className="">
              <h1>Company Logo</h1>
            </div>
            <nav className="nav-items xl:block lg:block hidden">
              <div className="flex items-center">
                <div className="py-1">
                  <Link href="/">
                    <a className="lg:p-2 text-lg px-0 text-heading hover:text-custom-crimson">
                      Home
                    </a>
                  </Link>
                </div>
                <div className="py-1">
                  <Link href="/About">
                    <a className="lg:p-2 text-lg px-0 text-heading hover:text-custom-crimson">
                      About Us
                    </a>
                  </Link>
                </div>
                
                <div className="py-1">
                  <Link href="/">
                    <a className="lg:p-2 text-lg px-0 block text-heading hover:text-custom-crimson">
                      Services
                    </a>
                  </Link>
                </div>
                <div className="py-2 flex justify-center">
                  <Link href="/">
                    <a className="lg:p-2 lg:ml-2 px-2 lg:py-1 py-1 block hover:text-white text-center uppercase rounded border-2 border-custom-crimson text-white bg-custom-crimson hover:bg-dark-green text-lg tracking-wide">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
            <AiOutlineMenu
              className="text-3xl lg:hidden block text-custom-crimson font-bold "
              onClick={() => this.handleActive(true)}
            />
          </div>
        </div>
        {/* active mobile page */}
        {isactive ? (
          <section className="header-trans">
            <div className="bg-white h-screen fixed w-full inset-x-0 top-0 z-50 pb-5 lg:hidden inline">
              <div className="lg:px-10 md:px-10 px-5 py-5 rwrapper">
                <div className="flex justify-between items-center">
                  <div className="">
                   <h1>Company logo</h1>
                  </div>
                  <MdClose
                    className="text-3xl text-custom-crimson font-bold"
                    onClick={() => this.handleActive(false)}
                  />
                </div>
                <div className="py-10">
                  <nav className="nav-items">
                    <div className="py-1">
                      <Link href="/">
                        <a
                          className="text-lg text-textcolor block py-2"
                          onClick={() => this.handleActive(false)}
                        >
                          Home
                        </a>
                      </Link>
                    </div>
                    <div className="py-1">
                      <Link href="/About">
                        <a
                          className="text-lg text-textcolor block py-2"
                          onClick={() => this.handleActive(false)}
                        >
                          About Us
                        </a>
                      </Link>
                    </div>
                   
                    <div className="py-1">
                      <Link href="/">
                        <a
                          className="py-2 lg:p-2 text-lg px-0 block text-textcolor hover:text-custom-crimson"
                          onClick={() => this.handleActive(false)}
                        >
                          Services
                        </a>
                      </Link>
                    </div>
                    <div className="pt-2">
                      <Link href="/">
                        <a
                          className="lg:p-2 lg:ml-2 px-2 w-32 lg:py-1 py-1 block hover:text-white text-center text-white rounded border-2 border-custom-crimson bg-custom-crimson hover:bg-dark-green text-lg tracking-wide"
                          onClick={() => this.handleActive(false)}
                        >
                          ContactUs
                        </a>
                      </Link>
                    </div>
                  </nav>
                </div>
                <div className="">
                  <a
                    href="https://www.facebook.com/The-Devbhoomi-trek-102080641724320"
                    target="blank"
                    className=" hover:opacity-75"
                  >
                    <Image src="/icons/facebook.png" width={35} height={35} />
                  </a>
                  <a
                    href="https://www.instagram.com/the_devbhumi_trek1/"
                    target="blank"
                    className=" ml-2 hover:opacity-75"
                  >
                    <Image src="/icons/instagram2.png" width={35} height={35} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Header;
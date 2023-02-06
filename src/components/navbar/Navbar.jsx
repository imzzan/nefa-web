import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Menus from "./Menus";
import { Logo } from "../../images";
import { BsList, BsX } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { ButtonPrimary, ButtonSecondary } from "../atoms";

const Navbar = () => {
  const [backgroundwhite, setBackgroundWhite] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: "768px" });

  const handleWindowScroll = (e) => {
    const height = window.scrollY;
    const tresholdHeight = 50;

    if (height > tresholdHeight) {
      setBackgroundWhite(true);
    } else {
      setBackgroundWhite(false);
    }
  };

  const handleBlackScreenClick = (e) => {
    e.stopPropagation();
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (isMobile) {
      setDropdownOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    setBackgroundWhite(dropdownOpen);
  }, [dropdownOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <nav
      className={classNames(
        "fixed w-full transition-all duration-700 z-10 py-8 ",
        {
          "bg-white shadow-lg !py-3": backgroundwhite,
        }
      )}
    >
      <div className="px-4 container mx-auto top-0 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} className="mr-6" alt="Neva" />
          <div className="hidden mx-4 gap-8 xl:flex">
            <Menus />
          </div>
        </div>
        <div className="hidden gap-4 md:flex">
          <ButtonSecondary>Sign In</ButtonSecondary>
          <ButtonPrimary>Sign Up</ButtonPrimary>
        </div>
        <div className="md:hidden text-3xl">
          <button
            className="z-50 p-4 block transition-all"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {dropdownOpen ? <BsX /> : <BsList />}
          </button>

          {/* Menu DropDown */}
          <div
            className={classNames({
              "text-base left-0 top-full right-0 absolute transition-all duration-400": true,
              "invisible opacity-0": !dropdownOpen,
              "visible opacity-100": dropdownOpen,
            })}
          >
            <div
              className="h-screen left-0 bg-black bg-opacity-30"
              onClick={handleBlackScreenClick}
            >
              <div className="z-20 shadow-xl bg-white p-6">
                <div className="gap-4 flex mb-6">
                  <ButtonSecondary className="w-full">Sign In</ButtonSecondary>
                  <ButtonPrimary className="w-full">Sign Up</ButtonPrimary>
                </div>
                <div className="mb-4">
                  <Menus state={dropdownOpen} setState={setDropdownOpen}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-scroll";

const Menus = ({ state, setState }) => {
  return (
    <>
      <div className="w-full">
        <Link smooth spy to="home" onClick={() => setState(!state)}>
          <a href="" className="hover:text-primary py-2 block">
            Home
          </a>
        </Link>
      </div>
      <div className="w-full">
        <Link smooth spy to="market" onClick={() => setState(!state)}>
          <a href="" className="hover:text-primary py-2 block">
            Merket
          </a>
        </Link>
      </div>
      <div className="w-full">
        <Link smooth spy to="buy" onClick={() => setState(!state)}>
          <a href="" className="hover:text-primary py-2 block">
            Buy and Tradeing
          </a>
        </Link>
      </div>
      <div className="w-full">
        <Link smooth spy to="nft" onClick={() => setState(!state)}>
          <a href="" className="hover:text-primary py-2 block">
            NFT
          </a>
        </Link>
      </div>
      <div className="w-full">
        <Link smooth spy to="faq" onClick={() => setState(!state)}>
          <a href="" className="hover:text-primary py-2 block">
            FAQ
          </a>
        </Link>
      </div>
    </>
  );
};

export default Menus;

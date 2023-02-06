import React from "react";
import CoinAreaChart from "./CoinAreaChart";

const CoinRow = ({ image, coinName, coinPrice, coinUptrend }) => {
  return (
    <div className=" grid grid-cols-3 mb-2 py-2 borer-b border-lightgray last:border-none">
      <div className=" flex items-center">
        <img
          src={image}
          alt={coinName}
          draggable="false"
          className="inline h-[1em] mr-2"
        />
        {coinName}
      </div>
      <div className=" flex items-center">
        {coinUptrend ? (
          <span className="text-green mr-1">+</span>
        ) : (
          <span className="text-red mr-1">-</span>
        )}
        {coinPrice}
      </div>
      <div>
        <CoinAreaChart isUptrend={coinUptrend}/>
      </div>
    </div>
  );
};

export default CoinRow;

import React from "react";
import { Buy, Btc, Usd } from "../../images";
import { ButtonPrimary } from "../atoms";
import { Select } from "../moleculs";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const BuyandTradeSection = () => {
  const formHandler = (e) => {
    e.preventDefault();
  };

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className=" container mx-auto py-10 md:py-28" id="buy">
      <div className=" grid md:grid-cols-2 gap-10">
        <div className="flex items-center">
          <div className=" mx-w-xl">
            <h2 className=" font-bold text-4xl mb-6 leading-normal">
              Buy & trade on the <br /> original crypto exchange.
            </h2>
            <p className="text-gray mb-6">
              Buy now and get 40% extra bonus Minimum pre-sale amount <br /> 25
              Crypto Coin. We accept BTC crypto-currency
            </p>
            <form onSubmit={formHandler}>
              <div className=" flex justify-between gap-4 md:gap-6 mb-6">
                <div className=" border border-primary rounded-2xl py-3 md:py-4 md:px-6 flex items-center">
                  <div className="border-r border-primary pr-4 md:pr-6">
                    <small className="text-primary">Amount</small>
                  </div>
                  <input
                    type="text"
                    value="5,000"
                    onChange={inputChangeHandler}
                    className="text-center outline-none w-full"
                  />
                </div>
                <Select value="USB" icon={Usd} name="USD" />
              </div>

              <div className="flex justify-between gap-4 md:gap-6 mb-6">
                <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                  <div className="border-r border-primary pr-4 md:pr-6">
                    <small className="text-primary">Amount</small>
                  </div>
                  <input
                    type="text"
                    value="0.10901"
                    onChange={inputChangeHandler}
                    className="text-right outline-none w-full"
                  />
                </div>
                <Select value="BTC" icon={Btc} name="BTC" />
              </div>
              <ButtonPrimary className="w-full">Buy Now</ButtonPrimary>
            </form>
          </div>
        </div>{" "}
        <div className="row-start-1 md:col-start-2">
          <div data-aos="fade-up" data-aos-offset="300">
            <img src={Buy} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyandTradeSection;

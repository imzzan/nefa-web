import React from "react";
import { Fade } from "react-reveal";
import { Arrow, Okey, SignUp, Wallet } from "../../images";

const StepSection = () => {
  return (
    <section className="px-6">
      <div
        className=" rounded-3xl bg-gradient-to-b from-whi
         to-[#f4f9ff] py-10"
      >
        <div className=" container mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 leading-normal">
            Get started in just a few minutes
          </h2>
          <div className="md:flex justify-center gap-20">
            <Fade up>
              <div className=" text-center relative px-4">
                <div className=" relative">
                  <img
                    src={SignUp}
                    className="mb-4 mx-auto hover:-translate-y-6 hover:scale-110 transition-all duration-300"
                    alt=""
                  />
                  <img
                    src={Arrow}
                    alt=""
                    className="hidden md:block absolute top-1/2 -right-36"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">Sign Up</h3>
                <p className="text-gray max-w-sm">
                  Buy Bitcoin or Ethereum, then securely store it in your Wallet
                  or send it on easily to friends
                </p>
              </div>
            </Fade>
            <Fade up delay={500}>
              <div className="text-center relative px-4">
                <div className='relative'>
                  <img src={Wallet} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                  <img src={Arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Fund</h3>
                <p className="text-gray max-w-sm">
                  Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet
                </p>
              </div>
            </Fade>
            <Fade up delay={1000}>
              <div className="text-center relative px-4">
                <img src={Okey} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                <h3 className="text-2xl font-bold mb-4">Buy Crypto</h3>
                <p className="text-gray max-w-sm">
                  Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepSection;

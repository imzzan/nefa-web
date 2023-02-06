import React from "react";
import { Fade } from "react-reveal";
import { Faq } from "../../images";
import { FaqItems } from "../moleculs";

const FaqQuetions = () => {
  return (
    <section className=" container mx-auto py-20 md:py-28" id="faq">
      <div
        className=" grid
         md:grid-cols-2"
      >
        <div className="mb-4">
          <Fade up duration={1000}>
            <img src={Faq} alt="FAQ" />
          </Fade>
        </div>
        <div className=" flex justify-center">
          <div className="">
            <span className="text-primary">SUPPORT</span>
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Frequently asked questions
            </h2>
            <div className="my-6">
                <FaqItems open={true} title="Why should I choose NEFA?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
                </FaqItems>
                <FaqItems open={false} title="How secure is NEFA?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
              </FaqItems>
              <FaqItems open={false} title="Do I have to buy a whole Bitcoin?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
              </FaqItems>
              <FaqItems open={false} title="How do I actually buy Bitcoin?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
              </FaqItems>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqQuetions;

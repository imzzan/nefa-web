import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { ButtonSecondary } from "../atoms";
import { CreaditCard } from "../../images";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const CreditCardSection = () => {
  return (
    <section className=" container mx-auto py-20 md:py-28" id="nft">
      <div className=" grid md:grid-cols-2 gap-6">
        <div className="mb-12 px-4">
          <div data-aos="fade-up" data-aos-offset="300">
            <img src={CreaditCard} alt="" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" max-w-md">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Introducing the <span className=" text-blue-gradient">NEFA</span>{" "}
              <br /> Credit Card
            </h2>
            <p className="text-gray">
              Subject to cardholder and rewards terms which will be available{" "}
              <br /> at application.
            </p>
            <ul className="my-6">
              <li className="mb-2">
                <BsCheckCircleFill className="text-primary inline mr-2" />
                Up to 3% back on purchases
              </li>
              <li className="mb-2">
                <BsCheckCircleFill className="text-primary inline mr-2" />
                Earn rewards in bitcoin or any crypto on NEFA
              </li>
              <li className="mb-2">
                <BsCheckCircleFill className="text-primary inline mr-2" />
                No annual fee
              </li>
            </ul>
            <ButtonSecondary>Join the waitlist</ButtonSecondary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCardSection;

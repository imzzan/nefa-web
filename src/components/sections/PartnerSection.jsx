import React from "react";
import { Fade } from "react-reveal";
import { Partner1, Partner2, Partner3, Partner4 } from "../../images";

const PartnerSection = () => {
  return (
    <section className="px-6">
      <div className=" rounded-3xl bg-gradient-to-b from-white to-[#F4F9FF]">
        <div className=" container mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-4">
              Trusted Partners Worldwide
                </h2>
                <p className="text-gray">
              We're partners with countless major organisations around the globe
            </p>
          </div>
          <div className="mx-4">
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-6">
                <Fade up>
                    <img src={Partner1} className='basis-1/2'/>
                </Fade>
                <Fade up delay={200}>
                    <img src={Partner2} className='basis-1/2'/>
                </Fade>
                <Fade up delay={400}>
                    <img src={Partner3} className='basis-1/2'/>
                </Fade>
                <Fade up delay={600}>
                    <img src={Partner4} className='basis-1/2'/>
                </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;

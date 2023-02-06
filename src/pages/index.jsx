import React from 'react';
import Layout from '../Layout';
import { BuyandTradeSection, BacktoTopSection, TredingToolsSection, CryptoCurencySection, HeroSection, PartnerSection, CreditCardSection, SecuritySection, StepSection, FaqQuetions } from '../components/sections';


export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <CryptoCurencySection/>
      <BuyandTradeSection/>
      <PartnerSection/>
      <CreditCardSection/>
      <TredingToolsSection/>
      <SecuritySection/>
      <StepSection/>
      <FaqQuetions/>
      <BacktoTopSection/>
    </Layout>
  );
}

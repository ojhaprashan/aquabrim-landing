import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaBanner from '../common/CtaBanner';
import TermsConditionBanner from './TermsConditionBanner';
import TermsConditionArea from './TermsConditionArea';

const TermsCondition = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <TermsConditionBanner />
        <TermsConditionArea />
      </main>
      <CtaBanner />
      <FooterOne />
    </>
  );
};

export default TermsCondition;

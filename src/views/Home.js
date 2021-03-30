import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesTilesImages from '../components/sections/FeaturesTilesImages';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Contacts from '../components/sections/Contacts';
import Feedbacks from '../components/sections/Feedbacks';

const Home = () => {

  return ( // <>..</>- react fragment, needed for rendering JSX
    <>
      {/* <Hero className="illustration-section-01" /> */}
      <Hero  />
      <Feedbacks />
      {/* <FeaturesTiles /> */}
      {/* <FeaturesTilesImages topDivider hasBgColor/> */}
      <Contacts topDivider/>
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      {/* <Testimonial topDivider /> */}
      {/* <Cta split /> */}
    </>
  );
}

export default Home;
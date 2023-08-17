import React from "react";
import MobileSlider from "../../components/Mobile/MobileSlider";
import Banner1 from "../../images/Banner1.png";
import PopularSlider from "../../components/Mobile/Popular";
export const Home = () => {
  return (
    <div>
      <div>
        <img src={Banner1} alt="" />
        <PopularSlider />
      </div>
      <div>
        <MobileSlider />
      </div>
    </div>
  );
};

export default Home;

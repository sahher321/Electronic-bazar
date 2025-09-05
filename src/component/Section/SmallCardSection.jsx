import React from "react";
import SmallCard from "../Card/SmallCard";
import {
  feedbackOrange,
  paymentOrange,
  starOrange,
  timeOrange,
  truckOrange,
} from "../../assets";

const SmallCardSection = () => {
  return (
    <div className="py-12 ">
      <div className="container">
        <div className="w-full lg:w-[90%] xl:w-[85%]  mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 ">
            <SmallCard
              image={truckOrange}
              className={"w-[61px] h-[42px]"}
              text="Free Delivery"
              para="from $40"
            />
            <SmallCard
              image={starOrange}
              text="Best Quality"
              para="Brand"
              className={"w-[54px] h-[48px]"}
            />
            <SmallCard
              image={timeOrange}
              text="1 Year"
              para="for free Return"
              className={"w-[50px] h-[50px]"}
            />
            <SmallCard
              image={feedbackOrange}
              text="Feedback"
              para="99% Real Data"
              className={"w-[49px] h-[42px]"}
            />
            <SmallCard
              image={paymentOrange}
              text="Payment"
              para="Secure"
              className={"w-[46px] h-[35px]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCardSection;

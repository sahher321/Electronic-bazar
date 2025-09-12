import React from "react";
import SmallCard from "../Card/SmallCard";
import {
  feedbackOrange,
  paymentOrange,
  starOrange,
  timeOrange,
  truckOrange,
} from "../../assets";

const cardData = [
  {
    image: truckOrange,
    text: "Free Delivery",
    para: "from $40",
    className: "w-[61px] h-[42px]",
  },
  {
    image: starOrange,
    text: "Best Quality",
    para: "Brand",
    className: "w-[54px] h-[48px]",
  },
  {
    image: timeOrange,
    text: "1 Year",
    para: "for free Return",
    className: "w-[50px] h-[50px]",
  },
  {
    image: feedbackOrange,
    text: "Feedback",
    para: "99% Real Data",
    className: "w-[49px] h-[42px]",
  },
  {
    image: paymentOrange,
    text: "Payment",
    para: "Secure",
    className: "w-[46px] h-[35px]",
  },
];

const SmallCardSection = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="w-full lg:w-[90%] xl:w-[85%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {cardData.map((card, index) => (
              <SmallCard
                key={index}
                image={card.image}
                text={card.text}
                para={card.para}
                className={card.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallCardSection;

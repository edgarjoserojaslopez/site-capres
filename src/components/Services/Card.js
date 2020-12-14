import React from "react";
import {
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
const Card = (cardIcon, cardHeading, cardDescription) => {
  return (
    <ServicesCard>
      <ServicesIcon src={cardIcon} />
      <ServicesH2>{cardHeading}</ServicesH2>
      <ServicesP>{cardDescription}</ServicesP>
    </ServicesCard>
  );
};

export default Card;

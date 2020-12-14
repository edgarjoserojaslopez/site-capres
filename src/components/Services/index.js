import React from "react";
import Icon1 from "../../images/img2.svg";
import Icon2 from "../../images/img3.svg";
import Icon3 from "../../images/img4.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  ServicesH2,
} from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Nuestros Servicios</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Préstamos Personales</ServicesH2>
          <ServicesP>
            Capres ofrece los servicios de Préstamos a sus asociados
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Préstamos Vehículos</ServicesH2>
          <ServicesP>
            Capres ofrece los servicios de Préstamos a sus asociados
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Préstamos Vivienda</ServicesH2>
          <ServicesP>
            Capres ofrece los servicios de Préstamos a sus asociados
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

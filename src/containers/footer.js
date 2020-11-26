import Footer from "../components/Footer";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";

function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Nosotros</Footer.Title>
            <Footer.Link href="#">Historia</Footer.Link>
            <Footer.Link href="#">Junta Directiva</Footer.Link>
            <Footer.Link href="#">Organizacion Administrativa</Footer.Link>
            <Footer.Link href="#">Estructura Organizativa</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Servicios</Footer.Title>
            <Footer.Link href="#">Retiros de Haberes</Footer.Link>
            <Footer.Link href="#">Préstamos Personales</Footer.Link>
            <Footer.Link href="#">Operaciones</Footer.Link>
            <Footer.Link href="#">Planes y Beneficios</Footer.Link>
            <Footer.Link href="#">Marco Legal</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contacto</Footer.Title>
            <Footer.Link href="#">Operaciones</Footer.Link>
            <Footer.Link href="#">Planes y Beneficios</Footer.Link>
            <Footer.Link href="#">Operaciones</Footer.Link>
            <Footer.Link href="#">Secretaría</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Redes Sociales</Footer.Title>
            <Footer.Link href="#">
              <FaTwitter />
              Twitter
            </Footer.Link>
            <Footer.Link href="#">
              <FaInstagram />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <FaFacebookF />
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <FaYoutube />
              Youtube
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}

export default FooterContainer;

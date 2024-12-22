import { Link as ScrollLink } from "react-scroll";
const Footer = () => {
  return (
    <div className="text-xs justify-around items-center py-1 bg-black text-white flex  md:text-base">
      <div>
        <p> © COPYRIGHT 2024 Olympic Associates</p>
      </div>

      <ul className="flex ">
        <>
          <li>
            {" "}
            <ScrollLink to="about" spy={true} smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="partners" spy={true} smooth={true} duration={500}>
              Partners
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="product" spy={true} smooth={true} duration={500}>
              Products
            </ScrollLink>
          </li>
        </>
      </ul>
    </div>
  );
};

export default Footer;

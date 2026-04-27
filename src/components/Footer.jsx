import FooterSectionLinks from "./FooterSectionLinks";
import FooterSectionMerch from "./FooterSectionMerch";
import FooterSectionSocial from "./FooterSectionSocial";

function Footer () {
    return (
        <footer>
            <FooterSectionMerch/>
            <FooterSectionLinks/>
            <FooterSectionSocial/>
        </footer>
    );
}

export default Footer;
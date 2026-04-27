import SocialLinks from "./Social";

function FooterSectionSocial() {
    return (
        <section>
            <div className="container">
                <div>
                    <button className="to-upper-case">sign-up now!</button>
                    <SocialLinks />
                </div>
            </div>
        </section>
    );
}

export default FooterSectionSocial;
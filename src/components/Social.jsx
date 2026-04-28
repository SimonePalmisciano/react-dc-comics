import { socialLinksName } from "../data/socialLinksName";

function SocialLinks() {
    return (
        <div className="socials">
            <h3 className="to-upper-case">follow us</h3>
            <ul>
                {socialLinksName.map(social => {
                    const { id, src, name, link } = social;
                    return (
                        <li key={ id }>
                            <a href={ link }>
                                <img src={ src } alt={ name } />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SocialLinks;
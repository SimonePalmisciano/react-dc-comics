import { headerNavLinks } from "../../data/headerlinks";

function HeaderNav() {
    return (
        <nav className="header-navbar to-upper-case">
            <ul>
                {headerNavLinks.map(link => {
                    const { id, text, url } = link;
                    return (
                        <li key={ id }>
                            <a href={ url }>{ text }</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default HeaderNav;

import { 
    dcComicsLinks,
    shopLinks,
    dcLinks,
    sitesLinks } from "../../data/navlinks.js"


function FooterNavlinkItemComics() {
    const linksJsx = dcComicsLinks.map(link => {
        const { id, text, url } = link;

        return (
            <li key={id}>
                <a href={ url }>{ text }</a>
            </li>
        );
    })
    return (
        <div className="dc-comics">
            <h3 className="to-upper-case">dc comics</h3>
            <ul>
                { linksJsx }
            </ul>
        </div>
    );
}

function FooterNavlinkItemShop() {
    const linksJsx = shopLinks.map(link => {
        const { id, text, url } = link;

        return (
            <li key={id}>
                <a href={ url }>{ text }</a>
            </li>
        );
    })
    return (
        <div className="shop">
            <h3 className="to-upper-case">shop</h3>
            <ul>
                { linksJsx }
            </ul>
        </div>
    );
}

function FooterNavlinkDC() {
    const linksJsx = dcLinks.map(link => {
        const { id, text, url } = link;

        return (
            <li key={id}>
                <a href={ url }>{ text }</a>
            </li>
        );
    })
    return (
        <div className="dc">
            <h3 className="to-upper-case">dc</h3>
            <ul>
                { linksJsx }
            </ul>
        </div>
    );
}

function FooterNavlinkSites() {
    const linksJsx = sitesLinks.map(link => {
        const { id, text, url } = link;

        return (
            <li key={id}>
                <a href={ url }>{ text }</a>
            </li>
        );
    })
    return (
        <div className="sites">
            <h3 className="to-upper-case">sites</h3>
            <ul>
                { linksJsx }
            </ul>
        </div>
    );
}

function FooterNavlinks() {
    return <>
        <FooterNavlinkItemComics/>
        <FooterNavlinkItemShop/>
        <FooterNavlinkDC/>
        <FooterNavlinkSites/>
    </>;
}

export default FooterNavlinks;
function FooterNavlinkItemComics() {
    return (
        <div className="dc-comics">
            <h3 className="to-upper-case">dc comics</h3>
            <ul>
                <li>
                    <a href="#">Characters</a>
                </li>
                <li>
                    <a href="#">Comics</a>
                </li>
                <li>
                    <a href="#">Movies</a>
                </li>
                <li>
                    <a href="#">TV</a>
                </li>
                <li>
                    <a href="#">Games</a>
                </li>
                <li>
                    <a href="#">Videos</a>
                </li>
                <li>
                    <a href="#">News</a>
                </li>
            </ul>
        </div>
    );
}

function FooterNavlinkItemShop() {
    return (
        <div className="shop">
            <h3 className="to-upper-case">shop</h3>
            <ul>
                <li>
                    <a href="#">Shop DC</a>
                </li>
                <li>
                    <a href="#">Shop DC Collectibles</a>
                </li>
            </ul>
        </div>
    );
}

function FooterNavlinkDC() {
    return (
        <div className="dc">
            <h3 className="to-upper-case">dc</h3>
            <ul>
                <li>
                    <a href="#">Terms Of Use</a>
                </li>
                <li>
                    <a href="#">Privacy policy</a>
                </li>
                <li>
                    <a href="#">Ad Choice</a>
                </li>
                <li>
                    <a href="#">Advertising</a>
                </li>
                <li>
                    <a href="#">Jobs</a>
                </li>
                <li>
                    <a href="#">Subscriptions</a>
                </li>
                <li>
                    <a href="#">Talent Workshop</a>
                </li>
                <li>
                    <a href="#">CPSC Certificates</a>
                </li>
                <li>
                    <a href="#">Ratings</a>
                </li>
                <li>
                    <a href="#">Shop Help</a>
                </li>
                <li>
                    <a href="#">Contact us</a>
                </li>
            </ul>
        </div>
    );
}

function FooterNavlinkSites() {
    return (
        <div className="sites">
            <h3 className="to-upper-case">sites</h3>
                        <ul>
                <li>
                    <a href="#">DC</a>
                </li>
                <li>
                    <a href="#">MAD Magazine</a>
                </li>
                <li>
                    <a href="#">DC Kids</a>
                </li>
                <li>
                    <a href="#">DC Universe</a>
                </li>
                <li>
                    <a href="#">DC Power Visa</a>
                </li>
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
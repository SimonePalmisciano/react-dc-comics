import HeaderNav from "./HeaderNav";

function Header() {
    return (
        <header>
            <div className="container">
                <div>
                    <img src="/img/dc-logo.png" alt="" />
                </div>
                <HeaderNav />
            </div>
        </header>
    );
}

export default Header;
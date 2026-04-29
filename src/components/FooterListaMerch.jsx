import { navListaMerchLinks } from "../data/listaMerchFooter";
import CardMerch from "./CardMerch";

function FooterListaMerch() {
    return (
        <div className="list-merch">
            <ul>
                {navListaMerchLinks.map(merch => {
                    return (
                        <li key={ merch.id }>
                            <CardMerch
                                merch = { merch }
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default FooterListaMerch;
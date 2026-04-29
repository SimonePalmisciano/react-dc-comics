import comics from "../data/comics.js";
import CardFumetto from "./CardFumetto.jsx";


const fumettiJsx = comics.map(fumetto => {
    return (
        <li key={ fumetto.id }>
            <CardFumetto
                fumetto = { fumetto }
            />
        </li>
    );
})

function Main() {
    return <>
        <main>
            <section className="all-bg">
            </section>
            <section>
                <div className="container">
                    <div className="container-comics">
                        <div className="miniBanner">CURRENT SERIES</div>
                        <ul>
                            {fumettiJsx}
                        </ul>
                    </div>
                    <div className="btn-container">
                        <button className="btn-load-more">
                            LOAD MORE
                        </button>
                    </div>
                </div>
            </section>
        </main>
    </>;
}

export default Main;
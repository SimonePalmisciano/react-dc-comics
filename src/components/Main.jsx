import comics from "../data/comics.js";


const fumettiJsx = comics.map(fumetto => {
    const { id, title, description, thumb, price, series } = fumetto;
    return (
        <li key={id}>
            <div className="card-fumetti">
                <div className="img-fumetti">
                    <img src={thumb} alt={title} />
                </div>
                <p>{series}</p>
            </div>
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
import comics from "../data/comics.js";


const fumettiJsx = comics.map(fumetto => {
    const { id, title, description, thumb, price, series } = fumetto;
    return (
        <li key={id}>
            <div className="img-fumetti-container">
                <img src={ thumb } alt={ title } />
            </div>
            <p>{ series }</p>
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
                        <ul>
                            { fumettiJsx }
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    </>;
}

export default Main;
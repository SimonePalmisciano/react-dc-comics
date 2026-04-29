function CardFumetto(props) {
    const { fumetto } = props;
    const { id, title, description, thumb, price, series } = fumetto;

    return (
    <div className="card-fumetti">
        <div className="img-fumetti">
            <img src={thumb} alt={title} />
        </div>
        <p>{series}</p>
    </div>
    );
}

export default CardFumetto;
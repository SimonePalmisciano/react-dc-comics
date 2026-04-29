function CardMerch(props) {
    const { merch } = props
    const { id, text, url, src } = merch;

    return (
        <a href={ url }>
            <div>
                <img src={ src } alt={ text } />
            </div>
            <p>{ text }</p>
        </a>
    );
}

export default CardMerch
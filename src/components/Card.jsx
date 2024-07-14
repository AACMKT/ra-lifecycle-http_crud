import 'bootstrap-icons/font/bootstrap-icons.css';

export const Card = (props) => {
    const { note, id } = props;
    return (
        <div id={ id } className="card">
            <div className="card-close">
                <i className="bi bi-x-circle"></i>
            </div>
            <span className="card__text">{ note }</span>
        </div>
    )
}
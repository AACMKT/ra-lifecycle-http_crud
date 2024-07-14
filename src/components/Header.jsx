import 'bootstrap-icons/font/bootstrap-icons.css';

export const Header = (props) => {
    const { getData } = props;
    return (
        <div className="header">
            <span className="title">Notes</span>
                <i className="bi bi-arrow-clockwise" onClick={ () => getData() }></i>
        </div>
    )
}
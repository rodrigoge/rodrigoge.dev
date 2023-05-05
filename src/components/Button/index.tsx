import { Link } from "react-router-dom";
import { ButtonType } from "../../types/ButtonType";
import './styles.scss';

export default function Button({
    text,
    action
}: ButtonType) {
    return (
        <Link to={`${action}`} className="lg-button">
            {text}
        </Link>
    );
}
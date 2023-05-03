import './styles.scss';
import {
    BsTriangle,
    BsFillTriangleFill,
    BsSquareFill,
    BsSquare,
    BsOctagonFill,
    BsOctagon
} from 'react-icons/bs';
import { IoEllipse, IoEllipseOutline } from 'react-icons/io5';

export default function BackgroundPattern() {
    return (
        <div className="pattern-box">
            <BsFillTriangleFill className="polygon polygon-filled" />
            <BsTriangle className="polygon polygon-transparent" />

            <IoEllipse className="ellipse ellipse-filled" />
            <IoEllipseOutline className="ellipse ellipse-transparent" />

            <BsSquareFill className="square square-filled" />
            <BsSquare className="square square-transparent" />

            <BsOctagonFill className="octagon octagon-filled" />
            <BsOctagon className="octagon octagon-transparent" />

            <span className="first-line"></span>
            <span className="second-line"></span>
            <span className="third-line"></span>
            <span className="fourth-line"></span>
        </div>
    );
}
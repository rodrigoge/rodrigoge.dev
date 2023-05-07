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
        <div className="background-pattern-container">
            <BsFillTriangleFill className="polygon polygon-filled" />
            <BsTriangle className="polygon polygon-transparent" />

            <IoEllipse className="ellipse ellipse-filled" />
            <IoEllipseOutline className="ellipse ellipse-transparent" />

            <BsSquareFill className="square square-filled" />
            <BsSquare className="square square-transparent" />

            <BsOctagonFill className="octagon octagon-filled" />
            <BsOctagon className="octagon octagon-transparent" />

            <div className="lines">
                <span className="line first-line"></span>
                <span className="line second-line"></span>
                <span className="line third-line"></span>
                <span className="line fourth-line"></span>
                <span className="line fifth-line"></span>
                <span className="line sixth-line"></span>
            </div>
        </div>
    );
}
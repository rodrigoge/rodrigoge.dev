import './styles.scss';
import heroImg from '../../assets/hero-image.svg';
import BackgroundPattern from '../../components/BackgroundPattern';

export default function Homepage() {
    return (
        <div className='dark'>
            <div className="homepage-container">
                <form>
                    <div className="hero-section">
                        <h1>Hi! I am Rodrigo Gouveia</h1>
                        <div className="tags">
                            <span>Frontend</span>
                            <span>Microservices</span>
                        </div>
                        <h2>Fullstack Developer at HST Card Technology</h2>
                        <span>Developing applications and systems for 3 years as a fullstack developer.</span>
                    </div>

                    <aside>
                        <img src={heroImg} alt="Hero image" />
                    </aside>
                </form>
            </div>
            <BackgroundPattern />
        </div>
    );
}
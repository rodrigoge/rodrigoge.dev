import './styles.scss';
import heroImg from '../../assets/hero-image.svg';
import BackgroundPattern from '../../components/BackgroundPattern';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { AiFillInstagram } from 'react-icons/ai';
import { BsMedium } from 'react-icons/bs';

export default function Homepage() {
    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <div className="homepage-container">
                <form>
                    <div className="hero-section">
                        <h1>
                            <span className="hero-letter">
                                {t('home.heroTitle')}
                                <br />
                                <div className="tags">
                                    <span className="hero-tags">Frontend</span>
                                    <span className="hero-tags">{t('home.heroTag')}</span>
                                </div>
                            </span>

                            <span className="hero-letter-name">Rodrigo Gouveia</span>
                        </h1>

                        <h2>
                            {t('home.heroSubtitle')}

                            <Link
                                className="hero-link"
                                to="https://www.hst.com.br/pt-br/">
                                HST Card Technology
                            </Link>
                        </h2>

                        <span className="hero-subtitle">
                            {t('home.heroDescription')}
                            <b>
                                {t('home.heroYears')}
                            </b>
                            {t('home.heroJob')}.
                        </span>

                        <div className="hero-footer">
                            <Button
                                action='/'
                                text="Let's chat"
                            />

                            <div className="hero-social-medias">
                                <Link
                                    className="hero-link"
                                    to="https://github.com/rodrigoge"
                                    target="_blank">
                                    <IoLogoGithub />
                                </Link>

                                <Link
                                    className="hero-link"
                                    to="https://www.linkedin.com/in/rodrigogouveiae/"
                                    target="_blank">
                                    <IoLogoLinkedin />
                                </Link>

                                <Link
                                    className="hero-link"
                                    to="https://www.instagram.com/rodrigoge_/"
                                    target="_blank">
                                    <AiFillInstagram />
                                </Link>

                                <Link
                                    className="hero-link"
                                    to="https://medium.com/@rodrigoge"
                                    target="_blank">
                                    <BsMedium />
                                </Link>
                            </div>
                        </div>
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
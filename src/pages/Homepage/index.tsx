import './styles.scss';
import heroImg from '../../assets/hero-image.svg';
import FormPatternComponent from '../../components/FormPatternComponent';
import HeaderComponent from '../../components/HeaderComponent';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { AiFillInstagram } from 'react-icons/ai';
import { BsMedium } from 'react-icons/bs';
import Tooltip from '@mui/material/Tooltip';
import LinePatternComponent from '../../components/LinePatternComponent';

export default function Homepage() {
    const { t } = useTranslation();

    return (
        <div>
            <HeaderComponent />
            <div className="homepage-container">
                <form>
                    <div className="hero-section">
                        <h1 className="drop-in-1ms">
                            <span className="hero-letter">
                                <span>
                                    {t('home.heroTitle')}
                                </span>
                                <br />
                                <div className="tags">
                                    <span className="hero-tags drop-in-1200ms">Frontend</span>
                                    <span className="hero-tags drop-in-1500ms">{t('home.heroTag')}</span>
                                </div>
                            </span>

                            <span className="hero-letter-name drop-in-1200ms">Rodrigo Gouveia</span>
                        </h1>

                        <h2 className="drop-in-1ms">
                            <span className="drop-in-1ms">
                                {t('home.heroSubtitle')}
                            </span>

                            <Link
                                className="hero-link drop-in-1200ms"
                                to="https://www.hst.com.br/pt-br/"
                                target="_blank">
                                HST Card Technology
                            </Link>
                        </h2>

                        <span className="hero-subtitle drop-in-1ms">
                            {t('home.heroDescription')}
                            <b className="drop-in-1200ms">
                                {t('home.heroYears')}
                            </b>
                            {t('home.heroJob')}.
                        </span>

                        <div className="hero-footer drop-in-1ms">
                            <div className="hero-social-medias">
                                <Tooltip title="GitHub">
                                    <Link
                                        className="hero-link drop-in-1200ms"
                                        to="https://github.com/rodrigoge"
                                        target="_blank">
                                        <IoLogoGithub />
                                    </Link>
                                </Tooltip>

                                <Tooltip title="LinkedIn">
                                    <Link
                                        className="hero-link drop-in-1200ms"
                                        to="https://www.linkedin.com/in/rodrigogouveiae/"
                                        target="_blank">
                                        <IoLogoLinkedin />
                                    </Link>
                                </Tooltip>

                                <Tooltip title="Instagram">
                                    <Link
                                        className="hero-link drop-in-1500ms"
                                        to="https://www.instagram.com/rodrigoge_/"
                                        target="_blank">
                                        <AiFillInstagram />
                                    </Link>
                                </Tooltip>

                                <Tooltip title="Medium">
                                    <Link
                                        className="hero-link drop-in-1500ms"
                                        to="https://medium.com/@rodrigoge"
                                        target="_blank">
                                        <BsMedium />
                                    </Link>
                                </Tooltip>
                            </div>
                        </div>
                    </div>

                    <aside className="drop-in-1500ms">
                        <img src={heroImg} alt="Hero image" className='heroImg' />
                    </aside>
                </form>
            </div>

            <LinePatternComponent />
            <FormPatternComponent />
        </div>
    );
}
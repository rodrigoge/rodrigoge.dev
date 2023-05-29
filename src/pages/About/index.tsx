import Card from '../../components/Card';
import Header from '../../components/Header';
import LinePattern from '../../components/LinePattern';
import './styles.scss';
import hstImage from '../../assets/hst-image.png';
import b2mlImage from '../../assets/b2ml-image.png';
import tinnovaImage from '../../assets/tinnova-image.png';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="about-container">
        <div className="content-container">
          <h1 className='drop-in-1ms'>{t('about.aboutTitle')}</h1>
          <h2 className='drop-in-1200ms'>
            {t('about.aboutSubtitle')}
          </h2>
        </div>
        <div className="timeline-container">
          <span className='line drop-in-1ms'></span>
          <Card
            img={hstImage}
            titleJob={t('about.aboutFirstJobYear').toString()}
            officeJob={t('about.aboutFirstJobOffice').toString()}
            descriptionJob={t('about.aboutFirstJobDescription').toString()}
          />

          <Card
            img={tinnovaImage}
            titleJob={t('about.aboutSecondJobYear').toString()}
            officeJob={t('about.aboutSecondJobOffice').toString()}
            descriptionJob={t('about.aboutSecondJobDescription').toString()}
          />

          <Card
            img={b2mlImage}
            titleJob={t('about.aboutThirdJobYear').toString()}
            officeJob={t('about.aboutThirdJobOffice').toString()}
            descriptionJob={t('about.aboutThirdJobDescription').toString()}
          />
        </div>
      </div>
      <LinePattern />
    </>
  );
}
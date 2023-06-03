import CardComponent from '../../components/CardComponent';
import HeaderComponent from '../../components/HeaderComponent';
import LinePatternComponent from '../../components/LinePatternComponent';
import './styles.scss';
import hstImage from '../../assets/hst-image.png';
import b2mlImage from '../../assets/b2ml-image.png';
import tinnovaImage from '../../assets/tinnova-image.png';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <HeaderComponent />
      <div className="about-container">
        <div className="content-container">
          <h1 className='drop-in-1ms'>{t('about.aboutTitle')}</h1>
          <h2 className='drop-in-1200ms'>
            {t('about.aboutSubtitle')}
          </h2>
        </div>
        <div className="timeline-container">
          <span className='line drop-in-1ms'></span>
          <CardComponent
            img={hstImage}
            titleJob={t('about.aboutFirstJobYear').toString()}
            officeJob={t('about.aboutFirstJobOffice').toString()}
            descriptionJob={t('about.aboutFirstJobDescription').toString()}
          />

          <CardComponent
            img={tinnovaImage}
            titleJob={t('about.aboutSecondJobYear').toString()}
            officeJob={t('about.aboutSecondJobOffice').toString()}
            descriptionJob={t('about.aboutSecondJobDescription').toString()}
          />

          <CardComponent
            img={b2mlImage}
            titleJob={t('about.aboutThirdJobYear').toString()}
            officeJob={t('about.aboutThirdJobOffice').toString()}
            descriptionJob={t('about.aboutThirdJobDescription').toString()}
          />
        </div>
      </div>
      <LinePatternComponent />
    </>
  );
}
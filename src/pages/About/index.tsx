import Card from '../../components/Card';
import Header from '../../components/Header';
import LinePattern from '../../components/LinePattern';
import './styles.scss';
import hstImage from '../../assets/hst-image.png';
import b2mlImage from '../../assets/b2ml-image.png';
import tinnovaImage from '../../assets/tinnova-image.png';

export default function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="content-container">
          <h1 className='drop-in-1ms'>About Me</h1>
          <h2 className='drop-in-1200ms'>
            I've been working with fullstack development for about <b>3 years</b>,
            my strengths being <b>microservices</b> with <b>Spring Boot</b> for the backend,
            and the use of <b>React.js</b> for the frontend. In addition, I have knowledge in the <b>UI/UX</b> part,
            using the main concepts and rules in the
            modeling and prototyping of interfaces.Below is a brief summary of which companies I have worked in the area.
          </h2>
        </div>
        <div className="timeline-container">
          <span className='line drop-in-1ms'></span>
          <Card
            img={hstImage}
            titleJob='2022 - Actually'
            officeJob='Fullstack Developer at HST Card Technology'
            descriptionJob='HST works with technological solutions involving Tokenization, ATM, Terminal Management, among others. Works with some companies such as VISA and MasterCard.'
          />

          <Card
            img={tinnovaImage}
            titleJob='2022'
            officeJob='Fullstack Developer Jr. at Tinnova Software Solutions'
            descriptionJob='Tinnova works with the development of technological solutions for major brands, such as UOL, PagSeguro, Embraer, Pirelli, among others.'
          />

          <Card
            img={b2mlImage}
            titleJob='2020 - 2021'
            officeJob='Fullstack Developer Jr. at B2ML Sistemas'
            descriptionJob='B2ML develops solutions working with clients such as Automalógica, UNIFEI, KeePlay, among others.'
          />
        </div>
      </div>
      <LinePattern />
    </>
  );
}
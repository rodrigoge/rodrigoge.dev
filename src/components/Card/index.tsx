import './styles.scss';
import { CardType } from '../../types/CardType';

export default function Card({
  img,
  titleJob,
  officeJob,
  descriptionJob }: CardType) {
  return (
    <div className="card-container">
      <img src={img} alt="HST Card Technology" className='drop-in-1ms' />
      <span className='pointer'></span>
      <div className="content-job">
        <span className="working-time drop-in-1ms">{titleJob}</span>
        <span className="office drop-in-1200ms">{officeJob}</span>
        <span className="job-description drop-in-1500ms">
          {descriptionJob}
        </span>
      </div>
    </div>
  );
}
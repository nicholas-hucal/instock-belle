import './NotFound.scss';
import missing from '../../assets/images/Missing.jpeg'

const NotFound = () => {
  return (
    <section className='not-found'>
        <img src={missing} alt="not found" className="not-found__image"/>
    </section>
  )
}

export default NotFound
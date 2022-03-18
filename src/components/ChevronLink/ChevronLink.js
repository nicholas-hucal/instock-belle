import './ChevronLink.scss';
import chevron from '../../assets/icons/chevron_right-24px.svg';
import { Link } from 'react-router-dom';

const ChevronLink = ({link, text}) => {
    return (
        <div className='chevron-link'>
            <Link to={link} className="chevron-link__anchor">{text}</Link>
            <img className='chevron-link__image' src={chevron} alt="click this link" />
        </div>
        
    );
};

export default ChevronLink;
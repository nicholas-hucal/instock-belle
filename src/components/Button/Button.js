/**
 * Component: CTA button
 * @props text to display on button, icon to display on button, (optional) click event
 */

import './Button.scss';

function Button ({text, icon, onClick}) {
    return (
        <button className='call-to-action' onClick={onClick}>
            <img className='call-to-action__icon' src={icon} alt="" aria-hidden="true"/>
            <p className='call-to-action__text'>{text}</p>
        </button>
    );
};

export default Button;
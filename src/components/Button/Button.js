/**
 * Component: CTA button
 * @props text to display on button, icon to display on button, (optional) click event,
 * type (optional) and  (optional) additional class options
 */

import './Button.scss';

function Button ({type, text, icon, onClick, extraClass}) {
    if (type === 'cancel') {
        return (
            <button className={`call-to-action call-to-action--cancel ${extraClass}`} onClick={onClick}>
                {icon && 
                    <img className='call-to-action__icon' src={icon} alt="" aria-hidden="true"/>
                }
                <p className='call-to-action__text'>{text}</p>
            </button>
        );
    } else {
        return (
            <button className={`call-to-action ${extraClass}`} onClick={onClick}>
                {icon && 
                    <img className='call-to-action__icon' src={icon} alt="" aria-hidden="true"/>
                }
                <p className='call-to-action__text'>{text}</p>
            </button>
        );
    }
};

export default Button;
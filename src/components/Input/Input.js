import './Input.scss';

const Input = ({label, name, value, type, placeholder, handleChange, isFieldValid}) => {
    return (
        <label className='input'>
            {label}
            <input
                className={`input__field ${isFieldValid({name}, {type})}`}
                value={value}
                onChange={handleChange}
                type={type}
                name={name}
                placeholder={placeholder} />
        </label>
    );
}

export default Input
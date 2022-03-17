import './Input.scss';

const Input = ({index, label, error, value, type, name, handleInputChange }) => {
    return (
        <label className='input'>
            {label}
            <input
                className={`input__field ${error}`}
                value={value}
                onChange={(e) => handleInputChange(index, e)}
                type={type}
                name={name}
                placeholder={label} />
        </label>
    );
}

export default Input
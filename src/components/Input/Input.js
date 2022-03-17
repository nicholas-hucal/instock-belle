import './Input.scss';

const Input = ({index, input, handleInputChange }) => {
    const { label, error, value, type, name} = input;
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
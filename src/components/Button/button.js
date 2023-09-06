
const Button = ({label, labelInfo}) => {
    return <button 
                onClick={() => alert('A label desse botão é ' + label)}>{label}
            </button>
}

Button.defaultProps = {
    label: 'Clique aqui',
}

export default Button
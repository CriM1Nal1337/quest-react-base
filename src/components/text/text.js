const Text = ({ text, color, textStyle }) => {
    return <p style={{textTransform: textStyle, color: color}}>{text}</p>
}

Text.defaultProps = {
    text: 'sou um texto',
    textStyle: 'capitalize',
    color: '#000000'
}

export default Text
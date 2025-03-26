import styles from './Icon.module.css'
import icons from '@data/icons'

// example: <Icon name={"Clock"} state={"selected"} size={"big"}/>

function Icon(props) {
    const newIcon = icons.filter(icon => {
        if(icon.name === props.name && icon.state === props.state && icon.size === props.size) {
            return icon
        }
    })[0]

    return(
        <>
            <img
                alt={newIcon.name}
                src={newIcon.url}
            />
        </>
    )
}

export default Icon
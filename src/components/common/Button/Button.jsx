import styles from './Button.module.css'
import Icon from "@components/common/Icon/index.js";

// example with icon: <Button type={"highlight"} icon={{name: "Clock", state: "selected", size: "big"}} text={'Something'}/>
// example without icon: <Button type={"highlight"} icon={''} text={'Something'}/>

function Button({type, icon, text}) {
    const newIcon = icon && <Icon name={icon.name} state={icon.state} size={icon.size}/>

    return (
        <div className={`${styles.button} ${styles[type]}`}>
            {newIcon}
            <div className={styles.buttonText}>
                <a href="#">
                    {text}
                </a>
            </div>
        </div>
    )
}

export default Button
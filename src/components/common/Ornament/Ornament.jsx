import styles from './Ornament.module.css'
import Icon from "@components/common/Icon/index.js";

function Ornament() {
    return (
        <>
            <div className={styles.ornamentRow}>
                <hr className={styles.line} />
                <Icon name={"Dice"} state={"unselected"} size={"big"}/>
                <hr className={styles.line} />
            </div>
        </>
    )
}

export default Ornament
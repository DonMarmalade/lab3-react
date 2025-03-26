import styles from './TitleButtons.module.css'
import Icon from "@components/common/Icon/Icon.jsx";

export function TitleButtons({type}) {
    return (
        <>
            <div className={styles.titleButtons}>
                <button className={`${type === "left" && styles.selected} ${type === "mid" && styles.selected} ${type === "right" && styles.unselected}`}>
                    <Icon name={"Left"} state={"selected"} size={"medium"}/>
                </button>
                <button className={`${type === "left" && styles.unselected} ${type === "mid" && styles.selected} ${type === "right" && styles.selected}`}>
                    <Icon name={"Right"} state={"selected"} size={"medium"}/>
                </button>
            </div>
        </>
    )
}

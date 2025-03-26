import styles from './PageNavBarItem.module.css'

export function PageNarBarItem({highlight, text, onCLick}) {
    return (
        <div className={`${styles.navBarItem} ${highlight && styles.highlight}`} onClick={onCLick}>
            <span>{text}</span>
        </div>
    )
}
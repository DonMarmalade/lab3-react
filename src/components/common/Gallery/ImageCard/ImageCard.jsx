import styles from './ImageCard.module.css'

export function ImageCard({image}) {
    return(
        <>
            <li className={styles.imageScrollItem}>
                <a href={'#'}>
                    <img
                        className={styles.imageItem}
                        src={image.url}
                        alt={image.title}
                    />
                </a>
            </li>
        </>
    )
}
import styles from './FeatItem.module.css'
import images from '@data/communityImage.json'
import Icon from "@components/common/Icon/Icon.jsx";

// exemplu:
/*
    <FeatList type={"news"}/>
    <FeatList type={"video"}/>
    <FeatList type={"announcement"}/>
*/

export function FeatItem({type}) {
    return (
        <>
            <div className={styles.feat}>
                <img
                    className={`${styles.images} ${type === "video" && styles.video}`}
                    src={images[0].url}
                    alt={images[0].title}
                />
                <div className={styles.newsInfo}>
                    <span className={styles.newsTitle}>Lorem ipsum dolor sit amet </span>
                    <div className={styles.newsText}>
                        <span>Jon Smith</span>
                        <Icon name={"Dot"} state={"unselected"} size={"medium"}/>
                        {type === "news" &&
                            <span>BoardGameGeek</span>
                        }

                        {type !== "news" &&
                            <>
                                <Icon name={"Like"} state={"unselected"} size={"medium"}/>
                                <span>86</span>
                                <Icon name={"Comment"} state={"unselected"} size={"medium"}/>
                                <span>7</span>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
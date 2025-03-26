import styles from './HomeSection.module.css'
import images from "@data/communityImage.json";
import Icon from "@components/common/Icon/index.js";
import FeatList from "@components/common/FeatList/index.js";

export function HomeSection({type}) {
    return (
        <>
            <div className={styles.homeSection}>
                <div className={styles.box}>
                    <img
                        className={`${styles.images}`}
                        src={images[0].url}
                        alt={images[0].title}
                    />
                    <div className={styles.homeInfo}>
                        <span className={styles.homeTitle}>Lorem ipsum dolor sit amet </span>
                        <div className={styles.homeText}>
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
                <FeatList type={type}/>
            </div>
        </>
    )
}
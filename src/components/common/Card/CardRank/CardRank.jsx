import styles from './CardRank.module.css'
import Icon from "@components/common/Icon/index.js";

// example: <CardRank type={"default"} rating={"1"}/>

export function CardRank({rating, type}) {
    return (
        <>
            <div className={styles.cardRating}>
                <span>{rating}</span>
                {type === 'default' &&
                    <Icon name={"Dot"} state={"unselected"} size={"medium"}/>
                }
                {type === 'up' &&
                    <Icon name={"Down"} state={"unselected"} size={"medium"}/>
                }
                {type === 'down' &&
                    <Icon name={"Up"} state={"unselected"} size={"medium"}/>
                }
            </div>
        </>
    )
}
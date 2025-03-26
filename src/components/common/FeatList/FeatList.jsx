import styles from './FeatList.module.css'
import {FeatItem} from "@components/common/FeatList/FeatItem/FeatItem.jsx";

function FeatList({type}) {
    return (
        <div className={styles.featList}>
            <FeatItem type={type}/>
            <hr className={styles.line} />
            <FeatItem type={type}/>
            <hr className={styles.line} />
            <FeatItem type={type}/>
            <hr className={styles.line} />
            <FeatItem type={type}/>
        </div>
    )
}

export default FeatList
import styles from './CardSection.module.css'
import Title from "@components/common/Title/index.js";
import Card from "@components/common/Card/index.js";
import Gallery from "@components/common/Gallery/index.js";
import typeList from "@data/cardSectionType.json"

export function CardSection({type}) {
    let sectionType = typeList[0]
    sectionType = typeList.find(st => st.type === type)

    return (
        <div className={styles.cardSection}>
            <Title type={sectionType.titleType} title={sectionType.title.toUpperCase()} description={sectionType.description}/>
            {type === "images"
                ? <Gallery />
                : <div className={styles.cardList}>
                    <div className={styles.cardScrollOverflow}>
                        <ul className={styles.cardScrollList}>
                            {
                                [...Array(5)].map((_, i) => {
                                    return <li key={i} className={styles.cardScrollItem}>
                                        <Card type={sectionType.cardType} cardId={i + 1} />
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}
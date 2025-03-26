import styles from './Gallery.module.css'
import images from '@data/communityImage.json'
import {ImageCard} from "@components/common/Gallery/ImageCard/ImageCard.jsx";

function Gallery() {
    return (
        <>
            <div className={styles.imageScroll}>
                <div className={styles.imageScrollOverflow} >
                    <ul className={styles.imageScrollList}>
                        {
                            images.map(image => {
                                return <ImageCard key={image.guid} image={image}/>
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Gallery
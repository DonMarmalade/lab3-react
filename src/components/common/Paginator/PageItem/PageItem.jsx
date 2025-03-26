import styles from './PageItem.module.css'

// exaple: <PageItem highlight={true} number={1}/>

export function PageItem({highlight, number}) {
    return (
        <>
            <div className={`${styles.page} ${highlight && styles.highlightPage}`}>
                <p>{number}</p>
            </div>
        </>
    )
}
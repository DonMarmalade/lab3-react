import styles from './Paginator.module.css'
import Icon from "@components/common/Icon/index.js";
import {PageItem} from "@components/common/Paginator/PageItem/PageItem.jsx";
import {useState} from "react";

function Paginator() {
    const[page, setPage] = useState(0)
    const total_pages = 5

    function handleOnClick(pageNumber) {
        setPage(pageNumber)
    }

    function prevPage() {
        const currentPage = page
        const prevIndex = (currentPage - 1 + total_pages) % total_pages
        handleOnClick(prevIndex)
    }

    function nextPage() {
        const currentPage = page
        const nextIndex = (currentPage + 1) % total_pages
        handleOnClick(nextIndex)
    }

    return (
        <div className={styles.paginator}>
            <button onClick={prevPage}>
                <Icon name={"Left"} state={"unselected"} size={"medium"}/>
            </button>
            <div className={styles.paginator}>
                {
                    [...Array(5)].map((_, i) => {
                        if ((page % 5) === i) {
                            return <button key={i + page} onClick={() => handleOnClick(i)}>
                                    <PageItem highlight={true} number={i + 1}/>
                                </button>

                        }
                        return <button key={i + page} onClick={() => handleOnClick(i)}>
                                <PageItem highlight={false} number={i + 1}/>
                            </button>

                    })
                }
            </div>
            <button onClick={nextPage}>
                <Icon name={"Right"} state={"unselected"} size={"medium"}/>
            </button>
        </div>
    )
}

export default Paginator
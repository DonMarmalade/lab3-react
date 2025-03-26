import styles from './PageNav.module.css'
import {PageNarBarItem} from "@components/common/PageNav/PageNavBarItem/PageNarBarItem.jsx";
import {useState} from "react";
import {Link} from "@components/navigation/index.js";

// example:
/*
    <PageNav categories={[
        {category: "Explore"},
        {category: "Community"},
        {category: "Discussion"}
    ]}/>
*/

function PageNav({categories}) {
    const categoriesHighlight = categories.map(item => {
        if(window.location.pathname === ("/" + item.category.toLowerCase())) {
            return {...item, highlight: true}
        }
        return {...item, highlight: false}
    })
    const[categoryAll, setCategoryAll] = useState(categoriesHighlight)
    function handleOnCLick(category) {
        const newCategories = categoryAll.map(item => {
            if (item.category === category) {
                return {...item, highlight: true}
            } else {
                return {...item, highlight: false}
            }
        })
        setCategoryAll(newCategories)
    }

    return (
        <div className={styles.pageNavBar}>
            <div className={styles.pageNavBarList}>
                {categoryAll.map(item => {
                    return <Link key={item.category} to={`/${item.category.toLowerCase()}`}>
                        <PageNarBarItem key={item.category} highlight={item.highlight} text={item.category} onCLick={() => handleOnCLick(item.category)}/>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default PageNav
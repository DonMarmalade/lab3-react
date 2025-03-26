import styles from './Header.module.css'
import {BoardGameGeekLogoSmall} from "@assets/logo/index.js";
import {Link} from "@components/navigation/Link.jsx";
import Icon from "@components/common/Icon/index.js";
import Button from "@components/common/Button/index.js";

function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Link className={styles.logo} to="/">
                        <img
                            className={styles.logo}
                            src={BoardGameGeekLogoSmall}
                            alt="BoardGameGeek Logo Small"
                        />
                    </Link>
                    <div className={styles.linksRow}>
                        <Link className={styles.link} to="/browse">
                            Browse
                        </Link>
                        <Link className={styles.link} to="/forum">
                            Forums
                        </Link>
                        <Link className={styles.link} to="/geeklist">
                            GeekLists
                        </Link>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.searchBar}>
                        <Icon name={"Search"} state={"unselected"} size={"medium"}/>
                        <div className={styles.searchText}>Search</div>
                    </div>

                    <div className={styles.profileRow}>
                        <Button type={"transparent"} icon={''} text={'Sign In'}/>
                        <Button type={"highlight"} icon={''} text={'Join (it’s free)!'}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
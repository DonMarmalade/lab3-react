import styles from './Footer.module.css'
import {BoardGameGeekLogoSmall} from "@assets/logo/index.js";
import {BoardGameGeekLogoBig} from "@assets/logo/index.js"
import Icon from "@components/common/Icon/index.js";

function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.top}>
                    <div className={styles.footerRow}>
                        <img
                            className={styles.logo}
                            src={BoardGameGeekLogoBig}
                            alt="BoardGameGeek Logo Big"
                        />

                        <div className={styles.companyColumn}>
                            <div className={styles.columnTitle}>COMPANY</div>

                            <div className={styles.columnList}>
                                <span>About</span>
                                <span>Contact</span>
                                <span>Advertise</span>
                                <span>Support BGG</span>
                            </div>
                        </div>

                        <div className={styles.companyColumn}>
                            <div className={styles.columnTitle}>POLICIES</div>

                            <div className={styles.columnList}>
                                <span>Community Guidelines</span>
                                <span>Privacy</span>
                                <span>Terms</span>
                                <span>Manage Cookies</span>
                            </div>
                        </div>

                        <div className={styles.companyColumn}>
                            <div className={styles.columnTitle}>CONNECT</div>

                            <div className={styles.linksList}>
                                <Icon name={"Facebook"} state={"selected"} size={"big"}/>
                                <Icon name={"Bluesky"} state={"selected"} size={"big"}/>
                                <Icon name={"Instagram"} state={"selected"} size={"big"}/>
                                <Icon name={"Youtube"} state={"selected"} size={"big"}/>
                                <Icon name={"Twitch"} state={"selected"} size={"big"}/>
                                <Icon name={"Discord"} state={"selected"} size={"big"}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>
                        Geekdo, BoardGameGeek, the Geekdo logo, and the BoardGameGeek logo are trademarks of BoardGameGeek, LLC.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
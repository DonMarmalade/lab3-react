import styles from './pages.module.css'
import PageNav from "@components/common/PageNav/index.js";
import Ornament from "@components/common/Ornament/index.js";
import {HomeSection} from "@components/sections/HomeSection/HomeSection.jsx";
import {CardSection} from "@components/sections/CardSection/CardSection.jsx";

function HomePage() {
    return (
        <div className={styles.homepage}>
            <div className={styles.container}>
                <PageNav categories={[
                    {category: "Explore"},
                    {category: "Community"},
                    {category: "Discussion"}
                ]}/>
                <Ornament />
                {window.location.pathname === "/explore" &&
                    <>
                        <HomeSection type={"news"} />
                        <CardSection type={"hottest"} />
                        <CardSection type={"crowdfunding"} />
                        <CardSection type={"video"} />
                        <CardSection type={"geekWeekly"} />
                        <CardSection type={"goneCardboard"} />
                        <CardSection type={"bestSellers"} />
                        <CardSection type={"mostPlayed"} />
                        <CardSection type={"newReleases"} />
                    </>
                }

                {window.location.pathname === "/community" &&
                    <>
                        <HomeSection type={"video"} />
                        <CardSection type={"inDepth"} />
                        <CardSection type={"focusSponsored"} />
                        <CardSection type={"giveawayContest"} />
                        <CardSection type={"geekLists"} />
                        <CardSection type={"communityVideo"} />
                        <CardSection type={"images"} />
                    </>
                }

                {window.location.pathname === "/discussion" &&
                    <>
                        <HomeSection type={"announcement"} />
                        <CardSection type={"news"} />
                        <CardSection type={"reviews"} />
                        <CardSection type={"forums"} />
                        <CardSection type={"discussionCrowdfunding"} />
                        <CardSection type={"blogs"} />
                        <CardSection type={"sessions"} />
                        <CardSection type={"community"} />
                        <CardSection type={"bggRelated"} />
                    </>
                }
                <Ornament />
            </div>
        </div>
    )
}

export default HomePage
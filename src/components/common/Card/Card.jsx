import styles from './Card.module.css'
import {CardRank} from "@components/common/Card/CardRank/CardRank.jsx";
import boardgames from "@data/boardgame.json"
import Icon from "@components/common/Icon/index.js";

// example:
/*
    <Card type={"rank"} cardId={"1"}/>
    <Card type={"crowdfunding"} cardId={"2"}/>
    <Card type={"video"} cardId={"3"}/>
    <Card type={"goneCardboard"} cardId={"4"}/>
    <Card type={"newRelease"} cardId={"5"}/>
    <Card type={"sponsored"} cardId={"6"}/>
    <Card type={"geekList"} cardId={"7"}/>
    <Card type={"video&like"} cardId={"8"}/>
*/

function Card({type, cardId}) {
    return (
        <>
            <div className={styles.card}>
                {type !== "geekList" &&
                    <img
                        className={`${styles.image} ${type === "crowdfunding" && styles.crowdfundingImage}`}
                        src={boardgames[(cardId % (boardgames.length - 1))].picture}
                        alt={boardgames[(cardId % (boardgames.length - 1))].name}
                    />
                }
                {type === "geekList" &&
                    <div className={styles.geekListImageList}>
                        <img
                            className={`${styles.geekListImage}`}
                            src={boardgames[(cardId % (boardgames.length - 1))].picture}
                            alt={boardgames[(cardId % (boardgames.length - 1))].name}
                        />
                        <img
                            className={`${styles.geekListImage}`}
                            src={boardgames[(cardId % (boardgames.length - 1))].picture}
                            alt={boardgames[(cardId % (boardgames.length - 1))].name}
                        />
                        <img
                            className={`${styles.geekListImage}`}
                            src={boardgames[(cardId % (boardgames.length - 1))].picture}
                            alt={boardgames[(cardId % (boardgames.length - 1))].name}
                        />
                    </div>
                }
                <div className={styles.container}>
                    <div className={styles.titleRow}>
                        {type === "rank" &&
                            <CardRank type={"default"} rating={(cardId % (boardgames.length - 1))} />
                        }
                        <p>{boardgames[(cardId % (boardgames.length - 1))].name}</p>
                    </div>

                    {type === "rank" &&
                        <p>
                            {boardgames[(cardId % (boardgames.length - 1))].about}
                        </p>
                    }

                    {type === "crowdfunding" &&
                        <>
                            <div className={styles.statisticRow}>
                                <span>Ends 21 mar.</span>
                                <Icon name={"Dot"} state={"unselected"} size={"medium"}/>
                                <span>2000 Brackets</span>
                            </div>
                            <p>
                                {boardgames[(cardId % (boardgames.length - 1))].about}
                            </p>
                        </>
                    }

                    {type === "video" &&
                        <>
                            <div className={styles.statisticRow}>
                                <span>10 mar.</span>
                                <Icon name={"Dot"} state={"unselected"} size={"medium"}/>
                                <span>1,152 views</span>
                                <Icon name={"Dot"} state={"unselected"} size={"medium"}/>
                                <span>28:27 min</span>
                            </div>
                        </>
                    }

                    {type === "goneCardboard" &&
                        <div className={styles.statisticRow}>
                            <span>English</span>
                            <Icon name={"Dot"} state={"unselected"} size={"medium"}/>
                            <span>Feb 2024</span>
                            <Icon name={"Dot"} state={"unselected"} size={"medium"}/>
                            <span>1271</span>
                            <Icon name={"Like"} state={"unselected"} size={"medium"}/>
                        </div>
                    }

                    {type === "newRelease" &&
                        <>
                            <div className={styles.statisticRow}>
                                <span>By CenozoicMatt</span>
                                <Icon name={"Dot"} state={"unselected"} size={"medium"}/>
                                <span>Around the Geek</span>
                            </div>
                            <p>
                                {boardgames[(cardId % (boardgames.length - 1))].about}
                            </p>
                        </>
                    }

                    {type === "sponsored" &&
                        <>
                            <div className={styles.statisticRow}>
                                <span>By CenozoicMatt</span>
                                <Icon name={"Dot"} state={"unselected"} size={"medium"}/>
                                <span>Ends 21 mar.</span>
                            </div>
                        </>
                    }

                    {type === "geekList" &&
                        <>
                            <div className={styles.statisticRow}>
                                <span>CenozoicMatt</span>
                                <Icon name={"Dot"} state={"unselected"} size={"medium"}/>
                                <Icon name={"Like"} state={"unselected"} size={"medium"}/>
                                <span>89</span>
                            </div>
                        </>
                    }

                    {type === "video&like" &&
                        <>
                            <div className={styles.statisticRow}>
                                <span>CenozoicMatt</span>
                                <Icon name={"Dot"} state={"unselected"} size={"medium"}/>
                                <Icon name={"Like"} state={"unselected"} size={"medium"}/>
                                <span>21</span>
                                <Icon name={"Comment"} state={"unselected"} size={"medium"}/>
                                <span>7</span>
                            </div>
                        </>
                    }
                </div>

                {type === "crowdfunding" &&
                    <div className={styles.visitProject}>
                        <span>Visit Project</span>
                        <Icon name={"Share"} state={"kickstarter"} size={"medium"}/>
                    </div>
                }
            </div>
        </>
    )
}

export default Card
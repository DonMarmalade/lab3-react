import styles from './Title.module.css'
import Icon from "@components/common/Icon/index.js";
import {TitleButtons} from "@components/common/Title/TitleButtons/TitleButtons.jsx";
import Button from "@components/common/Button/index.js";

// example:
/*
    <Title type={"default"}/>
    <Title type={"withFilters"}/>
    <Title type={"videoFilters"}/>
    <Title type={"video"}/>
    <Title type={"forum"}/>
    <Title type={"crowdfunding"}/>
    <Title type={"description"}/>
    <Title type={"rating"}/>
    <Title type={"expansions"}/>
    <Title type={"bgForums"}/>
    <Title type={"bgAll"}/>
    <Title type={"threads"}/>
    <Title type={"comments"}/>
    <Title type={"geekList"}/>
*/

function Title({type, title, description}) {
    return (
        <>
            <div className={styles.titleComponent}>
                <div className={styles.top}>
                    <div className={styles.titleRow}>
                        <div className={styles.titleText}>
                            <Icon name={"Dot"} state={"selected"} size={"medium"}/>
                            <span>
                                {title}
                            </span>
                        </div>
                        {(type === "default"
                            || type === "withFilters"
                            || type === "videoFilters"
                            || type === "video"
                            || type === "forum"
                            || type === "crowdfunding") &&
                            <Icon name={"ArrowRight"} state={"unselected"} size={"big"}/>
                        }
                    </div>

                    {type === "default" &&
                        <p>{description}</p>
                    }

                    {(type === "withFilters"
                        || type === "videoFilters"
                        || type === "forum"
                        || type === "crowdfunding"
                        || type === "rating"
                        || type === "expansion"
                        || type === "bgForums") &&
                        <div className={styles.underTitleInfo}>
                            <span>Status:</span>
                            <div className={styles.dropDownButton}>
                                <span>Recent</span>
                                <Icon name={"Down"} state={"unselected"} size={"medium"}/>
                            </div>
                        </div>
                    }

                    {(type === "threads"
                        || type === "comments") &&
                        <div className={styles.underTitleRow}>
                            <span>Forums</span>
                            <Icon name={"Right"} state={"unselected"} size={"medium"}/>
                            <span>Community</span>
                            {type === "comments" &&
                                <>
                                    <Icon name={"Right"} state={"unselected"} size={"medium"}/>
                                    <span>Thread</span>
                                </>
                            }
                        </div>
                    }

                    {type === "geekList" &&
                        <div className={styles.underTitleInfo}>
                            <span>JoeDoe</span>
                            <Icon name={"Dot"} state={"unselected"} size={"medium"}/>
                            <span>@JohnDoe</span>
                            <Icon name={"Dot"} state={"unselected"} size={"medium"}/>
                            <span>2 years ago</span>
                        </div>
                    }
                </div>
                {type === "geekList" &&
                    <>
                        <div className={styles.description}>
                            <p>
                                My collection has expanded considerably and it’s been a few years since I did a top games list.
                                The previous forty game limit feels a bit confining and there are plenty of games deserving of praise,
                                hence the expansion to a full hundred games. I definitely have a preference for Euro-style games but I do
                                take pride in having a well-rounded collection.
                            </p>
                        </div>
                        <div className={styles.buttons}>
                            <Button type={"default"} icon={{name: "Like", state: "unselected", size: "medium"}} text={"24"} />
                            <Button type={"default"} icon={{name: "Save", state: "unselected", size: "medium"}} text={"Add to Collection"} />
                        </div>
                    </>
                }

                <div className={styles.bottom}>
                    {(type === "rating"
                            || type === "expansions"
                            || type === "bgForums"
                            || type === "bgAll"
                            || type === "threads"
                            || type === "comments"
                            || type === "geekList") &&
                        <div className={styles.showingText}>
                            <span>Showing {"1-50"} of {"2365"}</span>
                        </div>
                    }

                    <div className={styles.lineRow}>
                        <hr className={styles.line} />
                        {type === "withFilters" &&
                            <div className={styles.dropDownButton}>
                                <span>Hot</span>
                                <Icon name={"Down"} state={"unselected"} size={"medium"}/>
                            </div>
                        }
                        {type === "videoFilters" &&
                            <>
                                <div className={styles.dropDownButton}>
                                    <span>Type</span>
                                    <Icon name={"Down"} state={"unselected"} size={"medium"}/>
                                </div>
                                <div className={styles.dropDownButton}>
                                    <span>Category</span>
                                    <Icon name={"Down"} state={"unselected"} size={"medium"}/>
                                </div>
                                <div className={styles.dropDownButton}>
                                    <span>Language</span>
                                    <Icon name={"Down"} state={"unselected"} size={"medium"}/>
                                </div>
                            </>
                        }
                        {type === "forum" &&
                            <div className={styles.dropDownButton}>
                                <span>Add</span>
                                <Icon name={"Share"} state={"unselected"} size={"medium"}/>
                            </div>
                        }
                        {type === "rating" &&
                            <>
                                <div className={styles.dropDownButton}>
                                    <span>Rating</span>
                                    <Icon name={"Down"} state={"unselected"} size={"medium"}/>
                                </div>
                                <div className={styles.dropDownButton}>
                                    <span>Comment</span>
                                    <Icon name={"Down"} state={"unselected"} size={"medium"}/>
                                </div>
                                <div className={styles.dropDownButton}>
                                    <span>Status</span>
                                    <Icon name={"Down"} state={"unselected"} size={"medium"}/>
                                </div>
                                <div className={styles.dropDownButton}>
                                    <span>Add</span>
                                    <Icon name={"Share"} state={"unselected"} size={"medium"}/>
                                </div>
                            </>
                        }
                        {(type === "bgForums"
                                || type === "threads"
                                || type === "comments") &&
                            <div className={styles.dropDownButton}>
                                <span>Add</span>
                                <Icon name={"Share"} state={"unselected"} size={"medium"}/>
                            </div>
                        }
                    </div>

                    <TitleButtons type={"left"} />
                </div>
            </div>
        </>
    )
}

export default Title
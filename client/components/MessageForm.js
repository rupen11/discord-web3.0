import styles from "../styles/messageForm.module.css";
import plusFilled from "../assets/icons/plus-filled.svg";
import sticker from "../assets/icons/sticker.svg";
import smiley from "../assets/icons/smiley.svg";
import gift from "../assets/icons/gift.svg";
import gif from "../assets/icons/gif.svg";
import Image from "next/image";
import { useContext } from "react";
import { DiscordContext } from "../context/context";

const MessageForm = () => {
    const {
        currentAccount,
        currentUser,
        roomName,
        placeholder,
        messageText,
        setRoomName,
        setMessageText,
    } = useContext(DiscordContext);


    
    return (
        <form
            onSubmit={(event) => sendMessage(event)}
            className={styles.chatInputContainer}
        >
            <div className={styles.chatInputWrapper}>
                <div className={styles.svgContainer}>
                    <Image
                        height={25}
                        width={25}
                        src={plusFilled}
                        className={styles.svg}
                        alt="plusfilled"
                    />
                </div>
                <input
                    type="text"
                    className={styles.chatInput}
                    // value={messageText}
                    // disabled={currentAccount.name}
                    // onChange={(e) => setMessageText(e.target.value)}
                    // placeholder={placeholder}
                />

                <div className={styles.svgContainer}>
                    <Image
                        height={25}
                        width={25}
                        src={gift}
                        className={styles.svg}
                        alt="gift"
                    />
                </div>
                <div className={styles.svgContainer}>
                    <Image
                        height={25}
                        width={25}
                        src={gif}
                        className={styles.svg}
                        alt="gif"
                    />
                </div>
                <div className={styles.svgContainer}>
                    <Image
                        height={25}
                        width={25}
                        src={sticker}
                        className={styles.svg}
                        alt="sticker"
                    />
                </div>
                <div className={styles.svgContainer}>
                    <Image
                        height={25}
                        width={25}
                        src={smiley}
                        className={styles.svg}
                        alt="smiley"
                    />
                </div>
            </div>
        </form>
    );
};

export default MessageForm;

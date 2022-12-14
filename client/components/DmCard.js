import Image from "next/image";
import styles from "../styles/dmCard.module.css";
import { useRouter } from "next/router";

const DmCard = ({ id, name, status, avatar }) => {
    const router = useRouter();

    const changeUrl = () => {
        router.push();
    };

    return (
        <div className={styles.dmCard} onClick={changeUrl}>
            <div className={styles.dmAvatarContainer}>
                <Image
                    src={avatar}
                    className={styles.dmAvatar}
                    height={48}
                    width={48}
                    alt={name}
                />
                <div className={styles.dmCardStatus} id={status} />
            </div>
            <p className={styles.dmCardName}>{name}</p>
        </div>
    );
};

export default DmCard;

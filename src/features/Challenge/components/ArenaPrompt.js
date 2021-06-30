import styles from "../Challenge.module.css";

function ArenaPrompt({ prompt }) {

    return (
        <div
            className={styles['arena-prompt-box'] + " " + styles['item-dark']}
        >
            <div
                className={styles['arena-prompt']}
            >
                {prompt}
            </div>
        </div>
    )
}

export default ArenaPrompt;

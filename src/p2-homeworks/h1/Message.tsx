import React from 'react'
import styles from './Message.module.css'


type MessageProps = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageProps) {
    return (

        <div className={styles.message}>

            <div>
                <img src={props.avatar} className={styles.ava} alt=""/>
            </div>
            <div className={styles.chat}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.text}>{props.message}</div>
                <div className={styles.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message

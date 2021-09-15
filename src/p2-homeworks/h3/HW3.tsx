import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import styles from './HW3.module.css'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users, {_id: v1(), name}])
    }

    return (
        <div className={styles.main}>
            <hr/>
            Task #3

            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}/>
        </div>
    )
}

export default HW3

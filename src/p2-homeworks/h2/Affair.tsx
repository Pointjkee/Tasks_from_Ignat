import React from 'react'
import styles from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    id:number
    affair: string // need to fix any
    prior: string
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
  props.deleteAffairCallback(props.id)

    }// need to fix

    return (
        <div>
            {props.affair} - {props.prior}
            <button className={styles.red} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair

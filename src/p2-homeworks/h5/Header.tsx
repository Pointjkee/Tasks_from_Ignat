import React from 'react'
import {NavLink} from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import {Button} from "@material-ui/core";
import styles from './pages/Nav.module.css'


function Header() {
    return (
        <div>

            <Tooltip title={
                <div className={styles.nn}>
                    <NavLink className={styles.nav} to='/pre-junior'>Pre-Junior</NavLink>
                    <NavLink className={styles.nav} to='/junior'>Junior</NavLink>
                    <NavLink className={styles.nav} to='/junior-plus'>Junior-Plus</NavLink>
                </div>
            } interactive placement="right" >
                <div className={styles.but}></div>
            </Tooltip>
        </div>
    )
}

export default Header

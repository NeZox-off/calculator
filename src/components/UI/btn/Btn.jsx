import React, { useState } from "react";
import styles from './Btn.module.css'

function Btn(props) {

    function handClick() {
        console.log(`Click ${props.value}`);
    }
    return (
        <button className={styles.btn} type="button" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Btn;
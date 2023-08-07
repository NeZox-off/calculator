import React, { useState } from "react";
import styles from './Paragraph.module.css'

function Input(props) {

    
    return (
        <p className={styles.paragraph}>{props.value}</p>
    )
}

export default Input;
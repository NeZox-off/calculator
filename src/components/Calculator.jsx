import React, { useState } from "react";
import styleCalc from './Calculator.module.css'
import Wrapper from "./Wrapper";

function Calculate() {

    
    return (
        <div className={styleCalc.calc}>
            <Wrapper/>
        </div>
    )
}

export default Calculate;
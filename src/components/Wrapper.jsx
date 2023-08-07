import React, { useState } from "react";
import Btn from "./UI/btn/Btn";
import styleWrapper from './Wrapper.module.css'
import Paragraph from "./UI/paragraph/Paragraph";
import styleBtn from '../components/UI/btn/Btn.module.css'

function Wrapper() {

    const [writeNum, setWriteNum] = useState('')

    function handlerClick(value) {
        setWriteNum((prevNum) => prevNum + value)
    }
    function handlerTotal() {
        try {
            setWriteNum(eval(writeNum).toString())
        } catch(err) {
            console.log(err);
        }
    }
    function handlerClear() {
        setWriteNum("")
    }

    return (
        <div className={styleWrapper.wrapper}>
            <div className={styleWrapper.totalWrapper}>
                <Paragraph value={writeNum} />
                <button className={styleBtn.btnTotal} onClick={() => handlerTotal()}>=</button>
            </div>
            <div className={styleWrapper.btns}>
                <div className={styleWrapper.btnWrapper}>
                    <Btn value='1' onClick={() => handlerClick('1')}/>
                    <Btn value='2' onClick={() => handlerClick('2')}/>
                    <Btn value='3' onClick={() => handlerClick('3')}/>
                    <Btn value='4' onClick={() => handlerClick('4')}/>
                    <Btn value='5' onClick={() => handlerClick('5')}/>
                    <Btn value='6' onClick={() => handlerClick('6')}/>
                    <Btn value='7' onClick={() => handlerClick('7')}/>
                    <Btn value='8' onClick={() => handlerClick('8')}/>
                    <Btn value='9' onClick={() => handlerClick('9')}/>
                    <Btn value='C' onClick={() => handlerClear()}/>
                    <Btn value='0' onClick={() => handlerClick('0')}/>
                    <Btn value='.' onClick={() => handlerClick('.')}/>
                </div>
                <div className={styleWrapper.btnWrapperSings}>
                    <Btn value='÷' onClick={() => handlerClick("/")}/>
                    <Btn value='×' onClick={() => handlerClick('*')}/>
                    <Btn value='+' onClick={() => handlerClick('+')}/>
                    <Btn value='-' onClick={() => handlerClick('-')}/>
                </div>
            </div>
        </div>
    )
}

export default Wrapper;
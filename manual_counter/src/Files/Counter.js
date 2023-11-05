import React, { useState } from 'react'
import "./Counter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Counter() {
    const [btnUpClicked, setBtnUpClicked] = useState(false);
    const [btnDownClicked, setBtnDownClicked] = useState(false);
    const [timerValue, setTimer] = useState(0);

    const handleBtnUpClick = () => {
        setBtnUpClicked(true);
        setTimeout(() => setBtnUpClicked(false), 300); // Reset after 300ms
        setTimer(timerValue + 1);
    }
    const handleReset=()=>{
        setTimer(0);


    }

    const handleBtnDownClick = () => {
        setBtnDownClicked(true);
        setTimeout(() => setBtnDownClicked(false), 300); // Reset after 300ms
        if (timerValue != 0) {
            setTimer(timerValue - 1);

        }

    }

    return (
        <>

            <h1 style={{textAlign:"center", color:"whitesmoke", margin:"0",padding:"0" }}>Manual Counter</h1>

            <div className='counter-page'>

                <div className='counter-container'>
                    <button className={`btn-up ${btnUpClicked ? 'pressed' : ''}`} onClick={handleBtnUpClick}>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                    <div className='box-display'>
                        <h1 className='numbers-inside'>{timerValue}</h1>
                    </div>
                    <button className={`btn-down ${btnDownClicked ? 'pressed' : ''}`} onClick={handleBtnDownClick}>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </button>

                </div>
                
            </div>
            <div class="center">

            <button  className='Reset-btn' onClick={handleReset}>
                        Reset
            </button>

            </div>
            



        </>

    )
}

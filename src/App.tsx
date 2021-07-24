import './App.css';
import {Display} from "./components/Display/Display";
import {DisplaySettings} from "./components/DisplaySettings/DisplaySettings";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {incrementAC, resetAC, setStartAndMaxValuesAC, StateType} from "./redux/reducer";


function App() {

    const state = useSelector<AppRootStateType, StateType>(state => state)

    const dispatch = useDispatch()

    const onClickSet = (startValue: number, maxValue: number) => {
        dispatch(setStartAndMaxValuesAC(startValue, maxValue))
    }

    const increment = () => {
        dispatch(incrementAC())
    }

    const reset = (startValue: number) => {
        dispatch(resetAC(startValue))
    }

    return (
        <div className='app-wrapper'>

            <Display increment={increment}
                     reset={reset}
                     state={state}
            />

            <DisplaySettings state={state}
                             onClickSet={onClickSet}
            />

        </div>
    )

}

export default App
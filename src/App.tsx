import './App.css';
import {Display} from "./components/Display/Display";
import {DisplaySettings} from "./components/DisplaySettings/DisplaySettings";
import React, {useEffect} from "react";


function App() {

    let [value, setValue] = React.useState<number>(0)
    let [startValue, setStartValue] = React.useState<number>(0)
    let [maxValue, setMaxValue] = React.useState<number>(0)

    // maxValue get in localStorage
    useEffect(() => {
        let maxValueStr = localStorage.getItem('maxValue')
        if (maxValueStr) {
            setMaxValue(JSON.parse(maxValueStr))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])


    // startValue get in localStorage
    useEffect(() => {
        let startValueStr = localStorage.getItem('startValue')
        if (startValueStr) {
            setStartValue(JSON.parse(startValueStr))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])


    // current value get in localStorage
    useEffect(() => {
        let ValueStr = localStorage.getItem('Value')
        if (ValueStr) {
            setValue(JSON.parse(ValueStr))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('Value', JSON.stringify(value))
    }, [value])


    const onClickSet = (startValue: number, maxValue: number) => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setValue(startValue)
    }

    const increment = () => {
        if (value < maxValue) {
            setValue(value + 1)
        }
    }

    const reset = () => setValue(startValue)

    return (
        <div className='app-wrapper'>

            <Display increment={increment}
                     reset={reset}
                     value={value}
                     maxValue={maxValue}
                     startValue={startValue}
            />

            <DisplaySettings value={value}
                             startValue={startValue}
                             maxValue={maxValue}
                             setMaxValue={setMaxValue}
                             setStartValue={setStartValue}
                             onClickSet={onClickSet}
            />
        </div>
    )

}

export default App
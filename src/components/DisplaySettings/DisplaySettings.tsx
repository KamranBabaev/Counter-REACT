import React, {ChangeEvent} from "react";
import styles from './DisplaySettings.module.css'

type DisplaySettingsPropsType = {
    value: number
    maxValue: number
    startValue: number
    setStartValue: (startValue: number) => void
    setMaxValue: (maxValue: number) => void
    onClickSet: (startValue: number, maxValue: number) => void
}

export function DisplaySettings(props: DisplaySettingsPropsType) {

    const maxValueTarget = (event: ChangeEvent<HTMLInputElement>) => {
        let valueTarget = +event.currentTarget.value
        props.setMaxValue(valueTarget)
    }

    const startValueTarget = (event: ChangeEvent<HTMLInputElement>) => {
        let valueTarget = +event.currentTarget.value
        props.setStartValue(valueTarget)
    }

    return (
        <div className='wrapper'>

            <div className={styles.displaySettings}>

                <div className={styles.item}>max value:
                    <input type='number' value={props.maxValue}
                           style={props.maxValue < props.startValue ? {background: 'red'} : {background: 'white'}}
                           placeholder=''
                           onChange={maxValueTarget}/>
                </div>

                <div className={styles.item}>start value:
                    <input type='number' value={props.startValue}
                           style={props.startValue > props.maxValue || props.startValue < 0 ? {background: 'red'} : {background: 'white'}}
                           placeholder=''
                           onChange={startValueTarget}/>
                </div>

                <div className={styles.setBTN}>
                    <button onClick={() => props.onClickSet(props.startValue, props.maxValue)}>set</button>
                </div>

            </div>

        </div>
    )
}
import React from "react";
import {Buttons} from "../Buttons/Buttons";
import styles from './Display.module.css'

type DisplayPropsType = {
    increment: () => void
    reset: () => void
    value: number
    maxValue: number
    startValue: number
}


export function Display(props: DisplayPropsType) {

    return (
        <div className='wrapper'>

            {
                props.maxValue !== props.startValue
                    ? <div className={styles.display}>
                        <span className={props.value === props.maxValue ? 'stopValue' : ''}>{props.value}</span>
                    </div>

                    : <div>
                        <span className={styles.error}>не корректное значение</span>
                    </div>
            }

            <Buttons increment={props.increment}
                     reset={props.reset}
                     value={props.value}
                     maxValue={props.maxValue}
            />
        </div>
    )
}
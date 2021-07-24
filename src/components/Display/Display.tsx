import React from "react";
import {Buttons} from "../Buttons/Buttons";
import styles from './Display.module.css'
import {StateType} from "../../redux/reducer";

type DisplayPropsType = {
    increment: () => void
    reset: (startValue: number) => void
    state: StateType
}


export function Display(props: DisplayPropsType) {

    return (
        <div className={styles.wrapper}>

            {
                props.state.maxValue >= props.state.startValue
                    ? <div className={styles.display}>
                        <span
                            className={props.state.value === props.state.maxValue ? 'stopValue' : ''}>{props.state.value}</span>
                    </div>

                    : <div>
                        <span className={styles.error}>не корректное значение</span>
                    </div>
            }

            <Buttons increment={props.increment}
                     reset={props.reset}
                     state={props.state}
            />
        </div>
    )
}
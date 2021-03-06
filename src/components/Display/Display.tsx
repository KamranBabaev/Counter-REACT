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
  const correctClassName = (
      props.state.value === props.state.maxValue ? 'stopValue' : ''
  )

  const renderJSX = () => {
    if (props.state.maxValue >= props.state.startValue) {
      return (
          <div className={styles.display}>
            <span className={correctClassName}>
              {props.state.value}
            </span>
          </div>
      )
    }

    return (
        <div>
          <span className={styles.error}>
            не корректное значение
          </span>
        </div>
    )
  }

  return (
      <div className={styles.wrapper}>
        {renderJSX()}
        <Buttons
            increment={props.increment}
            reset={props.reset}
            state={props.state}
        />
      </div>
  )
}

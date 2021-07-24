import React, {ChangeEvent, useEffect, useState} from "react";
import styles from './DisplaySettings.module.css'
import {setValueAC, StateType} from "../../redux/reducer";
import {useDispatch} from "react-redux";

type DisplaySettingsPropsType = {
  state: StateType
  onClickSet: (startValue: number, maxValue: number) => void
}

export function DisplaySettings(props: DisplaySettingsPropsType) {
  const [startValue, setStartValue] = useState('')
  const [maxValue, setMaxValue] = useState('')

  const dispatch = useDispatch()

  const maxValueTarget = (event: ChangeEvent<HTMLInputElement>) => {
    let valueTarget = event.currentTarget.value

    if (+valueTarget >= 1) {
      setMaxValue(valueTarget)
    }
  }
  const startValueTarget = (event: ChangeEvent<HTMLInputElement>) => {
    let valueTarget = event.currentTarget.value

    if (+valueTarget >= 0) {
      setStartValue(valueTarget)
    }
  }
  const handlerClick = () => {
    props.onClickSet(+startValue, +maxValue)
    dispatch(setValueAC(+startValue))
  }

  useEffect(() => {
    let maxValueStr = localStorage.getItem('maxValue')
    let startValueStr = localStorage.getItem('startValue')
    let valueStr = localStorage.getItem('value')

    if (maxValueStr && startValueStr && valueStr) {
      setMaxValue(JSON.parse(maxValueStr))
      setStartValue(JSON.parse(startValueStr))

      dispatch(setValueAC(JSON.parse(valueStr)))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('startValue', JSON.stringify(startValue))
    localStorage.setItem('value', JSON.stringify(props.state.value))
  }, [maxValue, startValue, props.state.value])

  return (
      <div className={styles.wrapper}>
        <div className={styles.displaySettings}>
          <div className={styles.item}>
            <span>max value:</span>
            <input
                type='number'
                value={maxValue}
                // /* ?? className */
                style={
                     props.state.maxValue < props.state.startValue
                         ? {background: 'red'}
                         : {background: 'white'}
                }
                placeholder=''
                onChange={maxValueTarget}
            />
          </div>

          <div className={styles.item}>
            <span>start value:</span>
            <input type='number'
                   value={startValue}
                   style={
                     props.state.startValue > props.state.maxValue || props.state.startValue < 0
                         ? {background: 'red'}
                         : {background: 'white'}
                   }
                   placeholder=''
                   onChange={startValueTarget}
            />
          </div>
        </div>
        <div className={styles.setBTN}>
          <button onClick={handlerClick}>set</button>
        </div>
      </div>
  )
}

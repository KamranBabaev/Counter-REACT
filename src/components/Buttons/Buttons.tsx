import styles from './Buttons.module.css'
import {StateType} from "../../redux/reducer";

type ButtonsPropsType = {
  increment: () => void
  reset: (startValue: number) => void
  state: StateType
}

export function Buttons(props: ButtonsPropsType) {
  const correctIsDisabled = props.state.value === props.state.maxValue

  return (
      <div className={styles.buttons}>
        <button
            onClick={props.increment}
            disabled={correctIsDisabled}
        >
          inc
        </button>
        <button
            onClick={() => props.reset(props.state.startValue)}
            className={props.state.value === 0 ? 'disabled' : ''}
        >
          res
        </button>
      </div>
  )
}

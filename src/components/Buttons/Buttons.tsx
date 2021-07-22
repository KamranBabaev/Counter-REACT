import styles from './Buttons.module.css'

type ButtonsPropsType = {
    increment: () => void
    reset: () => void
    value: number
    maxValue: number
}

export function Buttons(props: ButtonsPropsType) {
    return (
        <div className={styles.buttons}>

            <button onClick={props.increment}
                    disabled={props.value === props.maxValue}
            >inc
            </button>

            <button onClick={props.reset}
                    className={props.value === 0 ? 'disabled' : ''}
            >res
            </button>

        </div>
    )
}

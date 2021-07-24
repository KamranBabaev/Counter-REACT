type ActionType = incrementAT | resetAT | setStartAndMaxValuesAT | setValueAT

type incrementAT = {
    type: 'INCREMENT'
}

type resetAT = {
    type: 'RESET'
    startValue: number
}

type setStartAndMaxValuesAT = {
    type: 'SET-START-AND-MAX-VALUES'
    values: {
        startValue: number
        maxValue: number
    }
}

type setValueAT = {
    type: 'SET-VALUE'
    value: number
}

export type StateType = {
    startValue: number
    maxValue: number
    value: number
}

const initState = {
    startValue: 0,
    maxValue: 0,
    value: 0
}

export const reducer = (state: StateType = initState, action: ActionType) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                value: state.value + 1
            }

        case "RESET":
            return {
                ...state,
                value: action.startValue
            }

        case "SET-START-AND-MAX-VALUES":
            return {
                ...state,
                startValue: action.values.startValue,
                maxValue: action.values.maxValue
            }

        case "SET-VALUE":
            return {
                ...state,
                value: action.value
            }

        default:
            return state
    }
}

export const incrementAC = (): incrementAT => {
    return {
        type: 'INCREMENT'
    }
}

export const resetAC = (startValue: number): resetAT => {
    return {
        type: 'RESET',
        startValue
    }
}

export const setStartAndMaxValuesAC = (startValue: number, maxValue: number): setStartAndMaxValuesAT => {
    return {
        type: 'SET-START-AND-MAX-VALUES',
        values: {startValue, maxValue}
    }
}

export const setValueAC = (value: number): setValueAT => {
    return {
        type: 'SET-VALUE',
        value
    }
}


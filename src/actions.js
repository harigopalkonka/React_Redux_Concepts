// Step 20 Create Actions

export const IncAction = (value) =>  async dispatch => {     // Step 21
    dispatch({
        type:"INCREMENT",
        payload:value
    })
}

export const DecAction = () => async dispatch => {       // step 22
    dispatch({
        type:"DECREMENT"
    })
}
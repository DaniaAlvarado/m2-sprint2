import React, { useState } from 'react'

const Form = (initialState = {}) => {

    const [dataForm, setDataForm] = useState(initialState);

    const handleChangeOption = ({target}) => {
        setDataForm({
            ...dataForm,
            [target.name]: target.value
        })
    }

    const reset = () => {
        setDataForm(initialState)
    }

  return [dataForm, handleChangeOption, reset]
}

export default Form;
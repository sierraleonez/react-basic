import React from 'react'
import useInput from '../Hooks/useInput'

export default function AddColorForm({ onNewColor = () => {} }) {
  const [titleProps, resetTitle] = useInput("")
  const [colorProps, resetColor] = useInput("#000000")

  const submit = e => {
    e.preventDefault()
    onNewColor(titleProps.value, colorProps.value)
    resetTitle()
    resetColor()
  }

  return (
    <form>
      <input
        required
        type={'text'}
        placeholder={"color title..."}
        {...titleProps}
      />
      <input
        type={'color'}
        required
        {...colorProps}
      />
      <button onClick={submit}>ADD</button>
    </form>
  )
}


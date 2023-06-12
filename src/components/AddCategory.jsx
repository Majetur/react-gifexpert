import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  //const [inputValue, setInputValue] = useState('One Punch')
  const [inputValue, setInputValue] = useState('')

/*   const onInputChange = (event) =>{
    console.log(event.target.value);
    setInputValue(event.target.value)
  }
 */
  const onInputChange = ({target}) =>{
    setInputValue(target.value)
  }

  const onSubmit = (event) =>{
    event.preventDefault()
    if(inputValue.trim().length<=1) return
    onNewCategory(inputValue.trim())
    setInputValue('')
    //console.log(inputValue)
  }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Buscar gif"
            value={inputValue}
            /* onChange={(event) => onInputChange (event)} */
            onChange={onInputChange}
        />
    </form>
  )
}

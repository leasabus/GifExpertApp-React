import { useState } from "react"

//recibimos el setCategories de las props
export const AddCategory = ( {onNewCategory} ) => {

  const [inputValue, setInputValue] = useState('') ;

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim() <= 1) return ;
    // setCategories( categories => [inputValue, ...categories]);
    //traigo la funcion declarada en el componente padre y es mas facil.
    onNewCategory(inputValue.trim())
    setInputValue(' ') ;
  };
 
  return (
   <form onSubmit={(event) => onSubmit(event)}>
    <input type="text"
    placeholder="Buscar Gif"
    value={inputValue}
    onChange = { (event) => onInputChange(event)}
    />
   </form>
  )
}

import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
//Use state
 const [categories, setCategories] = useState(['One punch']);
 
 //Creamos una func para agregar categorias, hacemos un spread de las categorias
 const onAddCategory = (newCategory) => {
  //para que no se puedan repetir los valores
  if (categories.includes(newCategory)) return alert('Ya ingresaste ese Gif!');
 setCategories([newCategory, ...categories])
 
 };

  return (
    <>
    <h1>GifExpertApp</h1>
   
    {/* Forma correcta de hacerlo creando una nueva propiedad para exportar
    al otro componente*/}

    <h2><AddCategory
     onNewCategory = { (event) => onAddCategory(event)}
    /></h2>

    {/*listado de gif, recorremos todas las categorias, hay que darle una key para q no tire error y recibimos
    una nueva categoria*/}
      {
        categories.map( (category) => (
          <GifGrid 
          key={category}
          category={category}
          />
        ))
      }
    </>
  )
}

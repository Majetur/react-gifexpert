import { useState } from "react"
import { AddCategory, GifGRid } from "./components"


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['prueba'])
  
  const onAddCategory = (newCategory) =>{
    //no usar el push para evitar mutaciones
    //ademas no se refresca el valor agregado
    //categories.push('Valorant')

    if (categories.includes(newCategory)) return
    
    //setCategories([...categories, 'Valorant'])
    //setCategories(cat => [...cat, 'Valorant'])    
    setCategories([newCategory, ...categories])

  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
          onNewCategory={(event) => onAddCategory(event)}
        />


        { 
          categories.map(category =>(
            <GifGRid 
              key={category} 
              category={category}/>
              ))
        }

    </>
  )
}

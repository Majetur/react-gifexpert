import { render,screen, waitFor  } from "@testing-library/react"
import { GifItem } from "../src/components/GifItem"

describe('Pruebas con componente GitItem', () => { 
    
    const title = "prueba"
    const url = "urlPrueba"
    test('debe coincidir con el snapshot del componente', () => { 
        const {container} = render (<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot()
     })

    test('debe mostrar la imagen con el URL y el alt indicado', () => {    
        
        render (<GifItem title={title} url={url}/>)
        screen.debug()
        expect(screen.getByRole('img').src).toBe(url)
        


     })
     
 })
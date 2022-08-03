
import { useFetchGrid } from "./custom-hook/useFetchGrid";
import { GifCards } from "./GifCards";


//este comonente se crea para el contenedor de las busquedas en el input

export const GifGrid = ({category}) => {

//LLamada al custom hook
const {images, isLoading} = useFetchGrid(category) ;

 
 return (
 <>
 <h3>{ category }</h3>

 {
   //Mostrar mensaje de carga
   isLoading && ( <h2>Cargando...</h2>)
 }

{/* hacemos una desestructuracion de los elementos q necesitamos de la api y los llamamos
dentro de una lista para q se muestra */}
 <div className="card-grid">
    {
      images.map( (image) => (
       <GifCards
       key= {image.id}
        { ...image }
    //Hacemos una desestructuracions de la image y podemos seleccionar q caracteristicas
    //necesitamos en nuestro componente
       />
      ))
      }
 </div>
 </>
)
}

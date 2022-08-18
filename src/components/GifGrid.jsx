// import { getGifs } from "../helpers/getGifs";        // orden de importaciones: react>importaciones de terceros>funciones propias
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);

    
    return(
        <>
        <h3>{category}</h3>
        {
            isLoading && (<h2>Cargando...</h2>)       // o crear componente LoadingMessage + <LoadingMessage isLoading={isLoading} />
        }
    

            <div className="card-grid">
                {
                    images.map( (image) => (
                        // <li key={id}>{title}</li>
                        <GifItem 
                            key={image.id}
                            {...image}          // = title={image.title}
                                                //   url={image.url}
                        />
                    ))
                }
            </div>
        </>
    )
}
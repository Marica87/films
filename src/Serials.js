import { useState } from "react";
import { dataserial } from "./dataserial";
import ButtonMovies from "./ButtonMovies";
import Movies from "./Movies";
import Slide from "./Slide";


function Serials() {
   


    const [movie, setMovie] = useState(dataserial);

    const selectMovies = (genre) => {
        const newSelect = dataserial.filter((item => item.genre === genre));
        setMovie(newSelect)
    }

    
    

    return (
        <div>
            <div>
                <Slide />
            </div>
            <div>
                <h1>СЕРИАЛЫ</h1>
            </div>
           
            <div>
                <h2>Жанры</h2>
            </div>
            <div>
                <ButtonMovies filterBtn = {selectMovies} />
                </div>
            <div>
                <Movies film={movie} />
            </div>
            
            
        </div>
    )

}


export default Serials;
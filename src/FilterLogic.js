import { useState } from "react";
import { datamovies } from "./datamovies";



import Movies from "./Movies";

import ButtonMovies from "./ButtonMovies";
import Slide from "./Slide";


function FilterLogic() {

    const [movie, setMovie] = useState(datamovies);

    const selectMovies = (genre) => {
        const newSelect = datamovies.filter((item => item.genre === genre));
        setMovie(newSelect)
    }

    
    

    return (
        <div>
            <div>
                <Slide />
            </div>
            <div>
                <h1>ФИЛЬМЫ</h1>
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

export default FilterLogic;
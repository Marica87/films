import { useState } from "react";
import { datamult } from "./datamult";

import Movies from "./Movies";
import Slide from "./Slide";
import ButtonMult from "./ButtonMult";

function Cartoons() {
   


    const [movie, setMovies] = useState(datamult);

    const selectMult = (genremult) => {
        const newMult = datamult.filter((item => item.genremult === genremult));
        setMovies(newMult)
        console.log(newMult)
    }

    const selectCountry = (country) => {

        const nexCountry = datamult.filter((item => item.country === country));
        setMovies(nexCountry)
    } 

    
    

    return (
        <div>
            
            <div>
                <Slide />
            </div>
            <div>
                <h1>МУЛЬТФИЛЬМЫ</h1>
            </div>
            <div>
                <h2>Жанры</h2>
            </div>
            <div>
                <ButtonMult filterBtn = {selectMult}  filterBtnCountry = {selectCountry}  />
                
            </div>
            <div>
                <Movies film={movie} />
            </div>
            
            
        </div>
    )

}


export default Cartoons;
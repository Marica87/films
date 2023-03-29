import Slide from "./Slide";
import Subtitle from "./Subtitle";
//import { useState } from "react";
import { datamovies } from "./datamovies";
import { datamult } from "./datamult";
import { dataserial } from "./dataserial";

function Home() {

    // const [ popMovie, setPopMovie ] = useState(datamovies)

    const popularMovies = datamovies.filter(item => {
        return item.id % 2 === 0
    })

    const popularSerials = dataserial.filter(item => {
        return item.id % 2 === 0
    })

    const popularMult = datamult.filter(item => {
        return item.id % 2 === 0
    })

    return (
        <div>
            <div>
                <Slide />
            </div>

            <div>
                <Subtitle />
            </div>
            <div>
                <h2>ПОПУЛЯРНЫЕ ФИЛЬМЫ</h2>
                <div className="home-container">
                    {popularMovies.map((item => {
                        const {id,poster, namefilm, address } = item;
                        return (
                            <div className="home-container-wrap" key={id}>
                                 <img className="home-container-wrap-pic" src={poster} width="120px" alt="film" />
                                 <a className="home-container-wrap-list" target="_blank" rel="noopener noreferrer" href={address}>{namefilm}</a>
                            </div>
                        )
                    }))}
                </div>
            <div>
               <h2>ПОПУЛЯРНЫЕ СЕРИАЛЫ</h2>
            </div> 
                <div className="home-container">
                    {popularSerials.map((item => {
                        const {id,poster, namefilm, address } = item;
                        return (
                            <div className="home-container-wrap" key={id}>
                                 <img className="home-container-wrap-pic" src={poster} width="120px" alt="film" />
                                 <a className="home-container-wrap-list" target="_blank" rel="noopener noreferrer" href={address}>{namefilm}</a>
                            </div>
                        )
                    }))}
                </div>
            </div>
            <div>
               <h2>ПОПУЛЯРНЫЕ СЕРИАЛЫ</h2>
            </div> 
                <div className="home-container">
                    {popularMult.map((item => {
                        const {id,poster, namefilm, address } = item;
                        return (
                            <div className="home-container-wrap" key={id}>
                                 <img className="home-container-wrap-pic" src={poster} width="120px" alt="film" />
                                 <a className="home-container-wrap-list" target="_blank" rel="noopener noreferrer" href={address}>{namefilm}</a>
                            </div>
                        )
                    }))}
                </div>
            </div>
       
  
    )
}

export default Home;
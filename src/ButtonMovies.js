function ButtonMovies({filterBtn}) {

    return (


    <div className="cont">
        <button className="change" onClick={() => filterBtn("Фэнтези")}>Фентези</button>
        <button className="change" onClick={() => filterBtn("Драма")}>Драма</button>
        <button className="change" onClick={() => filterBtn("Боевик")}>Боевик</button>
        <button className="change" onClick={() => filterBtn("Детектив")}>Детектив</button>
        <button className="change" onClick={() => filterBtn("Военное")}>Военное</button>
        <button className="change" onClick={() => filterBtn("Комедия")}>Комедия</button>
        

      </div>
 )



}

export default ButtonMovies;
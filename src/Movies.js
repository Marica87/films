



function Movies({film}) {
   
    return (
        <div>
          
        
      <div className="wrap">
        {film.map((elem => {
            const {id, poster, namefilm, address} = elem;
            return (
                <div className="wrap-movie" key={id}>
                    <img className="wrap-movie-pic" src={poster} width="170px" alt="post" />
                    <a className="wrap-movie-list" target="_blank" rel="noopener noreferrer"  href={address}>{namefilm}</a>
                </div>
            )
        }))}
      </div>
      </div>

    )

}

export default Movies;
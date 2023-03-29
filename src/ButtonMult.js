function ButtonMult({filterBtn, filterBtnCountry}) {
    return (
        <div className="cont">
        <button className="change" onClick={() => filterBtn("Анимэ")}>Анимэ</button>
        <button className="change" onClick={() => filterBtn("Приключения")}>Приключения</button>
        <button className="change" onClick={() => filterBtn("Детское кино")}>Детское кино</button>
        <button className="change" onClick={() => filterBtn("Мультсериал")}>Мультсериалы</button>
        <button className="change" onClick={() => filterBtnCountry("Зарубежное")}>Зарубежное</button>
        <button className="change" onClick={() => filterBtnCountry("Российское")}>Российское</button>
        

      </div>
    )
}

export default ButtonMult;
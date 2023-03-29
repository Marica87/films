import { useState } from "react";
import { dataslide } from "./dataslide";



function Slide() {
    
    const [photo, setPhoto] = useState(0);
    const { image, btnlink} = dataslide[photo]
    

    const nextPhoto = () => {
        setPhoto ((photo => {
            photo++;
            if (photo > dataslide.length -1) {
                photo = 0
                
            }
            return photo
        }))
    }

    const prevPhoto = () => {
        setPhoto ((photo => {
            photo--; 
            if (photo < 0 ) {
                return dataslide.length -1
            }
            return photo
        }))
    }

    return (
        <div>
            <div className="flex-wrapper">
        <div className="slider-wrapper">

            <div className="slider">
                <img className="foto" src={image}  alt=""/>
                
            </div>
            
            <div className="btn-prev" onClick={prevPhoto} >&#10094;</div>
            <div className="btn-next" onClick={nextPhoto}>&#10095;</div>
            <a className="slider-link" target="_blank" rel="noopener noreferrer" href={btnlink}>Смотреть</a>
        </div>
        </div>

        

        </div>


    )
    


    


}

export default Slide;
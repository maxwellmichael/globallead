import React from 'react';
import { useLocation } from "react-router-dom";


const College = ()=>{

    const location = useLocation();
    console.log(location)

    return(
        <div className='project-page-main'>

            <div className="project-page-content">

                <div className="project-page-title">{location.state.title}</div>

                <div className="project-page-location">{location.state.country}</div>

                <div className="project-page-description">{location.state.content[0].children[0].text}</div>

            </div>

            <div className="project-page-gallery">
                {location.state.gallery.map((image, i)=>(<div key={i} style={{backgroundImage:`url(${image})`}} className="project-page-image"></div>))}
            </div>

        </div>
    )
}



export default College;
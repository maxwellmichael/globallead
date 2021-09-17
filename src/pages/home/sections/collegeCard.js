import React from 'react';
import {withRouter} from 'react-router-dom';


const CollegeCard = (props)=>{
    
    return(
            <div className="project-card-main">
                <div className="project-card-container" style={{backgroundImage:`url(${props.data.imageUrl?props.data.imageUrl:'#'})`}}>
                    <div className="subtitle">{props.data.country}</div>
                    <div className="title">{props.data.title}</div>
                    <button className="cta-button">View</button>
                    <div className="right-triangle"></div>
                </div>
            </div>
    )
}

export default withRouter(CollegeCard);
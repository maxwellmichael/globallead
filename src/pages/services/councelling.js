
import React from 'react';
import Building1 from '../../images/backgrounds/building.jpg';
import Building2 from '../../images/backgrounds/4.-STRANY-PERSIDSKOGO-ZALIVA-CHastnaya-rezidentsiya-CITADEL-GULF-COUNTRIES-Private-residence-CITADEL.webp';
import {motion} from 'framer-motion'


const PersonalizedCounsellingPage = ()=>{


    return(
        <motion.div 
        className='project-page-main'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>

            <div className="project-page-content">

                <div className="project-page-title">Personalized Counselling</div>

                <div className="project-page-description">
                In GLOBAL LEAD, we provide Comprehensive Counselling and guide the student to choose the right University at our SEMINARS by highly trained counsellors using multimedia presentations including documentaries, Photo slide shows, Video shows, Web shows, etc.
                GLOBAL LEAD has a team of trained and expert counsellors, who provide help to identify the professional goals, enabling the student to take a wiser academic decision. These counsellors give Personal Guidance to choose courses that perfectly fits your Career or Personal Goals
                </div>

            </div>

            <div className="project-page-gallery">
               <div style={{backgroundImage:`url(${Building1})`}} className="project-page-image"></div>
               <div style={{backgroundImage:`url(${Building2})`}} className="project-page-image"></div>
            </div>

        </motion.div>
    )
}


export default PersonalizedCounsellingPage;
import {motion} from 'framer-motion';
import React from 'react';
import Planning1 from '../../images/backgrounds/project-planning.jpg';
import Planning2 from '../../images/backgrounds/scott-graham-5fNmWej4tAA-unsplash.jpg';


const UniversityAdmissionPage = ()=>{


    return(
        <motion.div 
        className='project-page-main'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>

            <div className="project-page-content">

                <div className="project-page-title">UNIVERSITY ADMISSION/ CONFIRMATION</div>

                <div className="project-page-description">
                    We, at GLOBAL LEAD, confirm the admission and get the admission letter from the university applied within 7-10 working days from the date of application submission of complete set of documents. This admission letter is useful for getting bank loans and applying for passport in Tatkal quota.
                </div>

            </div>

            <div className="project-page-gallery">
               <div style={{backgroundImage:`url(${Planning1})`}} className="project-page-image"></div>
               <div style={{backgroundImage:`url(${Planning2})`}} className="project-page-image"></div>
            </div>

        </motion.div>
    )
}



export default UniversityAdmissionPage;


import React from 'react';
import Estimation1 from '../../images/backgrounds/estimation.jpg';
import Estimation2 from '../../images/backgrounds/firmbee-com-gcsNOsPEXfs-unsplash.jpg';
import {motion} from 'framer-motion';

const UniversityApplicationPage = ()=>{


    return(
        <motion.div 
        className='project-page-main'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>

            <div className="project-page-content">

                <div className="project-page-title">APPLICATION TO THE MEDICAL UNIVERSITIES</div>

                <div className="project-page-description">
                    Once the student submits all the documents we open a student relationship file. We then review the applications before they are submitted to the chosen universities. Each university requires its own set of documents from the student. Translations and legalization of documents may be necessary. Once all necessary documents are in place, we go forward submitting the same to the university and if the university approves the documents then they issue the admission letter for the student.
                </div>

            </div>

            <div className="project-page-gallery">
               <div style={{backgroundImage:`url(${Estimation1})`}} className="project-page-image"></div>
               <div style={{backgroundImage:`url(${Estimation2})`}} className="project-page-image"></div>
            </div>

        </motion.div>
    )
}



export default UniversityApplicationPage;
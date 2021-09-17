
import React from 'react';
import Construction1 from '../../images/backgrounds/uwe-hensel-44Uz2J7z9Rg-unsplash.jpg';
import Construction2 from '../../images/backgrounds/rick-hyne--4jcZEZZ9sk-unsplash.jpg';
import {motion} from 'framer-motion';

const UniversitySelectionPage = ()=>{


    return(
        <motion.div 
        className='project-page-main'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>

            <div className="project-page-content">

                <div className="project-page-title">COUNTRY/UNIVERSITY SELECTION</div>

                <div className="project-page-description">
                    If you aspire to study abroad, it is important to choose the right course and right University. Overseas education does not come cheap and has its own merits and demerits which means you must make an informed choice based on several aspects. The Admission Counsellors at GLOBAL LEAD will shortlist a number of appropriate universities for you after analysing your profile. You can then discuss the shortlisted universities with your family and friends before finalizing.
                    Basically any student who wishes to go abroad should be clearly aware of the following 5 aspects. Cost of education, Cost of living, climate conditions, recognition of the degree and most importantly the safety features abroad.
                </div>

            </div>

            <div className="project-page-gallery">
               <div style={{backgroundImage:`url(${Construction1})`}} className="project-page-image"></div>
               <div style={{backgroundImage:`url(${Construction2})`}} className="project-page-image"></div>
            </div>

        </motion.div>
    )
}



export default UniversitySelectionPage;
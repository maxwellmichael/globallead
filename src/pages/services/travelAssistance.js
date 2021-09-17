
import React from 'react';
import Interior1 from '../../images/backgrounds/interior_bg.jpg';
import Interior2 from '../../images/backgrounds/mustafa-matkawala-z0ZhIQF5Yec-unsplash.jpg';
import {motion} from 'framer-motion';

const TravelAssistancePage = ()=>{


    return(
        <motion.div 
        className='project-page-main'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>

            <div className="project-page-content">

                <div className="project-page-title">VISA/Travel assistance</div>

                <div className="project-page-description">
                    It is common knowledge that it is impossible to study in any university abroad without a relevant visa. We guarantee 100 % visa success rate. 
                    AT GLOBAL LEAD, we provide you with the best possible options to travel. We help you identify the right airline for excess baggage schemes. We help you in your entire course period in traveling. We also arrange travel for parents and relatives of the student.

                </div>

            </div>

            <div className="project-page-gallery">
               <div style={{backgroundImage:`url(${Interior1})`}} className="project-page-image"></div>
               <div style={{backgroundImage:`url(${Interior2})`}} className="project-page-image"></div>
            </div>

        </motion.div>
    )
}



export default TravelAssistancePage;
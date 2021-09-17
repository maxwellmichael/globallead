
import React from 'react';
import Building1 from '../../images/backgrounds/building.jpg';
import Building2 from '../../images/backgrounds/4.-STRANY-PERSIDSKOGO-ZALIVA-CHastnaya-rezidentsiya-CITADEL-GULF-COUNTRIES-Private-residence-CITADEL.webp';
import {motion} from 'framer-motion'


const ValueAddedServicesPage = ()=>{


    return(
        <motion.div 
        className='project-page-main'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>

            <div className="project-page-content">

                <div className="project-page-title">Value added services</div>

                <div className="project-page-description">
                    <ol>
                        <li>We accompany our student from the Airport to the University.</li>
                        <li>We provide the accommodation facilities to our students till they get a hostel room.</li>
                        <li>
                            We assist you in your hostel registration and allotting you the room.
                        </li>
                        <li>
                            We assist you with the final documentation in the University.
                        </li>
                        <li>
                        We offer 5-10 minutes complimentary call to our students from the University to your parents/ relatives.
                        </li>

                    </ol>
                    We provide you with a local SIM Card from the University.
                    We assist you in getting enrolment in hostel mess.
                    We facilitate you in issuance of your library membership card.
                    We help you in the medical insurance.
                    We help you for the medical check-up in the University at the time of arrival.
                    We provide proper assistance in obtaining the Certificate of Equivalence from the Ministry of Education of the Destination Country.
                    We let you coordinate with University authorities in Monitoring students’ academic progress and behaviour.
                    We provide you with the suitable information and consultation in obtaining a visa for students’ parents to visit their children.
                    We assist you in visa extension if required.
                    We take great care of our students during the entire period of study.
                    We facilitate in providing visa to the parents for a visit (if needed).
                    We assist parents in their smooth travel arrangements.
                    We assist you in getting air tickets during the whole period of study.
                    We assist our students in enrolling for MCI screening test coaching classes in the University.
                    If a student wishes to change the room in hostel, assistance is given, provided a genuine reason given by student.
                    At the time of emergency, complete assistance is provided.

                </div>

            </div>

            <div className="project-page-gallery">
               <div style={{backgroundImage:`url(${Building1})`}} className="project-page-image"></div>
               <div style={{backgroundImage:`url(${Building2})`}} className="project-page-image"></div>
            </div>

        </motion.div>
    )
}

export default ValueAddedServicesPage;
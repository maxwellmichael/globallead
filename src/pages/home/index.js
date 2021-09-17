import React, {useEffect} from 'react';
import {Image, Col, Row, Carousel} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {motion} from 'framer-motion';
import CollegeCard from './sections/collegeCard';
import StudentsImage from '../../images/backgrounds/students.jpg';

import UniversityAdmissionsImage from '../../images/services/university-admissions.jpg';
import CouncellingImage from '../../images/services/councelling.jpg';
import DocumentationImage from '../../images/services/documentation.jpg';
import ServicesImage from '../../images/services/value-added-services.jpg';
import VisaImage from '../../images/services/visa-assistance.jpg';

import RussiaImage from '../../images/places/russia.jpg';
import UkraineImage from '../../images/places/ukraine.jpg';
import PhillippinesImage from '../../images/places/phillippines.jpg';
import KyrgyzstanImage from '../../images/places/kyrgyzstan.png';
import ArmeniaImage from '../../images/places/armenia.jpg';



import image2 from '../../images/backgrounds/lucas-franco-aRTjFXs6HNc-unsplash.jpg';
import mobilebg from '../../images/backgrounds/mobile/slide3.jpg';
import { connect } from 'react-redux';
import { GET_COLLEGES } from '../../redux/colleges/colleges.actions';




import FadeInContainer, {FadeInFromLeft,  FadeInFromBottom, RevealFadeAnimation} from '../../components/utils/fadeInAnimation';

const Home = ({dispatch, colleges, history})=>{
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
    
    useEffect(() =>{ 
        dispatch(GET_COLLEGES());
    },[dispatch])


    return(
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>
            <Helmet>
                <title>Abroad Education Consultants</title>
                <meta name="description" content="Study Abroad" />
            </Helmet>
            <Row style={{width: '100%', height: '100vh', overflow: 'hidden', margin:0, padding:0, position: 'relative'}}>
                <div style={{position: 'absolute', backgroundImage: `url(${isMobile?mobilebg:image2})`, backgroundSize:'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100%', width: '100%', margin: 0, paddingRight: 0, overflow: 'hidden'}}>
                    <Row md={1} style={{width: '100%', height: '100%', marginRight:0, marginLeft:0, padding:0}}>
                        <div style={{color:'#f5ca9f', zIndex: '3', paddingTop: isMobile?'50%':'20%', fontSize: isMobile?'35px':'60px', margin:'0 auto auto auto'}} className="home-title">GLOBAL LEAD</div>
                        <div style={{width: '100%', height: '100%', backgroundImage: 'radial-gradient(circle, hsla(240, 100%, 0%, 0.7) 41%, hsla(0, 0%, 0%, 0.4) 96%)', opacity: 0.6, margin:0}} className="home-overlay"></div>
                    </Row>
                </div>
             </Row>

            <Row md={2} xs={1} style={{margin: '100px 0px 0px 0px', padding: 0}} >
                <Col md={{span: 6, order: 0}} xs={{span: 12, order: 0}} style={{margin: `${isMobile?20:80} 0 0 0`}}>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromLeft}>
                        <div style={{textAlign: 'left', fontSize: isMobile?40:60, paddingLeft: isMobile?'10%':'auto'}} className="home-title">    
                        Are you a Dreamer? Welcome to GLOBAL LEAD.
                        </div>
                   
                        <div style={{textAlign:'left', paddingLeft: isMobile?38.09:18, paddingBottom: isMobile?100:'auto', color:'white'}} className="home-description">
                        At GLOBAL LEAD, we believe in giving in-depth details and information about study pattern and study quality in the top universities abroad. We are best at helping the students with the best courses and universities which are best fitted to their career and which hold the potential of fulfilling their dreams. We provide the best medical admission guidance services and believe in a personalized approach to the medical aspirants. 
                        </div>
                    </FadeInContainer>
                </Col>

                <Col sm={{span:3}} xs={{span: 12, order: 1, offset:0}} style={{height: 500, marginBottom: isMobile?0:'20px', padding:0}}>
                    <Image alt="Students Image" className='home-image' src={StudentsImage} />
                </Col>
            </Row>

            <Row style={{margin:'80px 20px 160px 20px', padding:0}}>
                <FadeInContainer FadeIn={FadeInFromBottom}>
                    <div style={{fontSize:isMobile?'18px':'26px',color:'#f5ca9f',textAlign:isMobile?'justify':'center'}} className="home-description">
                    “STUDYING ABROAD IS THE SINGLE MOST EFFECTIVE WAY OF CHANGING THE WAY WE VIEW THE WORLD”
                    </div>
                </FadeInContainer>
            </Row>
            
            {/*-----------------------Services Start---------------------*/}
            <Row xs={1} style={{margin:'100px 0 40px 0', padding:0}}>
                <RevealFadeAnimation>
                    <div style={{fontSize:isMobile?'40px':'60px', margin:'auto auto 30px auto'}} className="home-title">Our Services</div>
                </RevealFadeAnimation>
                
            </Row>
            <div style={{width: '100%', margin:'0px 0px 80px 0px'}} className="home-line"></div>
            <Row md={3} xs={1} style={{width:'100%', margin:0, padding:0}}>
                
                <Col style={{margin:'auto', padding:'40px 30px 20px 30px'}}>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromBottom}>
                    <div className="home-card">
                        <div style={{backgroundImage:`url(${CouncellingImage})`}} className='card-image'></div>
                        <div className="card-overlay"></div>
                        <div className='card-content'>
                                <div className="card-title">FREE COUNSELLING</div>
                                <button onClick={()=>{history.push('/services/personalizedcouncelling')}} className="card-button">View More</button>
                        </div>
                    </div>
                    </FadeInContainer>
                </Col>

                <Col style={{margin:'auto', padding:'40px 30px 20px 30px'}}>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromBottom}>
                    <div className="home-card">
                        <div style={{backgroundImage:`url(${UniversityAdmissionsImage})`}} className='card-image'></div>
                        <div className="card-overlay"></div>
                        <div className='card-content'>
                                <div className="card-title">UNIVERSITY ADMISSION</div>
                                <button onClick={()=>{history.push('/services/universityadmission')}} className="card-button">View More</button>
                        </div>
                    </div>
                    </FadeInContainer>
                </Col>

                <Col style={{margin:'auto', padding:'40px 30px 20px 30px'}}>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromBottom}>
                    <div className="home-card">
                        <div style={{backgroundImage:`url(${DocumentationImage})`}} className='card-image'></div>
                        <div className="card-overlay"></div>
                        <div className='card-content'>
                                <div className="card-title">UNIVERSITY SELECTION</div>
                                <button onClick={()=>{history.push('/services/countryoruniversityselection')}} className="card-button">View More</button>
                        </div>
                    </div>
                    </FadeInContainer>
                </Col>

                <Col style={{margin:'auto', padding:'40px 30px 20px 30px'}}>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromBottom}>
                    <div className="home-card">
                        <div style={{backgroundImage:`url(${ServicesImage})`}} className='card-image'></div>
                        <div className="card-overlay"></div>
                        <div className='card-content'>
                                <div className="card-title">VALUE ADDED SERVICES</div>
                                <button onClick={()=>{history.push('/services/valueaddedservices')}} className="card-button">View More</button>
                        </div>
                    </div>
                    </FadeInContainer>
                </Col>

                <Col style={{margin:'auto', padding:'40px 30px 20px 30px'}}>
                    <FadeInContainer partialVisibility FadeIn={FadeInFromBottom}>
                    <div className="home-card">
                        <div style={{backgroundImage:`url(${VisaImage})`}} className='card-image'></div>
                        <div className="card-overlay"></div>
                        <div className='card-content'>
                                <div className="card-title">VISA/TRAVEL ASSISTANCE</div>
                                <button onClick={()=>{history.push('/services/travelassistance')}} className="card-button">View More</button>
                        </div>
                    </div>
                    </FadeInContainer>
                </Col>
            </Row>

            <Row xs={1} style={{margin:'200px 0 40px 0', padding:0}}>
                <RevealFadeAnimation>
                    <div style={{fontSize:isMobile?'40px':'60px', margin:'auto'}} className="home-title">COUNTRIES</div>
                </RevealFadeAnimation>
                <div style={{padding:0,margin:'auto',textAlign:'center',fontSize:'18px'}} className="home-description">Choose From A Wide Range Of Countries</div>
            </Row>

            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    style={{height:700}}
                    src={RussiaImage}
                    alt="First slide"
                    />
                    <div className="card-overlay"></div>

                    <Carousel.Caption>
                    <h1>RUSSIA</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    style={{height:700}}
                    src={PhillippinesImage}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>PHILLIPPINES</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    style={{height:700}}
                    src={ArmeniaImage}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>ARMENIA</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    style={{height:700}}
                    src={KyrgyzstanImage}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>KYRGYZSTAN</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    style={{height:700}}
                    src={UkraineImage}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>UKRAINE</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>

            {/*-----------------------Services End---------------------*/}


            {/*------------------------Projects Start------------------- */}
            
            <Row style={{margin:'100px 0 20px 0', padding:0}}>
                <RevealFadeAnimation>
                    <div style={{fontSize:'60px', margin:'auto'}} className="home-title">Top Universities</div>
                </RevealFadeAnimation>
            </Row>
            <Row md={2} xs={1} style={{width:'100%', margin:0, padding:0}}>
                    {colleges.map((college, i)=><Col key={i} style={{marginTop: 60}}>
                                            <FadeInContainer FadeIn={FadeInFromBottom}>
                                                <CollegeCard data={college} />
                                            </FadeInContainer>
                                            </Col>)}
            </Row>
             {/*------------------------Projects End------------------- */}


            <Row style={{overflow: 'hidden', height: '400px', width: '100%', margin:'200px 0 0 0', backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div style={{height: '400px'}} className="home-overlay"></div>
                <Row md={1} xs={1} style={{zIndex: 2, marginRight:0, width: '100%'}}>
                    <Col md={8} style={{marginRight:0, marginTop: '100px'}}>
                        <Row><div style={{textAlign: 'justify', color: '#ba9774', fontSize: isMobile?'28px':'50px', marginBottom:0, paddingLeft: '10%'}} className="home-title-big">Do you need help from Globallead?</div></Row>
                        <Row style={{marginTop: 0}}><div style={{color: 'white', fontSize: '16px', paddingLeft: '10%'}} className="home-description">Speak with us today</div></Row>
                        <Row><button style={{width: '200px', marginLeft: '10%', marginTop: '2%', fontSize: isMobile?16:12}} onClick={()=>{history.push('/contact')}} className="home-button">CONTACT US</button></Row>
                    </Col>
                </Row>
            </Row>

        </motion.div>
    );
}

const mapStateToProps =(state)=>{

    return{
        colleges: state.colleges,
    }
}

export default withRouter(connect(mapStateToProps)(Home));
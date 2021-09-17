import React from 'react';
import Banner from '../images/banners/about-banner.jpg';
import BG1 from '../images/backgrounds/sean-pollock-PhYq704ffdA-unsplash.jpg'; 
import {connect} from 'react-redux';
import FadeInContainer,{FadeInFromRight, FadeInFromLeft, FadeInFromBottom, RevealCountingAnimation, RevealFadeAnimation} from '../components/utils/fadeInAnimation';
import {Container, Row, Col} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import {Helmet} from 'react-helmet';
import {motion} from 'framer-motion';





const AboutPage = (props)=>{
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    return(
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut', duration:0.6, delay:0.5}} 
        exit={{x:'-100vw', opacity:0, transition:{ease:'easeInOut', duration:0.6}}} style={{ padding: 0, backgroundColor: 'black', overflowX: 'hidden', maxWidth:'100vw'}}>
            <Helmet>
                <title>About</title>
                <meta name="description" content="Globallead" />
            </Helmet>
            <Container fluid style={{backgroundImage:`url(${BG1})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100vh', padding: 0, margin:0}}>
                <Row style={{margin:0, padding:0}}><div style={{height:'100vh'}} className="about-overlay"></div></Row>
                <RevealFadeAnimation>
                    <div style={{color:'#f5ca9f',zIndex:3, textAlign:'center',paddingTop: isMobile?'50%':'20%', fontSize: '60px'}} className="about-title">About us</div>
                </RevealFadeAnimation>
            </Container>
            
            <FadeInContainer FadeIn={FadeInFromBottom}>
                <Col style={{marginTop: '100px'}} className="content-main">
                    <Row><div className="about-title">Who we Are</div></Row>
                    <div className="about-line"></div>
                    <Row>
                        <div style={{color: 'white'}} className="about-description">
                        GLOBAL LEAD is a pioneer in educational consultancy services. We help you to achieve your dream of studying abroad, encouraging those who seek access to the world’s profuse educational institutions. We provide End to End Services from Career Counselling to the Admission process. All in all, we help you give shape to your career and dreams.
                        </div>
                    </Row>
                </Col>
            </FadeInContainer>

            
            <Row xs={1} md={2} style={{margin: '10% 0 10% 0', backgroundColor: 'black'}}>
                <Col>
                    <FadeInContainer FadeIn={FadeInFromLeft}>
                        <Container fluid style={{backgroundImage: `url(${Banner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: 500, marginTop: '16px'}}></Container>
                    </FadeInContainer>
                </Col>

                <Col style={{marginTop:'12px'}}>
                    <FadeInContainer FadeIn={FadeInFromRight}>
                        <Row>
                            <div style={{fontSize: '16px', textAlign: 'center', fontWeight: '600'}} className="about-small-title">Our Principles</div>
                            <div className="about-line"></div>
                        </Row>
                    </FadeInContainer>

                    <FadeInContainer FadeIn={FadeInFromBottom}>
                        <Row sm={2} xs={1} style={{marginTop: '7%', marginRight: '12px'}}>
                            <Col style={{paddingRight: 0}} sm={4} xs={12}>
                                <div className="about-small-title">VISION</div>
                                <div className="about-dash"></div>
                            </Col>
    
                            <Col sm={8} xs={12} style={{paddingRight: 0}}><div className="about-small-description">
                                GLOBAL has the vision of turning your Dream into reality and for that we aim at Reaching out to the aspiring students and provide them with the necessary guidance and support to fulfil their dreams.
                                To create awareness about the education opportunities available in technical specialities and MBBS in Abroad.
                                Making Successful Doctors
                            </div></Col>
                        </Row>
                    </FadeInContainer>

                    <FadeInContainer FadeIn={FadeInFromBottom}>
                        <Row sm={2} xs={1} style={{marginTop: '7%', marginRight: '12px'}}>
                            <Col style={{paddingRight: 0}} sm={4} xs={12}>
                                <div className="about-small-title">MISSION</div>
                                <div className="about-dash"></div>
                            </Col>
                            
                            <Col sm={8} xs={12} style={{paddingRight: 0}}><div className="about-small-description">To promote and provide meaningful and quality education to all aspirants at affordable costs in Universities that are recognized by both Indian and International accreditation and registration bodies.</div></Col>
                        </Row>
                    </FadeInContainer>

                    <FadeInContainer FadeIn={FadeInFromBottom}>
                        <Row sm={2} xs={1} style={{marginTop: '7%', marginRight: '12px'}}>
                            <Col style={{paddingRight: 0}} sm={4} xs={12}>
                                <div className="about-small-title">PERFORMANCE</div>
                                <div className="about-dash"></div>
                            </Col>
                            
                            <Col sm={8} xs={12} style={{paddingRight: 0}}><div className="about-small-description">GLOBAL LEAD positions itslf as a guidang force behind the success of every student by providing them with all the guidance and assistance they need to study abroad.</div></Col>
                        </Row>
                    </FadeInContainer>

                    <Row style={{margin:'60px 0 0 0'}}>
                        <div style={{width: '80%'}} className="about-line"></div>
                    </Row>
                    
                </Col>
            </Row>

            <Row xs={1} style={{margin:'300px 0 40px 0', padding:0}}>
                <RevealFadeAnimation>
                    <div style={{fontSize:isMobile?'40px':'60px', margin:'auto auto 30px auto'}} className="home-title">GLOBAL LEAD AT A GLANCE</div>
                </RevealFadeAnimation>
            </Row>
            <div style={{width: '100%', margin:'0px 0px 80px 0px'}} className="home-line"></div>

            <Row md={4} xs={1} style={{paddingBottom: '100px', marginRight: 0}}>

                <Col style={{marginTop: '60px'}}>
                    <Row>
                        <RevealCountingAnimation addSign={"+ YEARS"}>
                            <div style={{color: 'white'}} className="about-small-title">3</div>
                        </RevealCountingAnimation>
                    </Row>
                    <Row><div style={{fontSize: '25px'}} className="about-small-title">EXPERIENCE</div></Row>
                    
                </Col>

                <Col style={{marginTop: '60px'}}>
                    <Row>
                        <RevealCountingAnimation addSign={"%"}>
                            <div style={{color: 'white'}} className="about-small-title">98</div>
                        </RevealCountingAnimation>
                    </Row>
                    <Row><div style={{fontSize: '25px'}} className="about-small-title">ADMISSION RATE</div></Row>
                    
                </Col>


                <Col style={{marginTop: '60px'}}>
                    <Row>
                        <RevealCountingAnimation addSign={'+'}>
                            <div style={{color: 'white'}} className="about-small-title">1000</div>
                        </RevealCountingAnimation>
                    </Row>
                    <Row><div style={{fontSize: '25px'}} className="about-small-title">STUDENTS COUNSELED</div></Row>
                </Col>

                <Col style={{marginTop: '60px'}}>
                    <Row>
                        <RevealCountingAnimation>
                            <div style={{color: 'white'}} className="about-small-title">7</div>
                        </RevealCountingAnimation>
                    </Row>
                    <Row><div style={{fontSize: '25px'}} className="about-small-title">COUNTRIES</div></Row>
                   
                </Col>

                
            </Row>
        
        </motion.div>
    );
}


export default connect()(AboutPage);
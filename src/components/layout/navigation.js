import React, {useState } from 'react';
import {Link} from 'react-router-dom';
import {config, useTransition, animated} from 'react-spring';
import {connect} from 'react-redux';
import Logo from '../../images/globallead_logo.png'





const NewNavigation = (props)=>{

    const [menuToggle, setMenuToggle] = useState(false);
    const ServiceRoutes = [
        {
            path:'/services/personalizedcouncelling',
            name: 'Personalized Counselling'
        },
        {
            path:'/services/countryoruniversityselection',
            name: 'Country/University Selection'
        },
        {
            path:'/services/universityapplication',
            name: 'Application To The Medical Universities'

        },
        {
            path:'/services/universityadmission',
            name: 'University Admission/Confirmation'
        },
        {
            path:'/services/travelassistance',
            name: 'VISA/Travel Assistance'
        },
        {
            path:'/services/valueaddedservices',
            name: 'Value Added Services'
        }

    ];

    const overlayTransition = useTransition(menuToggle, null, {
        from: {opacity: 0, transform: `translateX(-50vw)`},
        enter: {opacity: 1, transform: "translateX(0px)"},
        leave: {opacity: 0, transform: `translateX(-50vw)`},
        config: config.slow,
    })


    return(
        <React.Fragment>
             <nav id="navbar" className="">
                <div className="nav-wrapper">
                <div className="logo">
                <a href="/">
                    <img alt='globallead' src={Logo} className='logo-image' />
                </a>
                </div>

                <ul id="menu">
                    <li><Link to="/">HOME</Link></li>
                    <li>
                        <div className="nav-dropdown">
                            <div className="dropdown-title">Services</div>
                            <div className="dropdown-list">
                                {ServiceRoutes.map((route, i)=><div className="item" key={i}><Link to={route.path}>{route.name}</Link></div>)}
                            </div>
                        </div>
                    </li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
               
               
            </div>
            </nav>

            <div className="menuIcon" onClick={()=>{setMenuToggle(!menuToggle)}}>
                <span className="icon icon-bars"></span>
                <span className="icon icon-bars overlay"></span>
            </div>

            {overlayTransition.map(({item, key, props: style})=>(
                item && <animated.div key={key} style={style} className="overlay-menu">
                        <ul id="menu">
                            <li><Link onClick={()=>setMenuToggle(false)} to="/">HOME</Link></li>
                            <li>
                                <div className="nav-dropdown">
                                    <div className="dropdown-title">Services</div>
                                    <div className="dropdown-list">
                                        {ServiceRoutes.map((route, i)=><div className="item" key={i}><Link onClick={()=>setMenuToggle(false)} to={route.path}>{route.name}</Link></div>)}
                                    </div>
                                </div>
                            </li>
                            <li><Link onClick={()=>setMenuToggle(false)} to="/about">ABOUT</Link></li>
                            <li><Link onClick={()=>setMenuToggle(false)} to="/contact">CONTACT</Link></li>
                            
                        </ul>
                </animated.div>
            ))}

        </React.Fragment>
    )

}


const mapStateToProps=(state)=>{
    return({
        isAuthenticated: state.authentication.user.isAuthenticated,
        backendUrl: state.backendUrl
    })
}

export default connect(mapStateToProps)(NewNavigation);
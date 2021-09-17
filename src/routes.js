import React from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import AdminPage from './pages/admin';
import Home from './pages/home';
import Projects from './pages/projects';
import College from './pages/colleges';
import Project from './pages/projects/project';
import AddProjectForm from './pages/projects/addProjectForm';
import AuthenticationForms from './pages/authentication';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import RoutesWithSubRoutes from './components/utils/RouteWithSubRoutes';
import {AnimatePresence} from 'framer-motion';
import PersonalizedCounsellingPage from './pages/services/councelling';
import UniversitySelectionPage from './pages/services/universitySelection';
import UniversityApplicationPage from './pages/services/universityApplication';
import UniversityAdmissionPage from './pages/services/universityAdmission';
import TravelAssistancePage from './pages/services/travelAssistance';
import ValueAddedServicesPage from './pages/services/valueAddedServices';








const Routes = ()=>{

    const location = useLocation();

    const ServiceRoutes = [
        {
            path:'/services/personalizedcouncelling',
            component: PersonalizedCounsellingPage
        },
        {
            path:'/services/countryoruniversityselection',
            component: UniversitySelectionPage
        },
        {
            path:'/services/universityapplication',
            component: UniversityApplicationPage

        },
        {
            path:'/services/universityadmission',
            component: UniversityAdmissionPage
        },
        {
            path:'/services/travelassistance',
            component: TravelAssistancePage
        },
        {
            path:'/services/valueaddedservices',
            component: ValueAddedServicesPage
        }

    ];

    return(
        <AnimatePresence>
            <Switch location={location} key={location.key}>
                  <Route path="/" exact component={Home} />
                  <Route path="/contact" exact component={ContactPage} />
                  <Route path="/about" exact component={AboutPage} />
                  {/*
                  import ProtectedRoute from './components/authorisation/ProtectedRoutes';
                  <ProtectedRoute path="/productsstore" exact component={Products} />*/}
                  <Route path="/projects" exact component={Projects} />
                  <Route path="/colleges" exact component={College} />
                  <Route path="/project" exact render={props=>(<Project props={props}/>)} />
                  <Route path="/newproject" exact component={AddProjectForm} />
                  <Route path="/userauthenticate" exact render={props=>(<AuthenticationForms props={props}/>)} />
                  <Route path="/admin" exact component={AdminPage} />
                  {ServiceRoutes.map((route, i)=><RoutesWithSubRoutes key={i} {...route} />)}
            </Switch>
        </AnimatePresence>
    )
}

export default Routes;
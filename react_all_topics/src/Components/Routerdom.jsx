import React,{Suspense} from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
//import SingleEmp from './SingleEmp';
//import About from './About';
//import Home from './Home';
import Employee from './Employee';
//import UserForm from '../HandleForm/UserForm';
import data from '../movie-data.json'
const Component = React.lazy(()=>import ('./FormCmp'));
const Home = React.lazy(()=>import ('./Employee'));
const SingleEmp = React.lazy(()=>import ('./SingleEmp'));
const Hooks = React.lazy(()=>import ('../Hooks/ReactHooks'));
const ReactLifeCycle = React.lazy(()=>import ('../reactLifeCycle/reactLifeCycle'));
const HandlingData = React.lazy(()=>import ('../HandlingData/MovieCatalagu'));
const HandlingForm = React.lazy(()=>import ('../HandleForm/UserForm'));
const ErrorHandling = React.lazy(()=>import ('../ErrorBoundary/Count'));
const Redux = React.lazy(()=>import ('../Redux/uniqueTable'));
const ReduxId = React.lazy(()=>import ('../Redux/singleData'));
const ReactEvents = React.lazy(()=>import ('../Events/ReactEvents'));



export default function Header() {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/hooks" >Hooks</Link></li>
            <li><Link to="/component">Component&State&Props</Link></li>
            <li><Link to="/lifecycle">ReactLifeCycle</Link></li>
            <li><Link to="/handlingdata">DataHandling</Link></li>
            <li><Link to="/handlingform">FormHandling</Link></li>
            <li><Link to="/errorhandling">ErrorHandling</Link></li>
            <li><Link to="/redux">Redux</Link></li>
            <li><Link to="/events">ReactEvents</Link></li>
            
        </ul>
        <ErrorBoundary>
        <Suspense fallback={<div>Loading...........</div>}>
        <Routes>
            <Route path='/'  element={<Home />}/>
            <Route path='/hooks'  element={<Hooks />}/>
            <Route path='/component'  element={<Component />}/>
            <Route path='/lifecycle'  element={<ReactLifeCycle />}/>
            <Route path='/employee/:id'  element={<SingleEmp />}/>
            <Route path='/handlingdata'  element={<HandlingData movieData ={data} />}/>
            <Route path='/handlingform'  element={<HandlingForm  />}/>
            <Route path='/errorhandling'  element={<ErrorHandling  />}/>
            <Route path='/redux'  element={<Redux  />}/>
            <Route path='/redux/:id'  element={<ReduxId  />}/>
            <Route path='/events'  element={<ReactEvents  />}/>
        </Routes>
        </Suspense>
        </ErrorBoundary>
    </div>
  )
}

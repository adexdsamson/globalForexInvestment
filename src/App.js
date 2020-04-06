import React, {Suspense, lazy} from 'react';
import './App.css';
import {Router} from '@reach/router';
import Loader from './Landing/components/loader'
import AppRoute from './App/app';
const Application = lazy(() => import('./App/index'))
const Login = lazy(() => import('./App/Container/Login'));
const Profile = lazy(() => import( './App/Container/Profile'));
const SignUp = lazy(() =>  import('./App/Container/SignUp'));
const Home = lazy(() =>  import('./App/Container/Home'));

const Landing = lazy(() => import('./Landing'))

function App() {
  return (
    <Suspense fallback={<Loader />}>
        <Router>
          <Landing path='/' />
          <AppRoute path="app">
            <Login path="/"/>
            <SignUp path="/sign_up" />
            <Application path='/secured'>
              <Profile path='create_profile'/>
              <Home path="home" />
            </Application>
          </AppRoute>
        </Router>
    </Suspense>
  );
}

export default App;

import React, {Suspense, lazy} from 'react';
import Loader from './Landing/components/loader';
import ErrorBoundary from './Landing/components/ErrorBoundaries';
//import AppRoute from './App/app';
// const Application = lazy(() => import('./App/index'))
// const Login = lazy(() => import('./App/Container/Login'));
// const Profile = lazy(() => import( './App/Container/Profile'));
// const SignUp = lazy(() =>  import('./App/Container/SignUp'));
// const Home = lazy(() =>  import('./App/Container/Home'));

const Landing = lazy(() => import('./Landing'))

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        <Landing path='/' />
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;

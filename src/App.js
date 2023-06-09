/*This code is using the lazy function from React to perform code 
splitting and load the Login component lazily only when it's needed. 
This can help improve the performance of the application by reducing 
the amount of initial JavaScript that needs to be loaded.

The fallback prop of the Suspense component is used to specify what
to display while the lazy-loaded component is being loaded. In this 
case, a simple "Loading..." message is being displayed.

The Routes component from react-router-dom is being used to
conditionally render a specific route depending on the URL path.
In this case, the Login component is being rendered when the
URL path matches /login.*/

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/user";
//import { Switch } from 'react-router-dom'
//if login only want to load login bundle
//if signup only want to load signup
//in react can use lazy loading

const Login=lazy(()=>import('./pages/login'))
const SignUp=lazy(()=>import('./pages/sign-up'))
const NotFound=lazy(()=>import('./pages/not-found'))
const Dashboard=lazy(()=>import('./pages/dashboard'))


function App() {
const {user}=useAuthListener()

return (
<UserContext.Provider value={{user}}>
    <Router>
    <Routes>
    <Route path={ROUTES.DASHBOARD} element={
            <Suspense fallback={<>...</>}>
              <Dashboard/>
            </Suspense>}/>

             <Route path={ROUTES.LOGIN} element={
            <Suspense fallback={<>...</>}>
              <Login />
            </Suspense>}/>
    
            <Route path={ROUTES.SIGN_UP} element={
            <Suspense fallback={<>...</>}>
              <SignUp />
            </Suspense>}/>
          <Route path={ROUTES.NOT_FOUND} element={
            <Suspense fallback={<>...</>}>
              <NotFound />
            </Suspense>}/>
    
    
    </Routes>
    </Router>
    
    </UserContext.Provider>
  );
}

export default App;

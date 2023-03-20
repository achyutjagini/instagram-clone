import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase'
import {firebase,FieldValue} from './lib/firebase'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{firebase,FieldValue}}>
    <App />,
    </FirebaseContext.Provider>,
    
    
);

//client side rendered app:react
//database-firebase
//react-loading-skeleton
//tailwind

//folder structure
//src
//components,constants,context,helpers,lib(firebase in here)
//pages
//services(firebase functions in here)
//styles(tailwind's folder(app/tailwind))

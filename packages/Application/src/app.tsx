// import React from 'react';


// import Router from "./router"
// import './App.scss';
// import './App.css';

// import { Provider } from 'react-redux';
// import Configure from "./redux/store"

// const store = Configure()


// export default function App():JSX.Element {

//     return (
//         <Provider store={store}>
//             <Router/>
//         </Provider>
//     )
// }


import * as React from "react";
// import ComponentLibrary from "componentLibrary";
import {Button} from "@my-project/library";

export default function App(): JSX.Element {

    return (
        <div>
            <h1>Hello from Application !</h1>
            <Button>Hello</Button>
        </div>
    )
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./store/store.ts";
import './index.css'
import InjectTailwind from "./InjectTailwind";
import SingIn from './components/pages/SingIn.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Home from './components/pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SingIn/>
  },
  {
    path: "/App",
    element: <App/>
  },
  {
    path: "/Home",
    element: <Home/>
  }
 
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <InjectTailwind>
          <RouterProvider router={router}/>
      </InjectTailwind>
    </Provider>
  </React.StrictMode>,
)

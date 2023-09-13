import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./store/store.ts";
import './index.css'
import InjectTailwind from "./InjectTailwind";
import SingIn from './components/pages/SingIn.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <InjectTailwind>
        <SingIn />
      </InjectTailwind>
    </Provider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import InjectTailwind from "./InjectTailwind";
import SingIn from './components/pages/SingIn.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InjectTailwind>
      <SingIn />
    </InjectTailwind>
  </React.StrictMode>,
)

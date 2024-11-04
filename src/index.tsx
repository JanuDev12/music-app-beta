import { createRoot } from 'react-dom/client';
import { Main } from './main';
import './index.css'
import { StrictMode } from 'react';


const container = document.querySelector('#root');

if(container) {
   const root = createRoot(container);
   root.render(
     <StrictMode>
       <Main />
     </StrictMode>
   );
} else{
    console.error("Could not find root element")
}

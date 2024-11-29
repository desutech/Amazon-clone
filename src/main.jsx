// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './components/DataProvider/DataProvider.jsx'
import { initialState, reducer } from './Utillty/reducer.js'



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}> {/* Corrected */}
      <App />
    </DataProvider>
  </React.StrictMode>
);






// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <DataProvider reducer={reducer} intialState={intialState}>
//       <App />
//     </DataProvider>
//   </StrictMode>
// )

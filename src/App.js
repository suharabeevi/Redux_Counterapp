
import './App.css';
import React from 'react';
import DataFetching from './datafetching';
import Form from './components/form';
 export const userContext = React.createContext()
 export const channelcontext = React.createContext()
  function App() {
 
  return (
    <div className="App">
<Form/>
{/* <userContext.Provider value={'suhara'}>
  <channelcontext.Provider value={'code evelution'}>
  
  <DataFetching/>
  
  </channelcontext.Provider>
  
</userContext.Provider> */}
    </div>
  );
}

export default App;

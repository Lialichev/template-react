import React from 'react';
import AppContext from "./AppContext";
import Provider from 'react-redux/es/components/Provider';

function App() {
    return (
        <AppContext.Provider
            value={{}}
        >
          <Provider store={{}}>

          </Provider>
        </AppContext.Provider>
    );
}

export default App;

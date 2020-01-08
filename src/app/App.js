import React from 'react';
import AppContext from "./AppContext";
import Provider from 'react-redux/es/components/Provider';
import history from '../@history';
import { Router } from 'react-router-dom';
import routes from "./configs/routes";
import store from './store';
import Authorization from "./components/Authorization";
import Auth from "./auth/Auth";
import Layout from "./components/Layout";

function App() {
    return (
        <AppContext.Provider
            value={{routes}}
        >
            <Provider store={store}>
                <Auth>
                    <Router history={history}>
                        <Authorization>
                            <Layout />
                        </Authorization>
                    </Router>
                </Auth>
            </Provider>
        </AppContext.Provider>
    );
}

export default App;

import React, {useContext} from 'react';
import {renderRoutes} from 'react-router-config'
import AppContext from '../../AppContext';
function Layout1(props)
{

    const appContext = useContext(AppContext);
    const {routes} = appContext;

    return (
        <>
            {renderRoutes(routes)}
            {props.children}
        </>
    );
}

export default Layout1;

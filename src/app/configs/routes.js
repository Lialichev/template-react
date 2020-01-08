import React from 'react';
import {Redirect} from 'react-router-dom';
import Utils from '../../@theme/utils';
import { ExampleConfig } from '../pages/example/ExampleConfig';

const routeConfigs = [
    ExampleConfig
];

const routes = [
    ...Utils.generateRoutesFromConfigs(routeConfigs),
    {
        path: '/',
        component: () => <Redirect to="/example"/>
    }
];

export default routes;
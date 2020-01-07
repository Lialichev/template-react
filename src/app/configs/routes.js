import React from 'react';
import {Redirect} from 'react-router-dom';
import FuseUtils from '../../@theme/utils';
import { ExampleConfig } from '../pages/example/ExampleConfig';

const routeConfigs = [
    ExampleConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path: '/',
        component: () => <Redirect to="/example"/>
    }
];

export default routes;
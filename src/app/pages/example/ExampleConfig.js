import Example from './Example';
// import { authRoles } from "../../auth";

export const ExampleConfig = {
    // auth: authRoles.admin,
    routes: [
        {
            path: '/example',
            component: Example,
        }
    ]
};
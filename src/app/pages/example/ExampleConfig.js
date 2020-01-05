import Example from './Example';
import { authRoles } from "../../auth";

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth: authRoles.admin,
    routes: [
        {
            path: '/example',
            component: Example,
        }
    ]
};
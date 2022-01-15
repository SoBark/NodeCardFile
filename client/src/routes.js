import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import CardFile from "./pages/CardFile";
import CasePage from "./pages/CasePage";
import { ADMIN_ROUTE, CARDFILE_ROUTE, CASE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }

]

export const publicRoutes = [
    {
        path: CARDFILE_ROUTE,
        Component: CardFile
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CASE_ROUTE + '/:id',
        Component: CasePage
    },

]


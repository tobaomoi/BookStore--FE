import CartPage from "../Template/CartPage"
import HomePage from "../Template/HomePage"
import AllBookPage from "../Template/AllBookPage"
import SingleBook from "../Template/SingleBookPage"
const Routes = [
    {
        path:"/homepage",
        exact: true,
        component: HomePage,
    },
    {
        path:"/cart",
        exact:true,
        component:CartPage,
    },
    {
        path:"/allBook/",
        exact:true,
        component:AllBookPage
    },
    {
        path:"/book/:bookId",
        exact:true,
        component:SingleBook
    }
]

export default Routes;
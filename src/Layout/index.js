import Navbar from "../Components/Navbar/navbar"
import Footer from "../Components/Footer"
import { Route } from "react-router-dom"
const LayoutBase = (props) => {
    return(
        <>
            <Navbar routeProps={props.routeProps} />
            {props.children}
            <Footer />
        </>
    ) 
}
export default function Layout({Component, ...props})
{
    return(
        <Route 
            {...props}
            render={(routerProps) => {
                return (
                    <LayoutBase routerProps={routerProps}>
                        <Component {...routerProps} />
                    </LayoutBase>
                );
            }}
        />
    );
}
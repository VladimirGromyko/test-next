import Header from "./Header";
import Footer from "./Footer";
import {FC, PropsWithChildren} from "react";

type layoutProps = {
    children: PropsWithChildren
}
const Layout: FC<layoutProps> = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default Layout

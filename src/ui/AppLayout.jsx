// Third-party imports.
import { Outlet, useNavigation } from "react-router-dom";

// Local imports. 
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

const AppLayout = () => {

    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    console.log(navigation.state)

    return (
        <div className = 'layout'>
            { isLoading && <Loader /> }

            <Header />

            <main>
                <h1>Content</h1>
                <Outlet />
            </main>

            <CartOverview />
        </div>
    );
}

export default AppLayout;
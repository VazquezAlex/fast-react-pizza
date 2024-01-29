// Third-party imports.
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {

    return (
        <header>
            <Link to = '/'>Fast React Pizza Co.</Link>

            <SearchOrder />

            <p>Alejandro</p>
        </header>
    );
}

export default Header;

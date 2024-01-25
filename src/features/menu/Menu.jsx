// Third-party imports.
import { useLoaderData } from "react-router-dom";

// Local imports.
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

/**
 * Menu Component.
 * 
 * @returns { JSX.Element } - Menu.
 */
function Menu() {

    const menu = useLoaderData();

    console.log(menu);

    return (
        <ul>
            { menu.map(pizza => (
                <MenuItem key = { pizza.id } pizza = { pizza } />
            )) }
        </ul>
    );
}

/**
 * Function to fetch the data using React Router DOM.
 */
// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
    return await getMenu();
}

export default Menu;

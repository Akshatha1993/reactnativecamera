import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Invoice from '../pages/Invoice';

// import themes from '../styles/theme.style';

const Route = createStackNavigator(
{
	Home:Home,
	Products:Products,
	Cart:Cart,
	Invoice:Invoice
},
{
    initialRouteName:"Home"
},
);
const RouterConfig = createAppContainer(Route)
export default RouterConfig;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductDetailsScreen } from '../scenes/products/product-details.component';
import { ProductListScreen } from '../scenes/products/product-list.component';
import { ShoppingCartScreen } from '../scenes/products/shopping-cart.component';

const Stack = createStackNavigator();

export const ProductsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='ProductList' component={ProductListScreen}/>
    <Stack.Screen name='ProductDetails' component={ProductDetailsScreen}/>
    <Stack.Screen name='ShoppingCart' component={ShoppingCartScreen}/>
  </Stack.Navigator>
);

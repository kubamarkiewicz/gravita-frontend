import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductPage from './pages/ProductPage/ProductPage';

export const routes = [
	{ 
	 	path: '', 
	 	component: ProductListPage
	},
	{ 
	 	path: '/product/update/:id', 
	 	component: ProductPage
	},
	{ 
	 	path: '/product/add', 
	 	component: ProductPage
	},
	{
		path: '*',
		redirect: '/'
	}
];
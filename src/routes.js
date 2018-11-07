import ProductListPage from './pages/ProductListPage/ProductListPage.vue';
import ProductPage from './pages/ProductPage/ProductPage.vue';

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
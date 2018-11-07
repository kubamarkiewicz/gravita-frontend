import PageHeader from '../../components/PageHeader.vue';

export default {
  data() {
    return {
      products: []
    }
  },
  created() {

    const url = 'http://localhost:8888/2018/_new%20projects/gravita/prueba_programacion/www/backend/api/products';

    this.$http.get( url )
      .then( response => {
        this.products = response.data;
      } )
      .catch( error => {
        console.log( error );
      } );
  },
  components: {
    PageHeader
  }
}
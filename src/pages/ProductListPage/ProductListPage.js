import PageHeader from '../../components/PageHeader.vue';

export default {
  data() {
    return {
      products: []
    }
  },
  created() {

    const url = 'http://markiewicz.click/test/gravita/backend/api/products';

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
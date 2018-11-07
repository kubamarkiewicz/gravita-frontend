export default {

  data() {
    return {
      product: {},
      saved: false,
      isUpdatePage: !!this.$route.params.id
    }
  },

  created() {
    if (this.isUpdatePage) {
      this.loadProductData();
    }    
  },

  methods: {

    loadProductData() {
      const url = 'http://localhost:8888/2018/_new%20projects/gravita/prueba_programacion/www/backend/api/products/' + this.$route.params.id;

      this.$http.get( url )
        .then( response => {
          this.product = response.data;
        } )
        .catch( error => {
          console.log( error );
        } );
    },

    createProduct() {
      const url = 'http://localhost:8888/2018/_new%20projects/gravita/prueba_programacion/www/backend/api/products';

      this.$http.post( url, this.product )
        .then( response => {
          this.saved = true;
          // redirect to update page
          this.isUpdatePage = true;
          this.$router.push('/product/update/' + response.data);
        } )
        .catch( error => {} );
    },

    updateProduct() {
      const url = 'http://localhost:8888/2018/_new%20projects/gravita/prueba_programacion/www/backend/api/products/' + this.$route.params.id;

      this.$http.put( url, this.product )
        .then( response => {
          this.saved = true;
        } )
        .catch( error => {} );
    },

    onSubmit() {
      this.saved = false;

      // save product data
      if (this.isUpdatePage) {
        this.updateProduct();
      }
      else {
        this.createProduct();
      }
    },

    onDeleteClick() {
      if (confirm('¿Borrar producto?')) {
        const url = 'http://localhost:8888/2018/_new%20projects/gravita/prueba_programacion/www/backend/api/products/' + this.$route.params.id;

        this.$http.delete( url, this.product )
          .then( response => {
            this.$router.push('/');
          } )
          .catch( error => {} );
      }
    }

  }
}
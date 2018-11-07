<template>
  <div>
    
    <page-header 
      :pageTitle="'Productos'"
      :breadcrumbs="[
        {label: 'Productos', active: true}
      ]"
      ></page-header>


    <div class="container">

      <div>
        <router-link to="/product/add" class="btn btn-primary"><strong>+</strong> Crear</router-link>
      </div>  

      <table class="table table-striped table-hover mt-4 mb-4">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">STOCK</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>
              <router-link :to="'/product/update/' + product.id">{{ product.name }}</router-link>
            </td>
            <td>{{ product.stock }}</td>
          </tr>
        </tbody>
      </table>

    </div><!-- /.container -->
    

  </div>
</template>

<script src="./ProductListPage.js"></script>
<style src="./ProductListPage.css" scoped lang="scss"></style>
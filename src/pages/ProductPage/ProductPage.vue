<template>
  <div>
    
    <page-header 
      :pageTitle="pageTitle"
      :breadcrumbs="[
        {label: 'Productos', link: '/'},
        {label: pageTitle, active: true}
      ]"
      ></page-header>
      

    <div class="container">

      <div class="row">
        <form class="col-6 offset-3" @submit.prevent="onSubmit">

          <div class="row mb-3">
            <div class="col">
              <button type="submit" class="btn btn-primary"><strong>✓</strong> Guardar</button>
            </div>
            <div class="col text-right" v-if="isUpdatePage">
              <button type="button" class="btn btn-light" @click="onDeleteClick"><strong>✕</strong> Eliminar</button>
            </div>
          </div>

          <div class="form-group">
            <label>Nombre *</label>
            <input 
              type="text" 
              class="form-control" 
              v-model="product.name"
              @input="$v.product.name.$touch()"
              :class="{ 'is-invalid': $v.product.name.$error }"
              >
              <div class="invalid-feedback">
                Nombre es obligatorio
              </div>
          </div>

          <div class="form-group">
            <label>Descripción</label>
            <textarea class="form-control" rows="3" v-model.lazy="product.description"></textarea>
          </div>

          <div class="form-group">
            <label>Stock *</label>
            <input 
              type="number" 
              class="form-control" 
              v-model="product.stock"
              @input="$v.product.stock.$touch()"
              :class="{ 'is-invalid': $v.product.stock.$error }"
            >
            <div class="invalid-feedback">
              Stack es obligatorio
            </div>
          </div>

        </form>
      </div><!-- /.row -->

      <div class="alert alert-success" :class="{show: saved}" role="alert">
        <strong>✓</strong> Producto guardado
      </div>

    </div><!-- /.container -->

  </div>
</template>

<script src="./ProductPage.js"></script>
<style src="./ProductPage.css" scoped lang="scss"></style>
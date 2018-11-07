<template>
  <div>
    
    <page-header></page-header>

    <div class="container">

      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Productos</router-link>
          </li>
          <li class="breadcrumb-item active">{{ isUpdatePage ? 'Editar' : 'Crear' }} Producto</li>
        </ol>
      </nav>

      <h2 class="mb-3">{{ isUpdatePage ? 'Editar' : 'Crear' }} Producto</h2>

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
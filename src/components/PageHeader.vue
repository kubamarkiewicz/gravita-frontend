<template>
  <div class="container">
    
    <nav v-if="breadcrumbs">
      <ol class="breadcrumb">
        <li v-for="item in breadcrumbs" class="breadcrumb-item" :class="{active: item.active}">
          <router-link v-if="item.link" :to="item.link">{{ item.label }}</router-link>
          <span v-else>{{ item.label }}</span>
        </li>
      </ol>
    </nav>

    <h2 class="mb-3">{{ pageTitle }}</h2>

  </div>
</template>


<script>
export default {
  props: [
    'pageTitle', 
    'breadcrumbs'
  ]
}
</script>


<style scoped lang="scss">

  .container {
    margin-top:30px;
  }

</style>
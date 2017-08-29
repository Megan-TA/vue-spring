<template>

      <div class="content">
        <v-header></v-header>
        <v-banner></v-banner>
      </div>

      


</template>

<script>
  import Header from 'components/header/header.vue'
  import Banner from 'components/banner/banner.vue'

  export default {

      props: [],

      data () {
          return {

          }
      },

      components: {

          'v-header': Header,
          'v-banner': Banner

      }

  }

</script>


<style lang="stylus">

 

</style>

<template>
<b-container class="h-100">
  <b-row class="h-100">
    <b-col align-self="start">
      <menu-header></menu-header>
    </b-col>
    <b-col align-self="stretch">
      <menu-navigation></menu-navigation>
    </b-col>
    <b-col align-self="end">
      <menu-footer></menu-footer>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import MenuHeader from './MenuHeader.vue'
import MenuNavigation from './MenuNavigation.vue'
import MenuFooter from './MenuFooter.vue'

export default {
  name: 'MenuContainer',
  components: {
    MenuNavigation,
    MenuHeader,
    MenuFooter
  }
}
</script>

<style scoped>

.menu-container{
  padding: .5rem;
  display: flex;
  flex-direction: column;
}
</style>

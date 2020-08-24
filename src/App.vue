<template>
  <div id="app">
    <div class="navigation-wrapper">
      <menu-container></menu-container>
    </div>
    <div class="notebook">
      <section class="notebook-header">
        <h5> Discover what sets me apart:</h5>
      </section>
      <section class="notebook-content">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
import MenuContainer from './components/MenuContainer.vue'

export default {
  name: 'App',
  components: {
    MenuContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  padding: 1rem 7rem .5rem 3rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}

.navigation-wrapper{
  background-color: #797a7e;
  width: 300px;
  height: 100%;
  margin-right: 1rem;
  border-radius: 5px;
}

.notebook{
  width: 100%;
  height: 100%;
}

.notebook-header{
  text-align: left;
}

.notebook-content{
  background-color: #f7f2e7;
  height: calc(100% - 1.75rem);
  overflow: auto;
}

a{
  color: #d8d3cd;
}
</style>

<template>
  <div id="app" class="d-flex flex-row">
    <aside class="navigation-wrapper">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </aside>
    <div class="notebook h-100">
      <section class="notebook-header">
        <h5>What seperates me</h5>
      </section>
      <section class="notebook-content">
        <router-view/>
      </section>
    </div>
  </div>
</template>

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
}

.navigation-wrapper{
  background-color: #797a7e;
  width: 300px;
  height: 100%;
  margin-right: 1rem;;
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
  /* calculation: container - (header + natural div padding which must be .25) */
  height: calc(100% - 1.75rem);
  overflow: auto;
  /* potentially add shawdows here for stacked paper looking affect */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #d8d3cd;
}

#nav a.router-link-exact-active {
  color: #e0ece4;
}
</style>

<template>
<div class="custom">
  <nav class="navigation-menu">
    <router-link to="/" class="nav-link">Overview</router-link>
    <h6 class="navigation-seperator">Dive Deeper Into:</h6>
    <router-link to="/my-coding" class="nav-link">My Coding</router-link>
    <router-link to="/my-career" class="nav-link">My Career</router-link>
    <router-link to="/my-details" class="nav-link">My Details</router-link>
  </nav>
</div>
</template>

<script>
export default {
  name: 'MenuNavigation'
}
</script>

<style scoped>
.navigation-menu {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
}

.navigation-seperator{
  text-align: right;
  font-style: italic;
}

.nav-link {
  text-align: left;
  color: #d8d3cd;
  font-weight: lighter;
  text-align: right;
}

.nav-link:hover {
  font-weight: bold;
  color: #0275d8;
}

.router-link-exact-active {
  color: #e0ece4;
  font-weight: bold;
  color: #0275d8;
}
</style>

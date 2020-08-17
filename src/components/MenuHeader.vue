<template>
<div class="header-card">
    <h6 class="name">Nate Gervenak</h6>
    <h6 class="sub-title">A Developing Developer</h6>
    <h6 class="phone">(406) 595-7520</h6>
</div>
</template>

<script>
export default {
  name: 'MenuHeader'
}
</script>

<style scoped>
.header-card{
  padding: .5rem;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
}

.header-card h6{
  text-align: left;
}

.name{
  font-weight: bold;
  font-size: large;
}

.sub-title{
  font-style: italic;
}
</style>

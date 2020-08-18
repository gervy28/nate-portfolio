<template>
<div class="footer-card">
  <b-container class="">
    <b-row>
      <i class="fas fa-map-marker-alt"></i><span class="small ml-2">Baxter, MN</span>
    </b-row>
    <b-row class="mt-1">
      <i class="fas fa-phone"></i><span class="small ml-1">(406) 595-7520</span>
    </b-row>
    <b-row class="mt-1">
      <i class="far fa-envelope"></i><span class="small ml-1">gervenaknate@gmail.com</span>
    </b-row>
  </b-container>
  <!-- External Links Section -->
  <b-container class="my-2">
    <b-row>
      <b-col>
        <a target="_blank" href="https://github.com/gervy28">
          <i class="fab fa-github"></i>
        </a>
      </b-col>
      <b-col>
        <a target="_blank" href="https://www.linkedin.com/in/nategervenak/">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </b-col>
      <b-col>
        <a target="_blank" href="https://stackoverflow.com/users/7381790/nate-gervenak">
          <i class="fab fa-stack-overflow"></i>
        </a>
      </b-col>
    </b-row>
  </b-container>

</div>
</template>

<script>
export default {
  name: 'MenuFooter'
}
</script>

<style scoped>
a{
  color: #d8d3cd;
}
a:hover{
}
</style>

<template>
<div class='p-2 w-50 m-1'>
  <h5 class="font-weight-bold">{{ projectInfo.title }}</h5>
  <img class="img-fluid rounded p-1" :src="require('@/assets/' + projectInfo.images[0].name + '')">
  <p class="font-italic font-weight-bold text-sm">{{ projectInfo.subtitle }}</p>
  <b-card-text>{{ projectInfo.description }}</b-card-text>
  <b-button v-b-modal="'modal-' + projectInfo.id">More Info</b-button>
  <project-modal v-bind:projectInfo = 'projectInfo'></project-modal>
</div>
</template>
<script>
import ProjectModal from './ProjectModal.vue'

export default {
  name: 'ProjectCard',
  components: {
    ProjectModal
  },
  props: {
    projectInfo: {
      type: Object
    }
  }
}
</script>

<style scoped>
div {
  background-color: #d8d3cd;
  border-radius: 1rem;
}

img{
  max-height: 325px;
}
</style>

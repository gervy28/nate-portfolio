<template>
<div>
  <!-- Needs to accept from the Data a Modal Name -->
  <b-modal :id="'modal-' + projectInfo.id" :title="projectInfo.title">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Loop Through Career Images -->
      <b-carousel-slide
        v-for="image in projectInfo.images"
        :key="image.name"
        :img-src="require('@/assets/' + image.name + '')"
      ></b-carousel-slide>
    </b-carousel>
    <p class="font-italic font-weight-bold text-sm">{{ projectInfo.subtitle }}</p>
    <b-card-text>{{ projectInfo.description }}</b-card-text>
    <ul>
      <li v-for="accomplishment in projectInfo.accomplishments"
        :key="accomplishment.id">
        <span class="font-weight-bold">{{ accomplishment.bolded }}</span> {{ accomplishment.details }}</li>
    </ul>
  </b-modal>
</div>
</template>

<script>
export default {
  name: 'ProjectModal',
  props: {
    projectInfo: {
      type: Object
    }
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
</style>

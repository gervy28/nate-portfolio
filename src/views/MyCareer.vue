<template>
  <div>
    <h1 class="text-left m-2">My Career</h1>
    <!-- should create an array of cards to loop over, or array of sections -->
    <div class="px-5">
      <!-- pass through career card object #1 -->
      <skills-card v-bind:cardInfo = 'firstCard'>
      </skills-card>
      <div class="d-flex">
        <project-card v-for='(project, index) in projects'
          :key = 'project.id'
          :index = 'index'
          :projectInfo="project"></project-card>
      </div>
    </div>
    <hr class="m-2">
    <div class="px-5">
      <skills-card v-bind:cardInfo = 'secondCard'>
      </skills-card>
    </div>
  </div>
</template>

<script>
import SkillsCard from '../components/SkillsCard.vue'
import ProjectCard from '../components/ProjectCard.vue'
import CareerData from '../data/CareerData.json'

export default {
  name: 'MyCareer',
  components: {
    SkillsCard,
    ProjectCard
  },
  data () {
    return {
      firstCard: CareerData.SkillCards.FirstCard,
      secondCard: CareerData.SkillCards.SecondCard,
      projects: CareerData.Projects
    }
  }
}
</script>

<style scoped>

</style>

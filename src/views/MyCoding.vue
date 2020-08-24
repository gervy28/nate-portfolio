<template>
  <div>
    <h1 class="text-left m-2">My Coding</h1>
    <!-- should create an array of cards to loop over, or array of sections -->
    <div class="px-5">
      <!-- pass through career card object #1 -->
      <skills-card v-bind:cardInfo = 'firstCard'>
      </skills-card>
      <hr class="m-2">
      <skills-card v-bind:cardInfo = 'secondCard'>
      </skills-card>
      <hr class="m-2">
      <div class="d-flex">
        <project-card v-for='(project, index) in projects'
          :key = 'project.id'
          :index = 'index'
          :projectInfo="project"></project-card>
      </div>
      <hr class="m-2">
      <skills-card v-bind:cardInfo = 'thirdCard'>
      </skills-card>
      <skills-card v-bind:cardInfo = 'fourthCard'>
      </skills-card>
    </div>
  </div>
</template>

<script>
import SkillsCard from '../components/SkillsCard.vue'
import ProjectCard from '../components/ProjectCard.vue'
import CodingData from '../data/CodingData.json'

export default {
  name: 'MyCareer',
  components: {
    SkillsCard,
    ProjectCard
  },
  data () {
    return {
      firstCard: CodingData.SkillCards.FirstCard,
      secondCard: CodingData.SkillCards.SecondCard,
      thirdCard: CodingData.SkillCards.ThirdCard,
      fourthCard: CodingData.SkillCards.FourthCard,
      projects: CodingData.Projects
    }
  }
}
</script>

<style scoped>

</style>

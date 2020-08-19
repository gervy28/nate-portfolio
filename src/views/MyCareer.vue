<template>
  <div>
    <h1 class="text-left m-2">My Career</h1>
    <!-- pass through career card object #1 -->
    <skills-card v-bind:cardInfo = 'primaryCard'>
    </skills-card>
  </div>
</template>

<script>
import SkillsCard from '../components/SkillsCard.vue'
import CareerData from '../data/CareerData.json'

export default {
  name: 'MenuContainer',
  components: {
    SkillsCard
  },
  data () {
    return {
      primaryCard: CareerData.SkillCards.PrimaryCard,
      secondaryCard: CareerData.SkillCards.SecondaryCard
    }
  }
}
</script>

<style scoped>

</style>

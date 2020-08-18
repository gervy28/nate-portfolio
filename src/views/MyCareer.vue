<template>
  <div>
    <h1 class="text-left m-2">My Career</h1>
    <skills-card></skills-card>
  </div>
</template>

<script>
import SkillsCard from '../components/SkillsCard.vue'

export default {
  name: 'MenuContainer',
  components: {
    SkillsCard
  }
}
</script>

<style scoped>

</style>

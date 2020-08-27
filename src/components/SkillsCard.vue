<template>
<div>
  <b-card
    :title="cardInfo.title"
    tag="article"
    class="mb-2"
  >
    <b-card-text>
      {{ cardInfo.description }}
    </b-card-text>
    <h5>
      {{ cardInfo.subtitle }}
    </h5>
    <!-- I can store these and allow a slot, then place content -->
    <b-container style="max-width: 90%;">
      <b-row style="margin: auto;">
        <skill-box
          v-for="(skill, index) in cardInfo.skills"
          v-bind:skill="skill"
          v-bind:key="index"
        >
          {{ skill }}
        </skill-box>
      </b-row>
    </b-container>
  </b-card>
</div>
</template>

<script>
import SkillBox from './SkillBox.vue'

export default {
  name: 'SkillsCard',
  components: {
    SkillBox
  },
  props: {
    cardInfo: {
      type: Object
    }
  }
}
</script>

<style scoped>
</style>

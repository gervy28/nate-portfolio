<template>
<div>
  <b-card
    title="Needs to be Prop"
    tag="article"
    style="max-width: 90%; margin: 5px auto;"
    class="mb-2"
  >
    <b-card-text>
      Make this into a Prop Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>
    <h5>Make this into named slot</h5>
    <!-- I can store these and allow a slot, then place content -->
    <b-container style="max-width: 90%;">
      <b-row style="margin: auto;">
        <skill-box>All of these need to be props</skill-box>
        <skill-box>Each one added as a slot</skill-box>
        <skill-box>Teamwork</skill-box>
        <skill-box>Leadership</skill-box>
        <skill-box>Brand Strategy</skill-box>
        <skill-box>Business Strategy</skill-box>
        <skill-box>B2B Sales</skill-box>
        <skill-box>Content Strategy</skill-box>
        <skill-box>B2C Sales</skill-box>
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
  }
}
</script>

<style scoped>
</style>

<template>
<div class="about px-5">
  <h1>Details</h1>
  <map-card v-bind:addressInfo="locationInfo"></map-card>
</div>
</template>

<script>
import MapCard from '../components/MapCard.vue'
import PersonalData from '../data/PersonalData.json'

export default {
  name: 'MyDetails',
  components: {
    MapCard
  },
  data () {
    return {
      locationInfo: PersonalData.ContactInfo.location
    }
  }
}
</script>

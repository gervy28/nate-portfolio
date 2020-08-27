<template>
<div>
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col md="6">
        <div style="min-height: 200px;"
          class="h-100 w-100 google-map"
          ref="googleMap"
          id="googleMap">
        </div>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <h4>Where I am Now:</h4>
          <h6>Baxter, MN 56425</h6>
          <b-card-text>
            more more more more more more more more momre
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>

</div>
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  name: 'MapCard',
  props: {
    addressInfo: Object
  },
  data () {
    return {
      coordinates: {
        lat: this.addressInfo.coordinates.lat,
        lng: this.addressInfo.coordinates.long
      },
      apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
      map: null,
      google: null,
      marker: null
    }
  },
  async mounted () {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  },
  methods: {
    initializeMap () {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, {
        zoom: 5,
        center: this.coordinates
      })
      this.marker = new this.google.maps.Marker({
        position: this.coordinates,
        map: this.map
      })
    }
  }
}
</script>

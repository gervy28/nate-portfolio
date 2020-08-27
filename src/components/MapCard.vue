<template>
<div>
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col md="12" lg="6">
        <div style="min-height: 200px;"
          class="h-100 w-100 google-map"
          ref="googleMap"
          id="googleMap">
        </div>
      </b-col>
      <b-col lg="6" md="6">
        <div class="m-1 p-4 col-12">
          <h4 class="text-left">Get in Touch:</h4>
          <b-container>
            <b-row>
              <i class="fas fa-map-marker-alt"></i><span class="small ml-2">Baxter, MN</span>
            </b-row>
            <b-row class="mt-1">
              <i class="fas fa-phone"></i><span class="small ml-1">(406) 595-7520</span>
            </b-row>
            <b-row class="mt-1">
              <i class="far fa-envelope"></i><span class="small ml-1">gervenaknate@gmail.com</span>
            </b-row>
          </b-container>
        </div>
        <b-row lg="6">
          <b-col>
            <a target="_blank" href="https://github.com/gervy28">
              <i class="fab fa-github"></i>
            </a>
          </b-col>
          <b-col>
            <a target="_blank" href="https://www.linkedin.com/in/nategervenak/">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </b-col>
          <b-col>
            <a target="_blank" href="https://stackoverflow.com/users/7381790/nate-gervenak">
              <i class="fab fa-stack-overflow"></i>
            </a>
          </b-col>
        </b-row>
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

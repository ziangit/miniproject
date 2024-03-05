<template>
    <div ref="googleMap" class="map-container"></div>
  </template>
  
  <script>
  /* global google */ 
  import { watch, onMounted, ref } from 'vue';

  export default {
    props: ['selectedState'],
    setup(props) {
        const googleMap = ref(null);
        const map = ref(null);

        // Initialize the map
        onMounted(() => {
            if (typeof google !== 'undefined') {
                map.value = new google.maps.Map(googleMap.value, { 
                zoom: 4,
                center: { lat: 37.0902, lng: -95.7129 }, // Default center of us
            });
            }
        });

        // update the map when search bar changes
        watch(() => props.selectedState, (newValue) => {
            if (newValue && map.value) {
                // Use lat and lng to locate
                const center = { lat: newValue.lat, lng: newValue.lng };
                map.value.setCenter(center);
                // zooming in for highlight
                map.value.setZoom(6);
            }
        });

        return { googleMap,map };
    }
    };
  </script>
  
  <style>
  .map-container {
    height: 400px; 
    width: 100%; 
  }
  </style>
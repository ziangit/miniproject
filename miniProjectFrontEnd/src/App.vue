<template>
  <div>
    <div class="search-container">
      <StateSearch @state-selected="onStateSelected" />
    </div>
    <div class="map-container">
      <GoogleMap :selectedState="selectedState" />
    </div>
  </div>
</template>

<script>
import StateSearch from './components/StateSearch.vue';
import GoogleMap from './components/GoogleMap.vue';


import { ref } from 'vue';

export default {
  components: {
    StateSearch,
    GoogleMap,
  },
  setup() {
    const selectedState = ref(null);

    const onStateSelected = (item) => {
      selectedState.value = item; // Update selectedState with the item emitted from StateSearch
      console.log("Selected state:", item); 
    };

    return {
      selectedState,
      onStateSelected
    };
  }
};
</script>

<style>
.search-container {
  margin-bottom: 20px; 
}

.map-container {
  width: 100%; 
  height: 400px; 
  z-index: 1; 
}

.autocomplete {
  position: relative; 
  z-index: 2; 
}

.autocomplete ul {
  position: absolute;
  left: 0;
  right: 0;
  background-color: white; 
  box-shadow: 0 4px 6px rgba(0,0,0,0.1); 
  border: 1px solid #ccc; 
  border-top: none; 
}
</style>
<template>
    <div class="autocomplete">
        <!-- element ui for search bar-->
        <el-input
            v-model="search"
            style="width: 400px"
            @input="fetchStates"
            placeholder="Enter state name"
        />

        <ul v-if="suggestions.length">
            <li v-for="(item, index) in suggestions" :key="index" @click="selectState(item)" v-html="highlightMatch(item.name, search)">
                
            </li>
        </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useQuery } from '@vue/apollo-composable';
  import { GET_STATES_QUERY } from '../graphql/queries';
  
  export default {
    name: 'StateSearch',
    setup(props, { emit }) {
      const search = ref('');
      const suggestions = ref([]);

      // eslint-disable-next-line no-unused-vars
      const { loading, error, refetch } = useQuery(GET_STATES_QUERY);
  
      const fetchStates = async () => {
        console.log("fetchStates called with:", search.value);
        if (search.value.length > 0) { // Fetch states if the input length is greater than 0
          const { data } = await refetch({ name: search.value });
          if (data && data.states) {
            suggestions.value = data.states;
          }
        } else {
          suggestions.value = [];
        }
      };
  
      const selectState = (item) => {
        search.value = item.name; // Update search value
        console.log("Updated search value:", search.value);
        suggestions.value = []; // Clear suggestions
        emit('state-selected', { 
            name: item.name, 
            lat: item.lat, 
            lng: item.lng 
        }); // Emit the selected item with lat and lng
    };


      // Bold the matching letters
      const highlightMatch = (text, search) => {
        const escapedSearch = search.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape regex special characters
        const regex = new RegExp(`(${escapedSearch})`, 'gi'); // 'g' for global match, 'i' for case-insensitive
        return text.replace(regex, '<strong>$1</strong>');
    };
  
      return {
        search,
        suggestions,
        fetchStates,
        selectState,
        highlightMatch
      };
    },
  };
  </script>
  
  <style scoped>
  .autocomplete {
    position: relative;
    display: inline-block;
  }
  .autocomplete input {
    padding: 10px;
    width: 300px;
  }
  .autocomplete ul {
    list-style-type: none; /* Remove bullet point */
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
    position: absolute;
    left: 0;
    right: 0;
    width: 200px;
    background-color: white; 
    box-shadow: 0 4px 6px rgba(0,0,0,0.1); 
    border: 1px solid #ccc; 
    border-top: none; 
}

  .autocomplete li {
    padding: 10px;
    cursor: pointer;
    background-color: white;
  }
  .autocomplete li:hover {
    background-color: #f2f2f2;
  }
  </style>
  
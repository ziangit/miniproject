import { createApp, provide, h } from 'vue';

// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';

// Set up ApolloClient
const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql', 
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

// use element plus
app.use(ElementPlus)
app.mount('#app');

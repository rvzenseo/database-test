<template>
  <div id="app">
    <app-header></app-header>
    <!-- other content -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/appHeader.vue';
import AppFooter from './components/appFooter.vue';

export default {
  components: {
    appHeader,
    appFooter
  }
}
</script>

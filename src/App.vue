<template>
  <div id="app">
    <page-top @set-mobile-menu="changeState"/>
    <sidebar :sidebarActive="active" />
    <div class="backdrop" :class="{'backdrop-active': active}" ></div>
    <router-view></router-view>
    <footer-component/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageTopComponent from "@/components/page-top/page-top.vue";
import SidebarComponent from "@/components/sidebar/sidebar.vue";
import FooterComponent from "@/components/footer/footer.vue";

@Component({
  components: {
    'page-top': PageTopComponent,
    'sidebar': SidebarComponent,
    'footer-component': FooterComponent
  },
})
export default class App extends Vue {
  active: boolean = false;
  changeState(state: boolean) {
    this.active = state;
  }
}
</script>

<style lang="scss">
@import "assets/styles/styles.scss";
html, body {
  margin: 0;
}
#app {
  font-family: $font-family-sans-serif;
}

.backdrop {
  background: $black;
  opacity: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  transition: opacity .3s ease-in-out;

}

.backdrop-active {
  opacity: .4 !important;
  z-index: 1;
}

</style>

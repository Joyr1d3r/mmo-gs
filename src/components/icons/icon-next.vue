<template>
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" :style="styling">
    <rect width="52" height="52" rx="26" fill="#F8F9F8"/>
    <path d="M29 20L23 26L29 32" stroke="#202226" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
@Component({
  name: 'icon-next'
})
export default class IconNextComponent extends Vue {
  @Prop({type: String}) type!: 'left' | 'right';
  styling: string | null = null
  created() {
    if (this.type === "right") {
      this.styling = 'transform: rotate(180deg)'
    }
  }
}
</script>

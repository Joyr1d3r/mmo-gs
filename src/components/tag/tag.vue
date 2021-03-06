<template>
  <div class="btn-sm tag tag-btn text-center" :style="styling">
      <slot></slot>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
@Component({
  name: 'tag'
})
export default class TagComponent extends Vue {
  @Prop({type: String}) type!: 'discount' | 'news' | 'coupon';
  styling: string = 'news';
  created() {
    switch (this.type) {
      case 'discount':
        this.styling = 'background: #FFF500; color: #333333;'
        break;
      case 'news':
        this.styling = 'background: #FFFFFF; color: #333333;'
        break;
      case 'coupon':
        this.styling = 'background: #90CC61; color: #fff;'
        break;
      default:
        this.styling = 'background: #90CC61; color: #fff;'
    }
  }
}
</script>
<style>
.tag-btn {
  padding: 4px 8px;
  max-height: 24px;
}
</style>

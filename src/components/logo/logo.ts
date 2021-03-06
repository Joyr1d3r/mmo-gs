import { Component, Prop, Vue} from "vue-property-decorator";

@Component({
    name: 'logo'
})

export default class LogoComponent extends Vue {
    @Prop({type: Number}) width!: number;
    @Prop({type: Number}) height!: number;
    @Prop({type: String}) theme!: 'light' | 'dark';

    src: string = require('@/assets/images/logo/logo-light.svg')

    created() {
        if (this.theme === "dark") {
            this.src = require('@/assets/images/logo/logo-dark.svg')
        }
    }
}

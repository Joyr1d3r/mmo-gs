import {Component, Vue} from "vue-property-decorator";
import LogoComponent from "@/components/logo/logo.vue";

@Component({
    name: 'who-we-are',
    components: {
        'logo': LogoComponent
    }
})
export default class WhoWeAreComponent extends Vue {
    cardBg: string = require('@/assets/images/who-we-are/card-bg.svg')
}

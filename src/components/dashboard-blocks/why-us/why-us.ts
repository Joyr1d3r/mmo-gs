import {Component, Vue} from "vue-property-decorator";
import {Advantages} from "@/configs/advantages";

@Component({
    name: 'why-us'
})

export default class WhyUsComponent extends Vue {
    advantages: any[] = Advantages;
}

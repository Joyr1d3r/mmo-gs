import {Component, Prop, Vue} from 'vue-property-decorator'
import IconChevronComponent from "@/components/icons/icon-chevron.vue";
@Component({
    name: "pagination",
    components: {
        'icon-chevron': IconChevronComponent
    }
})
export default class PaginationComponent extends Vue {
    @Prop({type: Object}) item!: any;
}

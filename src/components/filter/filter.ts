import {Component, Prop, Vue} from 'vue-property-decorator'
@Component({
    name: "filter-component"
})
export default class FilterComponent extends Vue {
    @Prop({type: Array}) options!: any[];

    selected: any = this.options[0].value;
}

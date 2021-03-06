import {Component, Prop, Vue} from "vue-property-decorator";

@Component({
    name: 'services-card'
})

export default class ServicesCardComponent extends Vue {
    @Prop({type: Object}) item!: any;
}

import {Component, Prop, Vue} from 'vue-property-decorator'
@Component({
    name: "post-card"
})
export default class PostCardComponent extends Vue {
    @Prop({type: Object}) item!: any;
}

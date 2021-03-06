import {Component, Prop, Emit, Vue} from 'vue-property-decorator';

@Component({
    name: 'btn-menu'
})

export default class BtnMenuComponent extends Vue {
    @Prop() active!: boolean;

    @Emit() toggle() {
        return !this.active;
    }
}

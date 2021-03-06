import { Component, Vue, Prop } from "vue-property-decorator";
import IconMoreComponent from "@/components/icons/icon-more.vue";
import IconDownComponent from "@/components/icons/icon-down.vue";

@Component({
    name: 'profile-dropdown',
    components: {
        'icon-more': IconMoreComponent,
        'icon-down': IconDownComponent
    }
})

export default class ProfileDropdownComponent extends Vue {
    @Prop({type: String}) icon!: 'icon-more' | 'icon-down';
    @Prop({type: String}) type!: 'dropdown' | 'collapse'
    user: any = {
        firstName: 'Elena',
        secondName: 'Petrova',
        avatar: ''
    }
    actions: any[] = [
        {
            name: 'Action',
            path: '/'
        },
        {
            name: 'Action',
            path: '/'
        },
        {
            name: 'Action',
            path: '/'
        }
    ]
}

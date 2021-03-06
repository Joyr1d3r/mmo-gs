import {Component, Prop, Vue} from 'vue-property-decorator'
import IconDiscordFilledComponent from "@/components/icons/icon-discord-filled.vue";
import IconSkypeFilledComponent from "@/components/icons/icon-skype-filled.vue";
import IconMailFilledComponent from "@/components/icons/icon-mail-filled.vue";
import IconTrustpilotFilledComponent from "@/components/icons/icon-trustpilot-filled.vue";
import {Contacts} from "@/configs/contacts";

@Component({
    name: 'contacts',
    components: {
        'icon-discord': IconDiscordFilledComponent,
        'icon-skype': IconSkypeFilledComponent,
        'icon-mail': IconMailFilledComponent,
        'icon-trustpilot': IconTrustpilotFilledComponent
    }
})

export default class ContactsComponent extends Vue {
    @Prop({type: String}) linkClass!: any;
    @Prop({type: String}) iconClass!: any;
    reviewsNumber: number = 321;
    contacts: any[] = Contacts.slice(0,3);
}

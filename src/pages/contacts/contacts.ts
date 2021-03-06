import {Component, Vue} from 'vue-property-decorator';
import {Contacts} from "@/configs/contacts";
import ContactUsComponent from "@/components/contact-us/contact-us.vue";

@Component({
    name: 'contacts-page',
    components: {
        'contact-us': ContactUsComponent
    }
})

export default class ContactsPage extends Vue {
    contacts: any[] = Contacts;
}

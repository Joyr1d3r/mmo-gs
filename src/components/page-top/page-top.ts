import {Component, Emit, Vue, Watch} from 'vue-property-decorator';
import ContactsComponent from "@/components/contacts/contacts.vue";
import IconMoreComponent from "@/components/icons/icon-more.vue";
import LogoComponent from "@/components/logo/logo.vue";
import BtnMenuComponent from "@/components/btn-menu/btn-menu.vue";
import ProfileDropdownComponent from "@/components/profile-dropdown/profile-dropdown.vue";

@Component({
    name: 'page-top',
    components: {
        'contacts': ContactsComponent,
        'icon-more': IconMoreComponent,
        'logo': LogoComponent,
        'btn-menu': BtnMenuComponent,
        'profile-dropdown': ProfileDropdownComponent,
    },
})
export default class PageTopComponent extends Vue {
    shownMobileMenu: boolean = false;

    @Watch('$route') onChangeRoute() {
        this.setMobileMenu(false);
    }

    @Emit() setMobileMenu(state: boolean) {
        this.shownMobileMenu = state;
        return state;
    }
}

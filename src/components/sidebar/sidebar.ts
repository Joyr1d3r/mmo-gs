import {Component, Vue, Prop} from 'vue-property-decorator';
import IconDownComponent from "@/components/icons/icon-down.vue";
import ProfileDropdownComponent from "@/components/profile-dropdown/profile-dropdown.vue";
import SearchInputComponent from "@/components/search-input/search-input.vue";
import IconCartComponent from "@/components/icons/icon-cart.vue";
import CartAmountFilter from "@/filters/cart-amount";
import {IMenu, Menu} from "@/configs/menu";


@Component({
    name: 'sidebar',
    components: {
        'icon-down': IconDownComponent,
        'profile-dropdown': ProfileDropdownComponent,
        'search-input': SearchInputComponent,
        'icon-cart': IconCartComponent,
    },
    filters: {
        'cartAmountFilter': CartAmountFilter
    }
})

export default class SidebarComponent extends Vue {
    @Prop({type: Boolean}) sidebarActive!: boolean;
    cartAmount: number = 4;
    menu: IMenu[] = Menu
}

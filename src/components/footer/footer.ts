import {Component, Vue} from "vue-property-decorator";
import LogoComponent from "@/components/logo/logo.vue";
import ContactsComponent from "@/components/contacts/contacts.vue";
import {IMenu, Menu} from "@/configs/menu";
import IconInstaFilledComponent from "@/components/icons/icon-insta-filled.vue";
import IconFacebookFilledComponent from "@/components/icons/icon-facebook-filled.vue";
import IconTwitterFilledComponent from "@/components/icons/icon-twitter-filled.vue";
import BannersComponent from "@/components/banners/banners.vue";
import BannerTrustpilotComponent from "@/components/banners/banner-trustpilot.vue";
import BannerBizrateComponent from "@/components/banners/banner-bizrate.vue";

@Component({
    name: 'footer-component',
    components: {
        'logo': LogoComponent,
        'contacts': ContactsComponent,
        'icon-insta': IconInstaFilledComponent,
        'icon-facebook': IconFacebookFilledComponent,
        'icon-twitter': IconTwitterFilledComponent,
        'banners': BannersComponent,
        'banner-trustpilot': BannerTrustpilotComponent,
        'banner-bizrate': BannerBizrateComponent
    }
})

export default class FooterComponent extends Vue {
    information: any[] = [
        {
            name: 'F.A.Q.',
            path: '/'
        },
        {
            name: 'Testimonials',
            path: '/'
        },
        {
            name: 'Privacy Policy',
            path: '/'
        },
        {
            name: 'Refund Policy',
            path: '/'
        },
        {
            name: 'Terms of Service',
            path: '/'
        },
        {
            name: 'Discounts and Coupons',
            path: '/'
        },
    ];
    navigation: IMenu[] = Menu.slice(0, -1);
    social: any[] = [
        {
            name: 'Facebook',
            icon: 'icon-facebook',
            path: '/'
        },
        {
            name: 'Twitter',
            icon: 'icon-twitter',
            path: '/'
        },
        {
            name: 'Instagram',
            icon: 'icon-insta',
            path: '/'
        }
    ]



}

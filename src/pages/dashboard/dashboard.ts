import {Component, Vue} from 'vue-property-decorator';
import TagComponent from "@/components/tag/tag.vue";
import OurServicesComponent from "@/components/dashboard-blocks/our-services/our-services.vue";
import WhoWeAreComponent from "@/components/dashboard-blocks/who-we-are/who-we-are.vue";
import WhyUsComponent from "@/components/dashboard-blocks/why-us/why-us.vue";
import BlogComponent from "@/components/dashboard-blocks/blog/blog.vue";

@Component({
    name: 'dashboard',
    components: {
        'tag': TagComponent,
        'our-services': OurServicesComponent,
        'who-we-are': WhoWeAreComponent,
        'why-us': WhyUsComponent,
        'blog': BlogComponent
    }
})

export default class DashboardPage extends Vue {
    information: any[] = [
        {
            title: 'Shadowlands Pre-order 50-60, November 23',
            desc: 'Normal and Slower Speed leveling packages starting within few hours after launch, Extra Speed leveling package starting directly right after launch and more...',
            category: 'pre-order info',
            tag: 'news',
            img: require('@/assets/images/dashboard/card-bg.png'),
            active: true
        },
        {
            title: 'Black Friday Week!',
            sub: '15% OFF Everything Coupon',
            desc: '',
            category: '',
            tag: 'discount',
            img: require('@/assets/images/dashboard/card-bg.png')
        },
    ];

    lead: any = this.information[0];

}

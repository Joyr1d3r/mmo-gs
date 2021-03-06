import {Component, Vue} from 'vue-property-decorator'
import {Services} from "@/configs/services";
import IconDownComponent from "@/components/icons/icon-down.vue";
import ServicesCardComponent from "@/components/services-card/services-card.vue";



@Component({
    name: 'services-page',
    components: {
        'icon-down': IconDownComponent,
        'services-card': ServicesCardComponent
    },
    data() {
        return {
            services: []
        }
    },
})

export default class ServicesPage extends Vue {
    created(){
       this.$data.services = Services[this.$route.params.name];
    }
}

import {Component,Vue} from "vue-property-decorator";
import {ServicesInServers} from "@/configs/servers";
import ServicesCard from "@/components/services-card/services-card.vue";

@Component({
    name: 'our-services',
    components: {ServicesCard},
})

export default class OurServicesComponent extends Vue {
    selected: number = 0;
    servers: any[] = ServicesInServers;
    services: any[] = [];
    activeItem: number = 0;
    created() {
        this.passData(this.servers[0].services, 0);
    }

    passData(items: any[], idx: any) {
        this.activeItem = idx;
        this.services = items;
    }
}

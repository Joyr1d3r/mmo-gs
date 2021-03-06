import {Component, Vue} from 'vue-property-decorator'
import {Servers} from "@/configs/servers";

@Component({
    name: 'servers-page',
})

export default class ServersPage extends Vue {
    servers: any[] = Servers;
}

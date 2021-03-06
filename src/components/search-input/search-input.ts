import {Component, Vue} from 'vue-property-decorator';
import IconSearchComponent from "@/components/icons/icon-search.vue";

@Component({
    name: 'search-input',
    components: {
        'icon-search': IconSearchComponent
    }
})

export default class SearchInputComponent extends Vue {}

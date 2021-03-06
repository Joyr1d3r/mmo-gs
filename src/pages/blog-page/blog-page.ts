import {Component, Vue} from "vue-property-decorator";
import {Posts} from "@/configs/blog";
import PostCardComponent from "@/components/post-card/post-card.vue";
import FilterComponent from "@/components/filter/filter.vue";
import PaginationComponent from "@/components/pagination/pagination.vue";

@Component({
    name: 'blog-page',
    components: {
        'post-card': PostCardComponent,
        'filter-component': FilterComponent,
        'pagination': PaginationComponent
    }
})

export default class BlogPage extends Vue {
    posts: any[] = Posts;
    options: any[] = [
        {
            value: 'all',
            text: 'All'
        },
        {
            value: 'some',
            text: 'Some'
        },
        {
            value: 'no',
            text: 'No'
        }
    ]

}

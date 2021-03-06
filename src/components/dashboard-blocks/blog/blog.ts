import {Component, Vue} from "vue-property-decorator";
import {Posts} from "@/configs/blog";
import IconNextComponent from "@/components/icons/icon-next.vue";
import PostCardComponent from "@/components/post-card/post-card.vue";

@Component({
    name: 'blog',
    components: {
        'icon-next': IconNextComponent,
        'post-card': PostCardComponent
    }

})

export default class BlogComponent extends Vue {
    posts: any[] = Posts;
}

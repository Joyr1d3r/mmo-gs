import ServersPage from "@/pages/servers/servers.vue";
import ServicesPage from "@/pages/services/services.vue";
import ContactsPage from "@/pages/contacts/contacts.vue";
import DashboardPage from "@/pages/dashboard/dashboard.vue";
import BlogPage from "@/pages/blog-page/blog-page.vue";

export const Routes: any[] = [
    { path: '/', component: DashboardPage},
    { path: '/servers', component: ServersPage, props: true},
    { path: '/servers/:name', component: ServicesPage, props: true},
    { path: '/contacts', component: ContactsPage},
    { path: '/blog', component: BlogPage}
]

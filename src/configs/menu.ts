export interface IMenu {
    name: string,
    path: string,
    options?: IMenu[]
}

export const Menu: IMenu[] = [
    {
        name: 'Servers',
        path: '/servers',
        options: []
    },
    {
        name: 'WOW Classic',
        path: '/'
    },
    {
        name: 'Information',
        path: '/',
        options: [
            {
                name: 'Service Info',
                path: '/'
            },
            {
                name: 'Testimonials',
                path: '/'
            },
            {
                name: 'F.A.Q.',
                path: '/'
            },
            {
                name: 'Discounts and Coupons',
                path: '/'
            },
        ]
    },
    {
        name: 'Work with us',
        path: '/',
        options: []
    },
    {
        name: 'Blog',
        path: '/blog'
    },
    {
        name: 'Contacts',
        path: '/contacts'
    }
]

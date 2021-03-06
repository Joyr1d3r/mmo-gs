import {Services} from "@/configs/services";

export const Servers: any[] = [
    {
        name: '',
        optionNames: ['WoW Classics', 'WoW Shadowlands'],
        options: [
            {
                name: 'WoW Classics',
                pathname: 'wow-classics',
                img: require('@/assets/images/servers/bg/wow-classics.png'),
                logo: require('@/assets/images/servers/logos/wow-classics.svg'),
                services: Services['wow-classics']
            },
            {
                name: 'WoW Shadowlands',
                pathname: 'wow-shadowlands',
                img: require('@/assets/images/servers/bg/wow-shadowlands.png'),
                logo: require('@/assets/images/servers/logos/wow-shadowlands.svg'),
                services: Services['wow-shadowlands']
            }
        ]
    },
    {
        name: 'Vanilla 1.12.1',
        options: [
            {
                name: 'Kronos',
                pathname: 'kronos',
                img: require('@/assets/images/servers/bg/kronos.png'),
                logo: require('@/assets/images/servers/logos/kronos.svg')
            },
            {
                name: 'Nighthaven',
                pathname: 'nighthaven',
                img: require('@/assets/images/servers/bg/nighthaven.png'),
                logo: require('@/assets/images/servers/logos/nighthaven.svg')
            },
            {
                name: 'Vanilla Plus',
                pathname: 'vanilla-plus',
                img: require('@/assets/images/servers/bg/vanilla-plus.png'),
                logo: require('@/assets/images/servers/logos/vanilla-plus.svg')
            }
        ]
    },
    {
        name: 'The burning crusade 2.4.3',
        options: [
            {
                name: 'Stormrage',
                pathname: 'stormrage',
                img: require('@/assets/images/servers/bg/stormrage.png'),
                logo: require('@/assets/images/servers/logos/stormrage.svg')
            },
            {
                name: 'Atlantiss',
                pathname: 'atlantiss',
                img: require('@/assets/images/servers/bg/atlantiss.png'),
                logo: require('@/assets/images/servers/logos/atlantiss.svg')
            },
            {
                name: 'Endless',
                pathname: 'endless',
                img: require('@/assets/images/servers/bg/endless.png'),
                logo: require('@/assets/images/servers/logos/endless.svg')
            },
            {
                name: "Light's vengeance",
                pathname: 'lights-vengeance',
                img: require('@/assets/images/servers/bg/vengeance.png'),
                logo: require('@/assets/images/servers/logos/vengeance.svg')
            },

        ]
    },
    {
        name: 'wrath of the lich king 3.35',
        options: [
            {
                name: 'Warmane 3.3.5',
                pathname: 'warmane',
                img: require('@/assets/images/servers/bg/warmane.png'),
                logo: require('@/assets/images/servers/logos/warmane.svg')
            },
            {
                name: 'Frosthold',
                pathname: 'frosthold',
                img: require('@/assets/images/servers/bg/frosthold.png'),
                logo: require('@/assets/images/servers/logos/frosthold.svg')
            },
            {
                name: 'TauriWoW / Crystalsong',
                pathname: 'tauriwow',
                img: require('@/assets/images/servers/bg/crystalsong.png'),
                logo: require('@/assets/images/servers/logos/crystalsong.svg')
            },
        ]
    },
    {
        name: 'cataclysm 4.3.4',
        options: [
            {
                name: 'Apollo',
                pathname: 'apollo',
                img: require('@/assets/images/servers/bg/apollo.png'),
                logo: require('@/assets/images/servers/logos/apollo.svg')
            }
        ]
    }
]

export const ServicesInServers: any = [
    {
        text: 'WoW Classics',
        value: 0,
        services: Services['wow-classics']
    },
    {
        text: 'WoW Shadowlands',
        value: 1,
        services: Services['wow-shadowlands']
    },
    {
        text: 'Kronos',
        value: 2,
        services: []
    },
    {
        text: 'Nighthaven',
        value: 3,
        services: []
    },
    {
        text: 'Vanilla Plus',
        value: 4,
        services: []
    },
    {
        text: 'Stormrage',
        value: 5,
        services: []
    },
    {
        text: 'Atlantiss',
        value: 6,
        services: []
    },
    {
        text: 'Endless',
        value: 7,
        services: []
    },
    {
        text: "Light's vengeance",
        value: 8,
        services: []
    },
]



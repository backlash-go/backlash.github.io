module.exports = {
    // title: 'Hello VuePress',
    // description: 'Just playing around',
    themeConfig: {
        logo: '/sun.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '运维',
                items: [
                    { text: 'Chinese', link: '/language/chinese/11' },
                    { text: 'Japanese', link: '/language/japanese/11' }
                ]
            },
            { text: 'Guide', link: '/guide/' },
            { text: 'foo', link: '/foo/' },
            { text: 'bar', link: '/bar/' },
        ],
        sidebar: [

            '/bar/one',
            ['/bar/two', '文章2'],
            ['/bar/three', '文章3']
        ],
        sidebarDepth: 1,



    }
}
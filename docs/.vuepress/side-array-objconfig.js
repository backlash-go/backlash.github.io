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
            {
                title: 'Group 1',   // 必要的
                path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/bar/one',
                    '/bar/two',

                ]
            },
            {
                title: 'Group 2',
                collapsable: true, // 可选的, 默认值是 true,

                children: [
                    ['/foo/four','task1'],
                    '/foo/three',
                ],
                sidebarDepth: 1,
                // initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ]


    }
}
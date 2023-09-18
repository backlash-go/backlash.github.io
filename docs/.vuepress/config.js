const importedObject = require('./test');

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
            { text: 'cool', link: '/cool/' },
        ],
        sidebar:{
            '/bar/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two' ,  /* /foo/two.html */
                'three'   /* /foo/two.html */
            ],

            '/foo/': [
                '',      /* /bar/ */
                'three', /* /bar/three.html */
                'four'   /* /bar/four.html */
            ],

            '/cool/': [
                'five', /* /bar/three.html */
                'six'   /* /bar/four.html */
            ],

            // fallback
            // '/': [
            //     '',        /* / */
            //     'contact', /* /contact.html */
            //     'about'    /* /about.html */
            // ]
        }
    }
}
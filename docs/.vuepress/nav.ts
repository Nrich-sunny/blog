export default [
    { text: '首页', link: '/' },
    { 
        text: '开发', 
        items: [
            { text: 'Java', link: '/java/' },
            { text: 'Golang', link: '/go/' },
        ],
    },
    {
        text: 'AI',
        items: [
            { text: '深度学习', link: '/deep-learning/' },  //目录页的link
        ],
    },
    {
        text: '基础',
        items: [
            { text: 'Git', link: '/git/' }, 
            { text: 'Linux', link: '/linux/' }, 
        ],
    },
    {
        text: '中间件',
        items: [
            { text: 'Redis', link: '/redis/' }
        ],
    },
    {
        text: '网络',
        items: [
            { text: '路由劫持', link: '/route-hijack/' }, 
        ],
    }
    
]
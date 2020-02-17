Nova.booting((Vue, router, store) => {
    router.addRoutes([
        {
            name: 'novapassport',
            path: '/novapassport',
            component: require('./components/Tool'),
        },
    ])
})

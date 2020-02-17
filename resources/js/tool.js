try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

window.Vue = require('vue');

Nova.booting((Vue, router, store) => {
    router.addRoutes([
        {
            name: 'novapassport',
            path: '/novapassport',
            component: require('./components/Tool'),
        },
    ])
})

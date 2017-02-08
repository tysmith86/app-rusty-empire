routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state({
      name: 'home',
      url: '/',
      component: 'home'
    })
    .state({
      name: 'admins',
      url: '/admins',
      component: 'admins'
    })
    .state({
      name: 'events',
      url: '/events',
      component: 'events'
    })
    .state({
      name: 'faq',
      url: '/faq',
      component: 'faq'
    });

  $urlRouterProvider.otherwise('/');
}
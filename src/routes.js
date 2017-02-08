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
    });

  $urlRouterProvider.otherwise('/');
}
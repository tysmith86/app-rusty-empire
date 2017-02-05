import angular from 'angular';
import uiRouter from 'angular-ui-router';
import components from './components';
import services from './services';
// import routes from './routes';
import './scss/main.scss';

const dev = 'http://localhost:3000/api';
const app = angular.module('rustyEmpire', [
  components,
  services,
  uiRouter
]);

app.config(routes);
app.value('apiUrl', dev);

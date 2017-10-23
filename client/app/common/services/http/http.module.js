import angular from 'angular';
import httpInterceptor from './http.interceptor';
import notification from 'angular-ui-notification';
import 'angular-ui-notification/dist/angular-ui-notification.min.css';

let httpInterceptorModule = angular.module('app.http', [notification])

    .service('HttpInterceptor', httpInterceptor)

    .name;

export default httpInterceptorModule;
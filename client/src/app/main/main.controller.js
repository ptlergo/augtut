export class MainController {
  constructor ($http) {
    'ngInject';

     this.$http = $http;

  }

  postMessage() {

    //implemment CORS to send access to NODE server
    this.$http.post('http://localhost:5000/api/message',{msg: 'hello'});
  }
}

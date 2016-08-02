export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
    this.getMessages();

  }

  //display message
  getMessages() {
    this.$http.get('http://localhost:5000/api/message').then((result) => {
      console.log(result);
    });


  }

  postMessage() {
    //implemment CORS to send access to NODE server
    this.$http.post('http://localhost:5000/api/message',{msg: this.message});
  }
}

export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
    this.getMessages();

  }

  //display message
  getMessages() {
    // save this for the promise as the callback will be used
    const vm = this;
    this.$http.get('http://localhost:5000/api/message').then((result) => {
      vm.messages = result.data;
    });


  }

  postMessage() {
    //implemment CORS to send access to NODE server
    this.$http.post('http://localhost:5000/api/message',{msg: this.message});
  }
}

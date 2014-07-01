;(function(exports) {

// var origin = window.location.origin || (
//   window.location.protocol + '//' + window.location.host);

// Iframe'd host.html knows the origin of the parent window. Use that.

// var templates = {
//   'gameface': '<div class="modal gameface">Show me your game face!</div>'
// };

var authenticated = false;

// (1) Create an iframe that lives on the Galaxy origin. This allows us to
// commmunicate safely with the Galaxy API. All API calls are translated to
// `postMessage` calls to the iframe, which are then executed via by
// the communication iframe's `include.js`.

var ifr = document.createElement('iframe');
ifr.src = '/communication_iframe/';
ifr.style.display = 'none';
document.body.appendChild(ifr);

// function send(data) {
//   // TODO: Make this point at the Galaxy API origin.
//   loaded.then(function() {
//     ifr.contentWindow.postMessage(data, '*');
//   });
// }

exports.authenticate = function authenticate() {

  // if (authenticated) {
  //   return resolve();
  // }
  // send({require: 'auth'});
  // return reject();
};

// var auth_def = Deferred();

// function requireAuth(func) {
//   return function () {
//     if (!authenticated) {
//       send({require: 'auth'});
//       var self = this;
//       var args = arguments;
//       auth_def.then(function () {
//         func.apply(self, args);
//       });
//       return;
//     }
//     return func.apply(this, arguments);
//   };
// }

})(navigator.game || (navigator.game = {}));

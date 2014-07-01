(function () {
  // Force HTTPS.
  if ((!window.location.port || window.location.port === '80') &&
      location.protocol !== 'https:') {
    window.location.protocol = 'https:';
  }

  var origin = (window.location.origin ||
    window.location.protocol + '//' + window.location.host);

  var templates = {
    'gameface': '<div class="modal gameface">Show me your game face!</div>'
  };

  var thisScript = document.currentScript || document.getElementById('server-js');
  var settings = {
    host: thisScript.dataset.host
  };

  function connect() {
    var socket = io(settings.host, {
      transports: ['websocket'],
    });

    // var socket = io.connect(settings.host, {
    //     uri: settings.host,
    //     path: '/',
    //     transports: ['websocket']
    //   });
      console.log('[websocket] Client has connected to server:', socket.io.uri);

  // // Emit ready event.
  // // socket.emit('ready', prompt('What is your name?'))
  // socket.emit('ready', 'cvan');

  // // Listen for get-feelings event.
  // socket.on('get-feelings', function () {
  //   socket.emit('send-feelings', prompt('How do you feel?'));
  // })

  // // Listen for session event.
  // socket.on('session', function(data) {
  //   message = 'Hey ' + data.name + '!\n\n'
  //   message += 'Server says you feel '+ data.feelings + '\n'
  //   message += 'I know these things because sessions work!\n\n'
  //   message += 'Also, you joined ' + data.loginDate + '\n'
  //   alert(message)
  // });

socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });


      // Emit ready event.
      //socket.emit('ready', prompt('What is your name?'));
  //     socket.emit('ready', 'fart');
  // // socket.emit('ready', prompt('What is your name?'))

  // // Listen for get-feelings event.
  // socket.on('get-feelings', function () {
  //     socket.emit('send-feelings', prompt('How do you feel?'));
  // });

  // // Listen for session event.
  // socket.on('session', function(data) {
  //     message = 'Hey ' + data.name + '!\n\n'
  //     message += 'Server says you feel '+ data.feelings + '\n'
  //     message += 'I know these things because sessions work!\n\n'
  //     message += 'Also, you joined ' + data.loginDate + '\n'
  //     alert(message)
  // });

// // Emit ready event.
// socket.emit('ready');

// // Listen for the talk event.
// socket.on('talk', function(data) {
//     alert(data.message)
// })


      //console.log(io.transports[client.id].name);
      //console.log(client.request.socketIOTransport);
    //});
    // socket.on('news', function (data) {
    //   console.log(data);
    //   socket.emit('my other event', {my: 'data'});
    // });

    // Connect to WebSocket server.
    loaded();
  }

  var isLoaded = false;
  function loaded() {
    if (isLoaded) {
      return;
    }
    isLoaded = true;
    console.log('Galaxy ready!');
    window.top.postMessage('loaded', origin);
  }

  connect();

})();

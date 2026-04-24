const eventEmitter = require('events');
const customEmitter = new eventEmitter();

customEmitter.on('request', ()=>{
  console.log('Data received')
});

customEmitter.emit('request')
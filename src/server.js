const Hapi = require('@hapi/hapi');
 
 
const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
  });
 
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
 
init();
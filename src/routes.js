const { simpanBuku, TampilkanSemuaBuku, TampilkanSesuaiID, 
    revisiBuku, HapusBuku  } = require('./handler');
  
  const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: simpanBuku,
    },
    {
      method: 'GET',
      path: '/books',
      handler: TampilkanSemuaBuku,
    },
    {
      method: 'GET',
      path: '/books/{id}',
      handler: TampilkanSesuaiID,
    },
    {
      method: 'PUT',
      path: '/books/{id}',
      handler: revisiBuku,
    },
    {
      method: 'DELETE',
      path: '/books/{id}',
      handler: HapusBuku,
    },
    
  ];
  
  module.exports = routes;
  
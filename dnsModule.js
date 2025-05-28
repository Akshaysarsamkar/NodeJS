const DNS = require("dns")

console.log(DNS);

// 1] getServers() : return array of ip address string 
console.log(DNS.getServers());

// lookup() : resolve the host name  
DNS.lookup('www.google.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});







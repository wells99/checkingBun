import figlet from 'figlet';
import index from './index.html'; 


const server = Bun.serve({
  port: 3000,
  routes: {
    "/": index,
    "/figlet": () => { 
      const body = figlet.textSync('Well'); 
      return new Response(body); 
    },
    "/health":() => {return new Response(JSON.stringify({ok: true}));} 
  }
});

console.log(`Listening on ${server.url}health`);
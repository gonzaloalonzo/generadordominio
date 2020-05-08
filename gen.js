var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

function init(){
  for (let i = 0; i<adj.length; i++){
    console.log("www."+adj[i]+noun[i]+pronoun[i]+".cl");
    console.log("www."+pronoun[i]+adj[i]+noun[i]+".cl");
    console.log("www."+noun[i]+pronoun[i]+adj[i]+".cl");
  }
}
init();
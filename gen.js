var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

// recorre matriz pronoun
for (let i = 0; i < pronoun.length; i++){
  // recorre matriz adj
  for (let j = 0; j < adj.length; j++) {
    //recorre matriz noun
    for (let f = 0; f < noun.length; f++) {
      //imprime o pinta en cosola cada elemento de las matrices
      console.log("www."+pronoun[i]+adj[j]+noun[f]+".cl")   
    }
  }
}






/* function init(){
  for (let index = 0; index<adj.length; index++){
    console.log("www." + adj[index] + noun[index] + pronoun[index] + ".cl");
    console.log("www." + pronoun[index] + adj[index] + noun[index] + ".cl");
    console.log("www." + noun[index] + pronoun[index] + adj[index] + ".cl");
    console.log("www." + pronoun[index] + noun[index] + adj[index] + ".cl");
  }//usar querySetector y innerhttp
}
init(); */
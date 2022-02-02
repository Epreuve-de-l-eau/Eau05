#! node

//Script qui affiche le premier nombre premier supérieur à l'arguments

//Gestion d'erreur
if (process.argv.length != 3) {
  console.log("Veuillez indiquer un nombre en argument")
  return
}

//Parsing
let arg = process.argv[2]
const nb = process.argv[2]

let fs = require('fs')
let vm = require('vm')

//Récupération du script qui détermine si un nombre est premier
let entier = fs.readFileSync("../../Epreuve_Terre/Terre11/terre11.js", "utf8")
//Exécution du script
vm.runInThisContext(entier)

premier(arg)
//Execution de la fonction du script tant qu'un nombre premier n'est pas trouvé
while (win != true) {
  arg = Number(arg) + 1
  premier(arg)
  res = 0
}

//Affichage
console.log("Le premier nombre premier supérieur à " + nb + " est " + arg)

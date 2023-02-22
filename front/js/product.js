// Récupération de la chaîne de requête URL 
let requeteUrl = location.search
// Extraction de l'id 
let requeteId = new URLSearchParams(requeteUrl);
const id = requeteId.get('id');
console.log(id);
// Création de L'URL de recherche dans l'API
const methodeHttp= "GET" 
const productIrl = "http://localhost:3000/api/products/"+id
console.log(productIrl);


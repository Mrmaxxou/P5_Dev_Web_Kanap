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

// Recherche des données de L'API
fetch(productIrl)
// Done le résultat en JSON
    .then(response => response.json())
// Le résultat traiter en JSON sera appelé "productId"
    .then(productId =>{
// Montre en console le résultat sous forme de tableau
        console.table(productId)
// Récupération de l'élément de la page HTML pour ajouter l'image.
const productHtmlImg = document.querySelector('.item__img');
//Création d'un élément image et définir l'attribut source et alt pour l'image de l'élément
const productImg = document.createElement('img');
productImg.src = productId.imageUrl;
productImg.alt = productId.altTxt;
productHtmlImg.appendChild(productImg);

//Ajout le nom du produit présent dans l'API à l'id title
const productTitle = document.getElementById('title');
productTitle.innerHTML = productId.name;

// Ajoute le prix présent dans L'API à l'id price
const productPrice = document.getElementById('price');
productPrice.innerHTML = productId.price;

// Ajoute la description présente dans L'API à l'id description
const productDescription = document.getElementById('description');
productDescription.innerHTML = productId.description;

// Crée un élément option pour chaque couleur présente dans l'API et l'ajout à l'élément select
const colorsChoice = productId.colors;
const selectColors = document.getElementById('colors');
for(let i = 0; i < colorsChoice.length; i++){
    const option = document.createElement('option');
    option.setAttribute('value', colorsChoice[i]);
    option.textContent = colorsChoice[i];
    selectColors.appendChild(option);
}
//Ajout d'un événement pour le bouton "add to cart"
const ajoutAuPanier = document.getElementById('addToCart');
ajoutAuPanier.addEventListener('click',function(){
    
    // Récupère les informations du produits (Quantité,Couleur)
    const productQuantity = parseInt(document.getElementById('quantity').value);
    console.log(productQuantity);
    const productColors = document.getElementById('colors').value;
    console.log(productColors);

    const cartProduct = JSON.parse(localStorage.getItem("cartProduct")) || [];

    let existingItem = null;
    for (let i = 0; i < cartProduct.length; i++) {
        if (cartProduct[i].id === id && cartProduct[i].colors === productColors) {
            existingItem = cartProduct[i];
            break;
        }
    }

    if (existingItem){
        existingItem.quantity += productQuantity;
    }

    else{
        const product = {
            id: id,
            quantity: productQuantity,
            colors: productColors,
        };
    cartProduct.push(product);
    }
    
    localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
    console.log(cartProduct);
    
});


});
// Récupération de la liste Array dans le localeStorage
const cart = JSON.parse(localStorage.getItem('cartProduct'));
console.log(cart);

// Sélection de l'élément HTML 
const sectioncart = document.querySelector('#cart__items');

// Création d'une boucle pour la création de chaque produits présent dans le panier

cart.forEach((product) => {

    const productArticle = document.createElement('article');
    productArticle.classList.add('cart__item');
    productArticle.dataset.id = product.id;
    productArticle.dataset.color= product.colors;
    sectioncart.appendChild(productArticle);


});
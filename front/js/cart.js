// Récupération de la liste Array dans le localeStorage
const cart = JSON.parse(localStorage.getItem('cartProduct'));
console.log(cart);

// Sélection de l'élément HTML 
const sectioncart = document.querySelector('#cart__items');

// Création d'une boucle pour la création de chaque produits présent dans le panier

cart.forEach((product) => {

    

    fetch(`http://localhost:3000/api/products/${product.id}`)
    .then(response => response.json())
    .then(productArticleId => {

    
    
    // Création d'un élément article pour chaque éléments présent dans le localStorage
    const productArticle = document.createElement('article');
    productArticle.classList.add('cart__item');
    productArticle.dataset.id = product.id;
    console.log(productArticle.dataset.id);
    productArticle.dataset.color= product.colors;
    sectioncart.appendChild(productArticle);
    productArticle.dataset.quantity = product.quantity;
    console.log(productArticle.dataset.quantity);

    //Création d'une div comprenant l'image du produit
    const productDivImg = document.createElement('div');
    productDivImg.classList.add('cart__item__img');
    productArticle.appendChild(productDivImg);
        // Création d'un élément image et difinir l'attribut source et alt pour l'image de l'éléments de l'API
        const productImg = document.createElement('img');
        productImg.src = productArticleId.imageUrl;
        productImg.alt = productArticleId.name;
        productDivImg.appendChild(productImg);


    // Création d'une div contenant les informations du produit
    const productDivContent = document.createElement('div');
    productDivContent.classList.add('cart__item__content');
    productArticle.appendChild(productDivContent);
        // Création d'une div contenant les descriptions du produit
        const productDivContentDescription = document.createElement('div');
        productDivContentDescription.classList.add('cart__item__content__description');
        productDivContent.appendChild(productDivContentDescription);
            // Création d'un élément 'h2' pour le nom du produit
            const productName = document.createElement('h2');
            productName.textContent = productArticleId.name;
            productDivContentDescription.appendChild(productName);
            // Création d'un élément 'p' pour la couleur du produit
            const productColor = document.createElement('p'); 
            productColor.textContent = productArticle.dataset.color;
            productDivContentDescription.appendChild(productColor);
            // Création d'un élément 'p' pour le prix du produit
            const productPrice = document.createElement('p');
            productPrice.textContent = productArticleId.price + '€';
            productDivContentDescription.appendChild(productPrice);

    // Création d'une div contenant les propriétés du produits (qty)
    const productDivSettings = document.createElement('div');
    productDivSettings.classList.add('cart__item__settings');
    productArticle.appendChild(productDivSettings);
        // Création d'un élément 'p' contenant le texte 'Qté : '
        const productQtyTxt = document.createElement('p');
        productQtyTxt.textContent = 'Qté : ';
        productDivSettings.appendChild(productQtyTxt);
        // Création d'un élément 'input' pour le champ 'Qté'
        const productQtyInput = document.createElement('input');
        productQtyInput.type = 'number';
        productQtyInput.min = 1;
        productQtyInput.max = 100;
        productQtyInput.classList.add('itemQuantity');
        productQtyInput.name = "itemQuantity";
        productQtyInput.value = productArticle.dataset.quantity;
        productDivSettings.appendChild(productQtyInput);

    })
    


});
// Déclaration constante de l'URL de l'API
const urlApi = 'http://localhost:3000/api/products'
// Déclaration constante de l'URL HTML du fichier product.html
const urlHtml = "./product.html"

// Récupération des données de L'API 
fetch(urlApi)
// Donne le résultat en JSON
    .then(response => response.json())
// Le résulat traiter en JSON sera appelé "produitsList"
    .then(produitsList => {
// Montre en console le résultat sous forme de tableau
    console.table(produitsList)
// Récupération de l'élément de la page HTML pour ajouter les éléments de chaque porduits
        const section = document.getElementById('items');
// Création d'une boucle pour créer une ancre pour chaque éléments
        for (let i = 0; i <produitsList.length; i++) {

            // Création d'un éléments ancre pour chaque éléments de l'API
            const id = produitsList[i]._id;
            const urlId = `${urlHtml}?id=${id}`;
            const anchor = document.createElement('a');
            anchor.href = urlId;
            section.appendChild(anchor);

            // Création d'un éléments article pour chaque éléments de l'API
            const article = document.createElement('article');
            anchor.appendChild(article);

            // Création d'un élément image et définir l'attribut source et alt pour l'image de l'éléments de l'API
            const productImg = document.createElement('img');
            productImg.src = produitsList[i].imageUrl;
            productImg.alt = produitsList[i].altTxt;
            article.appendChild(productImg);

            // Création d'un élément titre 'h3' et ajouter le titre de l'éléments de l'API
            const productName = document.createElement('h3');
            // Création d'une class 'productName' présente dans le code HTML pour le titre 'h3' 
            productName.classList.add('productName');
            productName.innerHTML = produitsList[i].name;
            article.appendChild(productName);

            // Création d'un élément description 'p' pour le texte description de l'éléments de l'API
            const productDescription = document.createElement('p');
            // Création d'une class 'productDescription' présente dans le code HTML pour la descrition
            productName.classList.add('productDescription');
            productDescription.innerHTML = produitsList[i].description;
            article.appendChild(productDescription);

            section.appendChild(anchor);
        }
    })
    .catch(error =>{
        console.error(error);
});
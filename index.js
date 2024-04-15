var button = document.getElementById("button");
var remove = document.getElementById("close");
var popup = document.querySelector(".popup");

button.addEventListener("click", function () {
  popup.classList.add("active");
});

remove.addEventListener("click", function () {
  popup.classList.remove("active");
});


// bouton = document.getElementById("bouton");

// const local = JSON.parse(localStorage.getItem("user"))
// bouton.onclick = () => {
//   const user = {
//     nom: nom.value,
//     prenom: prenom.value,
//     sexe: sexe.value,
//     email: email.value,
//     pays: pays.value,
//     ville: ville.value,
//     commissariat: commissariat.value,
//     date_et_heure: date_heure.value,
//     demande: type_demande
//   };
  
//   localStorage.setItem("user", JSON.stringify(user));
//   document.location.reload();
// };








let formDataArray = [];

// Fonction pour gérer la soumission du formulaire
function handleFormSubmit(event) {
    event.preventDefault();

    // Récupérez les valeurs des champs du formulaire
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const sexe = document.getElementById("sexe").value;
    const email = document.getElementById("email").value;
    const pays = document.getElementById("pays").value;
    const ville = document.getElementById("ville").value;
    const commissariat = document.getElementById("commissariat").value;
    const date_et_heure = document.getElementById("date_heure").value;
    const demande = document.getElementById("type_demande").value;

    // Ajoutez l'objet formData au tableau
    formDataArray.push({nom,prenom,sexe,email,pays,ville,commissariat,date_et_heure,demande});

    // Enregistrez le tableau mis à jour dans le localStorage
    try {
        localStorage.setItem("formDataArray", JSON.stringify(formDataArray));
        console.log("Données du formulaire enregistrées avec succès !");
    } catch (e) {
        console.error("Erreur lors de l'enregistrement des données du formulaire :", e);
    }
}


// Fonction pour charger les données du formulaire depuis le localStorage
function loadFormData() {
    const storedData = localStorage.getItem("formDataArray");
    if (storedData) {
        formDataArray = JSON.parse(storedData);
    }
    let nb = 0
        for (let i = 0; i < formDataArray.length; i++) {
            let tr = document.createElement('tr')
            
            nb= nb + 1
            tr.innerHTML += `<td>${nb}</td>
                             <td>${formDataArray[i].nom}</td>
                             <td>${formDataArray[i].prenom}</td>
                             <td>${formDataArray[i].sexe}</td>
                             <td>${formDataArray[i].email}</td>
                             <td>${formDataArray[i].pays}</td>
                             <td>${formDataArray[i].ville}</td>
                             <td>${formDataArray[i].commissariat}</td>
                             <td>${formDataArray[i].date_et_heure}</td>
                             <td>${formDataArray[i].demande}</td>
                             <td id="logo">
                                <button id="one" class="button"><i class="fa-solid fa-eye"></i></button>
                                <button id="two" class="button"><i class="fa-solid fa-pen"></i></button>
                                <button id="three" class="button"><i class="fa-solid fa-trash-can"></i></button>
                             </td>`
                             document.querySelector('table').appendChild(tr)
        }
}
// Appelez la fonction loadFormData pour charger les données existantes
loadFormData();


document.getElementById("bouton").addEventListener("click", handleFormSubmit);


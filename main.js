document.getElementById("formulaire").addEventListener("submit", function(e) {
   // e.preventDefault();
var erreur;
var pseudo = document.getElementById("pseudo");
var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var date = document.getElementById("datenaissance");
var email = document.getElementById("email");
var mdp = document.getElementById("mdp");
var confirmemdp = document.getElementById("confirmemdp");
var select = document.getElementById("select");
//pour les +/- 18 ans

var anniv = date.value;
var jj = new Date();
var annee = anniv.substr(0,4);
var mois = anniv.substr(5,2)-1;
var jours = anniv.substr(8,2);
var age = jj.getFullYear()-annee;
var agemois = jj.getMonth()-mois;
var agejours = jj.getDate()-jours;
 
if((agemois < 0 ) || ((agemois == 0) && (agejours < 0))){
    age--;
}

// reste du formulaire
if (pseudo.value==="root" || pseudo.value==="admin" || pseudo.value==="dieu"){
   erreur= "nom deja pris";
}
if (email.value==="root@paca.happy-dev.fr" || email.value==="admin@paca.happy-dev.fr" || email.value==="dieu@paca.happy-dev.fr"){
   erreur= "email deja utilisé";
} 
if(age < 18) {
    erreur="Vous n'avez pas 18 ans";
}
if (!select.value) {
  erreur = " veuillez selection votre catégorie homme/femme ect..";
} 
if (mdp.value != confirmemdp.value){
   erreur = "Les mots de passes ne correspondent pas connard";
}
if (!confirmemdp.value) {
   erreur = "veuillez confirmer votre mot de passe";
}
if (!mdp.value) {
   erreur = "veuillez renseigner un mot de passe";
}

if (!date.value) {
   erreur = "veuillez renseigner une date de naissance";
}  
if (!email.value) {
   erreur = "veuillez renseigner un mail";
}
if (!prenom.value) {
   erreur = "veuillez renseigner un prenom";
}
if (!nom.value) {
   erreur = "veuillez renseigner un nom";
}
if (!pseudo.value) {
   erreur = "veuillez renseigner un pseudo";
}
if (erreur) {
   e.preventDefault();
   document.getElementById("erreur").innerHTML = erreur;
}else{
   alert("Formulaire envoyé !"); 
}
});
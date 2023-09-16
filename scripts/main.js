let myHeading = document.querySelector("h1");   // déclaration de variable avec let
myHeading.textContent = "Bonjour, monde !";

let myButton = document.querySelector("button");

let myVariable = 'Bob';
myVariable = 10;
myVariable = true;
myVariable = [1,'Bob','Étienne',10];

myVariable = 3;
!(myVariable === 3);  //On teste ici que "myVariable n'est PAS égale à 3". Cela renvoie false, car elle est égale à 3. 

let iceCream = "chocolat";
if (iceCream === "chocolat") {
  console.log("J'adore la glace au chocolat !");
} else {
  console.log("Ooooh, mais j'aurais préféré au chocolat.");
}

function multiply(num1, num2) {  // Fonction accessible dans la console
    let result = num1 * num2;
    return result;
  }

/*document.querySelector("img").addEventListener("mousedown", function () {   // Quand on clique sur l'image  (html pour la page)
    alert("Tout droits protégés !!");
  });*/

let myli = document.querySelector("li");
myli.addEventListener("click", function () {   // Quand on clique sur le texte avec la balise "li"
    alert(" C'est bon !!");
  });

  let myImage = document.querySelector("img");

myImage.addEventListener("mouseover", function () {   // change l'image quand on clique dessus
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/fond-d-ecran.jpg") {
    myImage.setAttribute("src", "images/fond-d-ecran-bis.jpg");
  } else {
    myImage.setAttribute("src", "images/fond-d-ecran.jpg");
  }
});


function setUserName() {
    let myName = prompt("Veuillez saisir votre nom.");
    localStorage.setItem("nom", myName);
    myHeading.textContent = "Mozilla est cool, " + myName;
  }
  
  if (!localStorage.getItem("nom")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("nom");
    myHeading.textContent = "Mozilla est cool, " + storedName;
  }
  
  myButton.addEventListener("click", function () {
    setUserName();
  });
const charityFunds = [
    {
        "title": "Save the Children",
        "img": "https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Save_the_Children.png",
        "url": "https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis"
    },
    {
        "title": "Project HOPE",
        "img": "https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/ho.png",
        "url": "https://www.projecthope.org/country/ukraine/"
    },
    {
        "title": "UNITED24",
      "img": "https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Internation_medical_corps.png",
      "url": "https://u24.gov.ua/uk"
    },
    {
        "title": "International Medical Corps",
        "img": "https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/United24.png",
        "url": "https://internationalmedicalcorps.org/country/ukraine/"
  },
     {
        "title": "RAZOM",
        "img": "https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Razom.png",
        "url": "https://www.razomforukraine.org/"
  },
    {
        "title": "Serhiy Prytula Charity Foundation",
        "img": "https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/pr.png",
        "url": "https://prytulafoundation.org/en"
    },
    {
        "title": "Medicins Sans Frontieres",
        "img": "https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Medicins_sans_frontieres.png",
        "url": "https://www.msf.org/ukraine"
    },
    {
        "title": "Action against hunger",
        "img": "https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Action_against_hunger.png",
        "url": "https://www.actionagainsthunger.org/location/europe/ukraine/"
    },
    {
        "title": "World vision",
        "img": "https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/World_vision.png",
        "url": "https://www.wvi.org/emergencies/ukraine"
    }
]



const charityFundsContainer = document.querySelector('.charity-box');


let counter = 0; 

charityFundsContainer.insertAdjacentHTML("afterbegin", createMarkup(charityFunds));

function createMarkup(arr) {
  return arr
    .map(
      ({ title, url, img }) => {
        counter++;
        const paddedCounter = counter.toString().padStart(2, '0');
        return `<li class="list-item-fund">
        <div class="wrap-counter-img">
        <span class="counter">${paddedCounter}</span> 
          <a href="${url}" target="_blank">
            <img src="${img}" alt="${title}" class="charity-logo">
          </a>
          </div>
        </li>`;
      }
    )
    .join("");
}
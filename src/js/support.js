const charityFunds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: './images/support/save_the_children.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: './images/support/project_hope.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: './images/support/united24.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: './images/support/i_m_c.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: './images/support/m_s_f.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: './images/support/razom.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: './images/support/a_a_h.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: './images/support/w_v.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: './images/support/s_p.png',
  },
];



const charityFundsContainer = document.querySelector('.charity-box');




charityFundsContainer.insertAdjacentHTML("afterbegin", createMarkup(charityFunds));

function createMarkup(arr) {
  return arr
    .map(
      ({ title, url, img  }) =>
       `<li class="list">
          <a href="${url}" target="_blank">
            <img src="${img}" alt="${title}" class="charity-logo">
          </a>
        </li>`
    )
    .join("");
}


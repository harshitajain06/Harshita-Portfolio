// Mobile menu
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');
const link = document.querySelectorAll('.link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  links.classList.toggle('show-links');
});

link.forEach((linkItem) => {
  linkItem.addEventListener('click', () => {
    hamburger.classList.remove('active');
    links.classList.remove('show-links');
  });
});

// Display work section dynamically
const featuredData = [
  {
    id: '7',
    mobileImg: 'images/work/space-travelers.png',
    desktopImg: 'images/work/space-travelers.png',
    popupImg: 'images/work/space-travelers.png',
    mobileTitle: "Space Travelers' Hub",
    deskTitle: "Space Travelers' Hub",
    title: "Space Travelers' Hub",
    desc: `This is a web application for a company that provides 
    commercial and scientific space travel services. The app allows 
    users to book rockets and join selected space missions. The app 
    utilizes Space-X API to provide real live data.`,
    popupDesc: `This is a web application for a company that provides 
    commercial and scientific space travel services. The app allows 
    users to book rockets and join selected space missions. The app 
    utilizes Space-X API to provide real live data.`,
    languages: ['react', 'redux', 'javascript'],
    popTech: ['React', 'Redux', 'JavaScript'],
    seeLive: 'https://spacemission-65jz.onrender.com/',
    seeSource: 'https://github.com/harshitajain06/Space-Travelers-Hub',
  },
];

const cardData = [
  {
    id: '1',
    mobileImg: 'images/work/desk-card-images/project1.jpg',
    desktopImg: 'images/work/desk-card-images/project1.jpg',
    popupImg: 'images/work/desk-card-images/fashion.png',
    mobileTitle: 'Fashion Conference',
    deskTitle: 'Fashion Conference',
    desc: `This is a Fashion World Conference website in first 
    Capstone project during Microverse Full Stack developer course.
     I used HTML, CSS and JavaScript in this project.`,
    popupDesc: `This app allows a user see the details of conference. It also 
    shows the sponsers of the conference. `,
    tags: ['html', 'css', 'javascript'],
    popTech: ['JavaScript', 'CSS', 'HTML'],
    seeLive: 'https://harshitajain06.github.io/Capstone-1/',
    seeSource: 'https://github.com/harshitajain06/Capstone-1.git',
  },
  {
    id: '2',
    mobileImg: 'images/work/desk-card-images/project2.jpg',
    desktopImg: 'images/work/desk-card-images/project2.jpg',
    popupImg: 'images/work/desk-card-images/meals.png',
    mobileTitle: 'Meals Menu',
    deskTitle: 'Meals Menu',
    desc: `Meals-Menu is a web app that showcases the the meals
     available in a restaurant with great number of details about
      those meals including the categories, Ingridients and the recipes for them.`,
    popupDesc: `This app allows a user to see the meals of different categories.
    All data is preserved by the external meals API service.`,
    tags: ['html', 'css', 'javascript'],
    popTech: ['JavaScript', 'CSS', 'HTML'],
    seeLive: 'https://harshitajain06.github.io/Meals-Menu/dist/',
    seeSource: 'https://github.com/harshitajain06/Meals-Menu',
  },
  {
    id: '3',
    mobileImg: 'images/work/desk-card-images/leaderboard.jpg',
    desktopImg: 'images/work/desk-card-images/leaderboard.jpg',
    popupImg: 'images/work/desk-card-images/leaderboard-pop.png',
    mobileTitle: 'Leaderboard',
    deskTitle: 'Leaderboard',
    desc: `The Leaderboard app displays scores submitted by different players.
    It also allows users to submit their scores.`,
    popupDesc: `This app allows a user to submit their score. It also shows
    scores previously submitted by other players. All data is preserved by
    the external leaderboard API service.`,
    tags: ['html', 'css', 'javascript'],
    popTech: ['API', 'JavaScript', 'CSS', 'HTML'],
    seeLive: 'https://harshitajain06.github.io/Leaderboard/dist/',
    seeSource: 'https://github.com/harshitajain06/Leaderboard',
  },
  {
    id: '4',
    mobileImg: 'images/work/desk-card-images/calc.jpg',
    desktopImg: 'images/work/desk-card-images/calc.jpg',
    popupImg: 'images/work/desk-card-images/math-magicians-pop.png',
    mobileTitle: 'Math magicians',
    deskTitle: 'Math magicians',
    desc: `This is a Single Page App (SPA) that allows users to: - Make simple
    calculations - Read a random math-related quote.`,
    popupDesc: `Math Magicians is an app for all fans of mathematics.
    It is a Single Page App (SPA) that allows users to: - Make simple
    calculations - Read a random math-related quote.`,
    tags: ['react', 'javascript', 'css'],
    popTech: ['React', 'JavaScript'],
    seeLive: 'https://math-magician-nttj.onrender.com/',
    seeSource: 'https://github.com/harshitajain06/Math_Magicians',
  },
  {
    id: '5',
    mobileImg: 'images/work/desk-card-images/bookstore.jpg',
    desktopImg: 'images/work/desk-card-images/bookstore.jpg',
    popupImg: 'images/work/desk-card-images/bookstore-app-pop.png',
    mobileTitle: 'Bookstore',
    deskTitle: 'Bookstore',
    desc: 'This is an app that allows a user to add a book, display a list of books, and remove a selected book.',
    popupDesc: `This is an app that allows a user to add a book, display a list of books, and remove a selected book.
      All data is preserved by the external Bookstore API service.`,
    tags: ['react', 'redux', 'javascript'],
    popTech: ['API', 'React', 'Redux', 'JavaScript'],
    seeLive: 'https://bookstore-1nn8.onrender.com/',
    seeSource: 'https://github.com/harshitajain06/bookstore',
  },
  {
    id: '6',
    mobileImg: 'images/work/desk-card-images/bookstore.jpg',
    desktopImg: 'images/work/desk-card-images/bookstore.jpg',
    popupImg: 'images/work/desk-card-images/coin.png',
    mobileTitle: 'Coin Statistics',
    deskTitle: 'Coin Statistics',
    desc: `This is a web app that allows users to see and
    compare statistics of different coins in market. Coins data is provided by the API.`,
    popupDesc: `This is a web(mobile-focused) app that allows users to see and
    compare statistics of different coins in market. Coins data is provided by the API.`,
    tags: ['react', 'redux', 'javascript'],
    popTech: ['API', 'React', 'Redux', 'JavaScript'],
    seeLive: 'https://coin-statistics.onrender.com/',
    seeSource: 'https://github.com/harshitajain06/React-Capstone-Project',
  },
];

const featuredWork = document.querySelector('.featured-work');
const gridContainer = document.querySelector('.grid-container');

// Load featured-work
const displayFeaturedWork = (array) => {
  const featuredWorkString = array
    .map(
      (feature) => `<div class="mobile-gym"><img src=${
        feature.mobileImg
      } alt="Gymfit image"></div>
    <div class="desktop-gym"><img  src=${
  feature.desktopImg
} alt="Gymfit image"></div>
    <div class="right-block">
        <h2 class="title">${feature.title}</h2>
        <p class="para">
        ${feature.desc}
        </p>

        <ul class="langs">
            ${feature.languages
    .map((lang) => `<li class="lang"><a href="#">${lang}</a></li>`)
    .join('')}
        </ul>

        <div class="btn-center">
            <button class="btn  button see-featured" data-id=${feature.id} >
                see project
            </button>
        </div>
    </div>`,
    )
    .join('');
  featuredWork.innerHTML = featuredWorkString;
};

// Load work section cards
const displayCardString = (array) => {
  const cardString = array
    .map(
      (card) => `<div class="grid-item">
    <div class="card-img">
        <img class="mob-img" src=${card.mobileImg} alt="Work card image">
        <img class="desk-img" src=${card.desktopImg} alt="Work card image">
    </div>
    <div class="card-content">
        <div class="card-text">
            <div class="card-title">
                <p class="mobile-para">${card.mobileTitle}</p>
                <p class="desktop-para">${card.deskTitle}</p>
            </div>
            <div class="card-desc">
                <p>
                    ${card.desc}
                </p>
            </div>
            <div>
                <ul class="tags">
                ${card.tags
    .map((tag) => `<li class="lang"><a href="#">${tag}</a></li>`)
    .join('')}
                </ul>
            </div>
        </div>
        <div>
            <button class="card-btn see-project button " data-id=${card.id} >
                see project
            </button>
        </div>
    </div>
</div>`,
    )
    .join('');
  gridContainer.innerHTML = cardString;
};

// Featured popoup
const featuredModal = () => {
  const seeProjectBtn = document.querySelector('.see-featured');
  const containers = document.querySelectorAll('.container');
  const myModal = document.querySelector('.modal-overlay');

  seeProjectBtn.addEventListener('click', (e) => {
    const featuredId = e.target.dataset.id;

    const targetProj = featuredData.filter((proj) => {
      if (proj.id === featuredId) {
        return proj;
      }
      return false;
    });
    const displayFeatured = targetProj
      .map(
        (item) => `<div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">
            <span class="close-btn">&times;</span>
            <p class="mobile-heading">${item.mobileTitle}</p>
            <p class="desktop-heading">
              ${item.deskTitle}
            </p>
          </div>
          <div class="modal-tags">
            <ul>

              ${item.popTech
    .map(
      (tech) => `<li class="modal-tag"><a href="">${tech}</a></li>`,
    )
    .join('')}
            </ul>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-imgM">
            <img
              class="modal-image feature-modal-img"
              src=${item.popupImg}
              alt="Modal mobile image"
            />
          </div>
          <div class="modal-imgD">
            <img
              class="modal-image feature-modal-img"
              src=${item.popupImg}
              alt="Modal desktop image"
            />
          </div>
          <div class="modal-text">
            <p class="modal-descM">
              ${item.popupDesc}
            </p>
            <p class="modal-descD">
              ${item.popupDesc}

            </p>
            <div class="modal-btns">
              <button>
                <a class="modal-btn" href=${
  item.seeLive
} target="_blank">See Live</a>
                <img
                  class="modal-btn-img"
                  src="images/modal/live-icon.png"
                  alt="See Live Image"
                />
              </button>
              <button>
                <a class="modal-btn" href=${
  item.seeSource
} target="_blank">See Source</a>
                <img
                  class="modal-btn-img"
                  src="images/modal/github-icon.png"
                  alt="See Source Github Image"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      )
      .join('');

    myModal.innerHTML = displayFeatured;
    myModal.classList.add('show-modal');
    containers.forEach((container) => {
      container.classList.add('blur');
    });

    // Close modal
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      myModal.classList.remove('show-modal');
      containers.forEach((container) => {
        container.classList.remove('blur');
      });
    });
  });
};

// Popup window
const modalPopup = () => {
  const projectBtns = document.querySelectorAll('.see-project');
  const containers = document.querySelectorAll('.container');
  const myModal = document.querySelector('.modal-overlay');

  // Show modal
  projectBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const projID = e.target.dataset.id;

      const targetProj = cardData.filter((proj) => {
        if (proj.id === projID) {
          return proj;
        }
        return false;
      });
      const displayProject = targetProj
        .map(
          (item) => `<div class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title">
              <span class="close-btn">&times;</span>
              <p class="mobile-heading">${item.mobileTitle}</p>
              <p class="desktop-heading">
                ${item.deskTitle}
              </p>
            </div>
            <div class="modal-tags">
              <ul>

                ${item.popTech
    .map(
      (tech) => `<li class="modal-tag"><a href="">${tech}</a></li>`,
    )
    .join('')}
              </ul>
            </div>
          </div>
          <div class="modal-body">
            <div class="modal-imgM">
              <img
                class="modal-image"
                src=${item.popupImg}
                alt="Modal mobile image"
              />
            </div>
            <div class="modal-imgD">
              <img
                class="modal-image"
                src=${item.popupImg}
                alt="Modal desktop image"
              />
            </div>
            <div class="modal-text">
              <p class="modal-descM">
                ${item.popupDesc}
              </p>
              <p class="modal-descD">
                ${item.popupDesc}

              </p>
              <div class="modal-btns">
                <button>
                  <a class="modal-btn" href=${
  item.seeLive
} target="_blank">See Live</a>
                  <img
                    class="modal-btn-img"
                    src="images/modal/live-icon.png"
                    alt="See Live Image"
                  />
                </button>
                <button>
                  <a class="modal-btn" href=${
  item.seeSource
} target="_blank">See Source</a>
                  <img
                    class="modal-btn-img"
                    src="images/modal/github-icon.png"
                    alt="See Source Github Image"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`,
        )
        .join('');
      myModal.innerHTML = displayProject;

      myModal.classList.add('show-modal');
      containers.forEach((container) => {
        container.classList.add('blur');
      });

      // Close modal
      const closeBtn = document.querySelector('.close-btn');
      closeBtn.addEventListener('click', () => {
        myModal.classList.remove('show-modal');
        containers.forEach((container) => {
          container.classList.remove('blur');
        });
      });
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  displayFeaturedWork(featuredData);
  displayCardString(cardData);
  modalPopup();
  featuredModal();
});

// FORM VALIDATION//
const form = document.querySelector('.form');
const email = document.querySelector('.email');
const span = document.querySelector('.span');
const userName = document.getElementById('name');
const message = document.getElementById('message');

// Function that validates email address
const validMail = (usermail) => {
  if (
    usermail.match(/^([a-z0-9.-]+)+@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/)
  ) {
    return true;
  }
  return false;
};

// Event listener for email validation
form.addEventListener('submit', (e) => {
  if (!validMail(email.value)) {
    e.preventDefault();
    span.textContent = 'Please enter a valid email';
  } else {
    span.textContent = '';
  }
});

// LOCAL STORAGE

// Retrieve from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const userInput = JSON.parse(localStorage.getItem('data'));

  if (userInput !== null) {
    userName.value = userInput.nameID;
    email.value = userInput.mail;
    message.value = userInput.msg;
  } else {
    userName.value = '';
    email.value = '';
    message.value = '';
  }
});

// Add to localStorage
form.addEventListener('input', () => {
  const object = {};
  object.nameID = userName.value;
  object.mail = email.value;
  object.msg = message.value;

  localStorage.setItem('data', JSON.stringify(object));
});

// Download Resume
const btnContainer = document.getElementById('resume-btn-container');
const downloadResume = document.getElementById('download-resume');
downloadResume.addEventListener('click', () => {
  const fileUrl = 'https://drive.google.com/u/0/uc?id=1RPgcL5F-pVSKaFAQoomNgUPPTEjX0kih&export=download';
  const filename = 'harshita-jain-resume.pdf';

  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = filename;

  btnContainer.appendChild(link);
  link.click();
  btnContainer.removeChild(link);
});

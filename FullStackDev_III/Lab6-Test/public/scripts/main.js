//Constants and variables
let musicData = [];
let favoriteData = [];
let searchResultsContainer = null;
let favoriteListContainer = null;
let txtGenre = null;
let txtArtist = null;
let txtSong = null;
let txtAlbum = null;
let _id = 0;

const hasSearchFilters = () => {
  return (
    (txtArtist && txtArtist.value) ||
    (txtSong && txtSong.value) ||
    (txtAlbum && txtAlbum.value) ||
    (txtGenre && txtGenre.value)
  );
};

//// EVENT HANDLERS
const handleSearch = () => {
  console.log('handle search');
  filterAndLoadResults();
};

const handleInputKeyUp = e => {
  console.log('handle input key up');
  // Number 13 is the "Enter" key on the keyboard
  if (e.keyCode === 13) {
    // Cancel the default action, if needed
    e.preventDefault();

    filterAndLoadResults();
  }
};

const filterAndLoadResults = () => {
  if (!hasSearchFilters()) {
    alert('Please select a search filter');
    return;
  }

  const genre = txtGenre ? txtGenre.value : '';
  const artist = txtArtist ? txtArtist.value : '';
  const songTitle = txtSong ? txtSong.value : '';
  const album = txtAlbum ? txtAlbum.value : '';

  fetch(
    `http://localhost:3000/filterMusic?genre=${genre}&artist=${artist}&songTitle=${songTitle}&album=${album}`
  )
    .then(response => response.json())
    .then(result => loadData(result));
};
const handleReset = () => {
  console.log('handle reset');
  txtGenre.value = null;
  txtArtist.value = null;
  txtSong.value = null;
};

const handleFavoriteClick = id => {
  fetch(`http://localhost:3000/favorite?id=${id}`)
    .then(response => response.json())
    .then(song => {
      console.log('s', song)
      favoriteData.push(song);
      createFavoriteImage(song);
    });
};

const handleRemoveFavoriteClick = e => {
  if (!e.target) {
    return;
  }
  favoriteListContainer.removeChild(e.target);
};
const handleSongButtonClick = e => {
  if (!e.target) {
    return;
  }

  if (e.target.className === 'btn-favorite') {
    console.log('favorite button click');
    handleFavoriteClick(e.target.getAttribute('data-key'));
  } else if (e.target.className === 'btn-download')
    alert('download button click');

  console.log(e.target.getAttribute('data-key'));
};
const setupHandlers = () => {
  getElement('#btnSearch').addEventListener('click', handleSearch);
  getElement('#btnReset').addEventListener('click', handleReset);
  getAllElements('input').forEach(input =>
    input.addEventListener('keyup', handleInputKeyUp)
  );

  getElement('#searchResults').addEventListener('click', handleSongButtonClick);
  getElement('#favoriteListContainer').addEventListener(
    'click',
    handleRemoveFavoriteClick
  );
};

const loadData = data => {
  removeTableRows();

  for (const song of data) {
    console.log(song);
    const songRow = buildTableRow(song);
    searchResultsContainer.append(songRow);
  }
};

//// DOM Manipulation & Traversal /////
const getElement = selector => {
  return document.querySelector(selector);
};
const getAllElements = selector => {
  return document.querySelectorAll(selector);
};

const removeTableRows = () => {
  while (searchResultsContainer.firstChild) {
    searchResultsContainer.removeChild(searchResultsContainer.firstChild);
  }
};

const buildTableRow = songObj => {
  const row = createElement('tr');
  for (const key in songObj) {
    if (key === 'id' || key === 'imageName') continue;
    const colTitle = createElement('td', songObj[key]);
    row.append(colTitle);
  }
  const liFaDownload = createElement('li', null, 'fas fa-download');
  createButtonColumn(row, 'Favorite', 'btn-favorite', songObj.id, liFaDownload);
  createButtonColumn(row, 'Download', 'btn-download', songObj.id, liFaDownload);

  return row;
};

const createFavoriteImage = song => {
  const imageName = song.imageName;
  const imgFilePath = `images\\${imageName}`;
  const imgElement = createElement('img', null, 'favorite-album-item');
  imgElement.src = imgFilePath;
  favoriteListContainer.append(imgElement);
};

const createButtonColumn = (rowElement, text, className, key, innerHtml) => {
  const buttonCol = createElement('td', null, null, key);
  const btnElement = createElement('button', text, className, key, innerHtml);
  buttonCol.append(btnElement);

  rowElement.append(buttonCol);
};
const createElement = (element, text, className, key, innerHtml) => {
  let elm = document.createElement(element);
  if (text) elm.textContent = text;
  if (className) elm.className = className;
  if (key) elm.dataset.key = key; //setAttribute("data-num", i);
  if (innerHtml) elm.innerHtml = innerHtml.outerHtml;
  return elm;
};

const inititalize = () => {
  searchResultsContainer = document.querySelector('#searchResults');
  favoriteListContainer = document.querySelector('#favoriteListContainer');
  txtGenre = document.querySelector('#txtGenre');
  txtArtist = document.querySelector('#txtArtist');
  txtSong = document.querySelector('#txtSong');
  txtAlbum = document.querySelector('#txtAlbum');
};
/// Window Load
window.onload = () => {
  console.log('window loaded..');
  setupHandlers();
  inititalize();
};

const upcomingShows = [
   {
    labelDate: 'DATE',
    date: 'Mon Dec 17 2018', 
    labelVenue: 'VENUE',
    venue: 'Ronald Lane',
    labelLocation: 'LOCATION',       
    location: 'San Francisco, CA'
  },
  {
    labelDate: 'DATE',
    date: 'Tue Jul 18 2019', 
    labelVenue: 'VENUE',
    venue: 'Pier 3 East',
    labelLocation: 'LOCATION',       
    location: 'San Francisco, CA'
  },
  {
    labelDate: 'DATE',
    date: 'Fri Jul 22 2019', 
    labelVenue: 'VENUE',
    venue: 'View Loungue',
    labelLocation: 'LOCATION',       
    location: 'San Francisco, CA'
  },
  {
    labelDate: 'DATE',
    date: 'Sat Aug 12 2019', 
    labelVenue: 'VENUE',
    venue: 'Hyatt Agency',
    labelLocation: 'LOCATION',       
    location: 'San Francisco, CA'
  },
  {
    labelDate: 'DATE',
    date: 'Fri Sep 05 2019', 
    labelVenue: 'VENUE',
    venue: 'Moscow Center',
    labelLocation: 'LOCATION',       
    location: 'San Francisco, CA'
  },
  {
    labelDate: 'DATE',
    date: 'Wed Aug 11 2019', 
    labelVenue: 'VENUE',
    venue: 'Pres Club',
    labelLocation: 'LOCATION',       
    location: 'San Francisco, CA'
  },
];



let hero = document.querySelector('.hero');
let shows = document.createElement('section');
shows.classList.add('shows');

hero.insertAdjacentElement('afterend', shows);

let showsTitle = document.createElement('h2');
showsTitle.classList.add('shows__title');
showsTitle.innerText = 'Shows';
shows.appendChild(showsTitle);

let showsList = document.createElement('div');
showsList.classList.add('shows__container');
shows.appendChild(showsList)

let labelSeries = document.createElement('div');
labelSeries.classList.add('shows__top-label');
showsList.appendChild(labelSeries);

let dateLabel = document.createElement('p');
let venueLabel = document.createElement('p');
let locationLabel = document.createElement('p');

dateLabel.classList.add('shows__top-label');
venueLabel.classList.add('shows__top-label');
locationLabel.classList.add('shows__top-label');

dateLabel.innerText = 'DATES';
venueLabel.innerText = 'VENUE';
locationLabel.innerText = 'LOCATION';

labelSeries.appendChild(dateLabel);
labelSeries.appendChild(venueLabel);
labelSeries.appendChild(locationLabel);


for (let i = 0; i < upcomingShows.length; i++) {
  const boxes = createBox(upcomingShows[i]);
  showsList.appendChild(boxes);

function createBox (futureShows) {
  let box = document.createElement('div');
  box.classList.add('shows__box');
  
  let labelOne = document.createElement('h3');
  labelOne.classList.add('shows__label');
  labelOne.innerText = upcomingShows[i].labelDate;
  box.appendChild(labelOne);

  let date = document.createElement('p');
  date.classList.add('shows__date');
  date.innerText = upcomingShows[i].date;
  box.appendChild(date);

  let labelTwo = document.createElement('h3');
  labelTwo.classList.add('shows__label');
  labelTwo.innerText = upcomingShows[i].labelVenue;
  box.appendChild(labelTwo);

  let venue = document.createElement('p');
  venue.classList.add('shows__details');
  venue.innerText = upcomingShows[i].venue;
  box.appendChild(venue);

  let labelThree = document.createElement('h3');
  labelThree.classList.add('shows__label');
  labelThree.innerText = upcomingShows[i].labelLocation;
  box.appendChild(labelThree);

  let city = document.createElement('p');
  city.classList.add('shows__details');
  city.innerText = upcomingShows[i].location;
  box.appendChild(city);

  let button = document.createElement('p');
  button.classList.add('shows__button')
  button.innerText = 'BUY TICKETS';
  box.appendChild(button);

  return box;
}
};

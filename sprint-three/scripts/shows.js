const upcomingShows = [
   {
    date: 'Mon Dec 17 2018', 
    venue: 'Ronald Lane',      
    location: 'San Francisco, CA'
  },
  {
    date: 'Tue Jul 18 2019', 
    venue: 'Pier 3 East',      
    location: 'San Francisco, CA'
  },
  {
    date: 'Fri Jul 22 2019', 
    venue: 'View Loungue',      
    location: 'San Francisco, CA'
  },
  {
    date: 'Sat Aug 12 2019', 
    venue: 'Hyatt Agency',      
    location: 'San Francisco, CA'
  },
  {
    date: 'Fri Sep 05 2019', 
    venue: 'Moscow Center',      
    location: 'San Francisco, CA'
  },
  {
    date: 'Wed Aug 11 2019', 
    venue: 'Pres Club',      
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
  labelOne.innerText = 'DATE';
  box.appendChild(labelOne);

  let date = document.createElement('p');
  date.classList.add('shows__date');
  date.innerText = upcomingShows[i].date;
  box.appendChild(date);

  let labelTwo = document.createElement('h3');
  labelTwo.classList.add('shows__label');
  labelTwo.innerText = 'VENUE';
  box.appendChild(labelTwo);

  let venue = document.createElement('p');
  venue.classList.add('shows__details');
  venue.innerText = upcomingShows[i].venue;
  box.appendChild(venue);

  let labelThree = document.createElement('h3');
  labelThree.classList.add('shows__label');
  labelThree.innerText = 'LOCATION';
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

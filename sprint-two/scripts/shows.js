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

let labelSeries = document.createElement('div');
labelSeries.classList.add('shows__top-label');
shows.appendChild(labelSeries);

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
  shows.appendChild(boxes);

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






/* <section class="shows">
      <h2 class="shows__title">Shows</h2>
      <div class ="shows__boxes">
        <div class="shows__box">
          <h3 class="shows__label">DATE</h3>
          <p class="shows__date">Mon Dec 17 2018</p>
          <h3 class="shows__label">VENUE</h3>
          <p class="shows__details">Ronald Lane</p>
          <h3 class="shows__label">LOCATION</h3>
          <p class="shows__details">San Fransisco, CA</p>
          <p class="shows__button">BUY TICKETS</p>
        </div>
      </div>
      </section>

    <section class="shows">
      <h2 class="shows__title">Shows</h2>
      <table class ="shows__table">
        <tr>
          <th class="shows__label">DATE</th>
        </tr>
        <tr>
          <td class="shows__date">Mon Dec 17 2018</td>
        </tr>
        <tr>
          <th class="shows__label">VENUE</th>
        </tr>
        <tr>
          <td class="shows__details">Ronald Lane</td>
        </tr>
        <tr>
          <th class="shows__label">LOCATION</th>
        </tr>
        <tr>
          <td class="shows__details">San Fancisco, CA</td>
        </tr>
      </table>
      <p class="shows__button">BUY TICKETS</p>
      </section>
*/
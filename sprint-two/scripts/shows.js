let upcomingShows = [
   {
    labelDate: 'DATE',
    date: 'Mon Dec 17 2018', 
    labelVenue: 'VENUE',
    venue: 'Ronald Lane',
    labelLocation: 'San Francisco, CA'
  },
  {
    labelDate: 'DATE',
    date: 'Tue Jul 18 2019', 
    labelVenue: 'VENUE',
    vanue: 'Pier 3 East',
    labelLocation: 'San Francisco, CA'
  },
  {
    labelDate: 'DATE',
    date: 'Fri Jul 22 2019', 
    labelVenue: 'VENUE',
    vanue: 'View Loungue',
    labelLocation: 'San Francisco, CA'
  },
  {
    labelDate: 'DATE',
    date: 'Sat Aug 12 2019', 
    labelVenue: 'VENUE',
    vanue: 'Hyatt Agency',
    labelLocation: 'San Francisco, CA'
  },
  {
    labelDate: 'DATE',
    date: 'Fri Sep 05 2019', 
    labelVenue: 'VENUE',
    vanue: 'Moscow Center',
    labelLocation: 'San Francisco, CA'
  },
  {
    labelDate: 'DATE',
    date: 'Wed Aug 11 2019', 
    labelVenue: 'VENUE',
    vanue: 'Pres Club',
    labelLocation: 'San Francisco, CA'
  },
];

let hero = document.querySelector('.hero');
let shows = document.createElement('section');
shows.classList.add('shows');

hero.insertAdjacentElement('afterend', shows);

const showsTitle = document.createElement('h2');
showsTitle.classList.add('shows__title');
showsTitle.innerText = 'Shows';
shows.appendChild(showsTitle);

for (let i = 0; i < upcomingShows.length; i++) {
  const boxes = createBox(upcomingShows[i]);
  shows.appendChild(boxes);
}

function createBox (futureShows) {
  let box = document.createElement('div');
  box.classList.add('shows__box');
  
  let labelOne = document.createElement('h3');
  labelOne.classList.add('shows__label');
  labelOne.innerText = upcomingShows.labelDate;
  box.appendChild(labelOne);

  let date = document.createElement('p');
  date.classList.add('shows__date');
  date.innerText = upcomingShows.date;
  box.appendChild(date);

  let labelTwo = document.createElement('h3');
  labelTwo.classList.add('shows__label');
  labelTwo.innerText = upcomingShows.labelVenue;
  box.appendChild(labelTwo);

  let venue = document.createElement('p');
  venue.classList.add('shows__details');
  venue.innerText = upcomingShows.venue;
  box.appendChild(venue);

  let labelThree = document.createElement('h3');
  labelThree.classList.add('shows__label');
  labelThree.innerText = upcomingShows.venue;
  box.appendChild(labelThree);

  let city = document.createElement('p');
  city.classList.add('shows__details');
  city.innerText = upcomingShows.labelLocation;
  box.appendChild(city);

  let button = document.createElement('p');
  button.classList.add('shows__button')
  button.innerText = 'BUY TICKETS';
  box.appendChild(button);

  let divider = document.createElement('hr')
  divider.classList.add('shows__divider');
  box.appendChild(divider);

  return box;
}





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
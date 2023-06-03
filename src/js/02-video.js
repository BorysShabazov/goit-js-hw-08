import Player from '@vimeo/player';
import _ from 'lodash';

const videoEl = document.querySelector('iframe');

const player = new Player(videoEl);

let viewingTime = null;

const updateTimeInStorage = function (evt) {
  viewingTime = evt.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(viewingTime));
};

player.on('timeupdate', _.throttle(updateTimeInStorage, 1000));

player
  .setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

console.dir(_.throttle);

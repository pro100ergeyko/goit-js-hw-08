import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(CURRENT_TIME, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME)) || 0);

player
  .setColor('#00adef')
  .then(function (color) {
    console.log('the color that was set: #00adef');
  })
  .catch(function (error) {
    console.log('an error occurred setting the color');
  });

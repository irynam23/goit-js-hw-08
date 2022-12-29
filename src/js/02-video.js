import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const localStorageKey = 'videoplayer-current-time';
const saveTime = localStorage.getItem(localStorageKey);

if (saveTime) {
  player.setCurrentTime(saveTime);
}

player.on('timeupdate', throttle(handleTimeUpdate, 1000));

function handleTimeUpdate({ seconds }) {
  localStorage.setItem(localStorageKey, seconds);
}

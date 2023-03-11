import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0);

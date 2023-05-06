
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// const STORAGE_KEY = 'videoplayer-current-time';
// let onPlay = function({seconds}) {
//     localStorage.setItem(STORAGE_KEY, seconds);

// player.on('timeupdate', throttle(onPlay, 1000));

// };
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
player.on('timeupdate', throttle(onTimeVideoUpdate, 1000));
function onTimeVideoUpdate(e) {
    localStorage.setItem('videoplayer-current-time', e.second);
};
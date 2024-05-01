const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: true, // 자동재생여부
      loop: true, // 반복재생여부
      playlist: 'An6LvWQuj_8',
    },
    events: {
      onReady: (event) => {
        event.target.mute(); // 음소거
      }
    }
  })
}
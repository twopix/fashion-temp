var tag = document.createElement('script');

var slideWrapper = $(".slider");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '360',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {    
        // setTimeout(stopVideo, 6000);
        done = true;
    }
}


slideWrapper.on("beforeChange", function (event, slick) {
    var currentSlide = $('.slider').slick('slickCurrentSlide');
    // console.log("before" + currentSlide);
    
    player.pauseVideo();
});
slideWrapper.on("afterChange", function (event, slick) {
    var currentSlide = $('.slider').slick('slickCurrentSlide');
    console.log("after current" + currentSlide);
    // slick = $(slick.$slider);
    if (currentSlide == 2) {
        player.playVideo();
    } else {
        player.pauseVideo();
    }
});

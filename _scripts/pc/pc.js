/* By 古学懂-170403104017 */
function imgInit() {
    var imgOpener = document.getElementsByClassName("img-opener");
    for (var i = 0; i < imgOpener.length; i++) {
        imgOpener[i].setAttribute("onclick", "imgView()");
    }
}
function videoPlay() {
    var videoElm = document.createElement("video");
    videoElm.setAttribute("src", "../_video/reddeadredemption2-pclaunch-zh_hans-720p60.mp4");
    videoElm.setAttribute("type", "video/mp4");
    videoElm.setAttribute("autoplay", "");
    videoElm.setAttribute("controls", "");
    videoElm.setAttribute("class", "video-active");
    videoElm.style.width = "100%";
    videoElm.style.height = "100%";
    videoElm.style.position = "absolute";
    videoElm.style.top = "0";
    videoElm.style.left = "0";
    videoElm.style.zIndex = "11";
    document.getElementById("video-cover").appendChild(videoElm);
    document.getElementById("video-cover").setAttribute("onclick", "");
}
// document.getElementById("video-cover").onclick=videoPlay();
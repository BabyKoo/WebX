/* By 古学懂-170403104017 */
urlArr = document.URL.split("/");
pageName = urlArr[urlArr.length - 1];
console.log(pageName);
function header() {
    $("header").load("../site-header.html");
}
function footer() {
    $("footer").load("../site-footer.html")
}
function siteInit() {
    header();
    footer();
}
function $id(id) {
    return document.getElementById(id);
}
// navInActive();
function navActive() {
    $id("header-left").onclick = navInActive;
    $id("site-nav").classList.remove("nav-inactive");
    $id("site-nav").classList.add("nav-active");
    $id("header-left").classList.remove("title-inactive");
    $id("header-left").classList.add("title-active");
    $id("router").classList.add("router-active");
    $id("router").onclick = navInActive;
    $id("site-footer").onclick = navInActive;
    $id("site-footer").classList.add("router-active");
}
function navInActive() {
    $id("header-left").onclick = navActive;
    $id("site-nav").classList.remove("nav-active");
    $id("site-nav").classList.add("nav-inactive");
    $id("header-left").classList.remove("title-active");
    $id("header-left").classList.add("title-inactive");
    $id("router").classList.remove("router-active");
    $id("site-footer").classList.remove("router-active");
}
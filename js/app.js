$( document ).ready(function() {
$(document).foundation();
$(".owl-carousel").owlCarousel({
  navigation: false,
  pagination: false,
  items: 2,
  itemsDesktop: false,
  itemsDesktopSmall: false, 
  itemsTablet: false,

});
var owl = $(".owl-carousel").data('owlCarousel');

$(".next").on("click", function() {owl.next();});
$(".previous").on("click", function() {owl.prev();});

$(".quote-carousel").owlCarousel({
  navigation: false,
  pagination: false,
  items:1,
  autoPlay: 5000,
  transitionStyle: "fade",
  singleItem: true,
});

$(".gallery").owlCarousel({
  navigation: false,
  pagination: false,
  items:1,
  singleItem: true,
  itemsDesktop: false,
  itemsDesktopSmall: false, 
  itemsTablet: false,
});

var gallery = $(".gallery").data('owlCarousel');

$(".gallery-left").on("click", function() {gallery.next();});
$(".gallery-right").on("click", function() {gallery.prev();});

/* Menu */

$(".mobile-toggle").on("click", function () {
  if(!$(".mobile-toggle").hasClass("secondary-close")) {
  $(this).toggleClass("icon-cross icon-menu-five");
  $("#nav-container").toggleClass("menu-on");
  $("#navbar").toggleClass("navbar-open");  
  $("#content-panel").toggleClass("mobile-menu-overlay");
   
  } else {
    $("#primary-nav > li > ul.menu-on").toggleClass("menu-on");
    $(".secondary-close").removeClass("secondary-close");
    $("#primary-nav > li > ul > li > ul").removeClass("menu-on"); 
   
  }
});

$("#primary-nav > li > a").on("click", function() {
  
  
  
  if($("#primary-nav > li > ul.menu-on").length ==0 || $(this).siblings("ul").hasClass("menu-on")){
      $("#content-panel").toggleClass("menu-overlay");
  }


  if($(".mobile-toggle").hasClass("icon-menu-five")) {    
    $(this).siblings("ul").toggleClass("menu-on");    
    $(".mobile-toggle").toggleClass("secondary-close");
    $(".mobile-toggle").toggleClass("icon-cross icon-menu-five");
    $("#nav-container").toggleClass("menu-on");
    $("#navbar").toggleClass("navbar-open"); 
    $("#content-panel").toggleClass("mobile-menu-overlay");
  }  
  
  else {
    /* Switching to other menu from open state */
    
    if($(this).siblings("ul").hasClass("menu-on")) {
        $(this).siblings("ul").toggleClass("menu-on"); 

     } 
     
      /* Open/Close Secondary Menu */
     else {
       $("#primary-nav > li > ul").removeClass("menu-on");
       $(this).siblings("ul").toggleClass("menu-on");
       $(".mobile-toggle").addClass("secondary-close");  
     } 
     
   
           
  }
  

    
});

$("#primary-nav > li > ul > li > a").on("click", function() {
  $(this).siblings("ul").toggleClass("menu-on");
});

$("#primary-nav > li > ul > li > ul").parent().prepend("<i class='float-right icon-arrow-right'></i>");

$(".dropdown-menu").on("click", function() {
  $(this).children("ul").toggleClass("hide");
  $(this).children("i").toggleClass("icon-arrow-right").toggleClass("icon-arrow-down"); 
});

$(".concertina-titlebar").on("click", function() {
  $(this).siblings(".concertina-content").slideToggle();
  $(this).find(".concertina-titlebar > i").toggleClass("icon-arrow-up icon-arrow-down"); 
});




$("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(1) > a").append("<i class='float-right icon-cross'></i>");
$("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(2) > a").append("<i class='float-right icon-arrow-right'></i>");
$("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(2)").siblings().addClass("hide");
$("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(2)").on("click", function() {
  $("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(2)").siblings().toggleClass("hide");
  $("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(2)>a>.icon-arrow-right").toggleClass("hide"); 
  $("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(1) > a, .tertiary-menu > li:nth-child(2) > a").addClass("tertiary-border");
});

$("#tertiary-menu-mobile >.tertiary-menu > li > a >.icon-cross").on("click", function() {
  $("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(2)").siblings().toggleClass("hide");
  $("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(2)>a>.icon-arrow-right").toggleClass("hide");
    $(".tertiary-menu > li:nth-child(1) > a, .tertiary-menu > li:nth-child(2) > a").removeClass("tertiary-border");
});

$(".link-hero").on("mouseover", function() {
  $(this).children(".hero-overlay-caption").css("display", "inline");
   $(this).addClass("hero-with-text-overlay");
});

$(".link-hero").on("mouseout", function() {
  $(this).children(".hero-overlay-caption").css("display", "none");
   $(this).removeClass("hero-with-text-overlay");
 
});
});


/* Twitter */

/*********************************************************************
*  #### Twitter Post Fetcher v16.0.2 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/
(function(E,q){"function"===typeof define&&define.amd?define([],q):"object"===typeof exports?module.exports=q():q()})(this,function(){function E(a){if(null===t){for(var f=a.length,b=0,k=document.getElementById(F),g="<ul>";b<f;)g+="<li>"+a[b]+"</li>",b++;k.innerHTML=g+"</ul>"}else t(a)}function q(a){return a.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,b){return b}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function G(a){a=a.getElementsByTagName("a");
for(var f=a.length-1;0<=f;f--)a[f].setAttribute("target","_blank")}function l(a,f){for(var b=[],k=new RegExp("(^| )"+f+"( |$)"),g=a.getElementsByTagName("*"),h=0,d=g.length;h<d;h++)k.test(g[h].className)&&b.push(g[h]);return b}function y(a){if(void 0!==a&&0<=a.innerHTML.indexOf("data-srcset"))return a=a.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0],decodeURIComponent(a).split('"')[1]}var F="",f=20,H=!0,x=[],z=!1,A=!0,n=!0,B=null,C=!0,D=!0,t=null,I=!0,u=!1,v=!0,J=!0,K=!1,m=null,L={fetch:function(a){void 0===
a.maxTweets&&(a.maxTweets=20);void 0===a.enableLinks&&(a.enableLinks=!0);void 0===a.showUser&&(a.showUser=!0);void 0===a.showTime&&(a.showTime=!0);void 0===a.dateFunction&&(a.dateFunction="default");void 0===a.showRetweet&&(a.showRetweet=!0);void 0===a.customCallback&&(a.customCallback=null);void 0===a.showInteraction&&(a.showInteraction=!0);void 0===a.showImages&&(a.showImages=!1);void 0===a.linksInNewWindow&&(a.linksInNewWindow=!0);void 0===a.showPermalinks&&(a.showPermalinks=!0);void 0===a.dataOnly&&
(a.dataOnly=!1);if(z)x.push(a);else{z=!0;F=a.domId;f=a.maxTweets;H=a.enableLinks;n=a.showUser;A=a.showTime;D=a.showRetweet;B=a.dateFunction;t=a.customCallback;I=a.showInteraction;u=a.showImages;v=a.linksInNewWindow;J=a.showPermalinks;K=a.dataOnly;var l=document.getElementsByTagName("head")[0];null!==m&&l.removeChild(m);m=document.createElement("script");m.type="text/javascript";m.src=void 0!==a.list?"https://syndication.twitter.com/timeline/list?callback=twitterFetcher.callback&dnt=false&list_slug="+
a.list.listSlug+"&screen_name="+a.list.screenName+"&suppress_response_codes=true&lang="+(a.lang||"en")+"&rnd="+Math.random():void 0!==a.profile?"https://syndication.twitter.com/timeline/profile?callback=twitterFetcher.callback&dnt=false&screen_name="+a.profile.screenName+"&suppress_response_codes=true&lang="+(a.lang||"en")+"&rnd="+Math.random():void 0!==a.likes?"https://syndication.twitter.com/timeline/likes?callback=twitterFetcher.callback&dnt=false&screen_name="+a.likes.screenName+"&suppress_response_codes=true&lang="+
(a.lang||"en")+"&rnd="+Math.random():"https://cdn.syndication.twimg.com/widgets/timelines/"+a.id+"?&lang="+(a.lang||"en")+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random();l.appendChild(m)}},callback:function(a){function m(a){var b=a.getElementsByTagName("img")[0];b.src=b.getAttribute("data-src-2x");return a}a.body=a.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,"");u||(a.body=a.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,
""));n||(a.body=a.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g,""));var b=document.createElement("div");b.innerHTML=a.body;"undefined"===typeof b.getElementsByClassName&&(C=!1);a=[];var k=[],g=[],h=[],d=[],r=[],p=[],e=0;if(C)for(b=b.getElementsByClassName("timeline-Tweet");e<b.length;){0<b[e].getElementsByClassName("timeline-Tweet-retweetCredit").length?d.push(!0):d.push(!1);if(!d[e]||d[e]&&D)a.push(b[e].getElementsByClassName("timeline-Tweet-text")[0]),r.push(b[e].getAttribute("data-tweet-id")),
n&&k.push(m(b[e].getElementsByClassName("timeline-Tweet-author")[0])),g.push(b[e].getElementsByClassName("dt-updated")[0]),p.push(b[e].getElementsByClassName("timeline-Tweet-timestamp")[0]),void 0!==b[e].getElementsByClassName("timeline-Tweet-media")[0]?h.push(b[e].getElementsByClassName("timeline-Tweet-media")[0]):h.push(void 0);e++}else for(b=l(b,"timeline-Tweet");e<b.length;){0<l(b[e],"timeline-Tweet-retweetCredit").length?d.push(!0):d.push(!1);if(!d[e]||d[e]&&D)a.push(l(b[e],"timeline-Tweet-text")[0]),
r.push(b[e].getAttribute("data-tweet-id")),n&&k.push(m(l(b[e],"timeline-Tweet-author")[0])),g.push(l(b[e],"dt-updated")[0]),p.push(l(b[e],"timeline-Tweet-timestamp")[0]),void 0!==l(b[e],"timeline-Tweet-media")[0]?h.push(l(b[e],"timeline-Tweet-media")[0]):h.push(void 0);e++}a.length>f&&(a.splice(f,a.length-f),k.splice(f,k.length-f),g.splice(f,g.length-f),d.splice(f,d.length-f),h.splice(f,h.length-f),p.splice(f,p.length-f));var b=[],e=a.length,c=0;if(K)for(;c<e;)b.push({tweet:a[c].innerHTML,author:k[c].innerHTML,
time:g[c].textContent,image:y(h[c]),rt:d[c],tid:r[c],permalinkURL:void 0===p[c]?"":p[c].href}),c++;else for(;c<e;){if("string"!==typeof B){var d=g[c].getAttribute("datetime"),w=new Date(g[c].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),d=B(w,d);g[c].setAttribute("aria-label",d);if(a[c].textContent)if(C)g[c].textContent=d;else{var w=document.createElement("p"),t=document.createTextNode(d);w.appendChild(t);w.setAttribute("aria-label",d);g[c]=w}else g[c].textContent=d}d=
"";H?(v&&(G(a[c]),n&&G(k[c])),n&&(d+='<div class="user">'+q(k[c].innerHTML)+"</div>"),d+='<p class="tweet">'+q(a[c].innerHTML)+"</p>",A&&(d=J?d+('<p class="timePosted"><a href="'+p[c]+'">'+g[c].getAttribute("aria-label")+"</a></p>"):d+('<p class="timePosted">'+g[c].getAttribute("aria-label")+"</p>"))):(n&&(d+='<p class="user">'+k[c].textContent+"</p>"),d+='<p class="tweet">'+a[c].textContent+"</p>",A&&(d+='<p class="timePosted">'+g[c].textContent+"</p>"));I&&(d+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+
r[c]+'" class="twitter_reply_icon"'+(v?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+r[c]+'" class="twitter_retweet_icon"'+(v?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+r[c]+'" class="twitter_fav_icon"'+(v?' target="_blank">':">")+"Favorite</a></p>");u&&void 0!==h[c]&&void 0!==y(h[c])&&(d+='<div class="media"><img src="'+y(h[c])+'" alt="Image from tweet" /></div>');u?b.push(d):!u&&a[c].textContent.length&&
b.push(d);c++}E(b);z=!1;0<x.length&&(L.fetch(x[0]),x.splice(0,1))}};return window.twitterFetcher=L});



/**
 * ### HOW TO CREATE A VALID ID TO USE: ###
 * Go to www.twitter.com and sign in as normal, go to your settings page.
 * Go to "Widgets" on the left hand side.
 * Create a new widget for what you need eg "user time line" or "search" etc.
 * Feel free to check "exclude replies" if you don't want replies in results.
 * Now go back to settings page, and then go back to widgets page and
 * you should see the widget you just created. Click edit.
 * Look at the URL in your web browser, you will see a long number like this:
 * 345735908357048478
 * Use this as your ID below instead!
 */

/**
 * How to use TwitterFetcher's fetch function:
 * 
 * @function fetch(object) Fetches the Twitter content according to
 *     the parameters specified in object.
 * 
 * @param object {Object} An object containing case sensitive key-value pairs
 *     of properties below.
 * 
 * You may specify at minimum the following two required properties:
 * 
 * @param object.id {string} The ID of the Twitter widget you wish
 *     to grab data from (see above for how to generate this number).
 * @param object.domId {string} The ID of the DOM element you want
 *     to write results to.
 *
 * You may also specify one or more of the following optional properties
 *     if you desire:
 *
 * @param object.maxTweets [int] The maximum number of tweets you want
 *     to return. Must be a number between 1 and 20. Default value is 20.
 * @param object.enableLinks [boolean] Set false if you don't want
 *     urls and hashtags to be hyperlinked.
 * @param object.showUser [boolean] Set false if you don't want user
 *     photo / name for tweet to show.
 * @param object.showTime [boolean] Set false if you don't want time of tweet
 *     to show.
 * @param object.dateFunction [function] A function you can specify
 *     to format date/time of tweet however you like. This function takes
 *     a JavaScript date as a parameter and returns a String representation
 *     of that date.
 * @param object.showRetweet [boolean] Set false if you don't want retweets
 *     to show.
 * @param object.customCallback [function] A function you can specify
 *     to call when data are ready. It also passes data to this function
 *     to manipulate them yourself before outputting. If you specify
 *     this parameter you must output data yourself!
 * @param object.showInteraction [boolean] Set false if you don't want links
 *     for reply, retweet and favourite to show.
 * @param object.showImages [boolean] Set true if you want images from tweet
 *     to show.
 * @param object.lang [string] The abbreviation of the language you want to use
 *     for Twitter phrases like "posted on" or "time ago". Default value
 *     is "en" (English).
 */

// ##### Simple example 1 #####
// A simple example to get my latest tweet and write to a HTML element with
// id "example1". Also automatically hyperlinks URLS and user mentions and
// hashtags.

function handleTweets(tweets) {
    var element = document.getElementById('example1');
    element.innerHTML = tweets;
    if(!$('.twitter-box').children('.media').length > 0) {
        $('.twitter-box').append('<div class="media"><img src="img/16by9.jpg" /></div>');
     }
  }



var configProfile = {
  "profile": {"screenName": 'rcmlondon'},
  "maxTweets": 1,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": true,
  "lang": 'en',
  "showRetweet": false,
  "customCallback": handleTweets
};
twitterFetcher.fetch(configProfile);









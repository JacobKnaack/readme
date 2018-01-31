// const articles = [
//   {
//     "id": 1,
//     "created_on": "Jan 30, 2018",
//     "name": "Building a Chat UI with basic HTML, CSS, and Javascript: Part 1",
//     "html": "<p class='subtitle'>This post is focused on basic web developement and design methodology. The goal is to help people take a prototype from concept to a development build running on a local computer. But the build will be simple enough to push to any hosting service without any fancy tools.</p>\
//             <p>Let\'s build a really simple Chat UI one that has all the features of a deployed chat application, but runs in the browser with nothing but three files:</p>\
//             <ul class='articleList'>\
//               <li>index.html</li>\
//               <li>style.css</li>\
//               <li>chat.js</li>\
//             </ul>\
//             <div class='divider'></div>\
//             <h3 class='contentHeading'>Before we start on coding we have to decide what we exactly we want to build</h3>\
//             <p>Let's go ahead and define some features for our chat, nothing fancy just some things we expect our UI to do:</p>\
//             <p class='textNumbers'>1) We want to see our message history in the main part of the UI, with an indicator for who sent each message.</p>\
//             <p class='textNumbers'>2) We want to be able to switch between multiple conversations with other users of the chat application.</p>\
//             <p class='textNumbers'>3) We want to have an input field which will serve as a place to type our message and send it to our selected conversation.</p>\
//             <p>Let\'s use a simple design I found off of google that has some pretty standard features for chat:</p>\
//             <img class='contentImg' src='https://cdn-images-1.medium.com/max/1600/1*5u4NzGRN_4hgRFsPGS92Sw.png'>\
//             <p>This will be our general design structure that will serve as a prototype for the look and feel on our interface. The next step we need to take is breaking these sections down into chunks for the browser.</p>\
//             <p>There are really three section of the this Interface that we really care about for our feature list that we outlined above:</p>\
//             <p class='textNumbers'>1) The conversations list on the left</p>\
//             <p class='textNumbers'>2) The list of messages in the middle section</p>\
//             <p class='textNumbers'>3) The input section at the bottom of the middle section</p>"
//   },
// ];


// const url = window.location.href;
// let queryString = url.substring(url.indexOf('?') + 4);

// for ( var item in articles) {
//   if (document.getElementById("submissions")) {
//     document.getElementById("submissions").innerHTML += "<li class='indexListItem'><a id='article" + articles[item].id + "' class='listAnchor' href='/template/article.html?id=" + articles[item].id + "'><i class='fa fa-html5 indexListImg' class aria-hidden='true'></i>"+articles[item].name+"</a></li>"
//   }
//   if (url.includes('article') && parseInt(queryString) === articles[item].id) {
//     document.getElementById('articleTitle').innerHTML = articles[item].name;
//     document.getElementById('createdOn').innerHTML = articles[item].created_on;
//     document.getElementById('articleText').innerHTML = articles[item].html;
//   }
// }
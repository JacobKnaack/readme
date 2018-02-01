const articles = [
  {
    "id": 1,
    "created_on": "Jan 30, 2018",
    "name": "Building a Chat UI with basic HTML, CSS, and Javascript: Part 1",
    "description": "Taking an idea from prototype to a working interface runnning in a Browser, with tools available to every modern computer user.",
    "html": "<p class='subtitle'>This post is focused on basic web development and design methodology. The goal is to help people take a prototype from concept to a development build running on a local computer. But the build will be simple enough to push to any hosting service without any fancy tools.</p>\
            <p>Let\'s build a really simple Chat UI, one that has all the features of a deployed chat application, but runs in the browser with nothing but three files:</p>\
            <ul class='articleList'>\
              <li>A File for holding the template for our User Interface: our HTML file</li>\
              <code>index.html</code>\
              <li>A File for defining how the template will appear in the Browser: our CSS file</li>\
              <code>style.css</code>\
              <li>A File for all the logic and functionality the app will use: our Javascript file</li>\
              <code>chat.js</code>\
            </ul>\
            <div class='divider'></div>\
            <h3 class='contentHeading'>Before we start writing code we have to decide what <em>exactly</em> we want to build</h3>\
            <p>Let's go ahead and define some features for our chat, nothing fancy just some things we expect our UI to do:</p>\
            <p class='textNumbers'>1) We want to see our message history in the main part of the UI, which prints the message text and an indicator or image for who sent each message.</p>\
            <p class='textNumbers'>2) We want to be able to switch between multiple conversations with other users of the chat application.</p>\
            <p class='textNumbers'>3) We want to have an input field which will serve as a place to type our message and send it to our selected conversation.</p>\
            <p>Let\'s use a simple design I found off of google that has some pretty standard features for chat:</p>\
            <img class='contentImg' src='https://cdn-images-1.medium.com/max/1600/1*5u4NzGRN_4hgRFsPGS92Sw.png'>\
            <p>This will be our general design structure that will serve as a prototype for the look and feel on our interface. The next step we need to take is breaking these sections down into chunks for the browser.</p>\
            <p>There are really three section of the this Interface that we really care about for our feature list that we outlined above:</p>\
            <p class='textNumbers'>1) The conversations list on the left</p>\
            <p class='textNumbers'>2) The list of messages in the middle section</p>\
            <p class='textNumbers'>3) The input section at the bottom of the middle section</p>\
            <div class='divider'></div>\
            <h3 class='contentHeading'>Now we can Begin to Structure Our Project</h3>\
            <p>Create a folder or directory anywhere on your computer, name it whatever you like, and create three files in that directory, one titled index.html, another titled style.css, and a third titled chat.js. Here's my directory structure after my files are created:</p>\
            <code class='codeBlock'>\
              project-folder<br>\
              |- index.html<br>\
              |- style.css<br>\
              |_ chat.js<br>\
            </code>\
            <p>With those files created, let open up our HTML file and begin to lay our the structure of the interface</p>\
            <p>Here is the boilerplate html code we want to start out with:</p>\
            <code class='codeBlock'>\
              index.html<br><br>\
              1&nbsp &lt;!DOCTYPE html&gt; <br>\
              2&nbsp &lt;html&gt; <br>\
              3&nbsp &nbsp&nbsp &lt;head&gt; <br>\
              4&nbsp &nbsp&nbsp&nbsp&nbsp &lt;meta charset=\"UTF-8\"&gt; <br>\
              5&nbsp &nbsp&nbsp&nbsp&nbsp &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt; <br>\
              6&nbsp &nbsp&nbsp &lt;head&gt; <br>\
              7&nbsp &nbsp&nbsp &lt;body&gt;<br>\
              8&nbsp &nbsp&nbsp &lt;body&gt;<br>\
              9&nbsp &lt;html&gt;\
            </code>\
            <p>From here will add some html between the body tags. The code we add here will only be used to give some shape to our UI. The important bits we will add using mocked data and javascript.</p>\
            <p>When we begin putting HTML in the body of the document, we must think about each element as a box.  The opening tag is the top of the box and the closing tag is the bottom of the box, and each preceding tag we put between those tags is another little box: </p>"  
  },
];


const url = window.location.href;
let queryString = url.substring(url.indexOf('?') + 4);

for ( var item in articles) {
  if (document.getElementById("submissions")) {
    document.getElementById("submissions").innerHTML += "<li class='indexListItem'><p class='date'>"+articles[item].created_on+"</p><a id='article" + articles[item].id + "' class='listAnchor' href='"+url+"template/article.html?id=" + articles[item].id + "'><i class='fa fa-code indexListImg' class aria-hidden='true'></i>"+articles[item].name+"</a><p class='articleDescription'>"+articles[item].description+"</p></li>"
  }
  if (url.includes('article') && parseInt(queryString) === articles[item].id) {
    document.getElementById('articleTitle').innerHTML = articles[item].name;
    document.getElementById('createdOn').innerHTML = articles[item].created_on;
    document.getElementById('articleText').innerHTML = articles[item].html;
  }
}
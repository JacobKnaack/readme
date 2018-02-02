const articles = [
  {
    "id": 1,
    "created_on": "Jan 30, 2018",
    "name": "Building a Chat UI with basic HTML, CSS, and Javascript: Part 1",
    "description": "Taking an idea from prototype to a working interface runnning in a Browser, with tools available to every modern computer user.",
    "html": "<p class='subtitle'>This post is focused on basic web development and design methodology. The goal is to help people take a prototype from concept to a development build running on a local computer. But the build will be simple enough to push to any hosting service without any fancy tools.</p>\
            <p>Let\'s build a really simple Chat UI, one that has all the features of a deployed chat application, but runs in the browser with nothing but three files:</p>\
            <ul class='articleList'>\
              <li>A File for holding the template for our User Interface: our HTML file <code>index.html</code></li>\
              <li>A File for defining how the template will appear in the Browser: our CSS file <code>style.css</code></li>\
              <li>A File for all the logic and functionality the app will use: our Javascript file <code>chat.js</code></li>\
            </ul>\
            <div class='divider'></div>\
            <h3 class='contentHeading'>Before we start writing code we have to decide what <em>exactly</em> we want to build</h3>\
            <p>Let's go ahead and define some features for our chat, nothing fancy just some things we expect our UI to do:</p>\
            <p class='textNumbers'>1) We want to see our message history in the main part of the UI, which prints the message text and an indicator or image for who sent each message.</p>\
            <p class='textNumbers'>2) We want to be able to switch between multiple conversations with other users of the chat application.</p>\
            <p class='textNumbers'>3) We want to have an input field which will serve as a place to type our message and send it to our selected conversation.</p>\
            <p>Let\'s use a simple design I found off of google that has some pretty standard features for chat:</p>\
            <img class='contentImg' src='https://cdn-images-1.medium.com/max/1600/1*5u4NzGRN_4hgRFsPGS92Sw.png'>\
            <p>This will be our general design structure that will serve as a prototype for the look and feel on our interface. The next step we need to take is to break these sections down into chunks for the browser.</p>\
            <p>There are really three section of the this Interface that we really care about for our feature list that we outlined above:</p>\
            <p class='textNumbers'>1) The conversations list on the left</p>\
            <p class='textNumbers'>2) The list of messages in the middle section</p>\
            <p class='textNumbers'>3) The input section at the bottom of the middle section</p>\
            <div class='divider'></div>\
            <h3 class='contentHeading'>Now we can Begin to Structure Our Project</h3>\
            <p>Create a folder or directory anywhere on your computer, name it whatever you like, and create three files in that directory, one titled <strong>index.html</strong>, another titled <strong>style.css</strong>, and a third titled <strong>chat.js</strong>. Here's my directory structure after my files are created:</p>\
            <code class='codeBlock'>\
              project-folder<br>\
              |- index.html<br>\
              |- style.css<br>\
              |_ chat.js<br>\
            </code>\
            <p>With those files created, let open up our HTML file and begin to lay our the structure of the interface</p>\
            <p>Here is the boilerplate html code we want to start out with:</p>\
            <h4 class='codeTitle'>index.html</h4>\
            <code class='codeBlock prettyprint linenums'>\
              &lt;!DOCTYPE html&gt; <br>\
              &lt;html&gt; <br>\
              &nbsp &lt;head&gt; <br>\
              &nbsp &nbsp &lt;meta charset=\"UTF-8\"&gt; <br>\
              &nbsp &nbsp &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt; <br>\
              &nbsp &lt;head&gt; <br>\
              &nbsp &lt;body&gt;<br>\
              &nbsp &lt;body&gt;<br>\
              &lt;html&gt;\
            </code>\
            <p class='codeComment'><em>// The two meta lines add some information for the Browser, letting it know that we are using UFT 8 character encoding for the HTML document, and making the content responsive to the device screen.</em></p>\
            <p>From here we can add some html between the body tags. The code we add here will only be used to give some shape to our UI. The important bits we will add using mocked data and javascript.</p>\
            <p>When we begin putting HTML in the body of the document, we must think about each element as a box.  The opening tag is the top of the box and the closing tag is the bottom of the box, and each preceding tag we put between those tags is another little box: </p>\
            <img class='contentImg' src='https://i.stack.imgur.com/bJKfH.png'>\
            <p>The first box we want to define is the box that will hold our <strong>Conversations</strong>:</p>\
            <h4 class='codeTitle'>index.html</h4>\
            <code class='prettyprint codeBlock linenums:7'>\
              &lt;body&gt;<br>\
              &nbsp &lt;div class='conversations'&gt; <br>\
              <br>\
              &nbsp &lt;/div&gt; <br>\
              &lt;body&gt;\
            </code>\
            <p>This will be the left most area of the screen, and will span the full height of the browser window.  We will pick a set pixel value for the width. By looking the protoype image I'll make a guess that it\'s around 200 pixels wide.</p>\
            <p>Let\'s open up our <strong>style.css</strong> file and add the styling we want to make this menu appear how we see in prototype:</p>\
            <h4 class='codeTitle'>style.css</h4>\
            <code class='codeBlock prettyprint linenums'>\
            body, html {<br>\
            &nbsp margin: 0;<br>\
            }<br><br>\
            .conversations {<br>\
            &nbsp position: relative;<br>\
            &nbsp top: 0;<br>\
            &nbsp left: 0;<br>\
            &nbsp width: 200px;<br>\
            &nbsp height: 100vh;<br>\
            &nbsp background-color: #E9E8F8;<br>\
            }</code>\
            <p class='codeComment'><em>// The first two lines take away any default margin given to the html and body elements</em></p>\
            <p>Let\'s test this out by adding a line to our <strong>index.html</strong> file so that it looks for our css file:</p>\
            <h4 class='codeTitle'>index.html</h4>\
            <code class='codeBlock prettyprint linenums:3'>\
            &nbsp &lt;head&gt; <br>\
            &nbsp&nbsp &lt;meta charset=\"UTF-8\"&gt; <br>\
            &nbsp&nbsp &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt; <br>\
            &lt;!-- this line below links our HTML and CSS together --&gt;<br>\
            &nbsp&nbsp &lt;link rel=\"stylesheet\" href=\"style.css\"&gt;<br>\
            &nbsp &lt;head&gt;</code>\
            <p>When you open up your html file in a Browser, you should see a 200 pixel wide box running down the length of the Browser window:</p>\
            <img class='screenshot' src='../asset/screenshots/1/conversationsEmpty.png'>\
            <p>Nice! Now lets add some more HTML to make a box for the main section of our chat application: the messageList and the messageInput:</p>\
            <h4 class='codeTitle'>index.html</h4>\
            <code class='codeBlock prettyprint linenums:8'>\
            &lt;body&gt;<br>\
            &nbsp &lt;div class='conversations'&gt; <br>\
            <br>\
            &nbsp &lt;/div&gt; <br>\
            &nbsp &lt;div class='messageContainer'&gt; <br>\
            &nbsp &nbsp &lt;div class='messageList'&gt;<br><br>\
            &nbsp &nbsp &lt;/div&gt;<br>\
            &nbsp &nbsp &lt;div class='messageInput'&gt;<br><br>\
            &nbsp &nbsp &lt;/div&gt;<br>\
            &nbsp &lt;/div&gt; <br>\
            &lt;body&gt;\</code>\
            <p class='codeComment'><em>// The first div will serve as a container for the messages and input. This way we can give this container styling that will help style both the messageList and messageInput relative to the conversations div.</em></p>\
            <p>Now let\'s modify our <strong>style.css</strong> file and give these elements the structure they need to display content properly:</p>\
            <h4 class='codeTitle'>style.css</h4>\
            <code class='codeBlock prettyprint linenums:7'>\
            .conversations {<br>\
            &nbsp position: relative;<br>\
            &nbsp top: 0;<br>\
            &nbsp left: 0;<br>\
            &nbsp width: 200px;<br>\
            &nbsp height: 100vh;<br>\
            &nbsp background-color: #E9E8F8;<br>\
            &nbsp float; left;<br>\
            }<br><br>\
            .messageContainer {<br>\
            &nbsp position: relative;<br>\
            &nbsp top: 0;<br>\
            &nbsp left: 200px;<br>\
            &nbsp width: calc(100% - 200px);<br>\
            &nbsp height: 100%;<br>\
            }<br><br>\
            .messageList {<br>\
            &nbsp height: calc(100% - 100px);<br>\
            &nbsp width: 100%;<br>\
            }<br><br>\
            .messageInput {<br>\
            &nbsp position: relative;<br>\
            &nbsp height: 100px;<br>\
            &nbsp width; 100%;<br>\
            }</code>\
            <p>We should end up with three section taking up all of our browser window, the messageList and messageInput will appear pretty black, but there should be a subtle border between them :</p>\
            <img class='screenshot' src='../asset/screenshots/1/finishedLayout.png'>\
            <p>Let's look at our CSS and talk about some import parts that make our layout appear the way it does:</p>\
            <code class='codeBlock prettyprint linenums:8'>\
            &nbsp position: relative;</code>\
            <p class='codeComment larger'>this line gives our conversations element a positioning relative to it\'s normal position.  This way we can give it top, right, bottom, and left css commands which will adjust the positioning of the <em>away</em> from its normal position.</p>\
            <code class='codeBlock prettyprint linenums:14'>\
            &nbsp float: left;</code>\
            <p class='codeComment larger'>Giving the element a styling of float: left will allow the element to be positioned to the left of the preceding element.  By adding this to the conversations CSS block, we are telling the conversations div to appear on the left side of whatever element comes after, in this case: the messageContainer. Without this stlyling command, the messaageContainer would appear below the conversations div.</p>\
            <code class='codeBlock prettyprint linenums:21'>\
            &nbsp width: calc(100% - 200px);</code>\
            <p class='codeComment larger'>Here we are telling the messageContainer to have a width that is equal to the 100% of its <em>parent</em> container minus 200px, calc() is an actual CSS function that lets you perform calculations with CSS values. In this case it's the body element which we've given a width of 100vw (vw stands for view-width) minus the 200px for the width of the conversations div.</p>\
            <p>That pretty much covers the structure of our project. On to mocking some data and using some javascript to add that content to our HTML.</p>\
            <div class='divider'></div>\
            <h3 class='contentHeading'>Adding Mocked Data and Talking to our HTML with Javascript</h3>"
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
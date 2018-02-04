const articles = [
  {
    "id": 1,
    "created_on": "Feb 2, 2018",
    "name": "Building a Chat UI with basic HTML, CSS, and Javascript: Part 1",
    "description": "Taking an idea from prototype to a working interface runnning in a Browser, with tools available to every modern computer user.",
    "html": "<p class='subtitle'>This post is focused on basic web development and design methodology. The goal is to help people take a prototype from concept to a development build running on a local computer. But the build will be simple enough to push to any hosting service without any fancy tools.</p>\
            <p>Let\'s build a really simple Chat UI, one that has all the features of a deployed chat application, but runs in the browser with nothing but three files:</p>\
            <ul class='articleList'>\
            <li>A File for holding the template for our User Interface: our HTML file <code>index.html</code></li>\
            <li>A File for defining how the template will appear in the Browser: our CSS file <code>style.css</code></li>\
            <li>A File for all the logic and functionality the app will use: our Javascript file <code>chat.js</code></li>\
            </ul>\
            <p>Using just these three files we are going to accomplish a few things in part 1 of this tutorial series:<br><br> - We are going to layout the general User Interface structure of a Chat Application. <br><br> - We are going to create a set of data we can use use to test out our applications functionality,<br><br> - and we are going to write some logic to append that data to our UI.</p>\
            <div class='divider'></div>\
            <h3 class='contentHeading'>Before we start writing code we have to decide what <em>exactly</em> we want to build</h3>\
            <p>Let's go ahead and define some features for our UI, nothing fancy just some things we expect our interface to do:</p>\
            <p class='textNumbers'>1) We want to see our message history in the main part of the UI, which prints the message text and an indicator or image for who sent each message.</p>\
            <p class='textNumbers'>2) We want to be able to switch between multiple conversations with other users of the chat application.</p>\
            <p class='textNumbers'>3) We want to have an input field which will serve as a place to type our message and send it to our selected conversation.</p>\
            <p>Let\'s use a simple design I found off of google that has some pretty standard features for chat:</p>\
            <img class='contentImg' src='https://cdn-images-1.medium.com/max/1600/1*5u4NzGRN_4hgRFsPGS92Sw.png'>\
            <p>This will be our general design structure that will serve as a prototype for the look and feel on our interface. The next step we need to take is to break these sections down into chunks for the browser.</p>\
            <p>There are really three sections of this Interface that we really care about for our feature list that we outlined above:</p>\
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
            <p>With those files created, open up the HTML file in whatever text editor you like best, and begin to lay out the structure of the interface</p>\
            <p>Here is the boilerplate html code we want to start out with:</p>\
            <h4 class='codeTitle'>index.html</h4>\
            <code class='codeBlock prettyprint linenums'>\
              &lt;!DOCTYPE html&gt; <br>\
              &lt;html&gt; <br>\
              &nbsp &lt;head&gt; <br>\
              &nbsp &nbsp &lt;meta charset=\"UTF-8\"&gt; <br>\
              &nbsp &nbsp &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt; <br>\
              &nbsp &lt;/head&gt; <br>\
              &nbsp &lt;body&gt;<br>\
              &nbsp &lt;/body&gt;<br>\
              &lt;html&gt;\
            </code>\
            <p class='codeComment'><em>// The two meta lines add some information for the Browser, letting it know that we are using UFT 8 character encoding for the HTML document, and making the content responsive to the device screen.</em></p>\
            <p>From here we can add some html between the body tags. The code we add here will only be used to give some shape to our UI. The important bits we will add using mocked data and javascript.</p>\
            <p>When we begin putting HTML in the body of the document, we must think about each element as a box.  The opening tag is the top of the box and the closing tag is the bottom of the box, and each preceding tag we put between those tags is another box within: </p>\
            <img class='contentImg' src='https://i.stack.imgur.com/bJKfH.png'>\
            <p>The first box we want to define is the box that will hold our <strong>Conversations</strong>:</p>\
            <h4 class='codeTitle'>index.html</h4>\
            <code class='prettyprint codeBlock linenums:7'>\
              &lt;body&gt;<br>\
              &nbsp &lt;div id='conversations'&gt; <br>\
              <br>\
              &nbsp &lt;/div&gt; <br>\
              &lt;/body&gt;\
            </code>\
            <p>This will be the left most area of the screen, and will span the full height of the browser window.  We will pick a set pixel value for the width. By looking the protoype image I'll make a guess that it\'s around 200 pixels wide.</p>\
            <p>Let\'s open up our <strong>style.css</strong> file and add the styling we want to make this menu appear how we see in prototype:</p>\
            <h4 class='codeTitle'>style.css</h4>\
            <code class='codeBlock prettyprint linenums'>\
            body, html {<br>\
            &nbsp height: 100vh;<br>\
            &nbsp width: 100vw;<br>\
            &nbsp margin: 0;<br>\
            }<br><br>\
            #conversations {<br>\
            &nbsp position: relative;<br>\
            &nbsp top: 0;<br>\
            &nbsp left: 0;<br>\
            &nbsp width: 200px;<br>\
            &nbsp height: 100vh;<br>\
            &nbsp background-color: #E9E8F8;<br>\
            }</code>\
            <p class='codeComment'><em>// The first CSS block takes away any default margin given to the html and body elements, as well as gives them a width and a height the same size as the Browser window.</em></p>\
            <p>Let\'s test this out by adding a line to our <strong>index.html</strong> file so that it looks for our css file:</p>\
            <h4 class='codeTitle'>index.html</h4>\
            <code class='codeBlock prettyprint linenums:3'>\
            &nbsp &lt;head&gt; <br>\
            &nbsp&nbsp &lt;meta charset=\"UTF-8\"&gt; <br>\
            &nbsp&nbsp &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt; <br>\
            &lt;!-- this line below links our HTML and CSS together --&gt;<br>\
            &nbsp&nbsp &lt;link rel=\"stylesheet\" href=\"style.css\"&gt;<br>\
            &nbsp &lt;/head&gt;</code>\
            <p>When you open up your html file in a Browser, you should see a 200 pixel wide box running down the length of the Browser window:</p>\
            <img class='screenshot' src='../asset/screenshots/1/conversationsEmpty.png'>\
            <p>Nice! Now lets add some more HTML to make a box for the main section of our chat application: the messageList and the messageInput:</p>\
            <h4 class='codeTitle'>index.html</h4>\
            <code class='codeBlock prettyprint linenums:8'>\
            &lt;body&gt;<br>\
            &nbsp &lt;div id='conversations'&gt; <br>\
            <br>\
            &nbsp &lt;/div&gt; <br>\
            &lt;!-- this is where we create the opening tag for main part of our screen --&gt;<br>\
            &nbsp &lt;div id='messageContainer'&gt;<br><br>\
            &lt;!-- here is the container for our list of messages --&gt;<br>\
            &nbsp &nbsp &lt;div id='messageList'&gt;<br><br>\
            &nbsp &nbsp &lt;/div&gt;<br><br>\
            &lt;!-- here is the container just for the message input at the bottom of the screen --&gt;<br>\
            &nbsp &nbsp &lt;div id='messageInput'&gt;<br><br>\
            &nbsp &nbsp &lt;/div&gt;<br>\
            &nbsp &lt;/div&gt; <br>\
            &lt;/body&gt;\</code>\
            <p class='codeComment'><em>// The first div will serve as a container for the messages and input. This way we can give this container styling that will help style both the messageList and messageInput relative to the conversations div.</em></p>\
            <p>Now let\'s modify our <strong>style.css</strong> file and give these elements the structure they need to display content properly:</p>\
            <h4 class='codeTitle'>style.css</h4>\
            <code class='codeBlock prettyprint linenums:7'>\
            #conversations {<br>\
            &nbsp position: relative;<br>\
            &nbsp top: 0;<br>\
            &nbsp left: 0;<br>\
            &nbsp width: 200px;<br>\
            &nbsp height: 100vh;<br>\
            &nbsp background-color: #E9E8F8;<br>\
            &nbsp float; left;<br>\
            }<br><br>\
            #messageContainer {<br>\
            &nbsp position: relative;<br>\
            &nbsp top: 0;<br>\
            &nbsp left: 200px;<br>\
            &nbsp width: calc(100% - 200px);<br>\
            &nbsp height: 100%;<br>\
            }<br><br>\
            #messageList {<br>\
            &nbsp height: calc(100% - 100px);<br>\
            &nbsp width: 100%;<br>\
            }<br><br>\
            #messageInput {<br>\
            &nbsp position: relative;<br>\
            &nbsp height: 100px;<br>\
            &nbsp width: 100%;<br>\
            &nbsp border-top: thin solid #e3e3e3;<br>\
            }</code>\
            <p>We should end up with three sections taking up all of our browser window, the messageList and messageInput will appear pretty blank, but there should be a subtle border between them :</p>\
            <img class='screenshot' src='../asset/screenshots/1/finishedLayout.png'>\
            <p>Let's look at our CSS and talk about some important parts that make our layout appear the way it does:</p>\
            <code class='codeBlock prettyprint linenums:8'>\
            &nbsp position: relative;</code>\
            <p class='codeComment larger'>this line gives our conversations element a positioning relative to it\'s normal position.  This way we can give it top, right, bottom, and left css commands which will adjust the positioning of the element <em>away</em> from its normal position.</p>\
            <code class='codeBlock prettyprint linenums:14'>\
            &nbsp float: left;</code>\
            <p class='codeComment larger'>Giving the element a styling of float: left will allow the element to be positioned to the left of the proceding element.  By adding this to the conversations CSS block, we are telling the conversations div to appear on the left side of whatever element comes after, in this case: the messageContainer. Without this stlyling command, the messageContainer would appear below the conversations div.</p>\
            <code class='codeBlock prettyprint linenums:21'>\
            &nbsp width: calc(100% - 200px);</code>\
            <p class='codeComment larger'>Here we are telling the messageContainer to have a width that is equal to the 100% of its <em>parent</em> container minus 200px, calc() is an actual CSS function that lets you perform calculations with CSS values. In this case it's the body element which we've given a width of 100vw (vw stands for view-width) minus the 200px for the width of the conversations div.</p>\
            <p>That pretty much covers the general layout of our project. Now we can focus on getting this UI to function with some mocked Chat Data.</p>\
            <div class='divider'></div>\
            <h3 class='contentHeading'>Adding Mocked Data and Talking to our HTML with Javascript</h3>\
            <p>What do I mean by Mocked Data?  This is essentially some data that will mimic real world data coming in from a  backend server with a database. Sinse we are only focused on programming an Interface, we aren't concerned with how we get data from the backend at the moment, just how our app uses the data in a useful way for our user.</p>\
            <p>Lets create some Javascript objects that will serve as data models being requested from a chat database.  Open up the <strong>chat.js</strong> file and create our objects:</p>\
            <h4 class='codeTitle'>chat.js</h4>\
            <code class='codeBlock prettyprint linenums'>\
            var conversations = [<br>\
            &nbsp {<br>\
            &nbsp &nbsp \"id\": 001,<br>\
            &nbsp &nbsp \"name\": \"Mike\"<br>\
            &nbsp },<br>\
            &nbsp {<br>\
            &nbsp &nbsp \"id\": 002,<br>\
            &nbsp &nbsp \"name\": \"Suzzane\"<br>\
            &nbsp }<br>\
            ];<br><br>\
            var messages = [<br>\
            &nbsp {<br>\
            &nbsp &nbsp \"id\": 0001,<br>\
            &nbsp &nbsp \"created_at\": \"2018-1-30T03:24:00\",<br>\
            &nbsp &nbsp \"from\": 001,<br>\
            &nbsp &nbsp \"to\": 000,<br>\
            &nbsp &nbsp \"text\": \"We should get Suzzane and go bowling.\"<br>\
            &nbsp },<br>\
            &nbsp {<br>\
            &nbsp &nbsp \"id\": 0002,<br>\
            &nbsp &nbsp \"created_at\": \"2018-1-30T04:50:00\",<br>\
            &nbsp &nbsp \"from\": \"002\",<br>\
            &nbsp &nbsp \"to\": 000,<br>\
            &nbsp &nbsp \"text\": \"I think Mike wants to go bowling.\"<br>\
            &nbsp },<br>\
            &nbsp {<br>\
            &nbsp &nbsp \"id\": 0003,<br>\
            &nbsp &nbsp \"created_at\": \"2018-1-30T03:30:00\",<br>\
            &nbsp &nbsp \"from\": 000,<br>\
            &nbsp &nbsp \"to\": 001,<br>\
            &nbsp &nbsp \"text\": \"I don\'t think she wants to go bowling.\"<br>\
            &nbsp },<br>\
            &nbsp {<br>\
            &nbsp &nbsp \"id\": 0004,<br>\
            &nbsp &nbsp \"created_at\": \"2018-1-30T05:45:00\",<br>\
            &nbsp &nbsp \"from\": 000,<br>\
            &nbsp &nbsp \"to\": 002,<br>\
            &nbsp &nbsp \"text\": \"I know! He is quite persistent.\"<br>\
            &nbsp }<br>\
            ];\
            </code>\
            <p class='codeComment'><em>// We have created two arrays for now.  The first will serve as a a data structure to populate our conversations menu, the second will serve as a data structure to populate our messages list.</em></p>\
            <p>With this in  place we can continue on and create our first piece of Javascript logic that will append the conversation information properly to our conversations menu:</p>\
            <h4 class='codeTitle'>chat.js</h4>\
            <code class='codeBlock prettyprint linenums:43'>\
            for (var item in conversations) {<br>\
            &nbsp document.getElementById('conversations').innerHTML += \"\\<br>\
            &nbsp &nbsp  &lt;div class='conversationMenuItem'&gt;\\<br>\
            &nbsp &nbsp &nbsp &lt;h3 class='conversationName'&gt;\\<br>\
            &nbsp &nbsp &nbsp \"+ conversations[item].name +\"\\<br>\
            &nbsp &nbsp &nbsp\ &lt;/h3&gt;\\<br>\
            &nbsp &nbsp &lt;/div&gt;\"<br>\
            }</code>\
            <p>Let\'s add a script tag linking this Javascript file to our HTML file: </p>\
            <h4 class='codeTitle'>index.html</h4>\
            <code class='codeBlock prettyprint linenums'>\
            &lt;!DOCTYPE html&gt; <br>\
            &lt;html&gt; <br>\
            &nbsp &lt;head&gt; <br>\
            &nbsp &nbsp &lt;meta charset=\"UTF-8\"&gt; <br>\
            &nbsp &nbsp &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt; <br>\
            &nbsp &lt;/head&gt; <br>\
            &nbsp &lt;body&gt;<br>\
            &nbsp &lt;div id='conversations'&gt; <br>\
            <br>\
            &nbsp &lt;/div&gt; <br>\
            &nbsp &lt;div id='messageContainer'&gt; <br>\
            &nbsp &nbsp &lt;div id='messageList'&gt;<br><br>\
            &nbsp &nbsp &lt;/div&gt;<br>\
            &nbsp &nbsp &lt;div id='messageInput'&gt;<br><br>\
            &nbsp &nbsp &lt;/div&gt;<br>\
            &nbsp &lt;/div&gt; <br>\
            &nbsp &lt;/body&gt;<br>\
            &lt;!-- Add this at the bottom of the document or in the head --&gt;<br>\
            &nbsp &lt;script src='./chat.js'&gt;&lt;/script&gt;<br>\
            &lt;html&gt;\</code>\
            <p>Now when we open up our index.html doucment in the Browser we should see this:</p>\
            <img class='screenshot' src='../asset/screenshots/1/firstFunction.png'>\
            <p>Let\'s explain what is going on here:</p>\
            <code class='codeBlock prettyprint linenums:43'>\
            for (var item in conversations) {</code>\
            <p class='codeComment larger'>this is the beginning of a for loop which is being told to loop through the conversations array, and each index of that array is represented by a variable declared as item.</p>\
            <code class='codeBlock prettyprint linenums:44'>\
            &nbsp document.getElementById('conversations').innerHTML += \"\\<br>\
            &nbsp &nbsp  &lt;div class='conversationMenuItem'&gt;\\<br>\
            &nbsp &nbsp &nbsp &lt;h3 class='conversationName'&gt;\\<br>\
            &nbsp &nbsp &nbsp \"+ conversations[item].name +\"\\<br>\
            &nbsp &nbsp &nbsp\ &lt;/h3&gt;\\<br>\
            &nbsp &nbsp &lt;/div&gt;\"</code>\
            <p class='codeComment larger'>in the body of the for loop, we are calling a method on the <a href='https://www.w3schools.com/js/js_htmldom.asp' target='_blank'>Document Object Model.</a> The method getElementById grabs an html element with the id name that matches the string provided between parentheses.  For each item in the conversations array, we grab the conversations div element, and add some HTML into the div element itself. In this case we are adding another div with an h3 within.</p>\
            <p>Let\'s do the same thing for the messages array:</p>\
            <code class='codeBlock prettyprint linenums:52'>\
            for (var item in messages) {<br>\
            &nbsp document.getElementById('messageList').innerHTML += \"\\<br>\
            &nbsp &nbsp &lt;div class='messageItem'&gt;\\<br>\
            &nbsp &nbsp &nbsp &lt;p class='messageText'&gt;\\<br>\
            &nbsp &nbsp &nbsp \"+ messages[item].text +\"\\<br>\
            &nbsp &nbsp &nbsp &lt;/p&gt;\\<br>\
            &nbsp &nbsp &lt;/div&gt;\"<br>}</code>\
            <p class='codeComment'><em>// This does the same thing as the function above it but this time we are iterating through the messages array and appending them to the messageList element.</em></p>\
            <p>Now we should see all of our messages placed in our messageList element in the main part of the UI:</p>\
            <img class='screenshot' src='../asset/screenshots/1/addedMessages.png'>\
            <p>Great! Now the last thing we\'ll do is add a little bit of CSS to style these messages. let\'s make our element classes look more like our prototype:</p>\
            <h4 class='codeTitle'>stlye.css</h4>\
            <code class='codeBlock prettyprint linenums:7'>\
            #conversations {<br>\
            &nbsp position: relative;<br>\
            &nbsp top: 0;<br>\
            &nbsp left: 0;<br>\
            &nbsp width: 200px;<br>\
            &nbsp height: 100vh;<br>\
            &nbsp background-color: #E9E8F8;<br>\
            &nbsp float; left;<br>\
            }<br><br>\
            /* center our text in the Conversations Menu */<br>\
            .conversationName {<br>\
            &nbsp text-align: center;<br>\
            }<br><br>\
            #messageContainer {<br>\
            &nbsp position: relative;<br>\
            &nbsp top: 0;<br>\
            &nbsp left: 200px;<br>\
            &nbsp width: calc(100% - 200px);<br>\
            &nbsp height: 100%;<br>\
            }<br><br>\
            #messageList {<br>\
            /* give our messageList a position absolute so we can move<br> it to the bottom of the page */<br>\
            &nbsp position: absolute;<br>\
            &nbsp bottom: 100px;<br>\
            /* We also change the height to auto so its size changes<br> depending on the elements within */<br>\
            &nbsp height: auto;<br>\
            &nbsp width: 100%;<br>\
            }<br><br>\
            /* We add some styling for our messageItem element <br> so that it aligns properly in the messageList and displays nicely */<br>\
            .messageItem {<br>\
            &nbsp height: 40px;<br>\
            &nbsp width: 50 %;<br>\
            &nbsp margin: 0 auto;<br>\
            }<br><br>\
            /* Now we add some styling for our text so that it appears white and has a nicer background with a border-radius.*/<br>\
            .messageText {<br>\
            &nbsp margin: 0;<br>\
            &nbsp height: 30px;<br>\
            &nbsp line-height: 30px;<br>\
            &nbsp background-color: #6F739A;<br>\
            &nbsp text-align: left;<br>\
            &nbsp border-radius: 10px;<br>\
            &nbsp padding: 0 5px;<br>\
            &nbsp color: white;<br>\
            }<br><br>\
            /* We also change up the input so it sticks to the bottom.*/<br>\
            #messageInput {<br>\
            &nbsp position: absolute;<br>\
            &nbsp bottom: 0;<br>\
            &nbsp height: 100px;<br>\
            &nbsp width: 100%;<br>\
            &nbsp border-top: thin solid #e3e3e3;<br>\
            }</code>\
            <p>Now our messages are looking a little more styled:</p>\
            <img class='screenshot' src='../asset/screenshots/1/messagesStyled.png'>\
            <p>Let\'s look at these changes a little more closely and see what our changes have done:</p>\
            <code class='codeBlock prettyprint linenums:33'>\
            &nbsp position: absolute;<br>\
            &nbsp bottom: 100px;\
            </code>\
            <p class='codeComment larger'>These lines are important as they change the position of the messageList Element from relative to absolute, giving us the ability to move this element anywhere realtive to it's parent container, in this case 100px from the bottom of the messageContainer. </p>\
            <code class='codeBlock prettyprint linenums:63'>\
            &nbsp position: absolute;<br>\
            &nbsp bottom: 0;\
            </code>\
            <p class='codeComment larger'>We also do the same for the messageInput container so it will always be positioned at the bottom of the messageContainer.</p>\
            <p>Great! Now we have a decently styled UI with all of our important information being displayed properly, let's look back at what we accomplished:</p>\
            <ul class='articleList'>\
            <li class='indented'><i class='fas fa-check-square'></i>We wrote an HTML Document and structured it with some styled elements.</li>\
            <li class='indented'><i class='fas fa-check-square'></i>We created a mocked Database with pertenant data for a Chat UI.</li>\
            <li class='indented'><i class='fas fa-check-square'></i>We wrote some Javascript that successfully appends that data to appropriate sections of our UI.</li>\
            </ul>\
            <p>Next we will program our UI for user interaction, we will filter our message for a selected conversation and create our input element for adding messages to the messages array and updating the messageList element.</p>" 
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
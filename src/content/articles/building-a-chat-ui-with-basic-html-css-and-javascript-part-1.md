---
title: "Building a Chat UI with basic HTML, CSS, and Javascript: Part 1"
description: "Taking an idea from prototype to a working interface running in a Browser, with tools available to every modern computer user."
date: 2018-02-02
---

This post is focused on basic web development and design methodology. The goal is to help people take a prototype from concept to a development build running on a local computer. But the build will be simple enough to push to any hosting service without any fancy tools.

Let's build a really simple Chat UI, one that has all the features of a deployed chat application, but runs in the browser with nothing but three files:

- A File for holding the template for our User Interface: our HTML file `index.html`
- A File for defining how the template will appear in the Browser: our CSS file `style.css`
- A File for all the logic and functionality the app will use: our Javascript file `chat.js`

Using just these three files we are going to accomplish a few things in part 1 of this tutorial series:

- We are going to layout the general User Interface structure of a Chat Application.
- We are going to create a set of data we can use use to test out our applications functionality,
- and we are going to write some logic to append that data to our UI.

---

## Before we start writing code we have to decide what _exactly_ we want to build

Let's go ahead and define some features for our UI, nothing fancy just some things we expect our interface to do:

1) We want to see our message history in the main part of the UI, which prints the message text and an indicator or image for who sent each message.

2) We want to be able to switch between multiple conversations with other users of the chat application.

3) We want to have an input field which will serve as a place to type our message and send it to our selected conversation.

Let's use a simple design I found off of google that has some pretty standard features for chat:

![Prototype design of a chat interface](https://cdn-images-1.medium.com/max/1600/1*5u4NzGRN_4hgRFsPGS92Sw.png)

This will be our general design structure that will serve as a prototype for the look and feel on our interface. The next step we need to take is to break these sections down into chunks for the browser.

There are really three sections of this Interface that we really care about for our feature list that we outlined above:

1) The conversations list on the left

2) The list of messages in the middle section

3) The input section at the bottom of the middle section

---

## Now we can Begin to Structure Our Project

Create a folder or directory anywhere on your computer, name it whatever you like, and create three files in that directory, one titled **index.html**, another titled **style.css**, and a third titled **chat.js**. Here's my directory structure after my files are created:

```txt
project-folder
|- index.html
|- style.css
|_ chat.js
```

With those files created, open up the HTML file in whatever text editor you like best, and begin to lay out the structure of the interface

Here is the boilerplate html code we want to start out with:

**`index.html`**

```html
<!DOCTYPE html> 
<html> 
  <head> 
    <meta charset='UTF-8'> 
    <meta name='viewport' content='width=device-width, initial-scale=1.0'> 
  </head> 
  <body>
  </body>
</html>
```

_// The two meta lines add some information for the Browser, letting it know that we are using UFT 8 character encoding for the HTML document, and making the content responsive to the device screen._

From here we can add some html between the body tags. The code we add here will only be used to give some shape to our UI. The important bits we will add using mocked data and javascript.

When we begin putting HTML in the body of the document, we must think about each element as a box. The opening tag is the top of the box and the closing tag is the bottom of the box, and each preceding tag we put between those tags is another box within:

![Diagram of the chat interface split into sections](https://i.stack.imgur.com/bJKfH.png)

The first box we want to define is the box that will hold our **Conversations**:

**`index.html`**

```html
<body>
  <div id='conversations'> 

  </div> 
</body>
```

This will be the left most area of the screen, and will span the full height of the browser window. We will pick a set pixel value for the width. By looking the protoype image I'll make a guess that it's around 200 pixels wide.

Let's open up our **style.css** file and add the styling we want to make this menu appear how we see in prototype:

**`style.css`**

```css
body, html {
  height: 100vh;
  width: 100vw;
  margin: 0;
}

#conversations {
  position: relative;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background-color: #E9E8F8;
}
```

_// The first CSS block takes away any default margin given to the html and body elements, as well as gives them a width and a height the same size as the Browser window._

Let's test this out by adding a line to our **index.html** file so that it looks for our css file:

**`index.html`**

```html
  <head> 
   <meta charset='UTF-8'> 
   <meta name='viewport' content='width=device-width, initial-scale=1.0'> 
<!-- this line below links our HTML and CSS together -->
   <link rel='stylesheet' href='style.css'>
  </head>
```

When you open up your html file in a Browser, you should see a 200 pixel wide box running down the length of the Browser window:

![The chat page with an empty conversations list](/readme/images/articles/building-a-chat-ui-with-basic-html-css-and-javascript-part-1/conversationsEmpty.png)

Nice! Now lets add some more HTML to make a box for the main section of our chat application: the messageList and the messageInput:

**`index.html`**

```html
<body>
  <div id='conversations'> 

  </div> 
<!-- this is where we create the opening tag for main part of our screen -->
  <div id='messageContainer'>

<!-- here is the container for our list of messages -->
    <div id='messageList'>

    </div>

<!-- here is the container just for the message input at the bottom of the screen -->
    <div id='messageInput'>

    </div>
  </div> 
</body>
```

_// The first div will serve as a container for the messages and input. This way we can give this container styling that will help style both the messageList and messageInput relative to the conversations div._

Now let's modify our **style.css** file and give these elements the structure they need to display content properly:

**`style.css`**

```css
#conversations {
  position: relative;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background-color: #E9E8F8;
  float: left;
}

#messageContainer {
  position: relative;
  top: 0;
  left: 200px;
  width: calc(100% - 200px);
  height: 100%;
}

#messageList {
  height: calc(100% - 100px);
  width: 100%;
}

#messageInput {
  position: relative;
  height: 100px;
  width: 100%;
  border-top: thin solid #e3e3e3;
}
```

We should end up with three sections taking up all of our browser window, the messageList and messageInput will appear pretty blank, but there should be a subtle border between them :

![The finished chat layout](/readme/images/articles/building-a-chat-ui-with-basic-html-css-and-javascript-part-1/finishedLayout.png)

Let's look at our CSS and talk about some important parts that make our layout appear the way it does:

```css
  position: relative;
```

this line gives our conversations element a positioning relative to it's normal position. This way we can give it top, right, bottom, and left css commands which will adjust the positioning of the element _away_ from its normal position.

```css
  float: left;
```

Giving the element a styling of float: left will allow the element to be positioned to the left of the proceding element. By adding this to the conversations CSS block, we are telling the conversations div to appear on the left side of whatever element comes after, in this case: the messageContainer. Without this stlyling command, the messageContainer would appear below the conversations div.

```css
  width: calc(100% - 200px);
```

Here we are telling the messageContainer to have a width that is equal to the 100% of its _parent_ container minus 200px, calc() is an actual CSS function that lets you perform calculations with CSS values. In this case it's the body element which we've given a width of 100vw (vw stands for view-width) minus the 200px for the width of the conversations div.

That pretty much covers the general layout of our project. Now we can focus on getting this UI to function with some mocked Chat Data.

---

## Adding Mocked Data and Talking to our HTML with Javascript

What do I mean by Mocked Data? This is essentially some data that will mimic real world data coming in from a backend server with a database. Sinse we are only focused on programming an Interface, we aren't concerned with how we get data from the backend at the moment, just how our app uses the data in a useful way for our user.

Lets create some Javascript objects that will serve as data models being requested from a chat database. Open up the **chat.js** file and create our objects:

**`chat.js`**

```js
var conversations = [
  {
    'id': 001,
    'name': 'Mike'
  },
  {
    'id': 002,
    'name': 'Suzzane'
  }
];

var messages = [
  {
    'id': 0001,
    'created_at': '2018-1-30T03:24:00',
    'from': 001,
    'to': 000,
    'text': 'We should get Suzzane and go bowling.'
  },
  {
    'id': 0002,
    'created_at': '2018-1-30T04:50:00',
    'from': '002',
    'to': 000,
    'text': 'I think Mike wants to go bowling.'
  },
  {
    'id': 0003,
    'created_at': '2018-1-30T03:30:00',
    'from': 000,
    'to': 001,
    'text': 'I dont think she wants to go bowling.'
  },
  {
    'id': 0004,
    'created_at': '2018-1-30T05:45:00',
    'from': 000,
    'to': 002,
    'text': 'I know! He is quite persistent.'
  }
];
```

_// We have created two arrays for now. The first will serve as a a data structure to populate our conversations menu, the second will serve as a data structure to populate our messages list._

With this in place we can continue on and create our first piece of Javascript logic that will append the conversation information properly to our conversations menu:

**`chat.js`**

```js
for (var item in conversations) {
  document.getElementById('conversations').innerHTML +=
    '<div class="conversationMenuItem">' +
      '<h3 class="conversationName">' + conversations[item].name + '</h3>' +
    '</div>';
}
```

Let's add a script tag linking this Javascript file to our HTML file:

**`index.html`**

```html
<!DOCTYPE html> 
<html> 
  <head> 
    <meta charset='UTF-8'> 
    <meta name='viewport' content='width=device-width, initial-scale=1.0'> 
    <link rel='stylesheet' href='style.css'>
  </head> 
  <body>
  <div id='conversations'> 

  </div> 
  <div id='messageContainer'> 
    <div id='messageList'>

    </div>
    <div id='messageInput'>

    </div>
  </div> 
<!-- Add this at the bottom of the body, so the elements exist before our script runs -->
  <script src='./chat.js'></script>
  </body>
</html>
```

Now when we open up our index.html document in the Browser we should see this:

![Output of the first function in the browser](/readme/images/articles/building-a-chat-ui-with-basic-html-css-and-javascript-part-1/firstFunction.png)

Let's explain what is going on here:

```js
for (var item in conversations) {
```

this is the beginning of a for loop which is being told to loop through the conversations array, and each index of that array is represented by a variable declared as item.

```js
  document.getElementById('conversations').innerHTML +=
    '<div class="conversationMenuItem">' +
      '<h3 class="conversationName">' + conversations[item].name + '</h3>' +
    '</div>';
```

in the body of the for loop, we are calling a method on the [Document Object Model.](https://www.w3schools.com/js/js_htmldom.asp) The method getElementById grabs an html element with the id name that matches the string provided between parentheses. For each item in the conversations array, we grab the conversations div element, and add some HTML into the div element itself. In this case we are adding another div with an h3 within.

_// A string in single quotes has to start and end on the same line, so we build our HTML out of several smaller strings and join them together with `+`. Inside those strings we use double quotes for the class names; a single quote there would end the string early._

Let's do the same thing for the messages array:

```js
for (var item in messages) {
  document.getElementById('messageList').innerHTML +=
    '<div class="messageItem">' +
      '<p class="messageText">' + messages[item].text + '</p>' +
    '</div>';
}
```

_// This does the same thing as the function above it but this time we are iterating through the messages array and appending them to the messageList element._

Now we should see all of our messages placed in our messageList element in the main part of the UI:

![Messages added to the message list](/readme/images/articles/building-a-chat-ui-with-basic-html-css-and-javascript-part-1/addedMessages.png)

Great! Now the last thing we'll do is add a little bit of CSS to style these messages. let's make our element classes look more like our prototype:

**`style.css`**

```css
#conversations {
  position: relative;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background-color: #E9E8F8;
  float: left;
}

/* center our text in the Conversations Menu */
.conversationName {
  text-align: center;
}

#messageContainer {
  position: relative;
  top: 0;
  left: 200px;
  width: calc(100% - 200px);
  height: 100%;
}

#messageList {
/* give our messageList a position absolute so we can move
 it to the bottom of the page */
  position: absolute;
  bottom: 100px;
/* We also change the height to auto so its size changes
 depending on the elements within */
  height: auto;
  width: 100%;
}

/* We add some styling for our messageItem element 
 so that it aligns properly in the messageList and displays nicely */
.messageItem {
  height: 40px;
  width: 50%;
  margin: 0 auto;
}

/* Now we add some styling for our text so that it appears white and has a nicer background with a border-radius.*/
.messageText {
  margin: 0;
  height: 30px;
  line-height: 30px;
  background-color: #6F739A;
  text-align: left;
  border-radius: 10px;
  padding: 0 5px;
  color: white;
}

/* We also change up the input so it sticks to the bottom.*/
#messageInput {
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  border-top: thin solid #e3e3e3;
}
```

Now our messages are looking a little more styled:

![Styled messages in the chat UI](/readme/images/articles/building-a-chat-ui-with-basic-html-css-and-javascript-part-1/messagesStyled.png)

Let's look at these changes a little more closely and see what our changes have done:

```css
  position: absolute;
  bottom: 100px;
```

These lines are important as they change the position of the messageList Element from relative to absolute, giving us the ability to move this element anywhere relative to it's parent container, in this case 100px from the bottom of the messageContainer.

```css
  position: absolute;
  bottom: 0;
```

We also do the same for the messageInput container so it will always be positioned at the bottom of the messageContainer.

Great! Now we have a decently styled UI with all of our important information being displayed properly, let's look back at what we accomplished:

- We wrote an HTML Document and structured it with some styled elements.
- We created a mocked Database with pertenant data for a Chat UI.
- We wrote some Javascript that successfully appends that data to appropriate sections of our UI.

Next we will program our UI for user interaction, we will filter our message for a selected conversation and create our input element for adding messages to the messages array and updating the messageList element.

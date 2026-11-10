---
title: "Building a Chat UI with basic HTML, CSS, and Javascript: Part 2"
description: "A continuation from part 1, focusing on simple user interaction and updating the browser screen with easy to understand commands."
date: 2018-02-06
---

This tutorial focuses on adding simple javascript functions to a User Interface. The goal is to provide a methodology for beginner Javascript writers to get a feel for how to create functional interactions with their content, using tools available to every modern computer user.

In the last tutorial we created a template, styled it, mocked some data and appended it to our template. With that taken care of, let's add some functions to get our users interacting with our User Interface in a simple yet functional way. We are going to focus on a few things to get our UI's functionality working:

- A function that selects a conversation when a name in the conversations list is clicked:

  **`chat.js`**

  ```js
  function selectConversation()
  ```

- A function for adding a message to our displayed message list:

  **`chat.js`**

  ```js
  function displayMessage()
  ```

- A function for sending a new message to our message list:

  **`chat.js`**

  ```js
  function sendMessage()
  ```

- Finally we will add some styling to our elements to get things looking a little more like our prototype: `style.css`

We are going to focus mostly on javascript now in order to program our Chat Application, so let's get started!

---

## Laying out the plan

We'll begin by opening up our javascript file and whiteboarding our solution.  Before we begin writing any code we should go through what we are trying to achieve with our programming. In this case we are trying to add some functions that will run when the user does something in our interface.

Let's start with our selectConversation function and define a goal for our javascript, I often like to use comments in my code to keep me on track:

**`chat.js`**

```js
// 1) This function is run when a user clicks on a name in the conversationList,
// 2) It defines who we are sending messages to and what messages are displayed in the messageList
function selectConversation() { }
```

Now let's add some pseudocode to our block to break down how we are going to achieve our goal, we'll start with very broad steps and get more granular as we go:

```js
// 1) This function is run when a user clicks on a name in the conversationList,
// 2) It defines who we are sending messages to and what messages are displayed in the messageList
function selectConversation() {
  // identify the conversation that is being clicked on.
    // find messages associated with that identity.
      // return those messages.
}
```

Before we turn those comments into code, we need two pieces of information our app doesn't have yet. Look back at the mocked messages from part 1: every message has a `from` and a `to`, and some of them are from `000`. That's us, the person using the app. Let's give that id a name, and make a place to remember which conversation is currently open. Add these two lines underneath the `messages` array:

**`chat.js`**

```js
// The id that represents us, the person using the chat app.
var currentUser = 0;

// The id of the conversation we are looking at. Nothing is selected yet.
var selectedConversation = null;
```

_// Writing `000` and `0` in Javascript gives you the same number, so we'll just use `0`._

---

## Turning our pseudocode into a function

Let's take our comments one at a time.

**Identify the conversation that is being clicked on.** The easiest way for our function to know which conversation was clicked is to be _told_. We'll give the function a parameter called `conversationId`, and whatever calls the function will pass in the id of the conversation. Then we save it in `selectedConversation` so the rest of our app knows who we are talking to:

**`chat.js`**

```js
function selectConversation(conversationId) {
  // identify the conversation that is being clicked on.
  selectedConversation = conversationId;
}
```

**Find messages associated with that identity.** A conversation with Mike is made of two kinds of messages: messages Mike sent to us, and messages we sent to Mike. Arrays in Javascript have a method called `filter` that does exactly this kind of job. It runs a function on every item in the array, and gives us back a new array with only the items where that function returned `true`:

**`chat.js`**

```js
function selectConversation(conversationId) {
  // identify the conversation that is being clicked on.
  selectedConversation = conversationId;

  // find messages associated with that identity.
  var conversationMessages = messages.filter(function (message) {
    var from = Number(message.from);
    var to = Number(message.to);
    return (from === conversationId && to === currentUser) ||
           (from === currentUser && to === conversationId);
  });
}
```

Let's look at the important parts here:

```js
var from = Number(message.from);
```

If you look closely at our mocked data, one of the messages has `'from': '002'` in quotes. That makes it a string, not a number, and `'002' === 2` is `false` in Javascript. Real data coming from a server is often messy like this, so we use `Number()` to turn whatever we get into a number before we compare it.

```js
return (from === conversationId && to === currentUser) ||
       (from === currentUser && to === conversationId);
```

This reads almost like a sentence: keep this message if it's _from them and to us_, **or** if it's _from us and to them_. The `&&` means "and", and the `||` means "or".

**Return those messages.** When we wrote our pseudocode we said we'd return the messages, but think about who would be receiving them. This function is going to run when someone clicks on a name, and the browser doesn't do anything with a value returned from a click. What we really want is to _show_ those messages on the screen. So let's hand them to a new function that does just that:

**`chat.js`**

```js
  // show those messages in the messageList.
  displayMessages(conversationMessages);
}
```

That function doesn't exist yet, so let's write it.

---

## Displaying the messages for a conversation

We need two small functions here. One that adds a **single** message to the messageList, and one that clears the messageList and adds a whole **list** of messages. Splitting them up is going to pay off later, because when we send a new message we only want to add that one message, not redraw everything.

**`chat.js`**

```js
// Empties the messageList, then adds each message in the list we pass in.
function displayMessages(messageList) {
  document.getElementById('messageList').innerHTML = '';

  for (var i = 0; i < messageList.length; i++) {
    displayMessage(messageList[i]);
  }
}

// Adds a single message to the bottom of the messageList.
function displayMessage(message) {
  var messageItem = document.createElement('div');
  messageItem.className = 'messageItem';

  if (Number(message.from) === currentUser) {
    messageItem.classList.add('sent');
  } else {
    messageItem.classList.add('received');
  }

  var text = document.createElement('p');
  text.className = 'messageText';
  text.textContent = message.text;
  messageItem.appendChild(text);

  var list = document.getElementById('messageList');
  list.appendChild(messageItem);
  list.scrollTop = list.scrollHeight;
}
```

In part 1 we built our HTML by gluing strings together and adding them to `innerHTML`. That works, but it gets hard to read quickly, and it has a hidden problem: if someone types `<b>hi</b>` into a chat, `innerHTML` will turn it into real HTML on the page. Here we are using a different set of tools from the Document Object Model:

```js
var messageItem = document.createElement('div');
```

`createElement` makes a brand new HTML element that isn't on the page yet. We can give it classes and content before we put it anywhere.

```js
messageItem.classList.add('sent');
```

`classList` lets us add and remove classes one at a time. We give our messages a class of `sent` or `received` depending on who they're from, so we can style them differently later. Every chat app you've ever used puts your messages on one side and the other person's on the other side.

```js
text.textContent = message.text;
```

`textContent` puts the message in as plain text, so whatever someone types is shown exactly as they typed it, and never turned into HTML.

```js
list.appendChild(messageItem);
list.scrollTop = list.scrollHeight;
```

`appendChild` finally puts our new element on the page, at the end of the messageList. The second line scrolls the list to the bottom so the newest message is always in view.

---

## Making the conversations clickable

Now we have a function that shows a conversation, but nothing calls it yet. We need to run `selectConversation` when someone clicks a name in the conversations list.

Let's go back to the loop from part 1 that adds conversations to the menu, and rebuild it with `createElement` so we can listen for clicks on each item. **Delete both of the `for` loops from part 1**, the one for conversations and the one for messages, and replace them with this function:

**`chat.js`**

```js
// Builds one menu item for every conversation and listens for clicks on it.
function displayConversations() {
  var conversationList = document.getElementById('conversations');
  conversationList.innerHTML = '';

  for (var item in conversations) {
    var menuItem = document.createElement('div');
    menuItem.className = 'conversationMenuItem';
    menuItem.setAttribute('data-id', conversations[item].id);

    var name = document.createElement('h3');
    name.className = 'conversationName';
    name.textContent = conversations[item].name;
    menuItem.appendChild(name);

    menuItem.addEventListener('click', function () {
      selectConversation(Number(this.getAttribute('data-id')));
    });

    conversationList.appendChild(menuItem);
  }
}
```

Two new things are happening here:

```js
menuItem.setAttribute('data-id', conversations[item].id);
```

We are storing the conversation's id right on the HTML element, in an attribute called `data-id`. Any attribute that starts with `data-` is yours to use for whatever you like, and the browser will ignore it.

```js
menuItem.addEventListener('click', function () {
  selectConversation(Number(this.getAttribute('data-id')));
});
```

`addEventListener` tells the browser: _when this element is clicked, run this function_. Inside that function, `this` is the element that was clicked, so we read its `data-id` back out and pass it to `selectConversation`. Attributes always come back as strings, so we use `Number()` again.

_// You might wonder why we don't just use `conversations[item].id` inside the click function. By the time anyone clicks, the loop has already finished and `item` is pointing at the last conversation, so every name would open Suzzane. Reading the id off the element that was clicked avoids that problem._

There's one more thing our user needs: some way to see which conversation is open. Let's add a step to `selectConversation` that gives the clicked menu item a class of `active` and takes it away from all the others:

**`chat.js`**

```js
function selectConversation(conversationId) {
  // identify the conversation that is being clicked on.
  selectedConversation = conversationId;

  // highlight that conversation in the menu.
  var menuItems = document.getElementsByClassName('conversationMenuItem');
  for (var i = 0; i < menuItems.length; i++) {
    if (Number(menuItems[i].getAttribute('data-id')) === conversationId) {
      menuItems[i].classList.add('active');
    } else {
      menuItems[i].classList.remove('active');
    }
  }

  // find messages associated with that identity.
  var conversationMessages = messages.filter(function (message) {
    var from = Number(message.from);
    var to = Number(message.to);
    return (from === conversationId && to === currentUser) ||
           (from === currentUser && to === conversationId);
  });

  // show those messages in the messageList.
  displayMessages(conversationMessages);
}
```

Last of all, we need to actually run these functions when the page loads. At the very bottom of **chat.js**, build the menu and open the first conversation so the screen isn't empty:

**`chat.js`**

```js
displayConversations();
selectConversation(conversations[0].id);
```

Open up **index.html** in your Browser. Once we add the styling at the end of this article, you'll see Mike's conversation open and highlighted:

![Mike's conversation selected in the chat UI](/readme/images/articles/building-a-chat-ui-with-basic-html-css-and-javascript-part-2/conversationSelected.jpg)

Click on Suzzane, and the messageList switches over to her conversation:

![Suzzane's conversation selected in the chat UI](/readme/images/articles/building-a-chat-ui-with-basic-html-css-and-javascript-part-2/switchConversation.jpg)

---

## Sending a message

The last feature on our list is the input at the bottom of the screen. In part 1 we made an empty `messageInput` box, so let's put a form inside it with a text field and a send button:

**`index.html`**

```html
<div id='messageInput'>
  <form id='messageForm'>
    <input id='messageText' type='text' placeholder='Type a message' autocomplete='off'>
    <button type='submit'>Send</button>
  </form>
</div>
```

_// Using a form means the browser already knows that pressing Enter in the text field should submit it, so we get Enter-to-send for free._

Now our whiteboarding process again. When the form is submitted, we want to:

1) Read the text the user typed.
2) Make a new message object that looks just like the ones in our mocked data.
3) Add it to our `messages` array, so it's still there if we switch conversations and come back.
4) Show it in the messageList, and empty the text field.

**`chat.js`**

```js
// Runs when the message form is submitted, by clicking Send or pressing Enter.
function sendMessage(event) {
  // stop the browser from reloading the page.
  event.preventDefault();

  var input = document.getElementById('messageText');
  var text = input.value.trim();

  // don't send empty messages, or messages to nobody.
  if (text === '' || selectedConversation === null) {
    return;
  }

  var message = {
    'id': messages.length + 1,
    'created_at': new Date().toISOString(),
    'from': currentUser,
    'to': selectedConversation,
    'text': text
  };

  messages.push(message);
  displayMessage(message);
  input.value = '';
}

document.getElementById('messageForm').addEventListener('submit', sendMessage);
```

Let's look at the new parts:

```js
event.preventDefault();
```

When a form is submitted, the browser's normal behavior is to send it somewhere and reload the page. We don't want that, because a reload would wipe out our messages. When the browser runs a function from `addEventListener` it hands that function an `event` object, and calling `preventDefault()` on it tells the browser to skip its normal behavior.

```js
var text = input.value.trim();
```

`value` is whatever is in the text field, and `trim()` removes any spaces at the start and end, so a message of just spaces counts as empty.

```js
messages.push(message);
displayMessage(message);
```

Here's where splitting our display functions in two pays off. We add the new message to our data with `push`, then show just that one message with `displayMessage`. Because the message is now in the `messages` array, `selectConversation` will find it the next time this conversation is opened.

Try typing a message and pressing Enter, then click on the other conversation and back again. Your message is still there:

![A new message sent in the chat UI](/readme/images/articles/building-a-chat-ui-with-basic-html-css-and-javascript-part-2/messageSent.jpg)

---

## Styling our new elements

Our functions work, but we've added some classes that don't have any styling yet: `active`, `sent`, `received`, and our new form. Here are the updated and new blocks for **style.css**. Replace the matching blocks from part 1 with these:

**`style.css`**

```css
body, html {
  height: 100vh;
  width: 100vw;
  margin: 0;
  font-family: sans-serif;
}

/* Both of our main sections now float left, so they sit side by side */
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
  width: calc(100% - 200px);
  height: 100%;
  float: left;
}

/* Show a pointer when hovering a name, so it looks clickable */
.conversationMenuItem {
  cursor: pointer;
}

.conversationMenuItem:hover {
  background-color: #D8D6F2;
}

/* The conversation that's open gets the same color as our sent messages */
.conversationMenuItem.active {
  background-color: #6F739A;
  color: white;
}

.conversationName {
  text-align: center;
  margin: 0;
  padding: 15px 0;
}

/* Let the list scroll once there are too many messages to fit */
#messageList {
  position: absolute;
  bottom: 100px;
  height: auto;
  max-height: calc(100% - 100px);
  overflow-y: auto;
  width: 100%;
}

.messageItem {
  width: 50%;
  margin: 0 auto 10px;
}

/* Our own messages line up on the right */
.messageItem.sent {
  text-align: right;
}

/* inline-block makes each bubble only as wide as its text */
.messageText {
  display: inline-block;
  max-width: 80%;
  margin: 0;
  padding: 6px 12px;
  line-height: 1.4;
  text-align: left;
  border-radius: 10px;
}

.messageItem.sent .messageText {
  background-color: #6F739A;
  color: white;
}

.messageItem.received .messageText {
  background-color: #E9E8F8;
  color: #333;
}

#messageInput {
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  border-top: thin solid #e3e3e3;
}

/* flex puts the text field and button in a row,
 and lets the text field take up the leftover space */
#messageForm {
  display: flex;
  width: 50%;
  height: 40px;
  margin: 30px auto 0;
}

#messageText {
  flex: 1;
  padding: 0 12px;
  font-size: 16px;
  border: thin solid #e3e3e3;
  border-radius: 10px;
}

#messageForm button {
  margin-left: 10px;
  padding: 0 20px;
  font-size: 16px;
  color: white;
  background-color: #6F739A;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
```

A couple of these changes are worth pointing out:

```css
  float: left;
```

We've given the messageContainer `float: left` as well, in place of `left: 200px`. Two floated elements line up next to each other, so the messageContainer sits right beside the conversations menu without needing to be pushed over.

```css
  display: inline-block;
```

A `p` element normally stretches across the whole width of its parent. Making it `inline-block` lets each message bubble shrink to fit its text, and that's what lets `text-align: right` push our sent messages over to the right side.

---

## What We've Accomplished

Our Chat UI now responds to the person using it. Let's look back at what we did:

- We whiteboarded a function with comments and pseudocode before writing it, then turned each comment into code.
- We wrote `selectConversation`, which remembers the open conversation, highlights it, and uses `filter` to find its messages.
- We split our display logic into `displayMessages` and `displayMessage`, and built our HTML with `createElement` and `textContent` instead of strings.
- We used `addEventListener` to run our functions when a name is clicked and when a message is sent.
- We wrote `sendMessage`, which adds a new message to our data and to the screen.

Here's the complete **chat.js** file, so you can check yours against it:

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

// The id that represents us, the person using the chat app.
var currentUser = 0;

// The id of the conversation we are looking at. Nothing is selected yet.
var selectedConversation = null;

// Builds one menu item for every conversation and listens for clicks on it.
function displayConversations() {
  var conversationList = document.getElementById('conversations');
  conversationList.innerHTML = '';

  for (var item in conversations) {
    var menuItem = document.createElement('div');
    menuItem.className = 'conversationMenuItem';
    menuItem.setAttribute('data-id', conversations[item].id);

    var name = document.createElement('h3');
    name.className = 'conversationName';
    name.textContent = conversations[item].name;
    menuItem.appendChild(name);

    menuItem.addEventListener('click', function () {
      selectConversation(Number(this.getAttribute('data-id')));
    });

    conversationList.appendChild(menuItem);
  }
}

// 1) This function is run when a user clicks on a name in the conversationList,
// 2) It defines who we are sending messages to and what messages are displayed in the messageList
function selectConversation(conversationId) {
  // identify the conversation that is being clicked on.
  selectedConversation = conversationId;

  // highlight that conversation in the menu.
  var menuItems = document.getElementsByClassName('conversationMenuItem');
  for (var i = 0; i < menuItems.length; i++) {
    if (Number(menuItems[i].getAttribute('data-id')) === conversationId) {
      menuItems[i].classList.add('active');
    } else {
      menuItems[i].classList.remove('active');
    }
  }

  // find messages associated with that identity.
  var conversationMessages = messages.filter(function (message) {
    var from = Number(message.from);
    var to = Number(message.to);
    return (from === conversationId && to === currentUser) ||
           (from === currentUser && to === conversationId);
  });

  // show those messages in the messageList.
  displayMessages(conversationMessages);
}

// Empties the messageList, then adds each message in the list we pass in.
function displayMessages(messageList) {
  document.getElementById('messageList').innerHTML = '';

  for (var i = 0; i < messageList.length; i++) {
    displayMessage(messageList[i]);
  }
}

// Adds a single message to the bottom of the messageList.
function displayMessage(message) {
  var messageItem = document.createElement('div');
  messageItem.className = 'messageItem';

  if (Number(message.from) === currentUser) {
    messageItem.classList.add('sent');
  } else {
    messageItem.classList.add('received');
  }

  var text = document.createElement('p');
  text.className = 'messageText';
  text.textContent = message.text;
  messageItem.appendChild(text);

  var list = document.getElementById('messageList');
  list.appendChild(messageItem);
  list.scrollTop = list.scrollHeight;
}

// Runs when the message form is submitted, by clicking Send or pressing Enter.
function sendMessage(event) {
  // stop the browser from reloading the page.
  event.preventDefault();

  var input = document.getElementById('messageText');
  var text = input.value.trim();

  // don't send empty messages, or messages to nobody.
  if (text === '' || selectedConversation === null) {
    return;
  }

  var message = {
    'id': messages.length + 1,
    'created_at': new Date().toISOString(),
    'from': currentUser,
    'to': selectedConversation,
    'text': text
  };

  messages.push(message);
  displayMessage(message);
  input.value = '';
}

document.getElementById('messageForm').addEventListener('submit', sendMessage);

displayConversations();
selectConversation(conversations[0].id);
```

We now have a working Chat UI made with nothing but three files and a Browser. Right now our messages only live in a Javascript array, so they disappear when the page reloads. Getting them to and from a real server is a good next step once you're comfortable with everything here.

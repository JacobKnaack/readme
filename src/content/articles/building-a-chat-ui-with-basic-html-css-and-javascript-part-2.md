---
title: "Building a Chat UI with basic HTML, CSS, and Javascript: Part 2"
description: "A continuation from part 1, focusing on simple user interaction and updating the browser screen with easy to understand commands."
date: 2018-02-06
---

This tutorial focuses on adding simple javascript functions to a User Interface. The goal is to provide a methodology for beginner Javascript writers to get a feel for how to create functional interactions with their content, using tools available to every modern computer user.

In the last tutorial we created a template, styled it and mocked some data and appended it to our template. With that taken care of, let's added some functions to get our users interacting with our User Interface in a simple yet functional way. We are going to focus on a couple things to get our UI's functionality working:

- A function that selects a conversation when a name in the conversations list is clicked:

  **`chat.js`**

  ```js
  function selectConversation()
  ```

- A function for adding messages to our displayed message list:

  **`chat.js`**

  ```js
  function displayMessage()
  ```

- A function for sending message to our message list:

  **`chat.js`**

  ```js
  function displayMessages()
  ```

- Finally we will add some styling to our elements to get things looking a little more like our prototype: `style.css`

We are going to focus mostly on javascript now in order to program our Chat Applications so let's get started!

---

## We'll begin by opening up our javascript file and whiteboarding our solution

Before we begin writing any code we should go through what we are trying to achieve with our programming. In this case we are trying to add some functions that will run when the user does something in our interface.

Let's start with our selectConversation function and define a goal for our javascript, I often like to use comments in my code to keep me on track:

**`chat.js`**

```js
// 1)This function is run when a user
 //   clicks on a name in the conversationList,
 // 2)It defines who we are sending messages 
 //   to and what messages are displayed in the messageList
function selectConversation() { }
```

Now let's add some pseudocode to our block to break down how we are going to achieve our goal, we'll start with very broad steps and get more granular as we :

```
// 1)This function is run when a user
 //   clicks on a name in the conversationList,
 // 2)It defines who we are sending messages 
 //   to and what messages are displayed in the messageList
function selectConversation() {
  // identify the conversation that is being clicked on.
    // find messages associated with that identity.
      // return those messages.
}
```

## THIS ARTICLE IS UNDER CONSTRUCTION :)

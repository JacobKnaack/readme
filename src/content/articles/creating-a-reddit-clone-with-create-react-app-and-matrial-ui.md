---
title: "Creating a Reddit Clone with create-react-app and material-ui"
description: "Using React and Material UI to create an interface that fetches data from reddit and displays it posts and comments to the user."
date: 2018-05-06
---

This tutorial will walk you through the basics of using create-react-app to build a simple front end application that fetches data from reddit, and displays front page posts in a clean and simple user inferface, bootstrapped with Material UI.

Before we get started we need to make sure we have the required software, here's what we'll need:

-   A recent version of [Node JS](https://nodejs.org/en/).
-   Access to a command line (Terminal on Mac / Linux or Command Prompt on Windows).

With these installed we can begin!

---

## Setting up our Project with the Command Line

With Node installed we can start setting up our project. First we'll use the Node Package Manager to install [create-react-app](https://github.com/facebook/create-react-app/blob/master/README.md#getting-started): a straightforward tool that will let us jump straight into developing with React.

In your command line, type this command and press enter:

```
npm install -g create-react-app
```

Once the script finishes the installation we can create our React project with no configuration!

Simply type this command into your terminal to create a React Project named reddit-clone:

```
create-react-app reddit-clone
```

This script will take a while to create our source files, but once it's completed we will see a new folder created in our directory called `reddit-clone`. Opening this folder will reveal our initialized ReactJS project complete with scripts for running and building our project if we want to deploy on the web. You should see something like this:

![The project directory created by create-react-app](/readme/images/articles/creating-a-reddit-clone-with-create-react-app-and-matrial-ui/project-directory.png)

At this point we can navigate to this folder in our terminal by typing this command and hitting enter:

```
cd reddit-clone
```

Now let's run a script to start a development server compiling out project and opening it in our browser:

```
npm start
```

Your browser should open up with a URL pointed at your computer's local IP addess and port. You should see something like this:

![Terminal output after running npm start](/readme/images/articles/creating-a-reddit-clone-with-create-react-app-and-matrial-ui/npm-start.png)

We are now ready to open up our text editor and begin building our App!

---

## Building the Reddit Front Page

Open up the project directory in your text editor and find `App.js` in the `src` directory. You will see these lines:

**`App.js`**

```js
import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo'>
          <h1 className='App-title' >Welcome to React</h1> 
         </header> 
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

This is all of the content that is being served in the application created by create-react-app. Let's delete lines 13 through 15. As well as replace the title on line 11 from `Welcome to React` to `Reddit Clone`.

This will clear out the default content and leave us a blank slate to put our own content in. We also changed the title to our application's name. Now let's discuss the first step of creating our Reddit clone: getting post data from Reddit.

Luckily for us Reddit gives us an easy way to interact with it's data. simply making an HTTP request to [http://reddit.com/.json](http://reddit.com/.json) will give us all the data from reddit's front page as a json object. This way we can easily create our own React UI components in real time from Reddit's data.

In order to make use of this data we'll have to modify our App.js component. We need to add 2 important things:

-   Add a constructor and `this.state`.
-   Create a function that will save reddit's data to `this.state` when our component loads.

Let's go back to `App.js` and initialize our component with a constructor and `this.state`:

**`App.js`**

```js
import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
    }
  }
```

_// This constructor is used to intialize our component with data before it renders in the browser. For us we want to add an object called this.state and add an empty array that we will fill with posts once we fetch the data from reddit. At the beginning of our constructor we call the super() method. this gives us access to the global 'this' object which we can now use to refer to our App component._

Now let's add a component lifecycle function to fetch our reddit data from reddit.com:

**`App.js`**

```js
import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
    }
  }

  componentWillMount() {
    fetch('https://www.reddit.com/.json')
    .then(res => res.json())
    .then(postData => {
        this.setState({ posts: postData.data.children })
      })
    .catch(error => alert('failed to fetch reddit data'))
  }
```

_// This method: componentWillMount, is a built in method that React components have access to. It will run whatever logic is put within it before the component has mounted in the browser and thus we can make changes to our component before anything is rendered to the screen._

On line 14 we are using the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make an http request to reddit.com/.json. By default this will be a GET request unless otherwise specified. It is impotant to note that this API call returns a promise, so we must use javascript's `.then` `.catch` syntax to handle this API call asynchronously. Let's take a closer look to see what's happening:

```
    .then(res => res.json())
```

_// the fetch call returns a response object (which we define as res) and needs to be converted into a parseable object. We can use the `.json()` method that fetch gives us to convert the response into json data._

```
    .then(postData => {
       this.setState({ posts: postData.data.children })
     })
```

_// The `.json()` method returns another promise so we have to chain another `.then`. This will return our json data if when the promise resolves. Now we can set the state of our component so we have direct access to our reddit data._

With our data safe and sound in our app's state. Let's install material-ui and create our material design components. Make sure you are still in your `reddit-clone` project directory and run this comand in your terminal:

```
npm install --save material-ui
```

This will install material-ui components to our projects dependencies and allow us to use them in our jsx. Let's import this libray of code into our App and configure our component to be able to use material-ui themes:

**`App.js`**

```js
import React, { Component } from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
    }
  }

  componentWillMount() {
    fetch('https://www.reddit.com/.json')
    .then(res => res.json())
    .then(postData => {
        this.setState({ posts: postData.data.children })
      })
    .catch(error => alert('failed to fetch reddit data'))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo'>
            <h1 className='App-title' >Reddit Clone</h1> 
          </header> 
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
```

_// You can see that we added an import statement on line 2 and wrapped our jsx in the imported theme provider (lines 24 and 31)._

Now let's create a React component that will render our post data stored in `this.state`. We'll start by creating a folder within the `src` directory called `components`. Then we will create a file called `Post.js`. Initialize the component with this code:

**`/components/Post.js`**

```js
import React from 'react'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card'

const Post = (props) => {
  return (
    <div />
  )
}

export default PostCard
```

_// Unlike our app component we don't define a class that is a React.Component. Instead we are using a simpler syntax, implementing a stateless React component that can't be intialized with a constructor._

With our Post component created we can import it into `App.js` and pass in our post data:

**`App.js`**

```js
import React, { Component } from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Post from './components/Post';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
    }
  }

  componentWillMount() {
    fetch('https://www.reddit.com/.json')
    .then(res => res.json())
    .then(postData => {
        this.setState({ posts: postData.data.children })
      })
    .catch(error => alert('failed to fetch reddit data'))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo'>
            <h1 className='App-title' >Reddit Clone</h1> 
           </header> 
           {this.state.posts.map(post => {
            let imageUrl = 'https://image.flaticon.com/icons/svg/149/149930.svg'
            if (post.data.preview) {
              imageUrl = post.data.preview.images[0].source.url
            }

            return (
              <Post 
                key={post.data.title}
                title={post.data.title}
                author={post.data.author}
                url={post.data.url}
                imageUrl={imageUrl}
                score={post.data.score}
                permalink={post.data.permalink}
              />
            )
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
```

_// This won't do anything cool yet. But you can see that we are passing in all the relevant post data as properties on our Post component. By using curly braces we are able to inject straight javascript logic directly into our jsx and return elements to be rendered as html._

At this point we are looping through our state array with a `.map` method and creating a post component for each post that exists in the post array. Which we can do directly in our return statement of our JSX.

Now let's use material-ui to render our post data:

**`/components/Post.js`**

```js
import React from 'react';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';

const Post = (props) => {
  const cardStyle = {
    width: '70%',
    margin: '20px auto',
  }
  const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'left',
    margin: '0 auto',
    backgroundColor: '#222222',
  }
  const titleStyle = {
    fontSize: '120%',
    color: '#ffffff',
  }
  const subtitleStyle = {
    color: '#bcbcbc',
  }
  const linkStyle = {
    textDecoration: 'none',
  }

  return (
    <Card style={cardStyle} />
      <a href={url} target='_blank' style={linkStyle}>
        <CardHeader
          style={headerStyle}
          title={title}
          titleStyle={titleStyle}
          subtitle={author}
          subtitleStyle={subtitleStyle}
          avatar={
            <Avatar
              size={40}
              style={{ fontSize: '80%' }}
            <
              {score}
            </Avatar>
          }
        />
      </a>
      <CardMedia>
        <img src={imageUrl} alt={`${imageUrl} preview`} />
      </CardMedia>
      <CardText>
        <FlatButton
          label='Comments'
        />
      </CardText>
     </Card>
  )
}

export default PostCard
```

_// You can see that we have created some styling objects to go along with our material ui components. These add minimal styling and color adjustments. Feel free to play around with these and try different styles for your UI._

With our props passed into our component we can iterate through our state array and create a seperate component for each post we receive in our fetch request from reddit, and this is what we see:

![Reddit posts rendered in the browser](/readme/images/articles/creating-a-reddit-clone-with-create-react-app-and-matrial-ui/rendered-posts.png)

---

## What We've Accomplished...

We were able to accomplish a couple things:

-   We set up a project with create-react-app.
-   We created a component that fetched data from reddit.com.
-   We created a component to display posts using material-ui.

Next we will create a component for displaying comments and implementing a 'next' button to automatically grab posts and comment data.

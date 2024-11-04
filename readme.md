# Create React Project with Parcel

## Step 1: Install Node.js
Make sure you have Node.js installed on your system. You can download it from nodejs.org.

## Step 2: Create a New Project
Open your terminal and create a new directory for your project. Navigate into it and initialize a new Node.js project.


```
mkdir my-react-app
cd my-react-app
npm init -y
Step 3: Install Dependencies
Install React, ReactDOM, and Parcel as development dependencies.
```

```
npm install react react-dom
npm install --save-dev parcel
```

## Step 4: Set Up Project Structure
Create the following files and directories in your project:


```
mkdir src
touch src/index.html src/index.js
```
##Step 5: Create HTML File
Open src/index.html and add the following code:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My React App</title>
</head>
<body>
    <div id="root"></div>
    <script src="./index.js" type="module"></script>
</body>
</html>
```

## Step 6: Create a Simple React Component
Open src/index.js and add the following code to create a simple React component:

```
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div>
            <h1>Hello, React 18 with Parcel!</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
## Step 7: Update package.json Scripts
Modify the scripts section in your package.json file to include a start command:

```
"scripts": {
    "start": "parcel src/index.html"
}
```

## Step 8: Start the Development Server
Run the following command to start the Parcel development server:

```
npm start
```
## Step 9: Open Your App
Once the server is running, open your web browser and go to http://localhost:1234. You should see "Hello, React 18 with Parcel!" displayed on the page.

## Step 10: Build for Production (Optional)
If you want to build your project for production, you can add another script to your package.json:

```
"scripts": {
    "start": "parcel src/index.html",
    "build": "parcel build src/index.html"
}
```
Then run:

```
npm run build
```
This will create a dist folder with your production-ready files.
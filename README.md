
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/JuliaGrandury/midas-spotify-react">
    <img src="https://img.icons8.com/fluency/64/000000/music-robot.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Midas Spotify React App</h3>

  <p align="center">
    An app to make playlists and save them to your Spotify account!
    <br />
    <a href="https://github.com/JuliaGrandury/midas-spotify-react"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://midas-spotifyapp.surge.sh/">View Demo</a>
    ·
    <a href="https://github.com/JuliaGrandury/midas-spotify-react/issues">Report Bug</a>
    ·
    <a href="https://github.com/JuliaGrandury/midas-spotify-react/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

As of now, this application is a project I used to play around with the Spotify API and React.js. The features to be added (see Roadmap section) will allow users to interact with features they do not have access to on their Spotify app. 

Features include:
* Spotify Login: the user is prompted to log into their Spotify account (or to create one) when they search their first song, album or artist
* Search: the user can search for tracks by track name, artist name or album name
* Display Results: after a search, the results from the user's query will be displayed in the leftmost container in the same order Spotify would
* Make Playlist: the user can add any of the searched for tracks to their playlist by clicking on the "+" sign next to each track
* Edit Playlist: the user can rename their New Playlist as they see fit and remove songs from the playlist using the "-" next to each track
* Save Playlist: the user can save their playlist by clicking the "SAVE TO SPOTIFY" button and will soon see it appear on their spotify application

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [React.js](https://reactjs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free Client ID from Spotify
* Sign in with your Spotify account or create a free account at Spotify for Developers: https://developer.spotify.com/dashboard/login
* Click on "create an app" in the upper right hand corner and enter your app name and brief description
* Under your app name you will find your Client ID
2. Clone the repo
   ```sh
   git clone https://github.com/JuliaGrandury/midas-spotify-react.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your Client ID in `Spotify.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

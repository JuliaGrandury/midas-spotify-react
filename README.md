
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

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With and Deployed With

* [React.js](https://reactjs.org/)
* [Surge.sh](https://surge.sh/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

You will need to have Node.js and npm package manager installed. If you do not, visit Node.js and download the version labeled LTS. To install the latest version of npm run npm install npm@latest -g. Ensure that both are correctly installed using node -v and npm -v.

### Installation

1. Get a free Client ID from Spotify
* Sign in with your Spotify account or create a free account at Spotify for Developers: https://developer.spotify.com/dashboard/login
* Click on "create an app" in the upper right hand corner and enter your app name and brief description
* Under your app name you will find your Client ID
2. Clone the repo
   ```sh
   git clone https://github.com/JuliaGrandury/midas-spotify-react.git
   ```
3. Enter your Client ID in `Spotify.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Call search on "SEARCH" click or ENTER keypress
- [ ] Clear the search input area when user clicks on it again
- [ ] Keep user informed while the playlist is saving
    - [ ] Add a confirmation message once the playlist has saved
    - [ ] Add a loading screen while playlist is saving
- [ ] Verify with user when they try to add a track that is already in Playlist
- [ ] Add tab to see your own Spotify Account Data
- [ ] Add another tab to see your playlist library
    - [ ] Allow users to add tabs to them
    - [ ] Allow users to edit them

<p align="right">(<a href="#top">back to top</a>)</p>

# StrainQuest

The app generates a wide variety of cannabis strains for users to try, with detailed information on each strain's effects and properties. Users can also create and save their own personal collection of strains they've tried, keeping track of their favorites and discovering new ones.

<!-- Improved compatibility of back to top link: See: https://github.com/Piyush-Bhor/StrainQuest/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Piyush-Bhor/StrainQuest/tree/master">
    <img src="public/images/logo-color.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">StrainQuest</h3>

  <p align="center">
    Welcome to StrainQuest, the app that takes your cannabis journey to a whole new level of fun and exploration. Discover, collect, and enjoy an incredible variety of strains tailored just for you!
    <br />
    <a href="https://github.com/Piyush-Bhor/StrainQuest"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Piyush-Bhor/StrainQuest">View Demo</a>
    ·
    <a href="https://github.com/Piyush-Bhor/StrainQuest/issues">Report Bug</a>
    ·
    <a href="https://github.com/Piyush-Bhor/StrainQuest/issues">Request Feature</a>
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

StrainQuest is a fun game, that suggets you new and random cannabis strains to discover and try. You can collect these strain, search for the ones you have already tried and add them to your collection. It's a pokedex for weed!

Here are its features:

- Get new cannabis strains and their info.
- Search for a specific strain.
- Add strains you have tried to your collection.

Of course, this project is still ongoing and there are more features that will be added.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- [![JQuery][JQuery.com]][JQuery-url]
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

NPM is required to install dependencies for the project.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

The following steps will help you get started.

1. Get a free Strain API Key from Rapid Api: [Rapid API](https://rapidapi.com/raygorodskij/api/Strain/)
2. Create a free account on Auth0 and get Auth0 keys: [Auth0](https://auth0.com/)
3. Get connection string from MongoDB Atlas: [MongoDB Atlas](https://www.mongodb.com/)
4. Clone the repo
   ```sh
   git clone https://github.com/Piyush-Bhor/StrainQuest.git
   ```
5. Install NPM packages
   ```sh
   npm install
   ```
6. Create a .env file with the following data:
   ```
    CONNECTIONSTRING="Your mongodb connection string"
    SECRET="A randomly string"
    APIKEY="Your API key from Strain API"
    AUTH0_CLIENT_ID="Your AuthO Client ID"
    AUTH0_CLIENT_SECRET="Your AuthO Client Secret"
    AUTH0_ISSUER_BASE_URL="Your AuthO Issuer base url"
    REDIRECT_URI=http://localhost:8080/callback
    BASE_URL=http://localhost:8080
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add Auth0
- [x] Create README
- [ ] Create a Cannabis Strain API to replace the current API
- [ ] Suggest cannabis strains to users based on their preferences using ML

See the [open issues](https://github.com/Piyush-Bhor/StrainQuest/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Piyush Bhor - [@LinkedIn](https://www.linkedin.com/in/piyush-bhor-bb7394265/) - piyushbhor22@gmail.com

Project Link: [https://github.com/Piyush-Bhor/StrainQuest](https://github.com/Piyush-Bhor/StrainQuest)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Some of the websites that helped me create this project.

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Piyush-Bhor/StrainQuest?style=for-the-badge
[contributors-url]: https://github.com/Piyush-Bhor/StrainQuest/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Piyush-Bhor/StrainQuest.svg?style=for-the-badge
[forks-url]: https://github.com/Piyush-Bhor/StrainQuest/network/members
[stars-shield]: https://img.shields.io/github/stars/Piyush-Bhor/StrainQuest.svg?style=for-the-badge
[stars-url]: https://github.com/Piyush-Bhor/StrainQuest/stargazers
[issues-shield]: https://img.shields.io/github/issues/Piyush-Bhor/StrainQuest.svg?style=for-the-badge
[issues-url]: https://github.com/Piyush-Bhor/StrainQuest/issues
[license-shield]: https://img.shields.io/github/license/Piyush-Bhor/StrainQuest.svg?style=for-the-badge
[license-url]: https://github.com/Piyush-Bhor/StrainQuest/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/piyush-bhor-bb7394265/
[product-screenshot]: images/screenshot.png
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[product-screenshot]: public/images/main.png

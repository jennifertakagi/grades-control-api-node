<!-- Inspired by https://github.com/jennifertakagi/grades-control-api-node -->

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jennifertakagi/grades-control-api-node">
    <img src="docs/logo.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Grades Control API</h3>

  <p align="center">
    Control the grades with this simple API!
    <br />
    <a href="https://github.com/jennifertakagi/grades-control-api-node"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jennifertakagi/grades-control-api-node/issues">Report Bug</a>
    ·
    <a href="https://github.com/jennifertakagi/grades-control-api-node/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

A simple API to control grades in a clean way.

Features:
* Create a grade.
* Check a grade, by id.
* Check total grade's value, by the student and the subject.
* Check mean grade's value, by the subject and the type.
* Check best three grade's value, by the subject and the type.
* Delete a grade, by the grade's id.
* Update a grade, by the grade's id.



### Built With

* [Node JS](https://nodejs.org/en/download/)
* [Express](https://expressjs.com/)
* [Winston](https://www.npmjs.com/package/winston)
* [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

* yarn
  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jennifertakagi/grades-control-api-node.git
   ```
2. Install packages
   ```sh
   yarn | npm install
   ```
3. Run the following command in order to start the application in a development environment:
   ```JS
   yarn dev:watch | npm run dev:watch
   ```



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/jennifertakagi/grades-control-api-node/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Jennifer Takagi - [@jennitakagi](https://twitter.com/jennitakagi)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Cors](https://www.npmjs.com/package/cors)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jennifertakagi/grades-control-api-node.svg?style=for-the-badge
[contributors-url]: https://github.com/jennifertakagi/grades-control-api-node/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jennifertakagi/grades-control-api-node.svg?style=for-the-badge
[forks-url]: https://github.com/jennifertakagi/grades-control-api-node/network/members
[stars-shield]: https://img.shields.io/github/stars/jennifertakagi/grades-control-api-node.svg?style=for-the-badge
[stars-url]: https://github.com/jennifertakagi/grades-control-api-node/stargazers
[issues-shield]: https://img.shields.io/github/issues/jennifertakagi/grades-control-api-node.svg?style=for-the-badge
[issues-url]: https://github.com/jennifertakagi/grades-control-api-node/issues
[license-shield]: https://img.shields.io/github/license/jennifertakagi/grades-control-api-node.svg?style=for-the-badge
[license-url]: https://github.com/jennifertakagi/grades-control-api-node/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jennifertakagi
[product-screenshot]: docs/grades-control.gif
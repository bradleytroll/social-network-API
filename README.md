
# Social Network API

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [How to Contribute](#how-to-contribute)
- [GitHub Repo](#github-repo)
- [Demonstration Video](#demonstration-video)

## Description
This Node.js application serves as a backend for a social networking service where users can post thoughts and react to them. The API manages users, thoughts, and reactions, offering endpoints for creating, reading, updating, and deleting data.

## Installation
To set up the project:
1. Clone the repository from GitHub.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Ensure MongoDB is running on your local machine or configure an external MongoDB database in the `.env` file.
4. Start the server using `node index.js`.

## Usage
The API provides several routes:
- **User Routes**: To manage user profiles including creation, updates, and deletion.
- **Thought Routes**: For posting thoughts, updating them, and deleting them.
- **Reaction Routes**: To add reactions to thoughts and remove them.

Use Insomnia to test each route. 

### Dependencies
The project uses the following npm packages:
- bcrypt: ^5.1.1
- dotenv: ^16.4.5
- express: ^4.19.2
- mongoose: ^8.3.2

## How to Contribute
Interested in contributing? Follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature`)
5. Open a new Pull Request.

## GitHub Repo
[Link to the GitHub repository](https://github.com/bradleytroll/social-network-API)

## Demonstration Video
[Link to the demonstration video](https://example.com)

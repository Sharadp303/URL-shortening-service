#ShortURL Service

#Overview

    The ShortURL service is a web application that allows users to create short URLs that redirect to longer URLs. The service is built using Node.js, MongoDB, and the Express web framework. It is designed to be deployed on AWS EC2 instances and managed using PM2 process manager.

#Installation

    1. Clone the repository: git clone https://github.com/Sharadp303/URL-shortening-service.git
    2. Install dependencies: npm install
    3. Add .env and update the configuration settings as required.
    4. Start the server: node app.js

#Configuration

    The ShortURL service can be configured using environment variables. The available configuration options are listed below:

    * PORT: The port on which the server should listen for incoming requests (default: 3000)
    * DB: The MongoDB connection 
    * SECRETKEY: The key for accessing the short URL  API
    * REDISKEY: The key for redis server connection



#API Documentation

    Endpoint: /user/signup
    - POST Request
    - Registers a new user with the provided email and password and Name .

    Endpoint: /user/signin
    - POST Request
    - Logs in the user with provided email and password and returns an access token.

    Endpoint: /user/signout
    - GET Request
    - Authorization Header: <access_token>
    - Logs out the currently logged in user.

    Endpoint: /shorturl
    - POST Request
    - Authorization Header:  <access_token>
    - Converts a long URL to a short URL and returns the shortened URL.


















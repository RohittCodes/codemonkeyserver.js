[![Shepherd](https://img.shields.io/badge/Shepherd-JS-EFF2F3?labelColor=16202D&style=for-the-badge&link=https://shepherdjs.dev/)](https://shepherdjs.dev/)
[![Quine.sh](https://img.shields.io/badge/Quine.sh-131633?style=for-the-badge&link=https://quine.sh/)](https://quine.sh/)

# [CodeMonkey Backend](https://github.com/RohittCodes/codemonkeyserver.js) ![GitHub repo size](https://img.shields.io/github/repo-size/RohittCodes/codemonkeyserver.js?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/RohittCodes/codemonkeyserver.js?style=for-the-badge) ![GitHub last commit](https://img.shields.io/github/last-commit/RohittCodes/codemonkeyserver.js?style=for-the-badge)

CodeMonkey Backend is a REST API server for CodeMonkey, a platform to learn and practice coding with AI integrated code editor featuring Shepherd.js for guided tours. The platform is designed to help users learn coding in a fun and interactive way. It is built using Node.js, Express.js, MongoDB, Mongoose, and Gemini API.

## Features

- CodeTools powered by Gemini API
- Code run powered by Judge0 CE API
- CodeChimp powered by Gemini API

## Installation

1. Clone the repository
   ```sh
   git clone https://github.com/RohittCodes/codemonkeyserver.js.git
    ```

2. Change the directory
   ```sh
   cd codemonkeyserver.js
   ```

3. Install the dependencies using yarn or any other package manager. (Yarn is recommended)
   ```sh
    yarn
   ```

4. Create a `.env` file in the root directory and add the following environment variables
   ```sh
    MONGODB_URI={Your MongoDB URI}
    GEMINI_API_KEY={Your Gemini API Key. Get it from Google AI studio}
    JUDGE0_API_KEY={Your Judge0 API Key. Get it from RapidAPI}
    RAPID_API_HOST={Your RapidAPI Host. Get it from RapidAPI}
    ```

   **Note**: Don't forget to update the headers in the cors config object (path: ./index.js). Will be updating it soon!
    
5. Start the server
   ```sh
    yarn dev
    ```

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Gemini API
- Judge0 CE API

## Usage

- You can use the API endpoints to interact with the CodeMonkey platform. Clone it from [here](https://github.com/RohittCodes/codemonkey.js) and run the frontend to interact with the server.
- The server isn't hosted yet. You can host it on platforms like Heroku, Vercel, etc. We'll be hosting it soon.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any ideas or suggestions. You can also reach out to me on [Twitter](https://twitter.com/RohittCodes) if you have any questions or feedback.

Rocket League Profile API
This project provides an API to fetch Rocket League player profiles and sessions using the trn-rocket-league package. It allows you to query player information and match sessions based on a specific platform and username.

Prerequisites
Before running this project, ensure you have the following installed:

Node.js (version 18.x or above)
npm (Node Package Manager)
If you don't have these installed, you can download and install Node.js, which comes with npm, from the link above.

Installation

1. Clone the repository
   First, clone the repository to your local machine.

bash
Copy
Edit
git clone <repository-url>
cd <project-directory> 2. Install Dependencies
Run the following command to install all the required dependencies:

bash
Copy
Edit
npm install
This will install express for the backend and trn-rocket-league for fetching Rocket League profiles and sessions.

3. Set Up the Server
   Run the backend server by executing the following command:

bash
Copy
Edit
npm start
This will start the server on http://localhost:3000.

API Endpoints

1. Get Player Profile
   Endpoint: /api/profile/:username/:platform
   Method: GET
   Description: Fetches the profile for the specified Rocket League player.
   Parameters:

username: The username of the player (e.g., Icy_Fatal).
platform: The platform the player is using (e.g., steam, epic, psn, etc.).
Example Request:

bash
Copy
Edit
curl http://localhost:3000/api/profile/Icy_Fatal/steam
Response: Returns a JSON object containing player profile data, such as stats, wins, goals, etc.

2. Get Player Sessions
   Endpoint: /api/sessions/:username/:platform
   Method: GET
   Description: Fetches the sessions for the specified Rocket League player.
   Parameters:

username: The username of the player.
platform: The platform the player is using.
Example Request:

bash
Copy
Edit
curl http://localhost:3000/api/sessions/Icy_Fatal/steam
Response: Returns a JSON object containing match sessions, including stats like assists, goals, saves, and more.

Error Handling
If the profile or sessions cannot be fetched, the API will return an error message like this:

json
Copy
Edit
{
"error": "Error fetching profile"
}
You can check the server logs to see more specific error messages for debugging.

Troubleshooting
Missing express module: If you get an error like Cannot find module 'express', ensure that you've run npm install correctly.
License
This project is licensed under the MIT License - see the LICENSE file for details.

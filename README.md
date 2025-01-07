# WebUntis Exams to iCal Integration

This project fetches exam data from WebUntis, processes it into structured JSON, and converts it into an iCal format for calendar integration.

## Features
- Fetch exams data from WebUntis API
- Process and format exams into a user-friendly JSON structure
- Generate an iCal file for calendar integration
- Deployable as a serverless function via Netlify

## Setup Instructions

### Prerequisites
1. Node.js and npm installed
2. Netlify CLI installed (run `npm install netlify-cli -g`)

### Installation
1. Clone the repository and navigate into the project directory:
   ^^^bash
   git clone https://github.com/your-repo/webuntis-exams.git
   cd webuntis-exams
   ^^^

2. Install dependencies:
   ^^^bash
   npm install
   ^^^

3. Create a `.env` file in the root directory:
   ^^^plaintext
   WEBUNTIS_DOMAIN=""
   WEBUNTIS_SCHOOL=""
   WEBUNTIS_USERNAME=""
   WEBUNTIS_PASSWORD=""
   ^^^

4. Set up Netlify (optional for deployment):
   ^^^bash
   netlify init
   ^^^

### Usage
To run the script locally:
^^^bash
node run.js
^^^

For deployment as a Netlify function, place the `generateExamsIcal.js` in the `netlify/functions` folder.

### File Structure
^^^plaintext
webuntis-exams/
├── .env
├── core/
│   ├── auth.js
│   ├── fetchData.js
│   ├── processData.js
│   └── utils.js
├── netlify/
│   └── functions/
│       └── generateExamsIcal.js
├── run.js
└── package.json
^^^

### Dependencies
- `axios`: For HTTP requests to WebUntis
- `ical-generator`: For generating iCal files
- `dotenv`: For environment variable management

### Notes
- Ensure the WebUntis credentials in `.env` are correct.
- This project focuses only on exams; timetable-related functionality has been excluded.

### License
This project is licensed under the MIT License.

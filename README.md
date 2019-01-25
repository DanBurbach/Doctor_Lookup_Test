# Doctor Lookup
Javascript: Week 2: Friday Test: A Doctor Lookup API program using BetterDoctor API

#### Returns results from an API for Doctors in their city, state based off of issue entered (doctor search by city, state included)

#### By Daniel Burbach

## Description

The user will be able to look up an issue (query) that they might have about their health. Provided they enter in a city and state, the program will return a result of their search in an area of a 20 mile radius. If the user wishes, they may also look up a doctor by their name. The results are returned by best match ascending.

### Specifications:

## Setup/Installation Requirements
1. git clone: https://github.com/DanBurbach/Doctor_Lookup_Test.git

2. Navigate into this repo and download dependencies using manager of your choice: npm install

 -- (You may need to run npm run build in addition) 

3. You will need your own API key. To do this, you must make an account at https://developer.betterdoctor.com/

 -- You'll also need to add it to a hidden file called '.env'. In '.env' add this line: exports.apiKey = {YOUR API KEY GOES HERE}.

 -- (If you decide to save any changes you make to this, be sure to include a .gitignore file in your main directory with .env included in the list.

 -- ADD/SAVE THIS BEFORE ANYTHING ELSE!

 -- This will save your personal API code from others who might steal it).

5. Launch dev environment in browser using npm run start
 -- a new browser will open with localhost:8080

## Known Bugs
The doctor search return results are limited by a 20 mile radius.

## Support and contact details
Feel free to contact me with any suggestions or questions.

## Technologies Used
HTML, CSS, Javascript, Node.js, Atom, and webpack

(Special thanks to Better Doctor API, https://developer.betterdoctor.com/)

## Objectives

- Does the application correctly use webpack?

- Did you follow all setup instructions, including storing your API key?

- Does the app separate user interface and business logic functionalities into different JavaScript files?

- Does the application correctly make an API call?

- Does the application correctly parse data from the API response?

- Does the application handle errors when the API call doesn't return a 200 OK status as well as return a message if the API returns no results?

- Code and Git documentation follow best practices (setup instructions in README, .gitignore file discluding unnecessary content from repo, detailed well-formatted commit messages, etc.)

- Does the project demonstrate concepts covered this week? If prompted, are you able to discuss the flow of your code and the concepts behind it with an instructor using correct terminology?

- Is the app in a presentable, portfolio-quality state?

- Is required functionality in place by the Friday deadline?
 
### License
Licensed under the MIT license.

Copyright <2019> <Daniel Burbach>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

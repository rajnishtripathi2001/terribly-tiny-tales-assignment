# Assignment Submission for Terribly Tiny Tales
<br>
## Terribly Tiny Tales Word Frequency Counter
### [Live Project Link](https://terribly-tiny-tales-assignment-bice.vercel.app/)
<br>
### This is a simple ReactJS application that fetches a text file from the Terribly Tiny Tales website, cleans up the text, counts the frequency of words in the text, and displays the top 20 most frequently occurring words in a bar chart. The user can also export the word frequency data to a CSV file.
<br>
### Getting Started
1. Clone the repository
2. Open the terminal and navigate to the project directory
3. Run the command `npm install` to install all the dependencies
4. Run the command `npm start` to start the server
5. Open the browser and go to `localhost:3000` to view the application

### Components
### App
The App component is the main component of the application. It contains the state variables, the functions for fetching and processing the data, and the JSX code for rendering the UI.

State Variables
- content: stores the cleaned-up text data fetched from the Terribly Tiny Tales website.
- active: determines whether the bar chart and CSV export button should be displayed or not.
- words: stores an array of the top 20 most frequently occurring words.
- count: stores an array of the corresponding word frequencies.
<br>

### Functions
+ fetchContent(): fetches the text data from the Terribly Tiny Tales website, cleans it up, sets the content state variable, and calls the frequency() function to count the word frequencies.
+ cleanUpText(text): cleans up the text data by converting it to lowercase and removing all non-alphanumeric characters.
+ frequency(): counts the frequency of each word in the content data, stores the top 20 most frequently occurring words and their frequencies in the words and count state variables, and sets the active state variable to true.
+ sorted(data): sorts the word frequency data in descending order and stores the top 20 most frequently occurring words and their frequencies in the words and count state variables.

### CSV Export
The objectsArray variable is an array of objects that contains the word frequency data in a format suitable for export to a CSV file. The csvReport variable is an object that contains the objectsArray, the headers, and the filename for the CSV file. The CSVLink component from the react-csv library is used to create a button that allows the user to download the CSV file.

### CSS
The App.css file contains the CSS code for styling the UI components.

### Dependencies
+ axios: a promise-based HTTP client for making API requests.
+ react-chartjs-2: a React wrapper for Chart.js, a JavaScript charting library.
+ chart.js/auto: an automatic import version of Chart.js.
+ react-csv: a React component that allows the user to download data in CSV format.

### Credits
This application was developed by [Your Name] for the Terribly Tiny Tales assignment. The code is available under the MIT License.
### Screenshots:
![Screenshot 1](https://github.com/rajnishtripathi2001/terribly-tiny-tales-assignment/assets/82767514/ff62c15f-0fb1-4f01-8d03-97dfcb9de799)
![Screenshot 2](https://github.com/rajnishtripathi2001/terribly-tiny-tales-assignment/assets/82767514/12c46adf-b6ac-4389-b888-3169915cb128)
![Screenshot 3](https://github.com/rajnishtripathi2001/terribly-tiny-tales-assignment/assets/82767514/586d4c48-62f7-44c1-933e-ef869f09431d)

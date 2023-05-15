import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CSVLink } from "react-csv";

function App() {
  const [content, setContent] = useState();
  const [active, setactive] = useState(false);
  const [words, setWords] = useState([]);
  const [count, setCount] = useState([]);
  const wordList = [];
  const wordcount = [];
  const headers = [
    { label: "Word", key: "Word" },
    { label: "Count", key: "Count" },
  ];

  const fetchContent = () => {
    axios
      .get("https://www.terriblytinytales.com/test.txt")
      .then((response) => {
        const words = cleanUpText(response.data);
        setContent(words);
        frequency();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cleanUpText = (text) => {
    const cleanedText = text.toLowerCase();
    const result = cleanedText.replace(/[\W_]+/g, " ");
    return result;
  };

  const frequency = () => {
    const words = content.split(" ");
    const wordCount = {};
    words.forEach((word) => {
      if (wordCount[word]) {
        wordCount[word] += 1;
      } else {
        wordCount[word] = 1;
      }
    });
    sorted(wordCount);
  };

  const sorted = (data) => {
    var items = Object.keys(data).map((key) => {
      return [key, data[key]];
    });

    items.sort((first, second) => {
      return first[1] - second[1];
    });

    items.reverse();
    var i = 0;

    for (i = 0; i < 20; i++) {
      wordList.push(items[i][0]);
      wordcount.push(items[i][1]);
    }

    setactive(true);
    setWords(wordList);
    setCount(wordcount);
  };

  const objectsArray = words.map((elem, index) => ({
    Word: elem,
    Count: count[index],
  }));

  const csvReport = {
    data: objectsArray,
    headers: headers,
    filename: "WordFrequency.csv",
  };

  return (
    <div className="main-container">
      <h3>TERRIBLY TINY TALES Assignment</h3>
      <button className="btns" onClick={fetchContent}>
        Submit
      </button>
      <div className="chart-container">
        {active ? (
          <>
            <Bar
              data={{
                labels: words,
                datasets: [
                  {
                    label: "Word Frequency",
                    data: count,
                    borderWidth: 0,
                    barPercentage: 1,
                    categoryPercentage: 1,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
              }}
              height={200}
              width={300}
            />
            <button className="btns2">
              <CSVLink {...csvReport}>Export Data to CSV</CSVLink>
            </button>
          </>
        ) : (
          <p>Click on submit button to get the data</p>
        )}
      </div>
    </div>
  );
}

export default App;

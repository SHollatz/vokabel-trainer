import React, { Component } from "react";
import API from "../../utils/API";
import WordCard from "../../components/wordCard";
import "./Games.css";
import ResultsTable from "../../components/ResultsTable";

let visibility = ["visible", "visible", "visible", "visible", "visible", "visible", "visible", "visible",
  "visible", "visible", "visible", "visible", "visible", "visible", "visible", "visible"]

let results = [];

class Games extends Component {
  state = {
    words: [],
    articles: [],
    randomWordsWithArticles: [],
    clickCounter: 0,
    clicked1: {},
    message: "Welcome!",
    visibility: visibility,
    results: results
  };

  componentDidMount() {
    this.loadWords();
  }

  loadWords = () => {
    API.getWords()
      .then(res => {
        //console.log(res)
        const articles = [];
        let wordsArray = res.data;
        // console.log("words", wordsArray);
        this.shuffle(wordsArray);
        let resizedWordsArray = wordsArray.splice(0, 8);
        let words = resizedWordsArray.map(word => {
          articles.push(word.article);
          //console.log("word.word", word.word);
          return [word._id, word.word, word.article];
        });
        // console.log("words", words);
        // console.log("articles", articles);
        this.shuffle(articles)
        // console.log("articles", articles);
        this.setState({
          words: words,
          articles: articles,
        });
      }).catch(err => console.log("inside loadWords", err));
  }

  startOver = () => {
    visibility = ["visible", "visible", "visible", "visible", "visible", "visible", "visible", "visible",
          "visible", "visible", "visible", "visible", "visible", "visible", "visible", "visible"]
        results = []
    this.setState({
      visibility: visibility,
      results: results,
      message: ""
    });
    this.loadWords();
  }

  shuffle = (array) => {
    // console.log("this.state.visibility[0] ", this.state.visibility);

    // console.log("array", array);
    let tmp, current, top = array.length;
    // console.log("top", top);
    if (top) while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      // console.log("current", current);
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    // console.log("array after", array);
    //console.log("resizedArray ", resizedArray);
    return array;
  }

  handleClick = event => {
    event.preventDefault();
    // console.log("event.target ", event.target);

    let clickCounter = this.state.clickCounter + 1;
    if (clickCounter === 1) {
      this.setState({
        clicked1: event.target,
        clickCounter: clickCounter,
        message: ""
      });
    }
    if (clickCounter === 2) {
      this.checkMatch(event.target)
    }
  }

  checkMatch = (clicked2) => {
    const clicked1 = this.state.clicked1;
    const id_1 = clicked1.attributes.getNamedItem('id').value;
    const word_1 = clicked1.attributes.getNamedItem('word').value;
    const partner_1 = clicked1.attributes.getNamedItem('partner').value;
    let name_1 = clicked1.attributes.getNamedItem('name').value;
    const id_2 = clicked2.attributes.getNamedItem('id').value;
    const word_2 = clicked2.attributes.getNamedItem('word').value;
    const partner_2 = clicked2.attributes.getNamedItem('partner').value;
    let name_2 = clicked2.attributes.getNamedItem('name').value;

    if (name_1 === name_2) {
      this.setState({
        message: "Both words are of the same kind. Try again!"
      })
    } else {
      if (name_1 === "word") {
        if (partner_1 === word_2) {
          // results = results + [word_2 + ' ' + word_1];
          results.push(word_2 + ' ' + word_1);
          visibility[id_1] = "hidden";
          visibility[id_2] = "hidden";
          this.setState({
            message: "It's a match!",
            visibility: visibility,
            results: results
          });
        } else {
          this.setState({
            message: "It's not a match. Try again!"
          })
        }
      } else if (name_2 === "word") {
        if (partner_2 === word_1) {
          // results = results + [word_1 + ' ' + word_2];
          results.push(word_1 + ' ' + word_2);
          visibility[id_1] = "hidden";
          visibility[id_2] = "hidden";
          this.setState({
            message: "It's a match!",
            visibility: visibility,
            results: results
          });
        } else {
          this.setState({
            message: "It's not a match. Try again!"
          })
        }
      }
    }
    // console.log("results ", results);
    this.resetClickState();
    this.finishRound();
  }

  resetClickState = () => {
    this.setState({
      clickCounter: 0,
      clicked1: {},
    })
  }

  finishRound = () => {
    for (let i=0; i < visibility.length; i++) {
      // console.log("visibility[i] ", visibility[i]);
      if (visibility[i] === "visible") {
        // console.log("inside finishRound, if ")
        return;
      }
    }
    this.setState({
      message: "Congratulations! You have matched all pairs! Try again!"
    });
  }

  render() {
    return (
      <div className="main-games">
        <h2 id="games_title">Find the Matching Pairs!</h2>
        <button
          className="animated shake"
          id="startOver"
          onClick={this.startOver}
        >New Words!</button>
        <br className="clearfloat"></br>
        <hr></hr>
        <ResultsTable
          pairs={this.state.results}
        ></ResultsTable>
        <div className="cards-container">
          {this.state.words.map((word, index) => (
            <WordCard
              key={word[0]}
              className={this.state.visibility[index]}
              id={index}
              name="word"
              word={word[1]}
              partner={word[2]}
              onClick={this.handleClick}
            ></WordCard>
          ))}
          {this.state.articles.map((article, index) => (
            <WordCard
              key={index}
              className={this.state.visibility[index + 8]}
              name="article"
              id={index + 8}
              word={article}
              partner=""
              onClick={this.handleClick}
            ></WordCard>
          ))}
        </div>
        <h3 className="message">{this.state.message}</h3>
      </div>
    );
  }
}

export default Games;
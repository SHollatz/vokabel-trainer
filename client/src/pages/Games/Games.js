import React, { Component } from "react";
import API from "../../utils/API";
import WordCard from "../../components/wordCard";
import { Link } from "react-router-dom";
import "./Games.css";

class Games extends Component {
  state = {
    words: [],
    articles: [],
    randomWordsWithArticles: [],
    clickCounter: 0,
    clicked1: {},
    message: "Welcome!"
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
        console.log("words", wordsArray);
        this.shuffle(wordsArray);
        let resizedWordsArray = wordsArray.splice(0, 8);
        let words = resizedWordsArray.map(word => {
          articles.push(word.article);
          //console.log("word.word", word.word);
          return [word._id, word.word, word.article];
        });
        console.log("words", words);
        console.log("articles", articles);
        this.shuffle(articles)
        console.log("articles", articles);
        this.setState({
          words: words,
          articles: articles
        });
      }).catch(err => console.log("inside loadWords", err));
  }

  shuffle = (array) => {
    console.log("array", array);
    let tmp, current, top = array.length;
    console.log("top", top);
    if (top) while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      console.log("current", current);
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    console.log("array after", array);
    //console.log("resizedArray ", resizedArray);
    return array;
  }

  handleClick = event => {
    event.preventDefault();
    console.log("event.target ", event.target);
    
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
    const partner_1 = clicked1.attributes.getNamedItem('partner').value;
    const category_1 = clicked1.attributes.getNamedItem('class').value;
    const id_2 = clicked2.attributes.getNamedItem('id').value;
    const partner_2 = clicked2.attributes.getNamedItem('partner').value;
    const category_2 = clicked2.attributes.getNamedItem('class').value;

    if (category_1 === category_2) {
      this.setState({
        message: "Both words are of the same kind. Try again!"
      })
    } else {
      if (category_1 === "word") {
        if (partner_1 === id_2) {
          this.setState({
            message: "It's a match!"
          });
        } else {
          this.setState({
            message: "It's not a match. Try again!"
          })
        }
      } else if (category_2 === "word") {
        if (partner_2 === id_1) {
          this.setState({
            message: "It's a match!"
          });
        } else {
          this.setState({
            message: "It's not a match. Try again!"
          })
        }
      } 

    }
    this.resetClickState();
  }

  resetClickState = () => {
    this.setState({
      clickCounter: 0,
      clicked1: {},
    })
  }

  render() {
    return (
      <div className="main-games">
        <h2 id="games_title">Find the Matching Pairs!</h2>
        <button className="animated shake" id="start">Start!</button>
        <br className="clearfloat"></br>
        <hr></hr>
        <div className="cards-container">
          {this.state.words.map(word => (
            <WordCard
              key={word[0]}
              className="word"
              id={word[1]}
              word={word[1]}
              partner={word[2]}
              onClick={this.handleClick}
            ></WordCard>
          ))}
          {this.state.articles.map((article, index) => (
            <WordCard
              key={index}
              className="article"
              id={article}
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
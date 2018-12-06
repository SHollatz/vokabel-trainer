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
    clicked1: "",
    clicked2: ""
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
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top+1));
      console.log("current", current);
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    console.log("array after", array);
    //console.log("resizedArray ", resizedArray);
    return array;
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
            ></WordCard>
          ))}
          {this.state.articles.map((article, index) => (
            <WordCard
              key={index}
              className="article"
              id = {article}
              word={article}
              partner=""
            ></WordCard>
          ))}
        </div>
      </div>
    );
  }
}

export default Games;
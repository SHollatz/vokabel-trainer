import React, { Component } from "react";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Link } from "react-router-dom";

class WordList extends Component {
  state = {
    word:"",
    partOfSpeech:"",
    translation1:"",
    translation2:"",
    translation3:"",
    meaning1:"",
    meaning2:"",
    meaning3:"",
    article:"",
    gender:"",
    plural:"",
    thirdPersPresent:"",
    thirdPersonPast:"",
    thirdPersonPerfect:"",
    separable:"",
    comparative:"",
    superlative: "",
    exampleSentence: ""
  }
  
  render() {
    return(<div></div>);
  }
}

export default WordList;
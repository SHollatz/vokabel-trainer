import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import "./AddWord.css";

class AddWord extends Component {
  state = {
    word: "",
    partOfSpeech: "",
    translation1: "",
    article: "",
    gender: "",
    plural: ""
  }

  handleInputChange = event => {
    event.preventDefault();
    console.log(event.target.value);
    const { name, value } = event.target;
    console.log("name ", name);
    console.log("value ", value);
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Reported!")
    if (this.state.word && this.state.partOfSpeech && this.state.translation1) {
      API.saveWord({
        word: this.state.word,
        partOfSpeech: this.state.partOfSpeech,
        translation1: this.state.translation1,
        article: this.state.article,
        gender: this.state.gender,
        plural: this.state.plural
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div className = "main-addWord">
        <form>
          <Input
            value={this.state.word}
            onChange={this.handleInputChange}
            name="word"
            placeholder="German Word"
          />
          <Input
            value={this.state.partOfSpeech}
            onChange={this.handleInputChange}
            name="partOfSpeech"
            placeholder="Part of Speech (Required)"
          />
          <Input
            value={this.state.translation1}
            onChange={this.handleInputChange}
            name="translation1"
            placeholder="Translation (Required)"
          />
          <Input
            value={this.state.article}
            onChange={this.handleInputChange}
            name="article"
            placeholder="Article"
          />
          <Input
            value={this.state.gender}
            onChange={this.handleInputChange}
            name="gender"
            placeholder="Gender"
          />
          <Input
            value={this.state.plural}
            onChange={this.handleInputChange}
            name="plural"
            placeholder="plural"
          />

          <FormBtn
            disabled={!(this.state.word && this.state.partOfSpeech && this.state.translation1)}
            onClick={this.handleFormSubmit}
            >
            Save Word
          </FormBtn>
        </form>
      </div>
    );
  }
}

export default AddWord;
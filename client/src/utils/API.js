import axios from "axios";

export default {
  getWord: function(id) {
    return axios.get("/api/words" + id);
  },
  getWords: function() {
    console.log("inside getWords");
    return axios.get("/api/words");
  },
  getNouns: function() {
    return axios.get("/api/words/nouns");
  },
  getVerbs: function() {
    return axios.get("/api/words/verbs");
  },
  getAdjectives: function() {
    return axios.get("/api/words/adjectives");
  },
  saveWord: function(wordData) {
    //console.log("inside saveNoun: ", wordData);
    return axios.post("/api/words/", wordData);
  },
  deleteWord: function(id) {
    return axios.delete("/api/words/", id);
  },
};
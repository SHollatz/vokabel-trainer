import axios from "axios";

export default {
  getWord: function(id) {
    return axios.get("/api/words" + id);
  },
  getNouns: function() {
    return axios.get("/api/nouns");
  },
  getVerbs: function() {
    return axios.get("/api/verbs");
  },
  getAdjectives: function() {
    return axios.get("/api/adjectives");
  },
  saveWord: function(wordData) {
    //console.log("inside saveNoun: ", wordData);
    return axios.post("/api/words/", wordData);
  },
  deleteWord: function(id) {
    return axios.delete("/api/words/", id);
  },
};
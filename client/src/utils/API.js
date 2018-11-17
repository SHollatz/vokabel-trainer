import axios from "axios";

export default {
  getNouns: function() {
    return axios.get("/api/nouns");
  },
  getNoun: function(id) {
    return axios.get("/api/nouns" + id);
  },
  getVerbs: function() {
    return axios.get("/api/verbs");
  },
  getVerb: function(id) {
    return axios.get("/api/verbs" + id);
  },
  getAdjectives: function() {
    return axios.get("/api/adjectives");
  },
  getAdjective: function(id) {
    return axios.get("/api/adjective" + id);
  },
  saveNoun: function(wordData) {
    //console.log("inside saveNoun: ", wordData);
    return axios.post("/api/nouns/", wordData);
  },
  saveVerb: function(wordData) {
    //console.log("inside saveVerb: ", wordData);
    return axios.post("/api/verbs/", wordData);
  },
  saveAdjective: function(wordData) {
    // console.log("inside saveAjective: ", wordData);
    return axios.post("/api/adjectives/", wordData);
  },
  deleteNoun: function(id) {
    return axios.delete("/api/nouns/", id);
  },
  deleteVerb: function(id) {
    return axios.delete("/api/verbs/", id);
  },
  deleteAdjective: function(id) {
    return axios.delete("/api/adjectives/", id);
  }
};
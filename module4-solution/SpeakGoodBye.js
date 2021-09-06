
(function (window) { 
  var speakWord = "Bye";
  var byeSpeaker = {};
  byeSpeaker.speak =  function (name) {
    console.log(speakWord + " " + name);
  };
  
  window.byeSpeaker = byeSpeaker;
  
})(window); 
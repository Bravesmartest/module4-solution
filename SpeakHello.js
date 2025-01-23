
(function(window) {
  var speakWord = "Hello";
  var helloSpeaker = {};
  helloSpeaker.speak = function(name) {
      document.getElementById("output").innerHTML += speakWord + " " + name + "<br>";
  };
  window.helloSpeaker = helloSpeaker;
})(window);
  


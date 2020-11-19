function setText(text) {
  document.getElementById("title").textContent = text;
}

var worker = new Worker("worker.js");
worker.postMessage("download");
worker.onmessage = (e) => setText(e.data.id);

/*
// This call will be intercepted correctly
fetch("data.json")
  .then((res) => res.json())
  .then((data) => setText(data.id));
*/

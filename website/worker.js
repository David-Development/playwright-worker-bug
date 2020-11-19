self.onmessage = function (_) {
  fetch("data.json")
    .then((res) => res.json())
    .then((json) => self.postMessage(json));
};

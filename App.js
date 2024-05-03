const heading = React.createElement(
  "h1",
  { id: "parent" }, // attribute
  [
    React.createElement(
      "h1",
      { id: "child" }, // attribute
      [
        React.createElement("h1", {}, "I'm an h1 tag!"),
        React.createElement("h2", {}, "I'm an h2 tag!"),
      ]
    ),
    React.createElement(
      "h1",
      { id: "child" }, // attribute
      [
        React.createElement("h1", {}, "I'm an h1 tag!"),
        React.createElement("h2", {}, "I'm an h2 tag!"),
      ]
    ),
  ] // children
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

console.log(heading);

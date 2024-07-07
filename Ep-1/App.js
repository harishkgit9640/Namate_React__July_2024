// const element = React.createElement("h1", { class: "heading", id: "main" }, "welcome to React!");

const element1 = React.createElement("h1", { class: "line1" }, "This is line 1");
const element2 = React.createElement("h1", { class: "line2" }, "this line 2");
const element = React.createElement("div", { class: "container" }, [element1, element2]);
// console.log(element);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
"use strict";

var destination = document.querySelector("#container");

var _ReactRouter = ReactRouter;
var Router = _ReactRouter.Router;
var Route = _ReactRouter.Route;
var IndexRoute = _ReactRouter.IndexRoute;
var IndexLink = _ReactRouter.IndexLink;
var Link = _ReactRouter.Link;


var App = React.createClass({
  displayName: "App",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Simple SPA"
      ),
      React.createElement(
        "ul",
        { className: "header" },
        React.createElement(
          "li",
          null,
          React.createElement(
            IndexLink,
            { to: "/", activeClassName: "active" },
            "Home"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            Link,
            { to: "/stuff", activeClassName: "active" },
            "Stuff"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            Link,
            { to: "/contact", activeClassName: "active" },
            "Contact"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            Link,
            { to: "/follow", activeClassName: "active" },
            "Follow"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "content" },
        this.props.children
      )
    );
  }
});
var Home = React.createClass({
  displayName: "Home",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        "HELLO"
      ),
      React.createElement(
        "p",
        null,
        "Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      ),
      React.createElement(
        "p",
        null,
        "Duis a turpis sed lacus dapibus elementum sed eu lectus."
      )
    );
  }
});
var Follow = React.createClass({
  displayName: "Follow",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        "Hey you can follow me.."
      ),
      React.createElement(
        "p",
        null,
        "Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      ),
      React.createElement(
        "p",
        null,
        "Duis a turpis sed lacus dapibus elementum sed eu lectus."
      )
    );
  }
});
var Contact = React.createClass({
  displayName: "Contact",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        "GOT QUESTIONS?"
      ),
      React.createElement(
        "p",
        null,
        "The easiest thing to do is post on our ",
        React.createElement(
          "a",
          { href: "http://forum.kirupa.com" },
          "forums"
        ),
        "."
      )
    );
  }
});

var Stuff = React.createClass({
  displayName: "Stuff",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        "STUFF"
      ),
      React.createElement(
        "p",
        null,
        "Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:"
      ),
      React.createElement(
        "ol",
        null,
        React.createElement(
          "li",
          null,
          "Nulla pulvinar diam"
        ),
        React.createElement(
          "li",
          null,
          "Facilisis bibendum"
        ),
        React.createElement(
          "li",
          null,
          "Vestibulum vulputate"
        ),
        React.createElement(
          "li",
          null,
          "Eget erat"
        ),
        React.createElement(
          "li",
          null,
          "Id porttitor"
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(
  Router,
  null,
  React.createElement(
    Route,
    { path: "/", component: App },
    React.createElement(IndexRoute, { component: Home }),
    React.createElement(Route, { path: "stuff", component: Stuff }),
    React.createElement(Route, { path: "contact", component: Contact }),
    React.createElement(Route, { path: "follow", component: Follow })
  )
), destination);

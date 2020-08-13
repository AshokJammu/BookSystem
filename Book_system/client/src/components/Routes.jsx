import React from "react";
import { Route, Link } from "react-router-dom";
import BooksList from "./BooksList";
import BooksCreate from "./BooksCreate";
import BooksUpdate from "./BooksUpdate"
import Login from "./Login";
import Register from "./Register";

// import { Provider } from "react-redux";
// import store from "../redux/store";
// import Home from "./Home";
// import QuoteList from "./QuoteList";

const Routes = () => {
  return (
    // <Provider store={store}>
      <div>
        {[
          {
            path: "/",
            title: "BooksList"
          },
          {
            path: "/create",
            title: "BookCreate"
          },
          {
            path: "/update",
            title: "BookUpdate"
          },
          {
            path: "/login",
            title: "Login"
          },
          {
            path: "/register",
            title: "Register"
          },

        ].map((link) => (
          <Link style={{ padding: 20 }} key={link.path} to={link.path}>
            {link.title}{" "}
          </Link>
        ))}

        <Route path="/" exact component={BooksList} />
        <Route path="/create" component={BooksCreate} />
        <Route path="/update" component={BooksUpdate} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    // </Provider>
  );
};

export default Routes;

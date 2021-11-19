import React, { Component } from "react";
import "./css/bootstrap.min.css";
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter as Router,
  Redirect,
  withRouter,
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuth: false,
    };
  }
  render() {
    const LoginButton = withRouter(({ history }) => (
      <button
        className="btn btn-primary float-end"
        onClick={() => {
          this.setState({ isAuth: true });
          history.push("/profile");
        }}
      >
        Login
      </button>
    ));

    const LogoutButton = withRouter(({ history }) => (
      <button
        className="btn btn-primary mt-2"
        onClick={() => {
          this.setState({ isAuth: false });
          history.push("/");
        }}
      >
        Logout
      </button>
    ));

    const routes = [
      {
        path: "/",
        exact: true,
        render: () => (
          <div className="text-center">
            <p className="fs-2 fw-bold">Home Page</p>
          </div>
        ),
      },
      {
        path: "/login",
        render: () => (
          <div className="container">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <div className="login-form bg-light mt-4 p-4">
                  <form action="" method="" className="row g-3">
                    <h4 className="text-center fw-bold">Login</h4>
                    <div className="col-12">
                      <label>Username</label>
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberMe"
                        />
                        <label className="form-check-label" for="rememberMe">
                          {" "}
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <LoginButton />
                    </div>
                  </form>
                  <hr className="mt-4" />
                  <div className="col-12">
                    <p className="text-center mb-0">
                      Have not account yet? <a href="#">Signup</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        path: "/profile",
        render: () =>
          this.state.isAuth ? (
            <div className="container">
              <h2 className="fw-bold">Profile College Student</h2>
              <table style={{ width: "100%", border: "1px solid black" }}>
                <tr style={{ border: "1px solid black" }}>
                  <td className="fw-bold">Name</td>
                  <td>:</td>
                  <td>Kharlos Davinci</td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td className="fw-bold">NIM</td>
                  <td>:</td>
                  <td>192110886</td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td className="fw-bold">Gender</td>
                  <td>:</td>
                  <td>Male</td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td className="fw-bold">Class</td>
                  <td>:</td>
                  <td>Ebiz B Sore</td>
                </tr>
              </table>
              <LogoutButton />
            </div>
          ) : (
            <Redirect to="/login" />
          ),
      },
    ];
    return (
      <Router>
        <div className="container">
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/profile">
                  Profile
                </NavLink>
              </li>
            </ul>

            <Switch>
              {routes.map((item, index) => (
                <Route
                  path={item.path}
                  exact={item.exact}
                  render={item.render}
                  key={index}
                />
              ))}
            </Switch>
          </nav>
        </div>
      </Router>
    );
  }
}

export default App;

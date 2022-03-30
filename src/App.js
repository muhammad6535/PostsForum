import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PostDetails from "./components/posts/PostDetails";
import CreatePost from "./components/posts/CreatePost";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Router>
      <div ClassName="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/post/:id" component={PostDetails}></Route>
            <Route path="/create" component={CreatePost}></Route>            
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

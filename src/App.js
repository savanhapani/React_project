import React,{Component} from 'react';
import Header from './Header'
import Footer from './footer'
import Center_part from './center_part'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Card from './Card'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class App extends Component{
render() {
  return (
    <Router>
      <div>
   <Header />
   <Center_part/>
   <Card />
   <Footer />
   <Route exact path="/" component={Home} />
   <Route path="/about" component={About} />
   <Route path="/contact" component={Contact} />
   </div>
    </Router>
  );
}
}
export default App;

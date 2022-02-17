import React from 'react';
import './App.css';
import Home from './component/Home'
import GroupDiary from './component/GroupDiary'
import StyleGuide from './component/StyleGuide'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Project from './component/Project';
import About from './component/About';
import Contact from './component/Contact';
import Technology from './component/Technology';
import Result from './component/Result';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/groupdiary" component={GroupDiary}/>
        <Route path="/technology" component={Technology}/>
        <Route path="/project" component={Project}/>
        <Route path="/styleguide" component={StyleGuide}></Route>
        <Route path="/contact" component={Contact}/>
        <Route path="/result" component={Result}/>
      </Router>
    </div>
  );
}

export default App;

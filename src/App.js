import React, { Component } from "react";
import Nav from "./Nav";
import Question from "./Question";
import Title from "./Title";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// CSS
const url = process.env.PUBLIC_URL + "/data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      question: null,
      isQuestion: false,
    };
  }

  // se lance qu'une fois après que le Component
  // soient montés dans le DOM
  componentDidMount() {
    fetch(`${url}/qcm.json`).then((response) => {
      if (response.ok) {
        // objet JSON avec une promesse
        response.json().then((content) => {
          let qcm = content["qcm"];
          // met à jour le render
          this.setState({
            questions: qcm,
          });
        });
      }
    });
  }

  onSelected = (id) => {
    // récupérer la question dans le tableau questions dans le state
    // [0] pour avoir la question dans un objet JSON.
    const question = this.state.questions.filter((q) => q.id === id)[0];

    this.setState({
      question: question,
      isQuestion: true, // d'afficher la question dans le colonne de droite
    });
  };

  render() {
    const titles = this.state.questions.map((qcm, i) => (
      <Title
        onSelected={this.onSelected}
        key={i}
        title={qcm.title}
        badge={qcm.badge}
        id={parseInt(qcm.id)}
      />
    ));

    return (
      <>
        <Nav />
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>{titles}</div>
            <div className='col-md-8'>
              {this.state.isQuestion ? (
                <Question {...this.state.question} />
              ) : (
                <p>{"Aucune question sélectionnée"}</p>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

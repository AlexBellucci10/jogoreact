import React from 'react';
import './estilo.css';
import ReactDOM from 'react-dom';


let PlayContext = React.createContext("");

class Quadrado extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "■" };
  }

  componentDidUpdate() { }

  render() {
    return (
      <PlayContext.Consumer>
        {play => (
          <div
            onClick={
              play.state.progress !== "status"
                ? null
                : this.state.value === "■"
                  ? () => {
                    this.setState({ value: play.state.proximoJogador }, () => {
                      play.state.toggleProximoJogador();
                    });
                  }
                  : null
            }

          >
            {this.state.value}
          </div>
        )}
      </PlayContext.Consumer>
    );
  }
}

function Quadradao() {
  return (
    <PlayContext.Consumer>
      {play => (
        <>
          <div className="quadradao">
            <div className="quadrado"> <Quadrado ref={play.state.A1} /> </div>
            <div className="quadrado"><Quadrado ref={play.state.A2} /> </div>
            <div className="quadrado"><Quadrado ref={play.state.A3} /> </div>

            <div className="quadrado"> <Quadrado ref={play.state.A4} /> </div>
            <div className="quadrado"> <Quadrado ref={play.state.A5} /> </div>
            <div className="quadrado"> <Quadrado ref={play.state.A6} /> </div>

            <div className="quadrado"> <Quadrado ref={play.state.A7} /> </div>
            <div className="quadrado"> <Quadrado ref={play.state.A8} /> </div>
            <div className="quadrado"> <Quadrado ref={play.state.A9} /> </div>
          </div>
        </>
      )}
    </PlayContext.Consumer>
  );
}


class Play extends React.Component {
  constructor() {
    super();
    this.state = {
      move: 0,
      proximoJogador: "#",
      toggleProximoJogador: this.toggleProximoJogador,
      progress: "status"
    };
  }

  componentDidMount() {
    console.log(this.state.A1);
    this.setState(
      {
        A1: React.createRef(),
        A2: React.createRef(),
        A3: React.createRef(),
        A4: React.createRef(),
        A5: React.createRef(),
        A6: React.createRef(),
        A7: React.createRef(),
        A8: React.createRef(),
        A9: React.createRef()
      },
      () => {
        console.log(this.state.A1);
      }
    );
  }

  toggleProximoJogador = () => {
    this.setState(
      {

        proximoJogador: this.state.proximoJogador === "#" ? "*" : "#",
        move: this.setState
      },
      this.verifGanhador()
    );
  };

  verifGanhador = () => {
    let A1 = this.state.A1.current.state.value;
    let A2 = this.state.A2.current.state.value;
    let A3 = this.state.A3.current.state.value;

    let A4 = this.state.A4.current.state.value;
    let A5 = this.state.A5.current.state.value;
    let A6 = this.state.A6.current.state.value;

    let A7 = this.state.A7.current.state.value;
    let A8 = this.state.A8.current.state.value;
    let A9 = this.state.A9.current.state.value;

    if (((A1 !== "■") && (A2 !== "■") && (A3 !== "■") && (A1 === A2) && (A2 === A3)) || ((A1 !== "■") && (A5 !== "■") && (A9 !== "■") && (A1 === A5) && (A5 === A9)) || ((A1 !== "■") && (A4 !== "■") && (A7 !== "■") && (A1 === A4) && (A4 === A7)) || ((A4 !== "■") && (A5 !== "■") && (A6 !== "■") && (A4 === A5) && (A5 === A6)) || ((A7 !== "■") && (A8 !== "■") && (A9 !== "■") && (A7 === A8) && (A8 === A9)) || ((A2 !== "■") && (A5 !== "■") && (A8 !== "■") && (A2 === A5) && (A5 === A8)) || ((A3 !== "■") && (A6 !== "■") && (A9 !== "■") && (A3 === A6) && (A6 === A9)) || ((A7 !== "■") && (A5 !== "■") && (A3 !== "■") && (A7 === A5) && (A5 === A3))) {
      alert("Você ganhou");
      window.location.reload();
    }
  };

  render() {
    return (
      <div>

        <PlayContext.Provider value={{ state: this.state }}>
          <Quadradao />
        </PlayContext.Provider>
      </div>
    );
  }


}

const rootElement = document.getElementById("root");
ReactDOM.render(<Play />, rootElement);

export default Play;
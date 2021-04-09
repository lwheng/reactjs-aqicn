'use strict';

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "Nothing to display" };
  }

  componentDidMount() {
    fetch("https://api.waqi.info/feed/geo:1.367261;103.79982/?token=49441845ec0f10680db9bafd791d935630d6bb28")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            content: JSON.stringify(result)
          });
        },

        (error) => {
          this.setState({
            content: "Error!"
          });
        }
      )
  }

  render() {
    return this.state.content;
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(App), domContainer);

function App () {
  console.log("App")
  const [content, setContent] = React.useState("Nothing to display");

  React.useEffect(() => {
    console.log("useEffect");
    fetch("https://api.waqi.info/feed/geo:1.367261;103.79982/?token=49441845ec0f10680db9bafd791d935630d6bb28")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("success");
          setContent(JSON.stringify(result));
        },

        (error) => {
          console.log("error");
          setContent(JSON.stringify("Error!"));
        }
      );

    return function cleanup() {
      console.log("cleanup");
    };
  }, []);

  return (
    <div>{content}</div>
  );
}

ReactDOM.render(<App/>, document.querySelector('#root'));

import React, { Component } from "react";
import { Cards, Chart, Country } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import covid19 from "./images/download1.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    // console.log(this.state.data);
  }

  handleCountryChange = async (country) => {
    // console.log(country);
    //fetch data
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={covid19} alt="Corona Virus" className={styles.image} />
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;

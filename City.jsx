
import { Component } from "react";

class City extends Component {
  render() {
    return (
      <div>
        <h1>Вінниця</h1>

        <p><b>Країна:</b> Україна</p>
        <p><b>Рік заснування:</b> 1363</p>

        <h2>Визначні місця Вінниці</h2>

        <h3>Вінницька водонапірна вежа</h3>
        <img
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Vinnytsia_-_Water_tower.jpg"
          alt="Водонапірна вежа Вінниці"
          width="300"
          style={{ display: "block", marginBottom: "20px" }}
        />

        <h3>Фонтан Roshen</h3>
        <img
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Фонтан%20Рошен%202.jpg"
          alt="Фонтан Roshen"
          width="300"
          style={{ display: "block", marginBottom: "20px" }}
        />

        <h3>Музей-садиба Пирогова</h3>
        <img
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Pirogov%20vinnytsya.JPG"
          alt="Музей-садиба Пирогова"
          width="300"
          style={{ display: "block", marginBottom: "20px" }}
        />
      </div>
    );
  }
}

export default City;

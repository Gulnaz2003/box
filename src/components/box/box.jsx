import Button from "../button/button";
import "./box.css";
import box from "../img/box.png";

function Box() {
  return (
    <div className="box_container">
      <div className="box_options">
        <div className="box_title">
          <h1>Выберите бокс</h1>

          <div className="box_input">
            <Button
              text="1"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="50px"
            />
            <Button
              text="2"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="50px"
            />
            <Button
              text="3"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="50px"
            />
            <Button
              text="4"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="50px"
            />
            <Button
              text="5"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="50px"
            />
          </div>
          <div className="box_number">
            <Button
              text="6"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="50px"
            />

            <Button
              text="7"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="50px"
            />
            <Button
              text="8"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="50px"
            />
            <Button
              text="9"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="50px"
            />
            <Button
              text="10"
              background="white"
              width="170px"
              height="170px"
              borderColor="white"
              fontSize="50px"
            />
          </div>

          <button className="button">
            <h1>Флоп</h1>
          </button>
          <div className="box_menu">
            <img src={box} alt="" />
            <a href="url">Выйти</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;

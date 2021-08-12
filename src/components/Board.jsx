import Square from "./Square";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function Board() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://naruto-api.herokuapp.com/api/v1/characters?sort=true")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <>
        <div
          style={{
            display: "flex",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#ffffff",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={{ maxWidth: "100vw" }} src={"./Loading_icon.gif"} />
        </div>
      </>
    );
  } else {
    return (
      <div
        className="card-container"
        key={nanoid()}
        style={{
          display: "flex",
          flexWrap: "wrap",
          // justifyContent: "center",
          // alignItems: "center",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        {items.map(({ name, id, images, info, about, page }) => (
          <Square
            className="square"
            name={name}
            id={id}
            images={images}
            info={info}
            about={about}
            key={nanoid()}
            page={page}
          />
        ))}
      </div>
    );
  }
}

export default Board;

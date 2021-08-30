import { nanoid } from "nanoid";

import Square from "./Square";

function Board({ data }) {
  return (
    <div
      className="card-container"
      key={nanoid()}
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      {data.map(({ name, id, images, info, about, page }) => {
        return (
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
        );
      })}
    </div>
  );
}

export default Board;

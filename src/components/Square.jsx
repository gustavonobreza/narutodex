import { nanoid } from "nanoid";

function Square({ name, id, images, info, about, page }) {
  // let isVisible = true;
  // console.log({ page });
  return (
    <div
      key={id}
      className={"card p_about"}
      style={{
        maxWidth: "49%",
        backgroundColor: "#2c2d36",
        fontFamily: "Segoe UI",
        lineHeight: "1.3",
      }}
    >
      <p className={"name"} style={{ fontFamily: "Arial" }}>
        <a href={page} target="_blank" style={{ color: "#4287f5" }}>
          {name}
        </a>
      </p>
      <img
        src={images[images.length - 1]}
        alt={name}
        width={500}
        style={{ margin: "10px 0 0 0", textAlign: "center", width: "100%" }}
      />

      <div className="about">
        {about.map((paragraph) => {
          return (
            <p className={""} key={nanoid()}>
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Square;

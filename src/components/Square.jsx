import { nanoid } from "nanoid";
import { useState } from "react";

function Square({ name, id, images, info, about, page }) {
  // let isVisible = true;
  // console.log({ page });
  const [imgIndex, setImgIndex] = useState(images.length - 1);

  return (
    <div
      key={id}
      className={"card p_about"}
      onClick={(e) => {
        // e.currentTarget.style.maxHeight = "10000vh";
        // e.currentTarget.style.overflow = "auto";
      }}
      style={{
        maxWidth: "49%",
        backgroundColor: "#2c2d36",
        fontFamily: "Segoe UI",
        lineHeight: "1.3",
        // maxHeight: "150vh",
        // overflow: "hidden",
      }}
    >
      <p className={"name"} style={{ fontFamily: "Arial" }}>
<<<<<<< HEAD
        <a href={page} target="_blank" style={{ color: "#4287f5" }}>
=======
        <a
          href={page}
          target="_blank"
          style={{ color: "#4287f5" }}
          rel="noreferrer"
        >
>>>>>>> ae3ecf80919b7601deac358c030ad9a5ba7fdaa1
          {name}
        </a>
      </p>
      <img
        src={images[imgIndex]}
        alt={name}
        width={500}
        onClick={
<<<<<<< HEAD
          (e) => {
=======
          (_e) => {
>>>>>>> ae3ecf80919b7601deac358c030ad9a5ba7fdaa1
            setImgIndex((curr) =>
              curr - 1 >= 0 ? curr - 1 : images.length - 1
            );
          }
          // (e.currentTarget.src = images[images.length - 2 || images.length - 1])
        }
        style={{
          margin: "10px 0 0 0",
          textAlign: "center",
          width: "100%",
          cursor: "pointer",
        }}
      />

<<<<<<< HEAD
      <div className="about">
=======
      <div
        className="about"
        // style={{
        //   display: "block",
        //   maxHeight: "400px",
        //   overflow: "hidden",
        //   // whiteSpace: 'nowrap',
        //   textOverflow: "ellipsis",
        // }}
      >
>>>>>>> ae3ecf80919b7601deac358c030ad9a5ba7fdaa1
        {about.map((paragraph, ind, all) => {
          const part = all.slice(0, ind).join(" ");
          if (part.length < 1600) {
            return (
              <p className={""} key={nanoid()}>
                {paragraph}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Square;

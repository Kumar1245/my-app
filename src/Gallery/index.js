import React, { useState } from "react";

const Gallery = () => {
  const [image, setImage] = useState(1);

  return (
    <div className="flex flex-col justify-center pt-20 gap-5">
      <img
        alt=""
        src={`https://source.unsplash.com/random/900x700/?fruit/${image}`}
        className="h-96 w-96"
      />
      <div className="flex gap-2 justify-center">
        {[1, 2, 3, 4, 5, 6].map((i) => {
          return (
            <>
              <img
                alt=""
                src={`https://source.unsplash.com/random/900x700/?fruit/${i}`}
                className="h-16 w-16"
                onClick={() => setImage(i)}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;

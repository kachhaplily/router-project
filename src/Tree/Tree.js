import React from "react";
import './Tree.css';

const Tree = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background tree */}
      <div className="tree-background">
      <img src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg" alt="Giant Tree" className="w-full h-full object-cover opacity-80" />

      </div>

      {/* Parallax layerss */}
      <div className="parallax-container">
        <section className="parallax-layer layer-1">
          <h1 className="text-5xl font-bold text-green-700">The Roots</h1>
          <p className="max-w-md mt-4 text-lg">
            Discover the roots of this ancient tree, deep and resilient, drawing nutrients from the earth.
          </p>
        </section>

        <section className="parallax-layer layer-2">
          <h2 className="text-4xl font-bold text-green-600">The Trunk</h2>
          <p className="max-w-md mt-4 text-lg">
            The trunk is mighty and enduring, connecting the roots to the sky.
          </p>
        </section>

        <section className="parallax-layer layer-3">
          <h2 className="text-4xl font-bold text-green-500">The Branches</h2>
          <p className="max-w-md mt-4 text-lg">
            The branches reach out wide, supporting life and capturing the sun's energy.
          </p>
        </section>

        <section className="parallax-layer layer-4">
          <h2 className="text-4xl font-bold text-green-400">The Leaves</h2>
          <p className="max-w-md mt-4 text-lg">
            The leaves breathe life, transforming sunlight into energy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Tree;

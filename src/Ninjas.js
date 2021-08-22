import React from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map((ninja) => {
    return (
      <div className="ninja text-capitalize" key={ninja.id}>
        <div>ID: {ninja.id}</div>
        <div className="">Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div className="">Belt: {ninja.belt}</div>

        <button
          className="btn btn-danger my-3"
          onClick={() => deleteNinja(ninja.id)}
        >
          Delete Ninja
        </button>
        <p className="nowrap">-------------------------------------</p>
      </div>
    );
  });
  return (
    <div className="ninja-list container jumbotron text-center bold">
      {ninjaList}
    </div>
  );
};

//- Conditional return
/*
const Ninjas = ({ ninjas }) => {
  const ninjaList = ninjas.map((ninja) => {
    return ninja.id % 2 === 0 ? (
      <div className="ninja" key={ninja.id}>
        <div>ID: {ninja.id}</div>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <pre>---------------------</pre>
      </div>
    ) : null;
  });
  return <div className="ninja-list container">{ninjaList}</div>;
};
*/

export default Ninjas;

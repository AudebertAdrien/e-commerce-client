import BoostrapModal from "../boostrap-components/Modal";

function card({ list }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {list &&
        list.map((item) => {
          return (
            <div className="card m-4" key={item.id}>
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.type}</p>
                <BoostrapModal item={item} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default card;

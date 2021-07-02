import { useState, useEffect, useRef } from "react";
import { Modal } from "bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { cartSelector } from "../store/cart.selectors";
import { incrementCart, decrementCart } from "../store/cart.actions";

function BoostrapModal({ item }) {
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch();
  const count = useSelector(cartSelector);

  // interactive bootstrap "modal" with js
  const [modal, setModal] = useState(null);
  const exampleModal = useRef();

  useEffect(() => {
    setModal(new Modal(exampleModal.current));
  }, []);

  return (
    <div>
      {/* show btn Modal */}
      <button
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#${item.name}`}
        onClick={() => modal.show()}
      >
        Go somewhere
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        ref={exampleModal}
        id={item.name}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {item.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => modal.hide()}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>{item.description}</div>
              <div>&euro;{item.price}</div>
            </div>

            {/* Minus / Plus button */}
            <div className="btn-group" role="groupe" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => (count > 1 ? dispatch(decrementCart(1)) : 1)}
              >
                -
              </button>
              <span className="btn btn-light qty">{count}</span>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => dispatch(incrementCart(1))}
              >
                +
              </button>
            </div>

            {/* Add to card */}
            <div className="center">
              <div className="buttons d-flex flex-row">
                <div className="cart">
                  <i className="fa fa-shopping-cart"></i>
                </div>
                <button
                  className={`btn btn-success cart-button px-5 ${
                    isClicked ? "clicked" : ""
                  }`}
                  onClick={() => setIsClicked(!isClicked)}
                >
                  <span className="dot">1</span>Add to cart{" "}
                </button>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => modal.hide()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoostrapModal;

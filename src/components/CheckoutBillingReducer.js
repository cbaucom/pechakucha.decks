import React, { useReducer } from "react"
import { MdShoppingCart } from "react-icons/md"
import Heading from "./Heading"

function CheckoutBillingReducer({ onSubmit }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "TOGGLE_SAME_AS_BILLING":
          return { ...state, sameAsBilling: !state.sameAsBilling }
        case "CHANGE_FIELD":
          return { ...state, [action.field]: action.value }
        default:
          return state
      }
    },
    {
      sameAsBilling: false,
      billingName: "",
      billingAddress: "",
      shippingName: "",
      shippingAddress: "",
    }
  )

  const {
    sameAsBilling,
    billingName,
    billingAddress,
    shippingName,
    shippingAddress,
  } = state

  function handleSubmit(event) {
    event.preventDefault()
    const fields = {
      billingName,
      billingAddress,
      shippingName: sameAsBilling ? billingName : shippingName,
      shippingAddress: sameAsBilling ? billingAddress : shippingAddress,
    }
    onSubmit(sameAsBilling, fields)
  }

  function changeField(field, value) {
    dispatch({ type: "CHANGE_FIELD", field, value })
  }

  return (
    <div className="spacing">
      <Heading>
        <MdShoppingCart /> Billing &amp; Shipping
      </Heading>
      <form onSubmit={handleSubmit} className="spacing">
        <Heading as="h2" size={3}>
          Billing Info
        </Heading>
        <hr />
        <div className="form-field">
          <label htmlFor="billing:name">Name</label>
          <input
            id="billing:name"
            type="text"
            required
            defaultValue={billingName}
            onChange={event => changeField("billingName", event.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="billing:address">Address</label>
          <input
            id="billing:address"
            type="text"
            required
            defaultValue={billingAddress}
            onChange={event =>
              changeField("billingAddress", event.target.value)
            }
          />
        </div>

        <Heading as="h2" size={3}>
          Shipping Info
        </Heading>

        <label>
          <input
            type="checkbox"
            defaultChecked={sameAsBilling}
            onChange={() => dispatch({ type: "TOGGLE_SAME_AS_BILLING" })}
          />{" "}
          Same as Billing
        </label>

        <div className="form-field">
          <label htmlFor="shipping:name">Name</label>
          <input
            id="shipping:name"
            type="text"
            required
            value={sameAsBilling ? billingName : shippingName}
            onChange={event => changeField("shippingName", event.target.value)}
            disabled={sameAsBilling}
          />
        </div>
        <div className="form-field">
          <label htmlFor="shipping:address">Address</label>
          <input
            id="shipping:address"
            type="text"
            required
            value={sameAsBilling ? billingAddress : shippingAddress}
            onChange={event =>
              changeField("shippingAddress", event.target.value)
            }
            disabled={sameAsBilling}
          />
        </div>

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CheckoutBillingReducer

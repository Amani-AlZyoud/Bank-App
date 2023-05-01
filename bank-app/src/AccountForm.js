import React, {useState} from 'react'

const AccountForm = (props) => {

  const [customerName, setCustomerName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountType, setAccountType] = useState("");
  const [count, setCount] = useState(2);


   
    const handleSubmit = (e) => {
    e.preventDefault();
    const newAccount = {
      id: {count},
      customerName,
      accountNumber,
      accountType,
    };
    const arrayOfAccounts = props.accountsArray;
    arrayOfAccounts.push(newAccount);
    props.setAccounts(arrayOfAccounts);
    props.setNumberOfAccounts({count});

    // console.log(arrayOfAccounts)

    
  }

  return (
    <><div className="row justify-content-center  p-5 bg-dark rounded-3">
        <h1 className='text-center fw-bold text-light'>Create An Account</h1>
    <form className=' p-5 rounded' id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="customerName"
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Customer Name"
          data-sb-validations="required"
        />
        <label htmlFor="customerName">Customer Name</label>
        <div
          className="invalid-feedback"
          data-sb-feedback="customerName:required"
        >
          Customer Name is required.
        </div>
      </div>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="accountNumber"
          type="number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          placeholder="Account Number"
          data-sb-validations="required"
        />
        <label htmlFor="accountNumber">Account Number</label>
        <div
          className="invalid-feedback"
          data-sb-feedback="accountNumber:required"
        >
          Account Number is required.
        </div>
      </div>
      <div className="form-floating mb-3">
        <select
          className="form-select"
          id="accountType"
          aria-label="Account Type"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        >
          <option value=""></option>
          <option value="Savings">Savings</option>
          <option value="Student accounts">Student accounts</option>
          <option value="Business">Business</option>
          <option value="Charity">Charity</option>
        </select>
        <label htmlFor="accountType">Account Type</label>
      </div>
      <div className="d-none" id="submitSuccessMessage">
        <div className="text-center mb-3">
          <div className="fw-bolder">Form submission successful!</div>
          <p>To activate this form, sign up at</p>
          <a href="https://startbootstrap.com/solution/contact-forms">
            https://startbootstrap.com/solution/contact-forms
          </a>
        </div>
      </div>
      <div className="d-none" id="submitErrorMessage">
        <div className="text-center text-danger mb-3">Error sending message!</div>
      </div>
    <div className='d-flex col-12 justify-content-center'>
 
    <button
          className="btn btn-light mb-3 btn-lg text-center"
          id="submitButton"
          type="submit"
          onClick={() => setCount(count + 1)}>
          Submit
    </button>
    </div>
  
    </form>
  </div>

  
  </>
  )
}

export default AccountForm
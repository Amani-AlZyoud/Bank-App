import React from 'react'
import uImg from './user.jpg'

const Accounts = (props) => {

    const totalAccounts = props.accountsArray;

    const handleDelete = (id) =>{
      props.setAccounts(totalAccounts.filter((account) => account.id !== id));
      props.setNumberOfAccounts(props.numberOfAccounts - 1);
    }

  return (
    <>
    { 
      totalAccounts.map((account) => {

      return(
        <div className='d-inline-block mx-3 my-3'>
          <div className="card bg-dark" style={{ width: "18rem" }}>
          <img className="card-img-top" src={uImg}  alt="Card image cap" />
          <div className="card-body">
              <h2 className="card-title text-light" >{account.customerName}</h2>
              <p className="card-text" id='card-text-color'>
                <h6><span className='text-light'>Account Number:</span> {account.accountNumber}</h6>
                <h6><span className='text-light'>Account Type:</span> {account.accountType}</h6>
              </p>
              <a href="#" className="btn btn-light" onClick={() => handleDelete(account.id)}>
                Delete
              </a>
          </div>
       </div>
  </div>
      )
    })
  }
    
    </>
  )
}

export default Accounts
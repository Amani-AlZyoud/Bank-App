import React, {useState} from 'react'
import AccountForm from './AccountForm';
import AccountCard from './AccountCard';
const Main = (props) => {

  const initState = {
    accounts : [
            {
              id: 1,
              customerName:"Israa Othman",
              accountNumber: "123456",
              accountType: "Savings"
            },
            {
              id: 2,
              customerName:"Ahmad Zahran",
              accountNumber: "987654",
              accountType: "Student accounts"
            }],

            numberOfAccounts:2
    
}

const [accounts, setAccounts] = useState(initState.accounts);
const [numberOfAccounts, setNumberOfAccounts] = useState(initState.numberOfAccounts);

// console.log(numberOfAccounts)

  return (
    <> 
    <AccountForm  accountsArray={accounts} numberOfAccounts={numberOfAccounts}  setAccounts={setAccounts}
        setNumberOfAccounts={setNumberOfAccounts}/>

    <AccountCard accountsArray={accounts}  setAccounts={setAccounts} numberOfAccounts={numberOfAccounts} 
    setNumberOfAccounts={setNumberOfAccounts}/>
    </>
  )
}

export default Main
function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <div>
      {show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    </div>
  )

}

function BalanceMsg(props){
  return(<>
    <h5 id="balancesuccess">BALANCE ARE SHOWS</h5>
    <button type="submit" 
      className="submitbalance" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        CHECK BALANCE AGAIN
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  

  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(text);
            props.setShow(false);
            setBalance(user.balance);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  }

  return (<>
    <div className="balancewholedesign">
     <div class="balanceheader">BALANCE</div>
      <br/>
    <label id="labelbEA">EMAIL ADDRESS: </label><br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>
    <button type="submit" 
      className="submitbalance" 
      onClick={handle}>
        Check Balance
    </button>
    </div>
  </>);
}
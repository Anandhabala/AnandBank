function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <div>
      {show ?
      <WithdrawForm setShow={setShow} setStatus={setStatus} /> :
      <WithdrawMsg setShow={setShow} setStatus={setStatus} />}
    </div>
  )
}

function WithdrawMsg(props) {
  return (<>
    <h5 id="withdrawsuccess">SUCCESSFULLY WITHDRAWED</h5>
    <button type="submit"
      className="submitwithdraw"
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
      WITHDRAW AGAIN
    </button>
  </>);
}

function WithdrawForm(props) {
  const [email, setEmail] = React.useState('');
  const [amount, setAmount] = React.useState('');

  function handle() {
    fetch(`/account/update/${email}/-${amount}`)
      .then(response => response.text())
      .then(text => {
        try {
          const data = JSON.parse(text);
          props.setStatus(JSON.stringify(data.value));
          props.setShow(false);
          console.log('JSON:', data);
          alert(`Withdraw Successfull ${amount}`)
        } catch (err) {
          props.setStatus('WITHDRAW FAILED')
          console.log('err:', text);
          alert("USER NOT FOUND or WITHDRAW FAILED")
        }
      });
  }


  return (<>
    <div className="withdrawwholedesign">
      <div class="card">
        <div class="withdrawheader">WITHDRAW</div>
        <div class="card-body">
          <label id="labelwEA">EMAIL ADDRESS: </label><br />
          <input type="input"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)} /><br />

          <label id="labelwam">AMOUNT:</label><br />
          <input type="number"
            className="form-control"
            placeholder="Enter amount"
            value={amount}
            onChange={e => setAmount(e.currentTarget.value)} /><br />

          <button type="submit"
            class="submitwithdraw"
            onClick={handle}>
            Withdraw
          </button>
        </div>
      </div>
    </div>
  </>);
}

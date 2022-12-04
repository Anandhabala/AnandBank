function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <div>
      {show ?
        <DepositForm setShow={setShow} setStatus={setStatus} /> :
        <DepositMsg setShow={setShow} setStatus={setStatus} />}
    </div>
  )
}

function DepositMsg(props) {
  return (<>
    <h5 id="depositsucess">SUCCESSFULLY DEPOSITED</h5>
    <button type="submit"
      className="depositanother"
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
      DEPOSIT AGAIN
    </button>
  </>);
}

function DepositForm(props) {
  const [email, setEmail] = React.useState('');
  const [amount, setAmount] = React.useState('');

  function handle() {
    fetch(`/account/update/${email}/${amount}`)
      .then(response => response.text())
      .then(text => {
        try {
          const data = JSON.parse(text);
          props.setStatus(JSON.stringify(data.value));
          props.setShow(false);
          console.log('JSON:', data);
          alert(`DEPOSIT SUCCESSFULLY ${amount}`)
        } catch (err) {
          props.setStatus('DEPOSIT FAILED')
          console.log('err:', text);
          alert("USER NOT FOUND or DEPOSIT FAILED")
        }
      });
  }

  return (<>
    <div className="depositwholedesign">
      <div class="card">
        <div class="depositheader">DEPOSIT</div>
        <div class="card-body">
          <label id="labeldEA">EMAIL ADDRESS: </label><br />
          <input type="input"
            className="form-control"
            placeholder="Enter email"
            value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />

          <label id="labeldam">AMOUNT:</label><br />
          <input type="number"
            className="form-control"
            placeholder="Enter amount"
            name="password"
            value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br />

          <button type="submit"
            class="submitdeposit"
            onClick={handle}>Deposit</button>
        </div>
      </div>
    </div>
  </>);
}



function NavBar(){
  return(
    <div id="navbarboder">
    <nav className="navbar navbar-expand-lg navbar-silver bg-dark"> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/Home/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/createaccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>
          <div id="navbarflagpart1" />
                <h4 id="navbarflagtext"> ABI BANK OF INDIA</h4>
          <div id="navbarflagpart2" />     
        </ul>
      </div>
    </nav>
    </div>

  );
}
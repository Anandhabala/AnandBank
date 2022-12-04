function AllData() {
    const [data, setData] = React.useState("");

    React.useEffect(() => {

        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));
            });

    }, []);

    return (<>
        <div id="alluser">
         <h5 class="caheader">All Data in Store:</h5>
         {data}
        </div>
    </>);
}

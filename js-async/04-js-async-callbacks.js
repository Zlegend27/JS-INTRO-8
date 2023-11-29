/* 
Assume you are fetching data from an external source with the steps below
1. Connect to external source
2. Fetch the data 
3. Use data for your script

9-11 seconds
*/

function connectToDB(event) {
    setTimeout(() => {
        console.log('CONNECTED TO DB!');
        event();
    }, 5000);
    
}

function fetchData(event) {
    setTimeout(() => {
        console.log('Data retrieved!');
        event();
    }, 3000 );
    
}

function processData() {
    setTimeout(() => {
        console.log('Data Used!');
    }, 1000 );
    
}



connectToDB(() => {
    fetchData(() => {
        processData();
    });
});



const React = require('react');

function New () {
    return(
        <div>
            <h1>Input New Flight</h1>
            <form action='/flights' method='POST'>
                <p>
                    <label for='airlines'>Airline: </label>
                        <select name='airline'>
                            <option>American</option>
                            <option>Southwest</option>
                            <option>United</option>
                            <option>JAL</option>
                            <option>ANA</option>
                        </select> 
                </p>
                <p>
                    Flight Number {`(`}between 1-9999{`)`}: <input type='text' name='flightNo'/> 
                </p>
                <p>
                    Departure date: <input type='date' name='departs'/>
                </p>
                <input type='submit' value='add flight'/>
            </form>
        </div>
    )
}

module.exports = New;
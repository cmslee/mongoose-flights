const React = require('react');

function Index(props) {
    const {flights} = props;
    return (
        <div>
            <h1>All Flights Info</h1>

            <a href='/flights/new'><h3>Add New Flight</h3></a>

            {flights.map((flight) => {
                return (
                    <div key={flight._id}>
                    <p>airline: {flight.airline}</p>
                    <p>flight number: {flight.flightNo}</p>
                    {/*creates new Date instance*/}
                    <p>departs: {new Date(flight.departs).toString()}</p>
                    <hr />
                    </div>
                )
            })}
        </div>
    )
}

module.exports = Index;
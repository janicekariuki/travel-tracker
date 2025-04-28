

let trips = JSON.parse(localStorage.getItem("trips")) || [];

const destinationForm = document.getElementById("destinationForm"); 
const destinationList = document.getElementById("destinationList");

destinationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const destination = document.getElementById("destination").value.trim();
    const image = document.getElementById("image").value.trim();
    const travelDate = document.getElementById("travelDate").value;
    
    if (!destination || !image || !travelDate) {
        alert("⚠️ Fill in all fields first!");
        return;
    }

    const trip = {
        destination: destination,
        image: image,
        travelDate: travelDate
    }

    trips.push(trip);
    localStorage.setItem("trips", JSON.stringify(trips));
    destinationForm.reset();
    displayDestination(trips);
});

function removeTrip(index) {
    trips.splice(index, 1); 
    localStorage.setItem("trips", JSON.stringify(trips)); 
    displayDestination(trips); 
}

function displayDestination(data) {
    destinationList.innerHTML = ""; 
    data.forEach(trip => {
        let div = document.createElement("div");
        div.className = "destination-card";
        div.innerHTML = `
        
            <img src="${trip.image}" alt="${trip.destination}" />
            <h3>${trip.destination}</h3>
            <p><strong>Travel Date:</strong> ${trip.travelDate}</p>
            <button onclick="removeTrip(${index})">Remove</button>
        `;
        destinationList.appendChild(div);
    });
}

displayDestination(trips);



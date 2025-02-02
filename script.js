document.getElementById('timeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const startpoint = parseInt(document.getElementById('startpoint').value);
    const endpoint = parseInt(document.getElementById('endpoint').value);
    const eventonset = parseInt(document.getElementById('eventonset').value);
    const collisionpoint = parseInt(document.getElementById('collisionpoint').value);

    // Modify values based on constraints
    const startpointModified = eventonset - 12; // Constraint 1
    const endpointModified = collisionpoint - 7; // Constraint 2
    const totalDuration = endpointModified - startpointModified;

    // Display results
    document.getElementById('modifiedStartpoint').textContent = startpointModified;
    document.getElementById('modifiedEndpoint').textContent = endpointModified;
    document.getElementById('totalDuration').textContent = totalDuration;

    // Show results section
    document.getElementById('results').style.display = 'block';
});
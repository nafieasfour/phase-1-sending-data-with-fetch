const formData = {
    name: "Steve",
    email: "steve@steve.com",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

function submitData() {
    return fetch("http://localhost:3000/users", configurationObject)
        .then(function(response){
        return response.json()})
        .then(data => {
        const newId = data.id;
        const newIdElement = document.createElement('p');
        newIdElement.textContent = `New ID: ${newId}`;
        document.body.appendChild(newIdElement);
      })
    .catch(function (error) {
      alert("Unauthorized Access");
      const newErrorElement = document.createElement('p');
        newErrorElement.textContent = `New ID: ${error}`;
        document.body.appendChild(newErrorElement);
    });
  }

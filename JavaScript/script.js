fetch('http://localhost:8080/GetCountryList/')
  .then(response =>response.json())
  .then(data => {
      $('#myTable').DataTable({
        data: data,
        columns:[
          
          {"data": "name"},
          {"data": "region"},
          {"data": "governmentfrom"},
          {"data": "population"},
        ]
      });
  });
  
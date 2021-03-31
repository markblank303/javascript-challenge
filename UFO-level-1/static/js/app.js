// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select('tbody');

function tableBuilder(inputData) {
    tbody.html("");
    inputData.forEach(sightings => {
        var row = tbody.append('tr');
        Object.entries(sightings).forEach(([key,value]) => {
            var cell = row.append('td');
            cell.text(value);
        })
    })
}

tableBuilder(tableData);

var filterBtn = d3.select('#filter-btn');

filterBtn.on("click",function() {
    var inputElement = d3.select('.form-control');
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(event => {
        return event.datetime === inputValue;
    });

    tableBuilder(filteredData);
})
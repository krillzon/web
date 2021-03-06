var uri = "https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=b0c3cced0bba45c58222712c148b6cf2&siteid=9633&timewindow=42";

const boi = document.getElementById('sl');


fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
        let tram = data.ResponseData.Trams;
        boi.innerHTML += `<h1>TÄBY C TÅGINFO</h1>`;
        return tram.map(function(tramobj)
    {
        
        boi.innerHTML += `${tramobj.LineNumber} mot `;
        boi.innerHTML += ` ${tramobj.Destination} kommer om `;
        boi.innerHTML += `${tramobj.DisplayTime}`;
        if(tramobj.Deviations != null)
{
    tramobj.Deviations.forEach(foo=>
    {
        boi.innerHTML += `<br>`;
    })
}
else{boi.innerHTML += `<br>`}
})    
})
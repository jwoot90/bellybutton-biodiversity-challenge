//read in samples.json from the URL
//const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.


d3.json(url).then(function(sampdata) {
    //create dropdown
    
    //data
    d3.select("#selDataset")
        .selectAll("option")
        .data(sampdata.names)
        .enter()
        .append("option")
        .text(d=>d)
        .attr("value",d=>d);

    // connect to onchange variable within selDataset ID
    optionChanged(d3.select("#selDataset").property("value"));


        

});

    function getMetaData(data){
        d3.select("#sample-metadata");

        let metadata = data.metadata;

        var 

        div.html("")

        d3.select("#sample-metadata").html("")
    }
  

    function createBarChart(xValues,yValues,text) {
        let data = [{
            type:'bar',
            x:Values,
            y:yValues,
            text:text,
            orientation:'h'
        
        


                }]

        let format = {
            title:"Top 10 OTUs"

                    };
        Plotly.newPlot('bar',data,format);
    };


    function createBubbleChart(xValues,yValues,text) {
        let data = {
            x:xValues,
            y:yValues,
            text:text,
            mode:'markers',
            marker:{
                size:yValues,
                color:xValues,
                colorscale: "Earth"

            


            }
        
        


                }

        let format = {
            title:"OTU Values",
            xaxis: {title: {text: 'OTU ID'}}
    
                    }
  
    Plotly.newPlot('bubble',data,format);

    };


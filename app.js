//read in samples.json from the URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

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

    
    function Meta(data) {
        var div = d3.select("#sample-metadata");
        div.html("")
        var list = div.append("ul");
        Object.entries(data).forEach(([key, value]) => {
        list.append("li").text(key + ": " + value);
        });
    }
    
  

    function createBarChart(xValues,yValues,text) {
        let data = [{
            type:'bar',
            x:xValues,
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
        let data = [{
            x:xValues,
            y:yValues,
            text:text,
            mode:'markers',
            marker:{
                size:yValues,
                color:xValues,
                colorscale: "Earth"
                    }
                }];
            let format = {
                title:"OTU Values",
                xaxis:{
                    title:{
                          text:'OTU ID',
                            }
                      }
                };
                Plotly.newPlot('bubble',data,format);

            }


    function optionChanged(value) {
        d3.json(url).then(function(sampdata) {

        var metadata = sampdata.metadata.filter(data => data.id ==value);
            console.log(metadata);
        var samples = sampdata.samples.filter(data => data.id ==value);
            console.log(samples);
        createBarChart(samples[0].sample_values.slice(0,10).reverse(),samples[0].otu_ids.slice(0,10).reverse().map(a=>"OTU " + a),samples[0].otu_labels.slice(0,10).reverse());

        createBubbleChart(samples[0].otu_ids,samples[0].sample_values,samples[0].otu_labels);

        Meta(metadata[0]);


            });

        

    }

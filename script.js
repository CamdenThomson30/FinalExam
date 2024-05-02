// Define the width and height of the SVG container
const width = 800;
const height = 500;

// Append an SVG element to the visualization div
const svg = d3.select("#visualization")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Read the PS4_GameSales CSV file and create visualizations
d3.csv("PS4_GameSales.csv").then(data => {
    // Print the data to the console to verify it loaded correctly
    console.log(data);

    // Your visualization code for PS4_GameSales goes here
});

// Read the Video_Games_Sales_as_at_22_Dec_2016 CSV file and create visualizations
d3.csv("Video_Games_Sales_as_at_22_Dec_2016.csv").then(data => {
    // Print the data to the console to verify it loaded correctly
    console.log(data);

    // Your visualization code for Video_Games_Sales_as_at_22_Dec_2016 goes here
});

// Read the XboxOne_GameSales CSV file and create visualizations
d3.csv("XboxOne_GameSales.csv").then(data => {
    // Print the data to the console to verify it loaded correctly
    console.log(data);

    // Your visualization code for XboxOne_GameSales goes here
});

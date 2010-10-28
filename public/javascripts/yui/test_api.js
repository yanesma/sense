/*
 *  This is documentation on how to use SenseWidget JS API
 *  SenseWidget is using YUI and consist of datatable widget and pie chart
 *  below is example on how to define data for this widget
 *  and how to call suitable method for creating something
 *--------------------------------------------------------------------------*/

//set the data
//the format must be in json
sampleData =
{
    "Results":
    [
    {
        "date":"5/1/2008",
        "revenue":"700.00",
        "expenses":"838.00"
    },

    {
        "date":"5/15/2008",
        "revenue":"888.00",
        "expenses":"873.00"
    },

    {
        "date":"6/1/2008",
        "revenue":"817.00",
        "expenses":"891.00"
    },

    {
        "date":"6/15/2008",
        "revenue":"810.00",
        "expenses":"849.00"
    },

    {
        "date":"3/15/2009",
        "revenue":"877.00",
        "expenses":"868.00"
    },

    {
        "date":"4/1/2009",
        "revenue":"846.00",
        "expenses":"855.00"
    },

    {
        "date":"4/15/2009",
        "revenue":"852.00",
        "expenses":"821.00"
    }
    ]
};

// array for colum field
columnField = ["date","revenue","expenses"];


//set the panel name
//param : string
setPanelName(new String("Sense Panel"));

// call this to set data table
// sample data format must be in json
// colum filed must be in array
// you can see example above
// param 1 : json array
// param 2 : array of string
setDataTable(sampleData,columnField);

// call this to set pie table
// sample data format must be in json
// colum filed must be in array
// you can see example above
// param 1 : json array
// param 2 : array of string
setPieChart(sampleData,["date","revenue"]);

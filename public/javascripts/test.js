
// this is for supplying datascource
YAHOO.module.Data = {
    bookorders: [
        {id:"po-0167", date:new Date(1980, 2, 24), quantity:1, amount:4, title:"A Book About Nothing"},
        {id:"po-0783", date:new Date("January 3, 1983"), quantity:null, amount:12.12345, title:"The Meaning of Life"},
        {id:"po-0297", date:new Date(1978, 11, 12), quantity:12, amount:1.25, title:"This Book Was Meant to Be Read Aloud"},
        {id:"po-1482", date:new Date("March 11, 1985"), quantity:6, amount:3.5, title:"Read Me Twice"}
    ]
}

var sampleData =
{
    "Results":
    [
    {
        "date":"5/1/2008",
        "revenue":"856.00",
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
SetDataSource(sampleData);

YAHOO.util.Event.addListener(window, "load", init);



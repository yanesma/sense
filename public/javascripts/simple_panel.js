
YAHOO.namespace("module.container");
YAHOO.module.container.panel1;
//YAHOO.widget.Chart.SWFURL = "charts.swf";
//YAHOO.widget.Chart.SWFURL = "http://yui.yahooapis.com/2.8.1/build/charts/assets/charts.swf";

function SetPanel(){


    YAHOO.module.container.panel1 = new YAHOO.widget.Panel('panel1', {
        constraintoviewport:true,
        close: false,
        autofillheight: "body", // default value, specified here to highlight its use in the example
        width: '500px',
        height: '500px',
        xy: [100, 100]
    });

    YAHOO.module.container.panel1.setHeader("<div class='tl'></div><span>Panel Name</span><div class='tr'></div>");
    YAHOO.module.container.panel1.setBody('<div id="layout"> '+
        '' +
        '</div>');
    YAHOO.module.container.panel1.setFooter("<span>End of Panel </span>");
}

var mychart;


function SetDataSource(){


}

//data source
var jsonData = new YAHOO.util.DataSource( sampleData );
jsonData.responseType = YAHOO.util.DataSource.TYPE_JSON;
jsonData.responseSchema =
{
    resultsList: "Results",
    fields: [
    "date",
    {
        key:"revenue",
        parser:"number"
    },

    {
        key:"expenses",
        parser:"number"
    }
    ]
};

var pieData = new YAHOO.util.DataSource( sampleData );
pieData.responseType = YAHOO.util.DataSource.TYPE_JSON;
pieData.responseSchema = {
    resultsList: "Results",
    fields : ["date","revenue"]
    }

var seriesDef = [
{
    displayName:"Revenue",
    yField:"revenue",
    style:{
        color:0xffcc66
    }
},
{
    displayName:"Expenses",
    yField:"expenses",
    style:{
        color:0xa1c3e1
    }
}
];


YAHOO.example.formatTimeData = function(value, major)
{
    var formattedData = YAHOO.util.Date.format(new Date(value), {
        format:"%b, %Y"
    });
    return formattedData.toString();
}

YAHOO.example.formatCurrencyAxisLabel = function( value )
{
    return YAHOO.util.Number.format( value,
    {
        prefix: "$",
        thousandsSeparator: ",",
        decimalPlaces: 2
    });
}

YAHOO.example.formatDataTipText = function(item, index, series)
{
    var str =  "Date: " + item.date;
    str += "\n" + series.displayName + ": " + YAHOO.example.formatCurrencyAxisLabel(item[series.yField]);
    return str;
}

//Create a TimeAxis
var myTimeAxis = new YAHOO.widget.TimeAxis();
myTimeAxis.labelFunction = YAHOO.example.formatTimeData;
myTimeAxis.majorTimeUnit = "month";

//Create a NumericAxis
myCurrencyAxis = new YAHOO.widget.NumericAxis();
myCurrencyAxis.alwaysShowZero = false;
myCurrencyAxis.labelFunction = YAHOO.example.formatCurrencyAxisLabel;

var styleDef =
{
    padding:0,
    border:{
        size:4,
        color:0x8899dd
    },
    background:{
        color:0xd5d5d5
    },
    xAxis:
    {
        labelRotation:-90,
        majorTicks:{
            display:"inside",
            length:6
        },
        minorTicks:{
            display:"inside",
            size:1
        },
        padding:5
    },
    yAxis:
    {
        zeroGridLine:{
            size:5,
            color:0xff0000
        },
        labelRotation:0,
        minorTicks:{
            display:"none",
            length:12
        }
    }
};

function init(sampleData) {
    var Event = YAHOO.util.Event;
    YAHOO.util.Event.addListener("show1", "click", function() {
        SetPanel();

        YAHOO.module.container.panel1.beforeRenderEvent.subscribe(function() {
            Event.onAvailable('layout', function() {
                layout = new YAHOO.widget.Layout('layout', {
                    height: 430,
                    width: 450,
                    units: [
                    {
                        position: 'top',
                        height: 30,
                        header: 'Description'
                        
                    },
//                    {
//                        position: 'right',
//                        width: 200,
//                        body: '',
//                        gutter: '0 5 0 2',
//                        collapse: true,
//                        scroll: true
//                    },
                    {
                        position: 'bottom',
                        height: 150,
                        id: 'status',
                        body: 'Status',
                        collapse: true,
                        scroll: true
                    //gutter: '2'
                    },
                    {
                        position: 'center',
                        body: 'Select a date..',
                        gutter: '0 2 0 0'
                        
                    }
                    ]
                });
                
                layout.on('render', function() {
                    var l = layout.getUnitByPosition('center');

                    l.set('body', '<div id="chart"></div>');
                   

                    Event.onAvailable("chart",function(){

                        mychart = new YAHOO.widget.PieChart( "chart", pieData,
                        {
                            dataField: "revenue",
                            categoryField: "date",
                            style:
                            {
                                padding: 20,
                                legend:
                                {
                                    display: "right",
                                    padding: 10,
                                    spacing: 5,
                                    font:
                                    {
                                        family: "Arial",
                                        size: 13
                                    }
                                }
                            },
                            //only needed for flash player express install
                            expressInstall: "assets/expressinstall.swf"
                        });

                    } );
                    
                    var b = layout.getUnitByPosition('bottom');
                    b.set('body', '<div id="datatable"></div>');

                    var columns =
                    [
                    {
                        key: "date",
                        sortable: true,
                        resizeable: true
                    },
                    {
                        key: "revenue",
                        formatter: "currency",
                        sortable: true,
                        resizeable: true
                    },
                    {
                        key: "expenses",
                        formatter: "currency",
                        sortable: true,
                        resizeable: true
                    }
                    ];

                    var tblConfig = {
                        paginator : new YAHOO.widget.Paginator({
                            rowsPerPage : 3
                        }),

                        initialRequest : '',
                        selectionMode : 'single'
                    };

                    var table = new YAHOO.widget.DataTable( "datatable", columns, jsonData, tblConfig);


                }, layout, true);

                layout.render();
 
                
            // SetDataSource(myColumnDefs, myDataSource);
            });
        });

     
        YAHOO.module.container.panel1.render();

		
        YAHOO.util.Event.addListener("hide1", "click", YAHOO.module.container.panel1.hide, YAHOO.module.container.panel1, true);

    });

}


function updateForm()
{
    var series = mychart.get("series");
    var check1 = document.getElementById("checkbutton1");
    var check2 = document.getElementById("checkbutton2");
    if(series[0] && series[0].style && series[0].style.visibility && series[0].style.visibility == "hidden")
    {
        check1.checked = false;
    }
    else
    {
        check1.checked = true;
    }
    if(series[1] && series[1].style && series[1].style.visibility && series[1].style.visibility == "hidden")
    {
        check2.checked = false;
    }
    else
    {
        check2.checked = true;
    }
}










//this one is for colum definitions
var myColumnDefs = [
{
    key:"id",
    sortable:true,
    resizeable:true
},

{
    key:"date",
    formatter:YAHOO.widget.DataTable.formatDate,
    sortable:true,
    sortOptions:{
        defaultDir:YAHOO.widget.DataTable.CLASS_DESC
    },
    resizeable:true
},

{
    key:"quantity",
    formatter:YAHOO.widget.DataTable.formatNumber,
    sortable:true,
    resizeable:true
},

{
    key:"amount",
    formatter:YAHOO.widget.DataTable.formatCurrency,
    sortable:true,
    resizeable:true
},

{
    key:"title",
    sortable:true,
    resizeable:true
}
];



var myDataTable;

function SetDataSource(myColumnDefs, myDataSource) {



//                myDataTable = new YAHOO.widget.DataTable("layout",
//                myColumnDefs, myDataSource, {
//                    caption:"DataTable Rocks"
//                });


}

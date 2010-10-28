/* Sense Web Module
 *  (c) Realworld Systems
 *
 *  This module using YUI and consist of datatable and pie chart
 *
 *--------------------------------------------------------------------------*/
YAHOO.namespace("module.container");
YAHOO.module.container.panel1;
YAHOO.widget.Chart.SWFURL = "http://yui.yahooapis.com/2.8.1/build/charts/assets/charts.swf";
YAHOO.namespace("example.yuitest");
var tblConfig = {
    paginator : new YAHOO.widget.Paginator({
        rowsPerPage : 3
    }),

    initialRequest : '',
    selectionMode : 'single'
};

var panelName = new String("tes");

//---------------------------------------------------------------------
// set panel name
// params : string
//---------------------------------------------------------------------

function setPanelName(name)
{
    if(name instanceof String)
    {
        panelName = name;
    }
    else
    {
        throw new TypeError("Expected an string");

    }
}

var dataTablecolumns = [];
var jsonData;

//---------------------------------------------------------------------
// set datatable
// params 1 : sampleData is json data
// params 2 : dataField is array
//---------------------------------------------------------------------

function setDataTable(sampleData, dataField)
{
    if(dataField instanceof Array)
    {
        //data source
        jsonData = new YAHOO.util.DataSource( sampleData );
        jsonData.responseType = YAHOO.util.DataSource.TYPE_JSON;

        jsonData.responseSchema =
        {
            resultsList: "Results",
            fields: dataField
        };

        for(i=0;i<dataField.length;i++)
        {
            dataTablecolumns[i] = {
                key: dataField[i],
                sortable: true,
                resizeable: true
            } ;
        }
    }
    else
    {
        throw new TypeError("this should be array");
    }
   
}

var pieDataColumn;
var pieData;

//---------------------------------------------------------------------
// set pie table
// params 1 : sampleData is json data
// params 2 : dataField is array
//---------------------------------------------------------------------

function setPieChart(sampleData, dataField)
{
    if(dataField instanceof Array)
    {
        pieData = new YAHOO.util.DataSource( sampleData );
        pieData.responseType = YAHOO.util.DataSource.TYPE_JSON;
        pieData.responseSchema = {
            resultsList: "Results",
            fields : dataField
        };

        pieDataColumn = {
            dataField: dataField[0],
            categoryField: dataField[1],
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
        };
    }
    else
    {
        throw new TypeError("this should be array");

    }
}

var mychart;

//---------------------------------------------------------------------
//this is Main Method
//---------------------------------------------------------------------

function initdata() {

    var Event = YAHOO.util.Event;
    YAHOO.util.Event.addListener("show1", "click", function() {
      
        YAHOO.module.container.panel1 = new YAHOO.widget.Panel('panel1', {
            constraintoviewport:true,
            close: false,
            autofillheight: "body", // default value, specified here to highlight its use in the example
            width: '500px',
            height: '500px',
            xy: [100, 100]
        });

        YAHOO.module.container.panel1.setHeader("<div class='tl'></div><span>"+ panelName +"</span><div class='tr'></div>");
        YAHOO.module.container.panel1.setBody('<div id="layout"> '+
            '' +
            '</div>');
        YAHOO.module.container.panel1.setFooter("<span>Copyright Realworld </span>");
           
        YAHOO.module.container.panel1.beforeRenderEvent.subscribe(function() {
            Event.onAvailable('layout', function() {
                layout = new YAHOO.widget.Layout('layout', {
                    height: 430,
                    width: 450,
                    units: [
                    {
                        position: 'top',
                        height: 25,
                        header: 'Description'
                        
                    },
                    {
                        position: 'bottom',
                        height: 150,
                        id: 'status',
                        body: 'Status',
                        collapse: true,
                        scroll: true
                    },
                    {
                        position: 'center',
                        body: 'if you cannot see this content then please use the latest flash player, you can download it from adobe',
                        gutter: '0 2 0 0'
                        
                    }
                    ]
                });
                
                layout.on('render', function() {
                    var l = layout.getUnitByPosition('center');
                    l.set('body', '<div id="chart"></div>');
                    Event.onAvailable("chart",function(){
                        mychart = new YAHOO.widget.PieChart( "chart", pieData,pieDataColumn
                            );
                    } );
                    
                    var b = layout.getUnitByPosition('bottom');
                    b.set('body', '<div id="datatable"></div>');
                    var table = new YAHOO.widget.DataTable( "datatable", dataTablecolumns, jsonData, tblConfig);
                   
                }, layout, true);
                layout.render();
            });
        });

        YAHOO.module.container.panel1.render();
        YAHOO.util.Event.addListener("hide1", "click", YAHOO.module.container.panel1.hide, YAHOO.module.container.panel1, true);
    });
}

YAHOO.util.Event.onDOMReady(function(){    
    initdata();
}
);



//A function that pops up a "Hello World" alert:
var helloWorld = function(e) {
	//alert("Hello World!");

//var element = YAHOO.util.Dom.get('basic');

var node = $("basic");
var input = $("input_text");
node.innerHTML = input.innerText;
//YAHOO.util.Dom.setAttribute('basic',"text","hahahha")
}

	YAHOO.util.Event.addListener("yanes", "click", helloWorld); 

YAHOO.example.monthlyExpenses =
	[
		{ month: "January", rent: 880.00, utilities: 894.68 },
		{ month: "February", rent: 880.00, utilities: 901.35 },
		{ month: "March", rent: 880.00, utilities: 889.32 },
		{ month: "April", rent: 880.00, utilities: 884.71 },
		{ month: "May", rent: 910.00, utilities: 879.811 },
		{ month: "June", rent: 910.00, utilities: 897.95 }
	];

	var dataSource = new YAHOO.util.DataSource( YAHOO.example.monthlyExpenses );
	dataSource.responseType = YAHOO.util.DataSource.TYPE_JSARRAY;
	dataSource.responseSchema =
	{
		fields: [ "month", "rent" ]
	};


var seriesDef =
	[
		{ displayName: "Rent", yField: "rent" },
		{ displayName: "Utilities", yField: "utilities" }
	];

//	YAHOO.example.formatCurrencyAxisLabel = function( value )
//	{
//		return YAHOO.util.Number.format( value,
//		{
//			prefix: "$",
//			thousandsSeparator: ",",
//			decimalPlaces: 2
//		});
//	}
//
//	YAHOO.example.getDataTipText = function( item, index, series )
//	{
//		var toolTipText = series.displayName + " for " + item.month;
//		toolTipText += "\n" + YAHOO.example.formatCurrencyAxisLabel( item[series.yField] );
//		return toolTipText;
//	}
//
//	var currencyAxis = new YAHOO.widget.NumericAxis();
//	currencyAxis.minimum = 800;
//	currencyAxis.labelFunction = YAHOO.example.formatCurrencyAxisLabel;

	var mychart = new YAHOO.widget.LineChart( "layout", dataSource,
	{
		yField: "rent",
		xField: "month"
//		yAxis: currencyAxis,
//		dataTipFunction: YAHOO.example.getDataTipText,
//		//only needed for flash player express install
//		expressInstall: "assets/expressinstall.swf"
	});


 //                    el = document.createElement('input');
                    //                    c.body.appendChild(el);
                    //                    Event.onAvailable("chart",function(){
                    //
                    //                        mychart = new YAHOO.widget.LineChart("chart", jsonData,
                    //                        {
                    //                            series: seriesDef,
                    //                            style: styleDef,
                    //                            xField: "date",
                    //                            xAxis: myTimeAxis,
                    //                            yAxis: myCurrencyAxis,
                    //                            dataTipFunction:YAHOO.example.formatDataTipText
                    //                        });
                    //                        mychart.on("contentReady", updateForm);
                    //
                    //                    } );

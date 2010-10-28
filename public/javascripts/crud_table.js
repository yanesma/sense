YAHOO.util.Event.addListener(window, "load", function() {
    YAHOO.example.RowDataMod = function() {
        var myColumnDefs = [
            {key:"row", label:"row counter", resizeable:true,sortable:true},
            {key:"one",resizeable:true},
            {key:"two",resizeable:true},
            {key:"three",resizeable:true}   
        ];

        var myDataSource = new YAHOO.util.DataSource([]);
        myDataSource.responseType = YAHOO.util.DataSource.TYPE_JSARRAY;
        myDataSource.responseSchema = {
            fields: ["one","two","three"]
        };
        
        var myDataTable = new YAHOO.widget.DataTable("basic",
                myColumnDefs, myDataSource, {});
                
        var i=1,
            bReverseSorted = false;

        // Track when Column is reverse-sorted, since new data will come in out of order
        var trackReverseSorts = function(oArg) {
            bReverseSorted = (oArg.dir === YAHOO.widget.DataTable.CLASS_DESC);
        };
        
        var globalDataCount = -1,
            getData = function(count) {
                if(count) {
                    var allData = [];
                    for(var i=0; i<count; i++) {
                        globalDataCount++;
                        allData.push({row:globalDataCount, one:"one", two:"two", three:"three"});
                    }
                    return allData;
                }
                else {
                    globalDataCount++;
                    return {row:globalDataCount, one:"one", two:"two", three:"three"};
                }
            };
        
        // Add/update/delete rows as indicated
        var handleClick = function() {
            // Reset sort
            myDataTable.set("sortedBy", null);
            
            var mode = YAHOO.util.Dom.get("mode").value,
                count = parseInt(YAHOO.util.Dom.get("count").value),
                index = parseInt(YAHOO.util.Dom.get("index").value);
                
            if(YAHOO.lang.isNumber(index)) {
                switch(mode) {
                    case "add":
                        if(count === 1) {
                            myDataTable.addRow(getData(), index);
                        }
                        else {
                            myDataTable.addRows(getData(count), index);
                        }
                        return;
                    case "update":
                        if(count === 1) {
                            myDataTable.updateRow(index, getData());
                        }
                        else {
                            myDataTable.updateRows(index, getData(count));
                        }
                        return;
                    case "deletestandard":
                        if(count === 1) {
                            myDataTable.deleteRow(index);
                        }
                        else {
                            myDataTable.deleteRows(index, count);
                        }
                        return;
                    case "deletereverse":
                        if(count === 1) {
                            myDataTable.deleteRow(index, -1);
                        }
                        else {
                            myDataTable.deleteRows(index, count*-1);
                        }
                        return;
                    default:
                        break;
                }
            
            }
            YAHOO.log("Could not continue due to invalid index.");
        }

        var btn = new YAHOO.widget.Button("go");
        btn.on("click", handleClick);

        return {
            ds: myDataSource,
            dt: myDataTable
        };
    }();
});


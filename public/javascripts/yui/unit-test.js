var tempVar;
YAHOO.example.yuitest.SetPanelTestCase = new YAHOO.tool.TestCase({

    name : "Set Panel Tests",

    _should: {
        error: {
            testSetPanelNameWithNumber: true //this test should throw an error
        }
    },

    /*
     * Sets up data that is needed by each test.
     */
    setUp : function () {
        tempVar = panelName;
    },

    /*
     * Cleans up everything that was created by setUp().
     */
    tearDown : function () {
        panelName = tempVar
    },
    
    //---------------------------------------------------------------------
    // Test methods - this is test for testing set title/name of a panel
    //---------------------------------------------------------------------

    testSetPanelName : function () {
        var Assert = YAHOO.util.Assert;
        var name = new String("Testing");
        setPanelName(name);
        Assert.areEqual(name, panelName);
    },

    //---------------------------------------------------------------------------------
    // Test methods - this is test for testing set title/name of a panel with a number
    //----------------------------------------------------------------------------------
    testSetPanelNameWithNumber : function () {
       setPanelName(53);
    }
});

YAHOO.example.yuitest.DataTableColumnTestCase = new YAHOO.tool.TestCase({

    name : "Data column Tests",

    _should: {
        error: {
            testsetDataTableColumnNotArray: true //this test should throw an error
        }
    },

    /*
     * Sets up data that is needed by each test.
     */
    setUp : function () {
        tempVar = columnField;
    },

    /*
     * Cleans up everything that was created by setUp().
     */
    tearDown : function () {
        columnField = tempVar;
        setDataTable(sampleData,columnField);
    },

    //---------------------------------------------------------------------
    // Test methods - this is test for testing set DataTable Columns
    //---------------------------------------------------------------------

    testsetDataTableColumn : function () {
        setDataTable(sampleData,["date","profit","spend"]);
        YAHOO.util.Assert.areEqual(
            "date"
            ,dataTablecolumns[0].key, "this should be date");
        YAHOO.util.Assert.areEqual(
            true
            ,dataTablecolumns[0].sortable, "this should be true");
        YAHOO.util.Assert.isTrue(dataTablecolumns[0].resizeable, "this should be true");
        YAHOO.util.Assert.areEqual(
            "profit"
            ,dataTablecolumns[1].key, "this should be profit");
    },

    //---------------------------------------------------------------------
    // Test methods - this is test for testing set DataTable Columns with no array
    //---------------------------------------------------------------------

    testsetDataTableColumnNotArray: function () {
        setDataTable(sampleData,"date");

    }
});

var newPieChartData;
YAHOO.example.yuitest.PieChartTestCase = new YAHOO.tool.TestCase({

    name : "Pie Charts Tests",

    /*
     * Sets up data that is needed by each test.
     */

    setUp : function () {
        if(pieDataColumn!=null)
        {
            tempVar = pieDataColumn;
        }
    },

    /*
     * Cleans up everything that was created by setUp().
     */
    tearDown : function () {
        if(pieDataColumn!=null)
        {
            pieDataColumn = tempVar;
            setPieChart(sampleData,[pieDataColumn.dataField,pieDataColumn.categoryField]);
        }
    },

    //---------------------------------------------------------------------
    // Test methods - this is test for testing PieChart Columns
    //---------------------------------------------------------------------
    
    testPieChart : function () {
        setPieChart(sampleData,["date","profit"]);
        YAHOO.util.Assert.areEqual(
            "date"
            ,pieDataColumn.dataField, "this should be date");
        YAHOO.util.Assert.areEqual(
            "profit"
            ,pieDataColumn.categoryField, "this should be profit");
    },

    //---------------------------------------------------------------------
    // Test methods - this is test for testing PieChart Columns with no array
    //---------------------------------------------------------------------

    testPieChartColumnNotArray: function () {
      setPieChart(sampleData,"profit");
    }
});


TestingSuite = new YAHOO.tool.TestSuite("YUI testing Suite");
TestingSuite.add(YAHOO.example.yuitest.SetPanelTestCase);
TestingSuite.add(YAHOO.example.yuitest.DataTableColumnTestCase);
TestingSuite.add(YAHOO.example.yuitest.PieChartTestCase);
YAHOO.util.Event.onDOMReady(function(){

    //create the logger
    var logger = new YAHOO.tool.TestLogger();

    //add the test suite to the runner's queue
    YAHOO.tool.TestRunner.add(TestingSuite);

    //run the tests
    YAHOO.tool.TestRunner.run();
}

);

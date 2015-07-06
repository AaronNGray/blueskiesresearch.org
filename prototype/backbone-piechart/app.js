/*global Backbone */
'use strict';

window.App = new Backbone.Marionette.Application();

App.addRegions({
	chart2: '#chart-2',
	chart3: '#chart-3',
	chart4: '#chart-4'
});

App.on('start', function () {
	Backbone.history.start();
	var chartModel = new App.PieChart.PieChart({
	    yes: 25,
	    no: 25,
	    abstain: 25,
	    members: 100
	});

	App.chart2.show(new App.PieChart.PieChart2View({
		model: chartModel
	}));

	App.chart3.show(new App.PieChart.PieChart3View({
		model: chartModel
	}));

	App.chart4.show(new App.PieChart.PieChart4View({
		model: chartModel
	}));

});

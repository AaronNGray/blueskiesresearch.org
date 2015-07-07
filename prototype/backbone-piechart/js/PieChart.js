/*global App */
'use strict';

App.module('PieChart', function (PieChart, App, Backbone) {

    PieChart.PieChart = Backbone.Model.extend({
      initialize: function(model, options) {
        this.yes = model.yes;
        this.no = model.no;
        this.abstain = model.abstain;
        this.members = model.members;
      }
    });

    function rad(d) { return d * Math.PI / 180; }

    function round(v) { return Math.round(v * 1000) / 1000; }

    function sector(cx, cy, r, axisAngle, startAngle, endAngle) {
        var endAngle = endAngle - 0.01;
        var x1 = round(cx + r * Math.sin(rad(axisAngle + startAngle))),
            x2 = round(cx + r * Math.sin(rad(axisAngle + endAngle))),
            y1 = round(cy + r * Math.cos(rad(axisAngle + startAngle))),
            y2 = round(cy + r * Math.cos(rad(axisAngle + endAngle)));
        return "M" + cx + "," + cy + "L" + x1 + "," + y1 + " A" + r + "," + r + " 0 " + +(endAngle - startAngle > 180) + "," + "0 " + x2 + "," + y2 + " z";
    }

    PieChart.PieChart2View = Marionette.ItemView.extend({
        template: '#pie-chart-2-template',
        initialize: function() {
            this.center = 200;
            this.radius = 180;
            this.startAxis = 180;

            this.total = this.model.yes + this.model.no;
            this.yesRatio = this.model.yes / this.total;
            this.noRatio = this.model.no / this.total;

            this.yesAngle = 360 * this.yesRatio;
            this.noAngle = 360 * this.noRatio;

            this.yesStart = 0;
            this.yesEnd = this.yesStart + this.yesAngle;
            this.noStart = this.yesEnd;
            this.noEnd = this.noStart + this.noAngle;
        },

        onShow: function() {
            this.$el.find("#yes").attr("d", sector(this.center, this.center, this.radius, this.startAxis, this.yesStart, this.yesEnd));
            this.$el.find("#no").attr("d", sector(this.center, this.center, this.radius, this.startAxis, this.noStart, this.noEnd));
        }
    });
    PieChart.PieChart3View = Marionette.ItemView.extend({
        template: '#pie-chart-3-template',
        initialize: function() {
            this.center = 200;
            this.radius = 180;
            this.startAxis = 180;

            this.total = this.model.yes + this.model.no + this.model.abstain;
            this.yesRatio = this.model.yes / this.total;
            this.noRatio = this.model.no / this.total;
            this.abstainRatio = this.model.abstain / this.total;

            this.yesAngle = 360 * this.yesRatio;
            this.noAngle = 360 * this.noRatio;
            this.abstainAngle = 360 * this.abstainRatio;

            this.yesStart = 0;
            this.yesEnd = this.yesStart + this.yesAngle;
            this.abstainStart = this.yesEnd;
            this.abstainEnd = this.abstainStart + this.abstainAngle;
            this.noStart = this.abstainEnd;
            this.noEnd = this.noStart + this.noAngle;
        },

        onShow: function() {
            this.$el.find("#yes").attr("d", sector(this.center, this.center, this.radius, this.startAxis, this.yesStart, this.yesEnd));
            this.$el.find("#no").attr("d", sector(this.center, this.center, this.radius, this.startAxis, this.noStart, this.noEnd));
            this.$el.find("#abstain").attr("d", sector(this.center, this.center, this.radius, this.startAxis, this.abstainStart, this.abstainEnd));
        }

    });
    PieChart.PieChart4View = Marionette.ItemView.extend({
        template: '#pie-chart-4-template',
        initialize: function() {
            this.center = 200;
            this.radius = 180;
            this.startAxis = 180;

            this.total = this.model.members;
            this.yesRatio = this.model.yes / this.total;
            this.noRatio = this.model.abstain / this.total;
            this.abstainRatio = this.model.abstain / this.total;
            this.nonvoteRatio = (this.total - (this.model.yes + this.model.no + this.model.abstain)) / this.total;

            this.yesAngle = 360 * this.yesRatio;
            this.noAngle = 360 * this.noRatio;
            this.abstainAngle = 360 * this.abstainRatio;
            this.nonvoteAngle = 360 * this.nonvoteRatio;

            this.yesStart = 0;
            this.yesEnd = this.yesStart + this.yesAngle;
            this.abstainStart = this.yesEnd;
            this.abstainEnd = this.abstainStart + this.abstainAngle;
            this.nonvoteStart = this.abstainEnd;
            this.nonvoteEnd = this.nonvoteStart + this.nonvoteAngle;
            this.noStart = this.nonvoteEnd;
            this.noEnd = this.noStart + this.noAngle;
        },

        onShow: function() {
            this.$el.find("#yes").attr("d", sector(this.center, this.center, this.radius, this.startAxis, this.yesStart, this.yesEnd));
            this.$el.find("#no").attr("d", sector(this.center, this.center, this.radius, this.startAxis, this.noStart, this.noEnd));
            this.$el.find("#abstain").attr("d", sector(this.center, this.center, this.radius, this.startAxis, this.abstainStart, this.abstainEnd));
            this.$el.find("#nonvote").attr("d", sector(this.center, this.center, this.radius, this.startAxis, this.nonvoteStart, this.nonvoteEnd));
        }
    });

});

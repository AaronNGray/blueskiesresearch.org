function PieChartControl(model) {

  // Object Variables

    this.yes = model.yes;
    this.no = model.no;
    this.abstain = model.abstain;
    this.members = model.members;

  // Object Constants

    this.center = 200;
    this.radius = 180;
    this.startAngle = 180;

  // Private Methods

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

  // Public Setter

    this.setModel = function(model) {
        this.yes = model.yes;
        this.no = model.no;
        this.abstain = model.abstain;
        this.members = model.members;
    }

  // Public Methods

    this.drawPieCharts = function () {
        this.drawPieChart2();
        this.drawPieChart3();
        this.drawPieChart4();
    }

    this.drawPieChart2 = function() {
        var total = this.yes + this.no;
        var yesRatio = this.yes / total;
        var noRatio = this.no / total;

        var yesAngle = 360 * yesRatio;
        var noAngle = 360 * noRatio;

        var yesStart = 0;
        var yesEnd = yesStart + yesAngle;
        var noStart = yesEnd;
        var noEnd = noStart + noAngle;

        $("#chart-2").find("#yes").attr("d", sector(this.center, this.center, this.radius, this.startAngle, yesStart, yesEnd));
        $("#chart-2").find("#no").attr("d", sector(this.center, this.center, this.radius, this.startAngle, noStart, noEnd));
    }
    this.drawPieChart3 = function() {
        var total = this.yes + this.no + this.abstain;
        var yesRatio = this.yes / total;
        var noRatio = this.no / total;
        var abstainRatio = this.abstain / total;

        var yesAngle = 360 * yesRatio;
        var noAngle = 360 * noRatio;
        var abstainAngle = 360 * abstainRatio;

        var yesStart = 0;
        var yesEnd = yesStart + yesAngle;
        var abstainStart = yesEnd;
        var abstainEnd = abstainStart + abstainAngle;
        var noStart = abstainEnd;
        var noEnd = noStart + noAngle;

        $("#chart-3").find("#yes").attr("d", sector(this.center, this.center, this.radius, this.startAngle, yesStart, yesEnd));
        $("#chart-3").find("#no").attr("d", sector(this.center, this.center, this.radius, this.startAngle, noStart, noEnd));
        $("#chart-3").find("#abstain").attr("d", sector(this.center, this.center, this.radius, this.startAngle, abstainStart, abstainEnd));
    }

    this.drawPieChart4 = function() {
        var total = this.members;
        var yesRatio = this.yes / total;
        var noRatio = this.no / total;
        var abstainRatio = this.abstain / total;
        var nonvoteRatio = (total - (this.yes + this.no + this.abstain)) / total; // !!!

        var yesAngle = 360 * yesRatio;
        var noAngle = 360 * noRatio;
        var abstainAngle = 360 * abstainRatio;
        var nonvoteAngle = 360 * nonvoteRatio;

        var yesStart = 0;
        var yesEnd = yesStart + yesAngle;
        var abstainStart = yesEnd;
        var abstainEnd = abstainStart + abstainAngle;
        var nonvoteStart = abstainEnd;
        var nonvoteEnd = nonvoteStart + nonvoteAngle;
        var noStart = nonvoteEnd;
        var noEnd = noStart + noAngle;

        $("#chart-4").find("#yes").attr("d", sector(this.center, this.center, this.radius, this.startAngle, yesStart, yesEnd));
        $("#chart-4").find("#no").attr("d", sector(this.center, this.center, this.radius, this.startAngle, noStart, noEnd));
        $("#chart-4").find("#abstain").attr("d", sector(this.center, this.center, this.radius, this.startAngle, abstainStart, abstainEnd));
        $("#chart-4").find("#nonvote").attr("d", sector(this.center, this.center, this.radius, this.startAngle, nonvoteStart, nonvoteEnd));
    }
}

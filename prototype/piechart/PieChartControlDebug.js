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

    function sector(cx, cy, r, startAngle, endAngle) {
        var endAngle = endAngle - 0.01;
        var x1 = round(cx + r * Math.sin(rad(startAngle))),
            x2 = round(cx + r * Math.sin(rad(endAngle))),
            y1 = round(cy + r * Math.cos(rad(startAngle))),
            y2 = round(cy + r * Math.cos(rad(endAngle)));
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
        console.log("PieChartControl::drawPieCharts()");
        this.drawPieChart2();
        this.drawPieChart3();
        this.drawPieChart4();
    }

    this.drawPieChart2 = function() {
        console.log("PieChartControl::drawPieChart2()");

        console.log("this.yes = ", this.yes);
        console.log("this.no = ", this.no);

        var total = this.yes + this.no;
        var yesRatio = this.yes / total;
        var noRatio = this.no / total;

        console.log("total = ", total);
        console.log("yesRatio = ", yesRatio);
        console.log("noRatio = ", noRatio);

        var yesAngle = 360 * yesRatio;
        var noAngle = 360 * noRatio;

        console.log("yesAngle = ", yesAngle);
        console.log("noAngle = ", noAngle);

        var yesStart = 0;
        var yesEnd = yesStart + yesAngle;
        var noStart = yesEnd;
        var noEnd = noStart + noAngle;

        console.log("yesStart = ", yesStart);
        console.log("yesEnd = ", yesEnd);
        console.log("noStart = ", noStart);
        console.log("noEnd = ", noEnd);

        $("#chart-2").find("#yes").attr("d", sector(this.center, this.center, this.radius, yesStart + this.startAngle, yesEnd + this.startAngle));
        $("#chart-2").find("#no").attr("d", sector(this.center, this.center, this.radius, noStart + this.startAngle, noEnd + this.startAngle));
    }
    this.drawPieChart3 = function() {
        console.log("PieChartControl::drawPieChart3()");

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


        $("#chart-3").find("#yes").attr("d", sector(this.center, this.center, this.radius, yesStart + this.startAngle, yesEnd + this.startAngle));
        $("#chart-3").find("#no").attr("d", sector(this.center, this.center, this.radius, noStart + this.startAngle, noEnd + this.startAngle));
        $("#chart-3").find("#abstain").attr("d", sector(this.center, this.center, this.radius, abstainStart + this.startAngle, abstainEnd + this.startAngle));
    }

    this.drawPieChart4 = function() {
        console.log("PieChartControl::drawPieChart4()");

        console.log("this.yes = ", this.yes);
        console.log("this.no = ", this.no);
        console.log("this.abstain = ", this.abstain);

        var total = this.members;
        var yesRatio = this.yes / total;
        var noRatio = this.no / total;
        var abstainRatio = this.abstain / total;
        var nonvoteRatio = (total - (this.yes + this.no + this.abstain)) / total; // !!!

        console.log("total = ", total);
        console.log("yesRatio = ", yesRatio);
        console.log("noRatio = ", noRatio);
        console.log("abstainRatio = ", abstainRatio);
        console.log("nonvoteRatio = ", nonvoteRatio);


        var yesAngle = 360 * yesRatio;
        var noAngle = 360 * noRatio;
        var abstainAngle = 360 * abstainRatio;
        var nonvoteAngle = 360 * nonvoteRatio;

        console.log("yesAngle = ", yesAngle);
        console.log("noAngle = ", noAngle);
        console.log("abstainAngle = ", abstainAngle);
        console.log("nonvoteAngle = ", nonvoteAngle);

        var yesStart = 0;
        var yesEnd = yesStart + yesAngle;
        var abstainStart = yesEnd;
        var abstainEnd = abstainStart + abstainAngle;
        var nonvoteStart = abstainEnd;
        var nonvoteEnd = nonvoteStart + nonvoteAngle;
        var noStart = nonvoteEnd;
        var noEnd = noStart + noAngle;

        console.log("yesStart = ", yesStart);
        console.log("yesEnd = ", yesEnd);
        console.log("abstainStart = ", abstainStart);
        console.log("abstainEnd = ", abstainEnd);
        console.log("nonvoteStart = ", nonvoteStart);
        console.log("nonvoteEnd = ", nonvoteEnd);
        console.log("noStart = ", noStart);
        console.log("noEnd = ", noEnd);
//        console.log(" = ", );

        $("#chart-4").find("#yes").attr("d", sector(this.center, this.center, this.radius, yesStart + this.startAngle, yesEnd + this.startAngle));
        $("#chart-4").find("#no").attr("d", sector(this.center, this.center, this.radius, noStart + this.startAngle, noEnd + this.startAngle));
        $("#chart-4").find("#abstain").attr("d", sector(this.center, this.center, this.radius, abstainStart + this.startAngle, abstainEnd + this.startAngle));
        $("#chart-4").find("#nonvote").attr("d", sector(this.center, this.center, this.radius, nonvoteStart + this.startAngle, nonvoteEnd + this.startAngle));
    }
}

$(document).ready(function(){
    $('.dropdown__holder').click(function(){
        $(this).toggleClass('active');
        $(this).find('i').toggleClass('hidden');
    });
    $('.chart__settings').click(function(e){
        e.stopPropagation();
        $(this).parent().toggleClass('active');
    });
    $(function () {

        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        // Create the chart
        Highcharts.stockChart('container', {
            chart: {
                backgroundColor: false,
                spacing: [0, 0, 0, 0],
                animation: {
                    duration: 1000
                },
                style: {
                    fontFamily: 'Lato',
                    color: "rgba(#fff, .5)",
                    fontSize: "14"
                },
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.round(Math.random() * 100);
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            yAxis: {
                gridLineDashStyle: 'dash',
                gridLineColor: "rgba(255,255,255,.5)",
                opposite: false,
                labels: {
                    align: "right",
                    x: 22,
                    style: {
                        fontSize: "14px"
                    }
                }
            },
            xAxis: {
                gridLineDashStyle: 'dash',
                gridLineColor: "rgba(255,255,255,.5)",
                labels: {
                    style: {
                        fontSize: "14px"
                    }
                }
            },

            rangeSelector: false,

            title: {
                text: false
            },
            scrollbar: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            navigator: {
                enabled: false
            },

            series: [{
                name: false,
                type: 'area',
                lineWidth: 1,
                lineColor: "#ffcc00",
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -999; i <= 0; i += 1) {
                        data.push([
                            time + i * 1000,
                            Math.round(Math.random() * 100)
                        ]);
                    }
                    return data;
                }())
            }]
        });
        Highcharts.stockChart('deal', {
            chart: {
                backgroundColor: false,
                spacing: [0, 0, 0, 0],
                animation: {
                    duration: 1000
                },
                style: {
                    fontFamily: 'Lato',
                    fontSize: "14px"
                },
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                            var x = (new Date()).getTime(), // current time
                                y = 100;
                            series.addPoint([x, y], true, true);

                    }
                }
            },
            scrollbar: {
                enabled: false
            },
            yAxis: {
                gridLineColor: "rgba(255,255,255,.5)",
                opposite: false,
                labels: {
                    align: "right",
                    style: {
                        fontSize: "0"
                    }
                }
            },
            xAxis: {
                gridLineColor: "rgba(255,255,255,.5)",
                labels: {
                    align: "right",
                    style: {
                        fontSize: "14px",
                        color: "transparent"
                    }
                },
                categories: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }
            },

            rangeSelector: false,

            title: {
                text: false
            },

            exporting: {
                enabled: false
            },

            navigator: {
                enabled: false
            },

            series: [{
                name: false,
                type: 'area',
                lineWidth: 1,
                lineColor: "transparent",
                data: [
                    ["H", 0],
                    ["D", 0],
                    ["M", 0],
                    ["M", 0],
                    ["M", 0],
                    ["M", 0],
                    ["M", 0],
                    ["M", 0]
                ]
            }]
        });

    });


});
angular.module('GHS_admin_mod', ['ngRoute', 'ui.bootstrap'])
    .controller('GHS_admin_ctrl', function($http, $scope, $httpParamSerializerJQLike, $location, $rootScope, $sce, $window) {

        $scope.domain = "http://ghostszmusic.dev/";
        $scope.recentComments = [];

        $scope.getRecentComments = function () {

            // console.log("Comments");

            $http({
                url: $scope.domain + "wp-json/ghs_api/v1/getRecentComments",
                method: "GET",
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                }
            })
                .then(function(response) {

                    if (response.data.success) {
                        $scope.recentComments = response.data.recentComments;
                    } else {
                        console.error(response.data.error_message);
                    }

                })
                .catch(function () {

                });

        };

        $(document).ready(function(){

            'use strict';

            $('#live-chat .chat-header').on('click', function(){
                $('.chat').slideToggle();
            });

            //***** Clients lists Scroll *****//
            $(function(){
                $('.chat-history').slimScroll({
                    height: '300px',
                    wheelStep: 10,
                    distance : '0px',
                    color:'#878787',
                    railOpacity : '0.1',
                    size: '2px'
                });
            });

            //*** Map Jvector ***//
            jQuery('#vmap').vectorMap({
                map: 'usa_en',
                backgroundColor: '#ffffff',
                borderColor: '#818181',
                borderOpacity: 0.25,
                borderWidth: 0.25,
                color: '#c6d3e0',
                colors: {
                    mo: '#a8b2bd',
                    fl: '#a8b2bd',
                    or: '#a8b2bd'
                },
                enableZoom: true,
                showLabels: false,
                hoverColor: '#b9c7d5',
                hoverOpacity: null,
                normalizeFunction: 'linear',
                scaleColors: ['#b6d6ff', '#005ace'],
                selectedColor: '#b9c7d5',
                selectedRegions: [],
                showTooltip: false,
                onRegionClick: function(element, code, region)
                {
                    var message = 'You clicked "'
                        + region
                        + '" which has the code: '
                        + code.toUpperCase();

                    alert(message);
                }
            });

            //***** Ticket lists Scroll *****//
            $(function(){
                $('#ticket-scroll').slimScroll({
                    height: '400px',
                    wheelStep: 10,
                    distance : '2px',
                    color:'#878787',
                    railOpacity : '0.1',
                    size: '2px'
                });
            });

            //*** Random Numbers ***//
            function generate() {
                $('.number').text(Math.floor(Math.random() * 500) + 1);
                $('.number2').text(Math.floor(Math.random() * 1000) + 1);
            }
            setInterval(generate, 2000);

            //***** Comment Scroll *****//
            $(function(){
                $('#comment-scroll').slimScroll({
                    height: '430px',
                    wheelStep: 10,
                    distance : '2px',
                    color:'#878787',
                    railOpacity : '0.1',
                    size: '2px'
                });
            });

            //***** Forum Scroll *****//
            $(function(){
                $('#forum-scroll').slimScroll({
                    height: '430px',
                    wheelStep: 10,
                    distance : '2px',
                    color:'#878787',
                    railOpacity : '0.1',
                    size: '2px'
                });
            });

            //*** Piety Mini Charts ***//
            $(function() {

                //*** Live Updating Chart ***//
                var updatingChart = $('.line').peity('line', {
                    width: ['300px'],
                    fill: ['#f3f4f8'],
                    stroke: ['#e7eaf1'],
                    height: ['60px']
                })
                setInterval(function() {
                    var random = Math.round(Math.random() * 5)
                    var values = updatingChart.text().split(",")
                    values.shift()
                    values.push(random)

                    updatingChart
                        .text(values.join(','))
                        .change()
                }, 700)

                $('.pie-colours').peity('pie', {
                    fill: ['#595959', '#9e9e9e', '#c1bbed'],
                    height: ['200px'],
                    width: ['200px']
                })

                $('.bar').peity('bar', {
                    fill: ['#07bf29'],
                    height: ['40px'],
                    width: ['94px']
                })

                $('.bar2').peity('bar', {
                    fill: ['#404040'],
                    height: ['40px'],
                    width: ['94px']
                })

                $('.bar3').peity('bar', {
                    fill: ['#ffffff'],
                    height: ['50px'],
                    width: ['200px']
                })

                $('#visits').peity('line', {
                    fill: ['#eef0f3'],
                    stroke: ['#556b8d'],
                    height: ['40px'],
                    width: ['85px']
                })

                $('#page-views').peity('line', {
                    fill: ['#edf3fb'],
                    stroke: ['#6fa3e2'],
                    height: ['40px'],
                    width: ['85px']
                })

                $('#pages').peity('line', {
                    fill: ['#f6f7f9'],
                    stroke: ['#a6b0c2'],
                    height: ['40px'],
                    width: ['85px']
                })

                $('#time').peity('line', {
                    fill: ['#f3f9ec'],
                    stroke: ['#85c744'],
                    height: ['40px'],
                    width: ['85px']
                })

                $('#return').peity('line', {
                    fill: ['#fdf5ea'],
                    stroke: ['#f2af4f'],
                    height: ['40px'],
                    width: ['85px']
                })

                $('#bounce').peity('line', {
                    fill: ['#fdedeb'],
                    stroke: ['#e74c3c'],
                    height: ['40px'],
                    width: ['85px']
                })

            });

            //**** Activity Chart ****//
            var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var d1 = [];
            for (var i = 0; i <= 11; i += 1) {
                d1.push([i, parseInt((Math.floor(Math.random() * (1 + 20 - 10))) + 10)]);
            }
            $('#chart').length && $.plot($('#chart'), [{
                    data: d1
                }],
                {
                    series: {
                        lines: {
                            show: true,
                            lineWidth: 1,
                            fill: true,
                            fillColor: {
                                colors: [{
                                    opacity: 0.3
                                }, {
                                    opacity: 0.3
                                }]
                            }
                        },
                        points: {
                            radius: 3,
                            show: true
                        },
                        grow: {
                            active: true,
                            steps: 50
                        },
                        shadowSize: 2
                    },
                    grid: {
                        hoverable: true,
                        clickable: true,
                        tickColor: '#f0f0f0',
                        borderWidth: 1,
                        color: '#eeeeee'
                    },
                    colors: ['#cfd2d7'],
                    xaxis:{
                    },
                    yaxis: {
                        ticks: 5
                    },
                    tooltip: true,
                    tooltipOpts: {
                        content: 'chart: %x.1 is %y.4',
                        defaultTheme: false,
                        shifts: {
                            x: 0,
                            y: 20
                        }
                    }
                }
            );


        });

    });
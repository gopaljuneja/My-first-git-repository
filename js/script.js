$(document).ready(function() {

    // date function
    var d, date, month, year, mname;
    d = new Date();
    date = d.getDate();
    month = d.getMonth();
    year = d.getFullYear();
    mname = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    $(".date1, .date2").html(mname[month] + " " + date + ", " + year);

    // date picker function
    $(function() {
        $("#from").datepicker({
            showOn: "both",
            buttonImage: "images/calendar.png",
            buttonImageOnly: true,
            dateFormat: 'M d, yy',
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 3,
            onClose: function(selectedDate) {
                $("#to").datepicker("option", "minDate", selectedDate);
            }
        });
        $("#to").datepicker({
            showOn: "both",
            buttonImage: "images/calendar.png",
            buttonImageOnly: true,
            dateFormat: 'M d, yy',
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 3,
            onClose: function(selectedDate) {
                $("#from").datepicker("option", "maxDate", selectedDate);
            }
        });
        $("#compare-from").datepicker({
            showOn: "both",
            buttonImage: "images/calendar.png",
            buttonImageOnly: true,
            dateFormat: 'M d, yy',
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 3,
            onClose: function(selectedDate) {
                $("#to").datepicker("option", "minDate", selectedDate);
            }
        });
        $("#compare-to").datepicker({
            showOn: "both",
            buttonImage: "images/calendar.png",
            buttonImageOnly: true,
            dateFormat: 'M d, yy',
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 3,
            onClose: function(selectedDate) {
                $("#from").datepicker("option", "maxDate", selectedDate);
            }
        });
    });

    $(".dateCompareCheck").click(function() {
        if ($(this).is(":checked")) {
            $(".compare-dateText").show();
            $(".compare-sel").removeAttr('disabled');
            $(" .date-select").css('line-height', "normal");
            $(" .compare-date").show();
        } else {
            $(".compare-dateText").hide();
            $(".compare-sel").attr('disabled', true);
            $(" .date-select").css('line-height', 29 + "px");
            $(" .compare-date").hide();
        }
    });

    $('.date-panel input[type="submit"]').click(function() {
        var d1 = $("#from").val();
        var d2 = $("#to").val();
        var d3 = $("#compare-from").val();
        var d4 = $("#compare-to").val();
        $(".date1").html(d1);
        $(".date2").html(d2);
        $(".date3").html(d3);
        $(".date4").html(d4);
        $(".date-panel").hide();
    });

$(function() {
    $(".date-panel .cncl-btn").click(function(event) {
        event.stopPropagation();
        $(".date-panel").slideToggle(200);
    });

    $(".darrow").click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(".date-panel").slideToggle(200);
    });
    $(document).on("click", ".ui-datepicker-next, .ui-datepicker-prev, .ui-datepicker-month",function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(".date-panel").show(200);
    });
    $(document).click(function(e) {
        //console.log($(e.target));
        if (!$(e.target).closest('.date-panel').length) {
            $(".date-panel").hide();
        }
    });
});
    /*-----------calendar end---------------*/

    /*-----------dashboard sortable column start---------------*/

    $(function() {
        $("#sortable").sortable();
        $("#sortable").disableSelection();
    });

    $(document).on("click", ".widget-delete", function() {
        $(this).closest(".dashboard-widget").remove();
    });

    /*-----------column layout js---------------*/
    $(".user-arrow").click(function(event) {
        event.stopPropagation();
        $(".user-option").slideToggle(200);
    });
    $('html').click(function() {
        $(".user-option").hide();
    });

    $(".table1").click(function() {
        $(".layout-list li").removeClass("selected");
        $(this).parent().addClass("selected");
        $(".column-wrap").removeClass("column-two column-three column-four");
        $(".column-wrap").addClass("column-full");
    });
    $(".table2").click(function() {
        $(".layout-list li").removeClass("selected");
        $(this).parent().addClass("selected");
        $(".column-wrap").removeClass("column-full column-three column-four");
        $(".column-wrap").addClass("column-two");
    });
    $(".table3").click(function() {
        $(".layout-list li").removeClass("selected");
        $(this).parent().addClass("selected");
        $(".column-wrap").removeClass("column-two column-full column-four");
        $(".column-wrap").addClass("column-three");
    });
    $(".table4").click(function() {
        $(".layout-list li").removeClass("selected");
        $(this).parent().addClass("selected");
        $(".column-wrap").removeClass("column-two column-three column-full");
        $(".column-wrap").addClass("column-four");
    });

    $(".done-layout").click(function() {
        $(".column-full #sortable .dashboard-widget").css("width", 100 + "%");
        $(".column-two #sortable .dashboard-widget").css("width", 50 + "%");
        $(".column-three #sortable .dashboard-widget").css("width", 33.33 + "%");
        $(".column-four #sortable .dashboard-widget").css("width", 25 + "%");
        $('#edit-dashboard').dialog('close');        

    });

    /*-----------sidebar toggle js---------------*/
    //  var offset = $( ".content" ).offset();         
    // $(".sidebar").css("left" , offset.left+"px");
    $(".slide-link").click(function() {
        $(".sidebar").toggleClass("sidebar-slide");
        $(".main").toggleClass("main-full");
        $(this).toggleClass("open-sidebar");
    });

    var h = $(".content").innerHeight();
    $(".sidebar").css("min-height", h);



    $(".nav > li > a").click(function() {
        if ($(this).next("ul").is(":visible")) {
            $(this).next("ul").slideUp();
            $(this).removeClass("down");
        } else {
            $(".nav li ul").slideUp();
            $(this).next("ul").slideDown();
            $(".nav > li > a").removeClass("down");
            $(this).addClass("down");
        }
    });

    $(".nav li li a").click(function() {
        $(".nav li li a").removeClass("active");
        $(this).addClass("active");
    });

    $(".icon-fav").click(function() {
        $(this).toggleClass("markFav");
    });

    $(".sidebar-open").click(function(event) {
        event.stopPropagation();

        $(".sidebar").toggleClass("sidebar-on");
    });

    //------------ filter add dashboard---------------    

     $(".btnfilter").click(function(e) {
        e.preventDefault();
        var fltr = '<div class="filter-component">'+
                '<select><option>Only Show</option></select>'+
                '<select><option>Only Show</option></select>'+
                '<select><option>Only Show</option></select>'+
                '<input type="text" placeholder="dia"> '+
                ' <a href="#" class="close-dash-filter"></a>'+
                '</div>';
                $(".filter-add").append(fltr);
        
    });

    $(document).on("click", ".close-dash-filter", function() {
        $(this).closest(".filter-component").remove();
    });




    $(".label--checkbox .check").click(function() {
        $(this).toggleClass("checked");
    });

    $(".chart-list li a").click(function() {
        $(".chart-list li").removeClass("selected");
        $(this).parent().toggleClass("selected");        
    });

    $(".create-dialog-area .widget-section ul li a").click(function() {
        $(".create-dialog-area .widget-section ul li a").removeClass("selected");
        $(this).toggleClass("selected");
    });

    $(".create-dashboard-btn").click(function() {
        $("#create-dialog").dialog("close");
    });

    $(".add-widget-btn").click(function() {
        $("#widget-dialog").dialog("close");
    });

    $(".cancel-add-popup").click(function() {
        $("#widget-dialog").dialog("close");
    });
    $(".cancel-share-popup").click(function() {
        $("#share-dashboard").dialog("close");
    });
    $(".cancel-edit-popup").click(function() {
        $("#edit-dashboard").dialog("close");
    });
    $(".cancel-create-popup").click(function() {
        $("#create-dialog").dialog("close");
    });




    /**************************************************
     *********************UI Components****************/
    /*Model Dialog*/
    $(".sidetop a").click(function() {
        $("#create-dashboard").dialog({
            modal: true,
            height: 510,
            width: 480,
            draggable: false
        });
    });

    $("a.add-widget").click(function() {
        $("#widget-dialog").dialog({
            modal: true,
            height: 720,
            width: 650,
            draggable: false
        });
    });

    $(".icon-share").click(function() {
        $("#share-dashboard").dialog({
            modal: true,
            height: 280,
            width: 400,
            draggable: false
        });
    });

    $(".edit-dash").click(function() {
        $("#edit-dashboard").dialog({
            modal: true,
            height: 450,
            width: 480,
            draggable: false
        });
    });

    $(".dashboard ul li a").click(function() {
        $(".dashboard ul li a").removeClass("active");
        $(this).addClass("active");
        var curIndex = $(".dashboard ul li a").index($(this));
        $(".content .content-section").hide();
        $(".content .content-section").eq(curIndex).show();
        var offset = $(this).parent().position();
        $(".dashboard .arrow-current").animate({
            "left": offset.left + 93
        }, 500);
        // console.log(offset.left);
    });

    $(".update-period li a").click(function(e) {
        e.preventDefault();
        $(".update-period li a").removeClass("selected");
        $(this).addClass("selected");
        
    });

    $(".update-period li a").click(function(e) {
        e.preventDefault();
        $(".update-period li a").removeClass("selected");
        $(this).addClass("selected");
        
    });  



    //----------------login page-----------------
    function loginPageHeight(){
        var h = $(window).height()
        h = h-60;
        $(".login-wrap").css("min-height", h +"px");
    }
    loginPageHeight();
    $( window ).resize(function() {
      loginPageHeight();
    });

    $(".group input.uname").focus(function() {
        $(".icon-user").css("opacity", 1)
    });
    $(".group input.uname").blur(function() {
        $(".icon-user").css("opacity", 0.6)
    });

    $(".group input.pass").focus(function() {
        $(".icon-pass").css("opacity", 1)
    });
    $(".group input.pass").blur(function() {
        $(".icon-pass").css("opacity", 0.6)
    });


    //================chart related js=====================    
    Highcharts.theme = {
        colors: ['#058dc7', '#50B432', '#5c5c5c', '#f9a832', '#c02bab', '#fb1a9e',
            '#f2d120', '#ef3239'
        ]
    };
    Highcharts.setOptions(Highcharts.theme);

   
        var options1 = {
            chart: {
            renderTo: 'chart1',
            type: 'pie',
        },
            title: {
                text: 'Browser'
            },

            series: [{              
                name: 'Browser share',
                data: [
                    ['Firefox', 45.0],
                    ['IE', 26.8], {
                        name: 'Chrome',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Safari', 8.5],
                    ['Opera', 6.2],
                    ['Others', 0.7]
                ]
            }]
        }

   var chart1 = new Highcharts.Chart(options1);

    
    var option = {
        chart: {
            renderTo: 'chart2',
            type: 'column'
        },
        title: {
            text: 'Location Sales'
        },
        xAxis: {
            categories: ['Men', 'Women', 'Kids']
        },
        yAxis: {
            title: {
                text: 'Sales'
            }
        },
        series: [{
            name: 'Delhi',
            data: [1, 0, 4]
        }, {
            name: 'Mumbai',
            data: [5, 7, 3]
        }]
    }
    var chart2 = new Highcharts.Chart(option);


    var options3 = {       
            chart: {
                renderTo: 'chart3',
                type: 'line'
            },
            title: {
                text: 'Browser'
            },
            xAxis: {
                categories: ['Firefox', 'Chrome', 'IE']
            },
            yAxis: {
                title: {
                    text: 'Traffic'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]        
    }
    var chart3 = new Highcharts.Chart(options3);
    //======================================   

    $(".done-layout").click(function() {      
        
    //===resize the chart on click done layout btn========  
    chart1.setSize($(".widget-content").width(),$(".widget-content").height()); 
    chart2.setSize($(".widget-content").width(),$(".widget-content").height()); 
    chart3.setSize($(".widget-content").width(),$(".widget-content").height()); 
       

    });


    

    //------------------------------------------------------
});
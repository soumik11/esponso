/*
 Close the sidebar menu
function MenuOpen(e) {
    //e.preventDefault();
    document.getElementById("sidebar-wrapper").toggleClass("active");
}

 Open the sidebar menu
function MenuClose(e) {
    //e.preventDefault();
    document.getElementById("sidebar-wrapper").toggleClass("active");
}

*/

/** Global Variables **/

var count = 0;

/** End of Global Variables **/

/** Custom Functions **/

function sleep(miliseconds) {
    var start = new Date().getTime();
    for( var i=0; i<1e7; i++ ) {
        if(( new Date().getTime() - start ) > miliseconds ) {
            break;
        }
    }
}

function createChart(elementID) {
    "use strict";
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
    var myChart = new Chart(document.getElementById(elementID).getContext("2d")).Line(data,{
        responsive : true,
        maintainAspectRatio: true,
    });
}

/** End of Custom Functions **/


$( document ).ready(function() {

    $( "a[href='#tab2']" ).on("shown.bs.tab", function(event) {
        //window.activeTab = event.target;
        createChart("sponsorship-graph");
    });

    $( "#menu-toggle" ).click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        $( "#side-wrapper" ).toggleClass( "active" );
    });

    $( "#menu-close" ).click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        $( "#side-wrapper" ).removeClass( "active" );
    });

    $( "#modal-switch" ).click(function(event) {
        count = 0
        event.preventDefault();
        //event.stopPropagation();
        $( "#signin" ).modal( "hide" );
        $( "#signup" ).modal( "show" );
        $( "body" ).addClass( "modal-ghost" );                            //patch
    });

    $( ".signup-close" ).click(function(event) {
        count = 0
        var IntervalId = setInterval( function() {
            if( $( "body" ).hasClass( "modal-ghost" ) == true || $( "body" ).has( "style" ) ) {
                $( "body" ).removeAttr( "style" );
                $( "body" ).removeClass( "modal-ghost" );
            }
            else {
                if( count > 500 ) {
                    clearInterval( IntervalId );
                }
            }
            count = (count + 1);
        });
    });

    $( "#show-comment-button" ).click(function(event) {
        event.preventDefault();

        if( $( ".comment" ).hasClass( "active" ) )
        {
            $( ".comment" ).removeClass( "active" );
            $( ".comment" ).slideUp();
            $( this ).text( "Show Comments" );
        }
        else
        {
            $( ".comment" ).slideDown();
            $( ".comment" ).addClass( "active" );
            $( this ).text( "Hide Comments" );
        }
    });

    $( ".reply-button" ).click(function(event) {
        event.preventDefault();
        $( this ).parent().children( "div[class='form-container reply']" ).addClass( "clicked" );

        $( ".reply" ).each(function() {
            if( $( this ).hasClass( "clicked" ) )
            {
               $( this ).removeClass( "clicked" );
               $( this ).slideDown();
               $( this ).addClass( "active" );
            }
            else
            {
                $( this ).removeClass( "active" );
                $( this ).slideUp();
            }
        });
    });
});


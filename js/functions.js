$(document).ready(function(){
    /* --------------------------------------------------------
	Template Settings
    -----------------------------------------------------------*/
    
    var settings =  
        '<a id="settings" href="#changeSkin" data-toggle="modal"><i class="fa fa-gear" style="animation: spin 10s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);"></i> Changer le fond</a>' +   
		    '<div class="modal fade" id="changeSkin" tabindex="-1" role="dialog" aria-hidden="true">' +
			'<div class="modal-dialog modal-lg">' +
			    '<div class="modal-content">' +
				'<div class="modal-header">' +
				    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
				    '<h4 class="modal-title">Changer le fond de votre Interface</h4>' +
				'</div>' +
				'<div class="modal-body">' +
				    '<div class="row template-skins">' +
                        '<a data-skin="skin01"	onclick="FnNavmark(\'skin01\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin01.jpg" alt=""></a>' +
                        '<a data-skin="skin02" 	onclick="FnNavmark(\'skin02\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin02.jpg" alt=""></a>' +
                        '<a data-skin="skin03"	onclick="FnNavmark(\'skin03\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin03.jpg" alt=""></a>' +
                        '<a data-skin="skin04" 	onclick="FnNavmark(\'skin04\');" 	class="col-sm-2 col-xs-4" href=""><img src="img/skin04.jpg" alt=""></a>' +
                        '<a data-skin="skin05" 	onclick="FnNavmark(\'skin05\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin05.jpg" alt=""></a>' +
                        '<a data-skin="skin06"	onclick="FnNavmark(\'skin06\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin06.jpg" alt=""></a>' +
                        '<a data-skin="skin07" 	onclick="FnNavmark(\'skin07\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin07.jpg" alt=""></a>' +
                        '<a data-skin="skin08"	onclick="FnNavmark(\'skin08\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin08.jpg" alt=""></a>' +
                        '<a data-skin="skin09"	onclick="FnNavmark(\'skin09\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin09.jpg" alt=""></a>' +
                        '<a data-skin="skin10" 	onclick="FnNavmark(\'skin10\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin10.jpg" alt=""></a>' +
                        '<a data-skin="skin11"	onclick="FnNavmark(\'skin11\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin11.jpg" alt=""></a>' +
                        '<a data-skin="skin12" 	onclick="FnNavmark(\'skin12\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin12.jpg" alt=""></a>' +
                        '<a data-skin="skin13"	onclick="FnNavmark(\'skin13\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin13.jpg" alt=""></a>' +
                        '<a data-skin="skin14"	onclick="FnNavmark(\'skin14\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin14.jpg" alt=""></a>' +
                        '<a data-skin="skin15" 	onclick="FnNavmark(\'skin15\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin15.jpg" alt=""></a>' +
                        '<a data-skin="skin16"	onclick="FnNavmark(\'skin16\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin16.jpg" alt=""></a>' +
                        '<a data-skin="skin17"	onclick="FnNavmark(\'skin17\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin17.jpg" alt=""></a>' +
                        '<a data-skin="skin18"	onclick="FnNavmark(\'skin18\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin18.jpg" alt=""></a>' +
                        '<a data-skin="skin19" 	onclick="FnNavmark(\'skin19\');" 	class="col-sm-2 col-xs-4" href=""><img src="img/skin19.jpg" alt=""></a>' +	
                        '<a data-skin="skin20" 	onclick="FnNavmark(\'skin20\');" 	class="col-sm-2 col-xs-4" href=""><img src="img/skin20.jpg" alt=""></a>' +	
                        '<a data-skin="skin21" 	onclick="FnNavmark(\'skin21\');" 	class="col-sm-2 col-xs-4" href=""><img src="img/skin21.jpg" alt=""></a>' +	
                        '<a data-skin="skin22" 	onclick="FnNavmark(\'skin22\');" 	class="col-sm-2 col-xs-4" href=""><img src="img/skin22.jpg" alt=""></a>' +	
                        '<a data-skin="skin23" 	onclick="FnNavmark(\'skin23\');" 	class="col-sm-2 col-xs-4" href=""><img src="img/skin23.jpg" alt=""></a>' +	
                        '<a data-skin="skin24" 	onclick="FnNavmark(\'skin24\');" 	class="col-sm-2 col-xs-4" href=""><img src="img/skin24.jpg" alt=""></a>' +	
                        '<a data-skin="skin25" 	onclick="FnNavmark(\'skin25\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin25.jpg" alt=""></a>' +	
                        '<a data-skin="skin26" 	onclick="FnNavmark(\'skin26\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin26.jpg" alt=""></a>' +	
                        '<a data-skin="skin27" 	onclick="FnNavmark(\'skin27\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin27.jpg" alt=""></a>' +	
                        '<a data-skin="skin28" 	onclick="FnNavmark(\'skin28\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin28.jpg" alt=""></a>' +	
                        '<a data-skin="skin29" 	onclick="FnNavmark(\'skin29\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin29.jpg" alt=""></a>' +	
                        '<a data-skin="skin30" 	onclick="FnNavmark(\'skin30\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin30.jpg" alt=""></a>' +
						'<a data-skin="skin31" 	onclick="FnNavmark(\'skin31\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin31.jpg" alt=""></a>' +
                        '<a data-skin="skin32" 	onclick="FnNavmark(\'skin32\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin32.jpg" alt=""></a>' +
						'<a data-skin="skin33" 	onclick="FnNavmark(\'skin33\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin33.jpg" alt=""></a>' +
                        '<a data-skin="skin34" 	onclick="FnNavmark(\'skin34\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin34.jpg" alt=""></a>' +
						'<a data-skin="skin35" 	onclick="FnNavmark(\'skin35\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin35.jpg" alt=""></a>' +
                        '<a data-skin="skin36" 	onclick="FnNavmark(\'skin36\');"	class="col-sm-2 col-xs-4" href=""><img src="img/skin36.jpg" alt=""></a>' +
		
				    '</div>' +
				'</div>' +
			    '</div>' +
			'</div>' +
		    '</div>';
    $('#main').prepend(settings);
            
    $('body').on('click', '.template-skins > a', function(e)
		{
			e.preventDefault();
			var skin = $(this).attr('data-skin');
			$('body').attr('id', skin);
			$('#changeSkin').modal('hide');
		}	
	);
    
    
    /* --------------------------------------------------------
	Components
    -----------------------------------------------------------*/
    (function(){
        /* Textarea */
	if($('.auto-size')[0]) {
	    $('.auto-size').autosize();
	}

        //Select
	if($('.select')[0]) {
	    $('.select').selectpicker();
	}
        
    //Sortable
	
    if($('.sortable')[0]) 
	{
		$('.sortable').sortable({
		 	handle: 'listitems'
		});
	}  
	
	  $("#listitems").sortable({ // TSK URGENT DEMO
		    handle: ".item-mover",
		    update: function(event, ui)	{
		        var nxt_id = getId(ui.item.next());
		        plExec("ItemList", "moveTo!", {id1: getId(ui.item), id2: nxt_id, id: 1});
		}
	});  

        //Tag Select
	if($('.tag-select')[0]) {
	    $('.tag-select').chosen();
	}
        
        /* Tab */
	if($('.tab')[0]) {
	    $('.tab a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
	    });
	}
        
        /* Collapse */
	if($('.collapse')[0]) {
	    $('.collapse').collapse();
	}
        
        /* Accordion */
        $('.panel-collapse').on('shown.bs.collapse', function () {
            $(this).prev().find('.panel-title a').removeClass('active');
        });

        $('.panel-collapse').on('hidden.bs.collapse', function () {
            $(this).prev().find('.panel-title a').addClass('active');
        });

        //Popover
    	if($('.pover')[0]) {
    	    $('.pover').popover();
    	} 
    })();

    /* --------------------------------------------------------
	Sidebar + Menu
    -----------------------------------------------------------*/
    (function(){
        /* Menu Toggle */
        $('body').on('click touchstart', '#menu-toggle', function(e){
            e.preventDefault();
            $('html').toggleClass('menu-active');
            $('#sidebar').toggleClass('toggled');
            //$('#content').toggleClass('m-0');
        });
         
        /* Active Menu */
        $('#sidebar .menu-item').hover(function(){
            $(this).closest('.dropdown').addClass('hovered');
        }, function(){
            $(this).closest('.dropdown').removeClass('hovered');
        });

        /* Prevent */
        $('.side-menu .dropdown > a').click(function(e){
            e.preventDefault();
        });
	

    })();

    /* --------------------------------------------------------
	Chart Info
    -----------------------------------------------------------*/
    (function(){
        $('body').on('click touchstart', '.tile .tile-info-toggle', function(e){
            e.preventDefault();
            $(this).closest('.tile').find('.chart-info').toggle();
        });
    })();

    /* --------------------------------------------------------
	Todo List
    -----------------------------------------------------------*/
    (function(){
        setTimeout(function(){
            //Add line-through for alreadt checked items
            $('.todo-list .media .checked').each(function(){
                $(this).closest('.media').find('.checkbox label').css('text-decoration', 'line-through')
            });

            //Add line-through when checking
            $('.todo-list .media input').on('ifChecked', function(){
                $(this).closest('.media').find('.checkbox label').css('text-decoration', 'line-through');
            });

            $('.todo-list .media input').on('ifUnchecked', function(){
                $(this).closest('.media').find('.checkbox label').removeAttr('style');
            });    
        })
    })();

    /* --------------------------------------------------------
	Custom Scrollbar
    -----------------------------------------------------------*/
    (function() {
	if($('.overflow')[0]) {
	    var overflowRegular, overflowInvisible = false;
	    overflowRegular = $('.overflow').niceScroll();
	}
    })();

    /*--------------------------------------------------------
	                Messages + Notifications
    -----------------------------------------------------------*/

    (function(){
        $('body').on('click touchstart', '.drawer-toggle', function(e){
            e.preventDefault();
            var drawer = $(this).attr('data-drawer');

            $('.drawer:not("#'+drawer+'")').removeClass('toggled');

            if ($('#'+drawer).hasClass('toggled')) {
                $('#'+drawer).removeClass('toggled');
            }
            else{
                $('#'+drawer).addClass('toggled');
            }
        });

        //Close when click outside
        $(document).on('mouseup touchstart', function (e) {
            var container = $('.drawer, .tm-icon');
            if (container.has(e.target).length === 0) {
                $('.drawer').removeClass('toggled');
                $('.drawer-toggle').removeClass('open');
            }
        });

        //Close
        $('body').on('click touchstart', '.drawer-close', function(){
            $(this).closest('.drawer').removeClass('toggled');
            $('.drawer-toggle').removeClass('open');
        });
    })();


    /* --------------------------------------------------------
	mini Calendrier - version 1 - TSK - ZECRUSHER
    -----------------------------------------------------------*/
    (function()
	{
	
        //Sidebar
        if ($('#sidebar-calendar')[0]) {
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();
			
            $('#sidebar-calendar').fullCalendar({
                editable: false,
				//eventColor: '#378006',
				// ZeCrusher v1. 2021 - Correction de bug 
                events: 'ajax/ajax-calendar.php?action=getmini',
                header: {
                   // left: 'prev,next today ', //myCustomButton
					left: 'title'//,
					//right: 'month,agendaWeek,agendaDay'
                },
				
				// Version 0.2 ZeCrusher
				eventMouseover: function(calEvent, jsEvent,dayDelta, minuteDelta, allDay, revertFunc) 
				{
					var end;
					var id			=	calEvent.id; 						// Convertion objet en string avec toString
					var start 		= 	calEvent.start.toString();			// Convertion objet en string avec toString
			 		var allDay 		= 	calEvent.allDay.toString();			//var tooltip =	'<div class="tooltips" data-original-title="Voir les messages pour TOUS"><span class="author">TOUS</div>';
					
				 	var start_year = start.substr(11,4); 						/* Rechercher la date et l'heure du Start */ 
					 	month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].indexOf(start.substr(4,3))+1,	
					 	day1 = start.substr(8,2);
					var output_annee1 = start_year + '-' + (month<10?'0':'') + month + '-' + day1;
					var output_annee1 = day1+'/'+ (month<10?'0':'') + month +'/'+ start_year;
					var output_heure1 = start.substr(16,8);
					if (output_heure1 == "00:00:00") output_heure1=" toute la journée";	else output_heure1 = " à partir de " +output_heure1; // Tue Feb 28 2017 00:00:00 GMT+0100 (Paris, Madrid)
					var fin_start = 'le  '+output_annee1 + output_heure1;  
						var tooltip =	'<div class="tooltip"><div class="modal-content">'
									+'<div class="modal-header"><h4 class="modal-title"> Information </h4></div><div class="modal-body"><div id="eventInfo"><font size="3"><i class="fa '+calEvent.icon+'"></i></font>  ' + calEvent.title 
									+ '</div><div id="eventInfo">' + fin_start + '</div></div></div></div>';	
					$("body").append(tooltip);
					$(this).mouseover(function(e) {
						$(this).css('z-index', 10000);
						$('.tooltip').fadeIn('500');
						$('.tooltip').fadeTo('10', 1.9);
					}).mousemove(function(e) {
						$('.tooltip').css('top', e.pageY + 10);
						$('.tooltip').css('left', e.pageX + 20);
					});
				},
				eventMouseout: function(calEvent, jsEvent) {
					$(this).css('z-index', 8);
					$('.tooltip').remove();
				}
            });
	}

        //Content widget
        if ($('#calendar-widget')[0]) {
            $('#calendar-widget').fullCalendar({
                header: {
                    left: 'title',
                    right: 'prev, next'//,
//                    right: 'month,basicWeek,basicDay'
                },
                editable: true,
                events: [
                    {
                        title: 'All Day Event',
                        start: new Date(y, m, 1)
                    },
                    {
                        title: 'Long Event',
                        start: new Date(y, m, d-5),
                        end: new Date(y, m, d-2)
                    },
                    {
                        title: 'Repeat Event',
                        start: new Date(y, m, 3),
                        allDay: false
                    },
                    {
                        title: 'Repeat Event',
                        start: new Date(y, m, 4),
                        allDay: false
                    }
                ]
            });
        }

    })();


    /* --------------------------------------------------------
	Form Validation
    -----------------------------------------------------------*/
    (function(){
	if($("[class*='form-validation']")[0]) {
	    $("[class*='form-validation']").validationEngine();

	    //Clear Prompt
	    $('body').on('click', '.validation-clear', function(e){
		e.preventDefault();
		$(this).closest('form').validationEngine('hide');
	    });
	}
    })();

    /* --------------------------------------------------------
     `Color Picker
    -----------------------------------------------------------*/
    (function(){
        //Default - hex
	if($('.color-picker')[0]) {
	    $('.color-picker').colorpicker();
	}
        
        //RGB
	if($('.color-picker-rgb')[0]) {
	    $('.color-picker-rgb').colorpicker({
		format: 'rgb'
	    });
	}
        
        //RGBA
	if($('.color-picker-rgba')[0]) {
	    $('.color-picker-rgba').colorpicker({
		format: 'rgba'
	    });
	}
	
	//Output Color
	if($('[class*="color-picker"]')[0]) {
	    $('[class*="color-picker"]').colorpicker().on('changeColor', function(e){
		var colorThis = $(this).val();
		$(this).closest('.color-pick').find('.color-preview').css('background',e.color.toHex());
	    });
	}
    })();

    /* --------------------------------------------------------
     Date Time Picker
     -----------------------------------------------------------*/
    (function(){
        //Date Only
	if($('.date-only')[0]) {
	    $('.date-only').datetimepicker({
		pickTime: false
	    });
	}

        //Time only
	if($('.time-only')[0]) {
	    $('.time-only').datetimepicker({
		pickDate: false
	    });
	}

        //12 Hour Time
	if($('.time-only-12')[0]) {
	    $('.time-only-12').datetimepicker({
		pickDate: false,
		pick12HourFormat: true
	    });
	}
        
        $('.datetime-pick input:text').on('click', function(){
            $(this).closest('.datetime-pick').find('.add-on i').click();
        });
    })();

    /* --------------------------------------------------------
     Input Slider
     -----------------------------------------------------------*/
    (function(){
	if($('.input-slider')[0]) {
	    $('.input-slider').slider().on('slide', function(ev){
		$(this).closest('.slider-container').find('.slider-value').val(ev.value);
	    });
	}
    })();

    /* --------------------------------------------------------
     WYSIWYE Editor + Markedown
     -----------------------------------------------------------*/
    (function(){
        //Markedown
	if($('.markdown-editor')[0]) {
	    $('.markdown-editor').markdown({
		autofocus:false,
		savable:false
	    });
	}
        
        //WYSIWYE Editor - Message et autres
	if($('.wysiwye-editor')[0]) {
	    $('.wysiwye-editor').summernote({
		height: 372 /* Monza 2005 ^^' */
	    });
	}
    /* Page Procédure - Editeur en ligne */
	if($('.wysiwye-editor-procedure')[0]) {
	    $('.wysiwye-editor-procedure').summernote({
		height: 500
	    });

	}
	
    })();

    /* --------------------------------------------------------
     Media Player
     -----------------------------------------------------------*/
    (function(){
	if($('audio, video')[0]) {
	    $('audio,video').mediaelementplayer({
		success: function(player, node) {
		    $('#' + node.id + '-mode').html('mode: ' + player.pluginType);
		}
	    });
	}
    })();

    /* ---------------------------
	Image Popup [Pirobox]
    --------------------------- */
    (function() {
	if($('.pirobox_gall')[0]) {
	    //Fix IE
	    jQuery.browser = {};
	    (function () {
		jQuery.browser.msie = false;
		jQuery.browser.version = 0;
		if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
		    jQuery.browser.msie = true;
		    jQuery.browser.version = RegExp.$1;
		}
	    })();
	    
	    //Lightbox
	    $().piroBox_ext({
		piro_speed : 700,
		bg_alpha : 0.5,
		piro_scroll : true // pirobox always positioned at the center of the page
	    });
	}
    })();

    /* ---------------------------
     Vertical tab
     --------------------------- */
    (function(){
        $('.tab-vertical').each(function(){
            var tabHeight = $(this).outerHeight();
            var tabContentHeight = $(this).closest('.tab-container').find('.tab-content').outerHeight();

            if ((tabContentHeight) > (tabHeight)) {
                $(this).height(tabContentHeight);
            }
        })

        $('body').on('click touchstart', '.tab-vertical li', function(){
            var tabVertical = $(this).closest('.tab-vertical');
            tabVertical.height('auto');

            var tabHeight = tabVertical.outerHeight();
            var tabContentHeight = $(this).closest('.tab-container').find('.tab-content').outerHeight();

            if ((tabContentHeight) > (tabHeight)) {
                tabVertical.height(tabContentHeight);
            }
        });


    })();
    
    /* --------------------------------------------------------
     Login + Sign up
    -----------------------------------------------------------*/
    (function(){
	$('body').on('click touchstart', '.box-switcher', function(e){
	    e.preventDefault();
	    var box = $(this).attr('data-switch');
	    $(this).closest('.box').toggleClass('active');
	    $('#'+box).closest('.box').addClass('active'); 
	});
    })();
    
   
    
    /* --------------------------------------------------------
     Checkbox + Radio
     -----------------------------------------------------------*/
    if($('input:checkbox, input:radio')[0]) {
    	
	//Checkbox + Radio skin
	$('input:checkbox:not([data-toggle="buttons"] input, .make-switch input), input:radio:not([data-toggle="buttons"] input)').iCheck({
		    checkboxClass: 'icheckbox_minimal',
		    radioClass: 'iradio_minimal',
		    increaseArea: '20%' // optional
	});
    
	//Checkbox listing
	var parentCheck = $('.list-parent-check');
	var listCheck = $('.list-check');
    
	parentCheck.on('ifChecked', function(){
		$(this).closest('.list-container').find('.list-check').iCheck('check');
	});
    
	parentCheck.on('ifClicked', function(){
		$(this).closest('.list-container').find('.list-check').iCheck('uncheck');
	});
    
	listCheck.on('ifChecked', function(){
		    var parent = $(this).closest('.list-container').find('.list-parent-check');
		    var thisCheck = $(this).closest('.list-container').find('.list-check');
		    var thisChecked = $(this).closest('.list-container').find('.list-check:checked');
	    
		    if(thisCheck.length == thisChecked.length) {
			parent.iCheck('check');
		    }
	});
    
	listCheck.on('ifUnchecked', function(){
		    var parent = $(this).closest('.list-container').find('.list-parent-check');
		    parent.iCheck('uncheck');
	});
    
	listCheck.on('ifChanged', function(){
		    var thisChecked = $(this).closest('.list-container').find('.list-check:checked');
		    var showon = $(this).closest('.list-container').find('.show-on');
		    if(thisChecked.length > 0 ) {
			showon.show();
		    }
		    else {
			showon.hide();
		    }
	});
    }
    
    /* --------------------------------------------------------
        MAC Hack 
    -----------------------------------------------------------*/
    (function(){
	//Mac only
        if(navigator.userAgent.indexOf('Mac') > 0) {
            $('body').addClass('mac-os');
        }
    })();

    /* --------------------------------------------------------
	Photo Gallery
    -----------------------------------------------------------*/
    (function(){
        if($('.photo-gallery')[0]){
            $('.photo-gallery').SuperBox();
        }
    })();
    
});

$(window).load(function(){
    /* --------------------------------------------------------
     Tooltips
     -----------------------------------------------------------*/
    (function(){
        if($('.tooltips')[0]) {
            $('.tooltips').tooltip();
        }
    })();

    /* --------------------------------------------------------
     Animate numbers
     -----------------------------------------------------------*/
    $('.quick-stats').each(function(){
        var target = $(this).find('h2');
        var toAnimate = $(this).find('h2').attr('data-value');
        // Animate the element's value from x to y:
        $({someValue: 0}).animate({someValue: toAnimate}, {
            duration: 1000,
            easing:'swing', // can be anything
            step: function() { // called on every step
                // Update the element's text with rounded-up value:
                target.text(commaSeparateNumber(Math.round(this.someValue)));
            }
        });

        function commaSeparateNumber(val){
            while (/(\d+)(\d{3})/.test(val.toString())){
                val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            }
            return val;
        }
    });
    
});

/* --------------------------------------------------------
Date Time Widget - ZeCrusher - V1.1
-----------------------------------------------------------*/
(function(){
    var monthNames = [ "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre" ];
    var dayNames= ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]

    // Create a newDate() object
    var newDate = new Date();

    // Extract the current date from Date object
    newDate.setDate(newDate.getDate());

    // Output the day, date, month and year
    $('#date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

    setInterval( function() {

        // Create a newDate() object and extract the seconds of the current time on the visitor's
        var seconds = new Date().getSeconds();

        // Add a leading zero to seconds value
        $("#sec").html(( seconds < 10 ? "0":"" ) + seconds);
    },1000);

    setInterval( function() {

        // Create a newDate() object and extract the minutes of the current time on the visitor's
        var minutes = new Date().getMinutes();

        // Add a leading zero to the minutes value
        $("#min").html(( minutes < 10 ? "0":"" ) + minutes);
    },1000);

    setInterval( function() {

        // Create a newDate() object and extract the hours of the current time on the visitor's
        var hours = new Date().getHours();

        // Add a leading zero to the hours value
        $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);
})();



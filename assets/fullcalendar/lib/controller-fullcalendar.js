document.addEventListener('DOMContentLoaded', function () {

    var calendarEl = document.getElementById('calendar');
    if (calendarEl) {

        let infopresence = '';
        let color = '';
        var initialLocaleCode = 'pt-br';
        var calendar = new FullCalendar.Calendar(calendarEl, {
            themeSystem: 'bootstrap5',
            height: 350,
            headerToolbar: {
                left: 'prev',
                center: 'title',
                right: 'next' //dayGridMonth,timeGridWeek,timeGridDay,listMonth
            },
            locale: initialLocaleCode,
            buttonIcons: false, // show the prev/next text
            weekNumbers: false,
            weekends: false,
            navLinks: false, // can click day/week names to navigate views
            //editable: true,
            selectable: true,
            dayMaxEvents: true, //
            dateClick: function (info) {

                
            }
        });

        calendar.render();

    } else {
        console.log('There is no, calendar')
    };
});




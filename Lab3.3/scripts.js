


function tabulationTable() {
    multTableBody = '<table id="tabulationTable"><thead><th>X</th> <th>Y</th></thead><tbody>';
    var borA = parseFloat(document.getElementById("borA").value);
    var borB = parseFloat(document.getElementById("borB").value);
    var h = parseFloat(document.getElementById("h").value);
    var exp = document.getElementById("expression").value + "";

    for (var x = borA; x < borB; x += h) {
        multTableBody += '<tr>';

        writeNum(Number(x).toFixed(2));
        writeNum(Number(eval(exp.replaceAll('x', x))).toFixed(2));

        multTableBody += '</tr>';
    }
    multTableBody += '</tbody></table>';
    document.getElementById("tabulationTable").innerHTML = multTableBody;


    function writeNum(num) {
        if (num >= 0)
            multTableBody += '<td id="selected">' + num + '</td>';
        else
            multTableBody += '<td>' + num + '</td>';
    }

}

////////////////////////////////////
////////////////////////////////////

var days = [
    'Неділя',
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    'П1ятниця',
    'Субота'
];

function daysCount(date = String, daysNum) {
    var now = new Date(date);
    now.setDate(1);

    var daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    var iteration = 0;
    var day = now.getDay();
    for (var i = 0; i < daysInMonth; i++) {
        if (day % 7 == daysNum) {
            iteration++;
        }
        day++;
        if (day % 7 == 0) {
            day = 0;
        }
    }
    document.getElementById('daysCount').innerHTML = "Кількість субот у місяця '" + mountNames[now.getMonth()] + "' = " + iteration;
}

////////////////////////////////////
////////////////////////////////////

function myTimer() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}

////////////////////////////////////
////////////////////////////////////

function multiplyTable() {
    multTableBody = '<table id="multipTable"><tbody>';
    for (var x = 1; x <= 10; x++) {
        multTableBody += '<tr>';
        for (var y = 1; y <= 10; y++) {
            if (x == 1 || y == 1) {
                multTableBody += '<th>' + (x * y) + '</th>';
            } else {
                multTableBody += '<td>' + (x * y) + '</td>';
            }
        }
        multTableBody += '</tr>';
    }
    multTableBody += '</tbody></table>';
    return multTableBody;
}

///////////////////////////////////
///////////////////////////////////
const mountNames = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
const dayNames = ["ПН", "ВВ", "СР", "ЧТ", "ПТ", "СБ", "НД"];


function calendarWithDateNow() {
    return calendarWithDateObj(new Date());
}

function calendarWithDateStr(date = String) {
    return calendarWithDateObj(new Date(date));
}

var tabulation = 0;
function calendarWithDateObj(date = new Date) {

    var now = date;
    var calendarBody = "";
    var today = new Date().getDate();
    var todayM = new Date().getMonth();
    var allocatedDay = now.getDate();
    now.setDate(1);

    var dayofweek = now.getDay();
    dayofweek += tabulation * 7;

    var daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

    calendarBody += '<table id="calendar" ><tbody>';
    calendarBody += '<thead><th colspan= "7">' + mountNames[now.getMonth()] + ' ' + now.getFullYear() + '</th></thead>';

    for (var i = 0; i < dayNames.length; i++) {
        if (i < 5)
            calendarBody += '<th>' + dayNames[i] + '</th>';
        else
            calendarBody += '<th class="holiday">' + dayNames[i] + '</th>';
    }

    for (var i = 2 - dayofweek; i <= 43 - dayofweek; i++) {
        if ((i - 1 + dayofweek) % 7 == 1) {
            calendarBody += '<tr>';
        }

        if (i <= 0 || i > daysInMonth) {
            writeNotInCurrentMountDay();
        }
        else
            checkHolidayAndWriteDay(i, true, -1);

        if ((i - 1 + dayofweek) % 7 == 0) {
            calendarBody += '</tr>';
        }
    }
    calendarBody += '<\/tbody><\/table>';


    function writeNotInCurrentMountDay() {
        if (i <= 0) {
            var d = new Date(now.getFullYear(), now.getMonth(), 0);
            var tempDaysInMonth = d.getDate();
            var futereM = d.getMonth() - 1;
            checkHolidayAndWriteDay(tempDaysInMonth + i, false, tempDaysInMonth, futereM);
        }
        else if (i > daysInMonth) {
            var d = new Date(now.getFullYear(), now.getMonth() + 1, 0);
            var tempDaysInMonth = d.getDate();
            var futereM = d.getMonth() + 1;
            checkHolidayAndWriteDay(i - tempDaysInMonth, false, tempDaysInMonth, futereM);
        }
    }

    function checkHolidayAndWriteDay(day = Number, isDayInCurrentMount = Boolean, tempDaysInMonth, futereM) {
        classes = getClassOfSelectedDay(tempDaysInMonth, futereM);
        if (!isDayInCurrentMount)
            classes += "notInCurrentMount ";
        if ((i - 1 + dayofweek) % 7 == 6 || (i - 1 + dayofweek) % 7 == 0)
            classes += "holiday";
        calendarBody += '<td class="' + classes + '">' + day + '<\/td>';
    }


    function getClassOfSelectedDay(tempDaysInMonth, futereM) {
        if (i == today && todayM == now.getMonth()) {
            return 'today ';
        }
        else if (i - tempDaysInMonth == today && todayM == futereM) {
            return 'today ';
        }
        else if (i == allocatedDay)
            return 'allocated ';
        return '';
    }

    return calendarBody;
}
/* Test connection to index.html
window.alert("main.js connected to index.html");
*/

/*global $, jStat*/

$(document).ready(function () {
	//jQuery loaded?
	'use strict';
	//alert("Assignment 5");
});


var index;

/* |||||||||||||||||||||||||||||||||||||||||||||||| POWERBALL DATA */
var POWERBALL_WB_MAX = 69,
	POWERBALL_PB_MAX = 26;

var powerballHistogramWB, powerballHistogramPB, powerballArrayWB, powerballArrayPB;

powerballArrayWB = [];

for (index = 0; index < powerball1.length; index += 1) {
	powerballArrayWB.push(powerball1[index].WB1);
	powerballArrayWB.push(powerball1[index].WB2);
	powerballArrayWB.push(powerball1[index].WB3);
	powerballArrayWB.push(powerball1[index].WB4);
	powerballArrayWB.push(powerball1[index].WB5);
}

powerballHistogramWB = jStat.histogram(powerballArrayWB, POWERBALL_WB_MAX);

powerballArrayPB = [];

for (index = 0; index < powerball1.length; index += 1) {
	powerballArrayPB.push(powerball1[index].PB);
}

powerballHistogramPB = jStat.histogram(powerballArrayPB, POWERBALL_PB_MAX);
/* |||||||||||||||||||||||||||||||||||||||||||||||| POWERBALL DATA */

/* |||||||||||||||||||||||||||||||||||||||||||||||| MEGAMILLIONS DATA*/
var MEGAMILLONS_WB_MAX = 75,
	MEGAMILLIONS_MB_MAX = 15;

var megamillionsHistogramWB, megamillionsHistogramMB, megamillionsArrayWB, megamillionsArrayMB;

megamillionsArrayWB = [];

for (index = 0; index < megamillions1[0].numbersList.length; index += 1) {
	megamillionsArrayWB.push(megamillions1[0].numbersList[index].WhiteBall1);
	megamillionsArrayWB.push(megamillions1[0].numbersList[index].WhiteBall2);
	megamillionsArrayWB.push(megamillions1[0].numbersList[index].WhiteBall3);
	megamillionsArrayWB.push(megamillions1[0].numbersList[index].WhiteBall4);
	megamillionsArrayWB.push(megamillions1[0].numbersList[index].WhiteBall5);
}

megamillionsHistogramWB = jStat.histogram(megamillionsArrayWB, MEGAMILLONS_WB_MAX);

megamillionsArrayMB = [];

for (index = 0; index < megamillions1[0].numbersList.length; index += 1) {
	megamillionsArrayMB.push(megamillions1[0].numbersList[index].MegaBall);
}

megamillionsHistogramMB = jStat.histogram(megamillionsArrayMB, MEGAMILLIONS_MB_MAX);
/* |||||||||||||||||||||||||||||||||||||||||||||||| MEGAMILLIONS DATA*/

/* |||||||||||||||||||||||||||||||||||||||||||||||| STATE LOTTERIES */

function makeTableRowStates(stateData) {
	'use strict';
	var tableRow, tableData;
	tableRow = $('<tr>');
	tableData = $('<td>').text(stateData.name);
	tableRow.append(tableData);
	tableData = $('<td>').text(stateData.abbreviation);
	tableRow.append(tableData);
	if (stateData.link === '#') {
		tableData = '<td>None</td>';
	} else {
		tableData = '<td class="lotteryLink' + '" ' + 'onclick="location.href=' + "'" + stateData.link + "'" + '">Link</td>';
	}
	tableRow.append(tableData);
	return tableRow;
}

var tbodyContent, tableRow;
tbodyContent = $('#tbody-tablerows');
tbodyContent.empty();
states.forEach(function (state) {
	'use strict';
	tableRow = makeTableRowStates(state);
	/* DEBUG window.console.log(tableRow); */
	tbodyContent.append(tableRow);
});
/* |||||||||||||||||||||||||||||||||||||||||||||||| STATE LOTTERIES */

/* |||||||||||||||||||||||||||||||||||||||||||||||| POWERBALL CONTENT */
function makeTableRowPowerball(count, frequency) {
	'use strict';
	var tableRow, tableData;
	tableRow = $('<tr>');
	tableData = $('<td>').text(count);
	tableRow.append(tableData);
	tableData = $('<td>').text(frequency);
	tableRow.append(tableData);
	return tableRow;
}

function powerballWhiteballFrequency() {
	'use strict';
	var tbodyContent, tableRow, index, count;
	tbodyContent = $('#powerballThead');
	tbodyContent.empty();
	tableRow = '<tr><th>Whiteball Number</th><th>Whiteball Frequency</th></tr>';
	tbodyContent.append(tableRow);
	tbodyContent = $('#powerballTbody');
	tbodyContent.empty();
	for (index = 0; index < powerballHistogramWB.length; index += 1) {
		count = index + 1;
		tableRow = makeTableRowPowerball(count, powerballHistogramWB[index]);
		tbodyContent.append(tableRow);
	}
}

function powerballPowerballFrequency() {
	'use strict';
	var tbodyContent, tableRow, index, count;
	tbodyContent = $('#powerballThead');
	tbodyContent.empty();
	tableRow = '<tr><th>Powerball Number</th><th>Powerball Frequency</th></tr>';
	tbodyContent.append(tableRow);
	tbodyContent = $('#powerballTbody');
	tbodyContent.empty();
	for (index = 0; index < powerballHistogramPB.length; index += 1) {
		count = index + 1;
		tableRow = makeTableRowPowerball(count, powerballHistogramPB[index]);
		tbodyContent.append(tableRow);
	}
}

function listWinningNumbersPb() {
	'use strict';
	//window.alert("Made it listWinningNumbersPb");
	var tbodyContent, tableRow, index;
	tbodyContent = $('#powerballThead');
	tbodyContent.empty();

	tbodyContent = $('#powerballTbody');
	tbodyContent.empty();
}

function makeTableRowPbWinningNumbers(DD, WB1, WB2, WB3, WB4, WB5, PB, PP) {
	'use strict';
	var tableRow, tableData;
	tableRow = $('<tr>');
	tableData = $('<td>').text(DD);
	tableRow.append(tableData);
	tableData = $('<td>').text(WB1);
	tableRow.append(tableData);
	tableData = $('<td>').text(WB2);
	tableRow.append(tableData);
	tableData = $('<td>').text(WB3);
	tableRow.append(tableData);
	tableData = $('<td>').text(WB4);
	tableRow.append(tableData);
	tableData = $('<td>').text(WB5);
	tableRow.append(tableData);
	tableData = $('<td>').text(PB);
	tableRow.append(tableData);
	tableData = $('<td>').text(PP);
	tableRow.append(tableData);
	return tableRow;
}

function listWinningNumbersPb() {
	'use strict';
	//window.alert("Made it listWinningNumbersMm");
	var tbodyContent, tableRow, index, newDate;
	tbodyContent = $('#powerballThead');
	tbodyContent.empty();
	tableRow = '<tr><th>Date</th><th>WB1</th><th>WB2</th><th>WB3</th><th>WB4</th><th>WB5</th><th>PB</th><th>PP</th></tr>';
	tbodyContent.append(tableRow);
	tbodyContent = $('#powerballTbody');
	tbodyContent.empty();
	for (index = 0; index < powerball1.length; index += 1) {
		newDate = new Date(powerball1[index].drawDate);
		tableRow = makeTableRowPbWinningNumbers(newDate.toDateString(),
			powerball1[index].WB1,
			powerball1[index].WB2,
			powerball1[index].WB3,
			powerball1[index].WB4,
			powerball1[index].WB5,
			powerball1[index].PB,
			powerball1[index].PP);
		tbodyContent.append(tableRow);
	}
}

$('#whiteballPbFrequency').on('click', powerballWhiteballFrequency);
$('#powerballPbFrequency').on('click', powerballPowerballFrequency);
$('#winningNumbersPb').on('click', listWinningNumbersPb);

/* |||||||||||||||||||||||||||||||||||||||||||||||| POWERBALL CONTENT */

/* |||||||||||||||||||||||||||||||||||||||||||||||| MEGA MILLIONS CONTENT */
function makeTableRowMegamillions(count, frequency) {
	'use strict';
	var tableRow, tableData;
	tableRow = $('<tr>');
	tableData = $('<td>').text(count);
	tableRow.append(tableData);
	tableData = $('<td>').text(frequency);
	tableRow.append(tableData);
	return tableRow;
}

function megamillionsWhiteballFrequency() {
	'use strict';
	var tbodyContent, tableRow, index, count;
	tbodyContent = $('#megamillionsThead');
	tbodyContent.empty();
	tableRow = '<tr><th>Whiteball Number</th><th>Whiteball Frequency</th></tr>';
	tbodyContent.append(tableRow);
	tbodyContent = $('#megamillionsTbody');
	tbodyContent.empty();
	for (index = 0; index < megamillionsHistogramWB.length; index += 1) {
		count = index + 1;
		tableRow = makeTableRowMegamillions(count, megamillionsHistogramWB[index]);
		tbodyContent.append(tableRow);
	}
}

function megamillionsMegaballFrequency() {
	'use strict';
	var tbodyContent, tableRow, index, count;
	tbodyContent = $('#megamillionsThead');
	tbodyContent.empty();
	tableRow = '<tr><th>Megaball Number</th><th>Megaball Frequency</th></tr>';
	tbodyContent.append(tableRow);
	tbodyContent = $('#megamillionsTbody');
	tbodyContent.empty();
	for (index = 0; index < megamillionsHistogramMB.length; index += 1) {
		count = index + 1;
		tableRow = makeTableRowMegamillions(count, megamillionsHistogramMB[index]);
		tbodyContent.append(tableRow);
	}
}

function makeTableRowMmWinningNumbers(DD, WB1, WB2, WB3, WB4, WB5, MB, MP) {
	'use strict';
	var tableRow, tableData;
	tableRow = $('<tr>');
	tableData = $('<td>').text(DD);
	tableRow.append(tableData);
	tableData = $('<td>').text(WB1);
	tableRow.append(tableData);
	tableData = $('<td>').text(WB2);
	tableRow.append(tableData);
	tableData = $('<td>').text(WB3);
	tableRow.append(tableData);
	tableData = $('<td>').text(WB4);
	tableRow.append(tableData);
	tableData = $('<td>').text(WB5);
	tableRow.append(tableData);
	tableData = $('<td>').text(MB);
	tableRow.append(tableData);
	tableData = $('<td>').text(MP);
	tableRow.append(tableData);
	return tableRow;
}

function listWinningNumbersMm() {
	'use strict';
	//window.alert("Made it listWinningNumbersMm");
	var tbodyContent, tableRow, index, newDate;
	tbodyContent = $('#megamillionsThead');
	tbodyContent.empty();
	tableRow = '<tr><th>Date</th><th>WB1</th><th>WB2</th><th>WB3</th><th>WB4</th><th>WB5</th><th>MB</th><th>MP</th></tr>';
	tbodyContent.append(tableRow);
	tbodyContent = $('#megamillionsTbody');
	tbodyContent.empty();
	for (index = 0; index < megamillions1[0].numbersList.length; index += 1) {
		newDate = new Date(megamillions1[0].numbersList[index].DrawDate);
		tableRow = makeTableRowMmWinningNumbers(newDate.toDateString(),
			megamillions1[0].numbersList[index].WhiteBall1,
			megamillions1[0].numbersList[index].WhiteBall2,
			megamillions1[0].numbersList[index].WhiteBall3,
			megamillions1[0].numbersList[index].WhiteBall4,
			megamillions1[0].numbersList[index].WhiteBall5,
			megamillions1[0].numbersList[index].MegaBall,
			megamillions1[0].numbersList[index].Megaplier);
		tbodyContent.append(tableRow);
	}
}

$('#whiteballMmFrequency').on('click', megamillionsWhiteballFrequency);
$('#megaballMmFrequency').on('click', megamillionsMegaballFrequency);
$('#winningNumbersMm').on('click', listWinningNumbersMm);
/* |||||||||||||||||||||||||||||||||||||||||||||||| MEGA MILLIONS CONTENT */
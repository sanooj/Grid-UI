// JavaScript Document
$(function()
{
	// list styling
	$('ul li:last-child').addClass('last');
	$('ul li:first-child').addClass('first');
	$('ul li:nth-child(odd)').addClass('odd');
	$('ul li:nth-child(even)').addClass('even');
	$('ul li').addClass('items');
	
	// Grid Styling
	$("table thead tr th:first-child").addClass('table-head-left');
	$("table thead tr th:last-child").addClass('table-head-right');
	$("table tbody tr td:first-child").addClass('table-body-left');
	$("table tbody tr td:last-child").addClass('table-body-right');
	$("table tfoot tr td:first-child").addClass('table-foot-left');
	$("table tfoot tr td:last-child").addClass('table-foot-right');
	$("table tr:nth-child(odd)").addClass('table-bodyodd');
	$("table tr:nth-child(even)").addClass('table-bodyeven');
	$("table tr:nth-child(odd) td").addClass('table-bodyodd-td');
	$("table tr:nth-child(even) td").addClass('table-bodyeven-td');
	
});
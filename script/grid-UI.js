/*
        Type Writer

        Copyright 2011 Sanooj <mail@sanooj.me>

        This program is free software; you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation; either version 2 of the License, or
        (at your option) any later version.

        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.

        You should have received a copy of the GNU General Public License
        along with this program; if not, write to the Free Software
        Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
*/
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
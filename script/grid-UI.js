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
(function($)
{
	
    $.fn.gridUi = function(){

    	var element = $(this);

		// list styling

		$(element).find('ul li').addClass('items');
		$(element).find('ul li:last-child').addClass('last').removeClass('items');
		$(element).find('ul li:first-child').addClass('first').removeClass('items');
		$(element).find('ul li:nth-child(odd)').addClass('odd');
		$(element).find('ul li:nth-child(even)').addClass('even');
		
		// Grid Styling
		$(element).find("table thead tr th:first-child").addClass('table-head-left');
		$(element).find("table thead tr th:last-child").addClass('table-head-right');
		$(element).find("table tbody tr td:first-child").addClass('table-body-left');
		$(element).find("table tbody tr td:last-child").addClass('table-body-right');
		$(element).find("table tfoot tr td:first-child").addClass('table-foot-left');
		$(element).find("table tfoot tr td:last-child").addClass('table-foot-right');
		$(element).find("table tr:nth-child(odd)").addClass('table-bodyodd');
		$(element).find("table tr:nth-child(even)").addClass('table-bodyeven');
		$(element).find("table tr:nth-child(odd) td").addClass('table-bodyodd-td');
		$(element).find("table tr:nth-child(even) td").addClass('table-bodyeven-td');
	};
})(jQuery);
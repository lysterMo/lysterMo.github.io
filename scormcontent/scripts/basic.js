/*
 * SimpleModal Basic Modal Dialog
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.html
 */

jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
	$('#basic-modal .basic').click(function (e) {
		$('#basic-modal-content').modal();

		return false;
	});
	$('#basic-modal2 .basic').click(function (e) {
		$('#basic-modal-content2').modal();

		return false;
	});
	$('#basic-modal3 .basic').click(function (e) {
		$('#basic-modal-content3').modal();

		return false;
	});
});
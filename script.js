$(document).ready(function(){
	$.getJSON("table.json", function(data){
		var list_data = '';
		$.each(data, function(key, value){
			list_data += '<tr>';
			list_data += '<td>' +value.listNumber+'<td>';
			list_data += '<td>' +value.name+'<td>';
			list_data += '<td>' +value.address+'<td>';
		});
		$('#data-tabel').append(list_data);
		console.log('list data', list_data);
	});
	
	var number = $(".number");
	var name = $(".name");
	var address = $(".address");

	$(".number").html($("td").index(number));
	$(".name").html("Nama" + "-" + $("td").index(number));
	$(".address").html("Alamat" + "-" + $("td").index(number));

	// $("#data-tabel").each(function(append){
	// 	var baris = $("<td>");
	// 	console.log('baris', baris);
	// 	var i;
	// 	for (i = 0; i < 10; i++) {
	// 	baris += "Nama" + i + '<td>';
	// }
	// })

	// $("#check-all, thead").click(function(event){
	// 	var tableHead = $('<thead>');
	// 	console.log('tabel head', tableHead);
	// 	$.not(this)
	// 	.closest("#data-tabel")
	// 	.find('input:checkbox')
	// 	.prop("checked", this.checked)
	// 	.closest("#table-value");
	// });  

	// $("#data-tabel tr").click(function(){
	// var rowTr = $(this).data('index');
	// var selected = $(`#data-tabel [data-index='${rowTr}']`);
	// console.log(selected.find('input[type="checkbox"]'));
	// $(selected.find('input[type="checkbox"]').attr('checked', true));
	// console.log('asasasa', selected.find('input[type="checkbox"]').attr('checked', true));
	// })

// Checked and unchecked list row
	$('#data-tabel tr').click(function (event) {
		var $target = $(event.target);
		var rowTable = $("number, name, address");
		console.log("ini baris tabel", rowTable);
		if(!$target.is('input:checkbox'))
		{
			$(this).find('input:checkbox').each(function(){
				if(this.checked)this.checked = false;
				else this.checked = true;
			})
		}
		$(rowTable).css("background-color", "yellow");
	});

 })

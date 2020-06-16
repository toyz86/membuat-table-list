$(document).ready(function(){
	const allItems = 50;
	$('#data-tabel').each(function (append) {
		let rowTr = '';
		for (let i = 1; i < allItems; i++) {
			rowTr += '<tr>';
			rowTr += '<td>' + '<input type="checkbox">' + '</td>';
			rowTr += "<td>" + i + "</td>";
			rowTr += "<td>" + "Nama" + "-" + i + "</td>";
			rowTr += "<td>" + "Alamat" + "-" + i + "</td>";
			rowTr += "</tr>";
		}
		$('#data-tabel').append(rowTr);
	})

	console.log("allItems", allItems);
	let perPage = 10;
	let totalPages = Math.ceil(allItems/perPage);
	console.log('total halaman', totalPages);
	  
	$("#data-tabel tbody tr").hide();
	$("#data-tabel tbody tr").slice(0, perPage).show();
	let currentPage = $(".pagination").index() - 1;
	console.log("halaman", currentPage);
 
	$("#btnNext").click(function(){
		currentPage ++;
		console.log('halaman', currentPage);
		let startPage = currentPage * perPage;
		console.log('startPage', startPage);
		let endPage = startPage + perPage;
		console.log('endPage', endPage);
		
		for (i = 0;i < totalPages ; i++){
			console.log('asasasasasa', i);
			$("#data-tabel tbody tr").hide().slice(startPage, endPage).show();
		};
	})

	$("#btnPrev").click(function(){
		currentPage --;
		console.log('halaman', currentPage);
		let startPage = currentPage * perPage;
		console.log('startPage', startPage);
		let endPage = startPage + perPage;
		console.log('endPage', endPage);
		
		for (i = 0;i < totalPages ; i++){
			console.log('asasasasasa', i);
			$("#data-tabel tbody tr").hide().slice(startPage, endPage).show();
		};
	})

// Checked and unchecked list row
	$('#data-tabel tr').click(function (event) {
		let $target = $(event.target);
		let rowTable = $("number, name, address");
		if(!$target.is('input[type="checkbox"]'))
		{
			$(this).find('input[type="checkbox"]').each(function () {
				if(this.checked)this.checked = false;
				else this.checked = true;
				console.log("checkcheck", this.checked);
			})
		}
		$(this).closest('tr').find('td').toggleClass('selectedRow');
	});

	// $("#table-selected-data").click(function(){
	// 	// var isChecked = $(prop( "checked", true ));
	// 	// console.log('selected data', isChecked);
	// });
	$("#btnShowSelectedData").click(function() {
		var isChecked = $("checked");
        console.log("selected data", isChecked);
    	$("#table-selected-data tbody td").append(isChecked);
  	});

	// $("#btnShowSelectedData").click(function() {
	// 	$("#table-selected-data tbody td").append("selectedRow");
	// });	

 })

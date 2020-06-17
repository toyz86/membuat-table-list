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
		console.log('asdfsdkjb', $target);
		if(!$target.is('input[type="checkbox"]'))
		{
			$(this).find('input[type="checkbox"]').each(function () {
				if(this.checked)this.checked = false;
				else this.checked = true;
				console.log("checkcheck", this.checked);
			})
		}
		$(this).closest('tr').find('td').toggleClass('selectedRow');
		rowSelected = $(this);
		console.log('selected row', rowSelected);
	});

	$("#btnShowSelectedData").click(function(){
		$("#table-selected-data").removeClass('.selectedRow');
		let setRow = rowSelected.clone();
		let getRow = $("#table-selected-data tbody");
		getRow.append(setRow);
		setRow++;
		$("#table-selected-data td:first-child").hide();
		// $("#table-selected-data td:first-child").remove();
		// $("#table-selected-data").each(function(){
		// 	$(this).find("td:first").remove();
		// 	// // for (let i = 1; i < setRow.length; i++){
		// 	// // 	alert(setRow.innerText);
		// 	// }
		// })
	})
			// $("#table-selected-data").each(function(){
			// 	$(this).find("td:first-child").remove();
			// 	// let boxSelected = $('input[type="checkbox"]');
			// 	// console.log('box selected', boxSelected)
			// 	// $(this).find(boxSelected).slice(1).remove();
			// })
 })

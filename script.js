$(document).ready(function(){
	const allItems = 100;
	$('#data-tabel').each(function (append) {
		let rowTr = '';
		for (let i = 0; i < allItems; i++) {
			let rowNum = i + 1;
			rowTr += '<tr>';
			rowTr += '<td>' + '<input type="checkbox">' + '</td>';
			rowTr += "<td>" + rowNum + "</td>";
			rowTr += "<td>" + "Nama" + "-" + rowNum + "</td>";
			rowTr += "<td>" + "Alamat" + "-" + rowNum + "</td>";
			rowTr += "</tr>";
		}
		$('#data-tabel').append(rowTr);
	})

	console.log("allItems", allItems);
	let perPage = 10;
	let totalPages = Math.ceil(allItems/perPage -1);
	console.log('total halaman', totalPages);
	
	$("#data-tabel tbody tr").hide();
	$("#data-tabel tbody tr").slice(0, perPage).show();
	let currentPage = $(".pagination").index() -1;
	console.log("halaman", currentPage);
	
	$("#btnNext").click(function(){
		if (currentPage === totalPages){
			return false;
		} else {
			currentPage++;
			let startPage = currentPage * perPage;
			let endPage = startPage + perPage;
			console.log("halaman", currentPage);
			for (i = 0; i < totalPages; i++) {
				// console.log('asasasasasa', i);
				$("#data-tabel tbody tr").hide().slice(startPage, endPage).show();
			};
		}
	})

	$("#btnPrev").click(function () {
		if (currentPage === 0) {
			return false;
		} else {
			currentPage--;
			let startPage = currentPage * perPage;
			let endPage = startPage + perPage;
			console.log("halaman", currentPage);
			for (i = 0; i < totalPages; i++) {
				// console.log('asasasasasa', i);
				$("#data-tabel tbody tr").hide().slice(startPage, endPage).show();
			};
		}
	})

// Checked and unchecked list row
	$('#data-tabel tr').click(function (event) {
		let $target = $(event.target);
		// console.log('asdfsdkjb', $target);
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
		// console.log('selected row', rowSelected);
	});

	$("#btnShowSelectedData").click(function(){
		let setRow = rowSelected.clone();
		if(!setRow.is(true))
		rowSelected.removeClass('selectedRow');
		rowSelected.find("#selected-data").removeClass('td');
		let getRow = $("#table-selected-data tbody");
		getRow.append(setRow);
		setRow++;
		$(setRow).removeClass();
		$("#table-selected-data td:first-child").hide();
		// $("#table-selected-data td:first-child").remove();
		// $("#table-selected-data").each(function(){
		// 	$(this).find("td:first").remove();
		// 	// // for (let i = 1; i < setRow.length; i++){
		// 	// // 	alert(setRow.innerText);
		// 	// }
		// })
	})
 })

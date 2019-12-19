$("button").click(function(){
	//get n
	let n = prompt("n = ");
	// _______________________________________________

	//get inputed numbers
	let xnums = $(".xnums").find("td input");
	let mnums = $(".mnums").find("td input");
	let xarr = [];
	let marr = [];
	xnums.each(function(){
		let x = $(this).val().split(" ");
		x.forEach(function(val){
			xarr.push(+val);
		})
	})
	mnums.each(function(){
		marr.push(+$(this).val());
	})

	//___________________________________________________________

	//find avg of x
	let avgIndex = 0;
	for (let i = 0; i < xarr.length; i+=2){
		let s = 0;
		s += xarr[i] + xarr[i+1];
		$(".xavg").find("td").eq(avgIndex).text(s/2);
		avgIndex++;
	}
	//_________________________________________________________________

	//find m/n

	let mnIndex = 0;
	for (let i = 0; i < marr.length; i++){
		$(".mn").find("td").eq(i).text(marr[i]/+n);
	}
	//_________________________________________________________________

	//find (m/n)*x

	for (let i = 0; i < 10; i++){
		$(".mnx").find("td").eq(i).text((+$(".xavg").find("td").eq(i).text() * +$(".mn").find("td").eq(i).text()).toFixed(6));
	}

	// _____________________________________________________________________________

	//find x^-

	let xline = 0;
	for (let i = 0; i < 10; i++){
		xline += +$(".mnx").find("td").eq(i).text();
	}
	console.log(xline);

	//________________________________________________________________________________________

	//find x - x^-
	for (let i = 0; i < 10; i++){
		$(".xx").find("td").eq(i).text((+$(".xavg").find("td").eq(i).text() - xline));
	}

	//________________________________________________________________________________________


	//find (x - x^-)^2

	for (let i = 0; i < 10; i++){
		$(".xx2").find("td").eq(i).text(Math.pow(+$(".xx").find("td").eq(i).text(), 2));
	}

	//________________________________________________________________________________________


	//find (x - x^-)^2 * (m/n)

	for (let i = 0; i < 10; i++){
		$(".xx2mn").find("td").eq(i).text(+$(".mn").find("td").eq(i).text() * +$(".xx").find("td").eq(i).text());
	}

	//________________________________________________________________________________________

	//find dispersia (final)
	let disp = 0;

	for (let i = 0; i < 10; i++){
		disp += +$(".xx2mn").find("td").eq(i).text();
	}

	console.log(disp);
	//________________________________________________________________________________________


	$(".xl").text("X^- = " + xline);
	$(".disp").text("D(x) = " + disp);

})
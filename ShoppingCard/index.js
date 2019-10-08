// var shoesArticle = JSON.parse(shoes);

var i = 0;

//create product information from json
for (i = 0; i < shoesArticle.length; i++) {
  $("<div />", {
    "html": "<div class='image'><img src='" + shoesArticle[i].Img_Link + "'></div><p class='modell'>" + shoesArticle[i].Modell + "</p>" + "<p class='marke'>" + shoesArticle[i].Marke + "</p><p class='preis'>" + shoesArticle[i].Preis + "</p><button class='buttonAdd' id='buttonAdd-" + shoesArticle[i].id + "'>Add to Cart</button>"
  }).appendTo('#shoppinglist');
 }

//add eventlistener for Ad to Cart button
$(".buttonAdd").on("click", function() {
	for (i = 0; i < shoesArticle.length; i++) {
   		if ("buttonAdd-" + shoesArticle[i].id == $(this).attr("id")) {
   			shoesArticle[i].Quantity += 1;
   		}
    }
console.table(shoesArticle);
updateCart();
calculateSum();
});

$(".buttonDelete").on("click", function() {
	for (i = 0; i < shoesArticle.length; i++) {
   		if ("buttonDel-" + shoesArticle[i].id == $(this).attr("id")) {
   			shoesArticle[i].Quantity = 0;
   		}
    }
console.table(shoesArticle);
console.log("gaga");
calculateSum();
});

//update cart
function updateCart () {
	$("#cart").html("");
	for (i = 0; i < shoesArticle.length; i++) {
		if (shoesArticle[i].Quantity > 0) {
			$("<div />", {
				"html": "<div class='image'><img src='" + shoesArticle[i].Img_Link + "'></div><div><p class='modell'>" + shoesArticle[i].Modell + "</p><p class='marke'>" + shoesArticle[i].Preis + "</p></div><p>" + shoesArticle[i].Quantity + "</p><button class='buttonDelete' id='buttonDel-" + shoesArticle[i].id + "'>Delete</button>"
			}).appendTo("#cart");
		}
	}
}

function calculateSum () {
	var sum = 0;
	for (i = 0; i < shoesArticle.length; i++) {
		sum += shoesArticle[i].Preis * shoesArticle[i].Quantity
	}
	console.log(sum)
}


// for (var i = 0; i < shoesArticle.length; i++) {
// 	var articleId = shoesArticle[i];
// 	var print_Id = document.getElementsByClassName("printId");
// 	print_name[i].innerHTML = teamName.name;
// }

// for (var i = 0; i < shoesArticle.length; i++) {
// 	var articleType = shoesArticle[i];
// 	var print_email = document.getElementsByClassName("printType");
// 	print_email[i].innerHTML = teamEmail.email;
// }

// for (var i = 0; i < shoesArticle.length; i++) {
// 	var articleImg = shoesArticle[i];
// 	var print_img = document.getElementsByClassName("printImg");
// 	print_img[i].src = teamImg.image;
// }
// var shoesArticle = JSON.parse(shoes);
console.log(shoesArticle);

for (var i = 0; i < shoesArticle.length; i++) {
  $("<div />", {
    "html": "<div class='image'><img src='" + shoesArticle[i].Img_Link + "'></div><p class='modell'>" + shoesArticle[i].Modell + "</p>" + "<p class='marke'>" + shoesArticle[i].Marke + "</p><button>Add to Cart</button>"
  }).appendTo('#shoppinglist');
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
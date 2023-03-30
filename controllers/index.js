function renderTableItem(arrProduct) {
  //input là mangSinhVien = [{maSinhVien:1,tenSinhVien:'A'},{maSinhVien:2,tenSinhVien:'B'},{}]
  var htmlString = "";
  for (var index = 0; index < arrProduct.length; index++) {
    var item = arrProduct[index];
    htmlString += `
                <div class=" col-6 col-xl-3 col-lg-4 col-sm-6  ">
                <div class="docute ">
              <div class="product-top ">
              <a href="" class="product-thumb"><img src="${item.image}" alt="" /></a>
              </div>
              <div class="product-info">
                <a class="product-name">${item.name}</a>
                <p class="product-description">${item.shortDescription}</p>
                <a href="./detail.html" class="text-danger">Buy now</a>  
                <div class="product-price mt-2">${item.price}$</div>
                </div>
              </div>
            </div>`;
  }
  document.getElementById("item").innerHTML = htmlString;
  return htmlString;
}
function renderTableCarousel(carousel) {
  //input là mangSinhVien = [{maSinhVien:1,tenSinhVien:'A'},{maSinhVien:2,tenSinhVien:'B'},{}]

  htmlString = `
      <div class="detail my-auto">
                    <h1>${carousel.name}</h1>
                    <p>${carousel.shortDescription}</p>
                    <div class="Buying">
                      <button class="btn-man">
                        <a href="#" title="Buy for Man"
                          >Buy For Man <i class="fa-solid fa-arrow-right"></i
                        ></a>
                      </button>
                      <button class="btn-man">
                        <a href="#" title="Buy for Woman"
                          >Buy For Woman <i class="fa-solid fa-arrow-right"></i
                        ></a>
                      </button>
                    </div>
                  </div>`;

  document.getElementById("carousel").innerHTML = htmlString;
}
function getData() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  });
  //Thanh Cong
  promise.then(function (res) {
    renderTableItem(res.data.content);
    // renderTableCarousel(res.data.content);
  });
}

function getDataCarousel() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=1",
    method: "GET",
    responseType: "json",
  });
  //Thanh Cong
  promise.then(function (res) {
    renderTableCarousel(res.data.content);
    console.log(res.data.content);
    // renderTableCarousel(res.data.content);
  });
}

getData();
getDataCarousel();

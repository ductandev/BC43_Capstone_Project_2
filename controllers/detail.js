function renderTableProductDetail(arrProductsDetail){
    var sizeButton = '';
    for(let index = 0; index < arrProductsDetail.size.length; index++){
        sizeButton += `
            <button class="btn-size size-${arrProductsDetail.size[index]} rounded" id="size-${arrProductsDetail.size[index]}">${arrProductsDetail.size[index]}</button>   
        `;
    }

    var htmlString = `
        <div class="container">
            <div class="row">
                <div class="content_left col-md-12 col-lg-5">
                    <div class="card-img mx-auto rounded">
                        <img src="${arrProductsDetail.image}" alt="" class='w-100'>
                    </div>
                </div>
                <div class="content_right col-md-12 col-lg-7 mx-auto">
                    <h2>${arrProductsDetail.name}</h3>
                    <p class="text">${arrProductsDetail.description}</p>
                    <h3 class="mt-2">Available size</h3>
                    ${sizeButton}
                    <p class="price">${arrProductsDetail.price}$</p>
                    <button class="btn-add-remove rounded" id="btn-plush" onclick=addAmount()>+</button>
                    <p class="amount d-inline-block text-center rounded" id="amount">01</p>
                    <button class="btn-add-remove rounded" id="btn-minus" onclick=minusAmount()>-</button>
                    <buton class="btn-add-to-cart rounded" id="btn-add-to-cart">Add to cart</button>

                </div>
            </div>
        </div>
    `;
    document.querySelector('#productDetail').innerHTML = htmlString;
    return htmlString;

}


function renderTableRealateProducts(arrProducts){
    var htmlString = '';
    for(let index = 0; index < arrProducts.length; index++){
        var products = arrProducts[index];
        htmlString +=`
    
    
        <div class="col-4">
            <div class="card">
                <img src="${products.image}" alt="..." class="d-block mx-auto">
                <div class="card-body p-0 m-0">
                    <p class="name-product mb-2 ms-3">${products.name}</p>
                    <p class="description ms-3">${products.alias}</p>
                    <div class="d-flex">
                        <button>Buy now</button>
                        <div class="price">
                            <p class="mb-0 text-center">${products.price}$</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    document.querySelector('#showAllProducts').innerHTML = htmlString;
    return htmlString;

}





// ------------CALL API GET PRODUCTS DETAIL----------------
function getProductDetail(){
    // Get param from URL
    // const urlParam = new URLSearchParams(window.location.search);
    // const myParam = urlParam.get('id');
    var urlParam = new URL(window.location.href);
    var myParam = urlParam.searchParams.get('id')

    var promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
        method: 'GET',
        responseType:'json',
    })

    // Success
    promise.then(function(res){
        console.log('result all: ', res.data.content);


        renderTableProductDetail(res.data.content);
        renderTableRealateProducts(res.data.content.relatedProducts)
    })
    // Fail
    promise.catch(function(err){
        console.error(err);
    })
};






window.addEventListener('load',function() {
    getProductDetail();

})


// --------------------Add amount or minus amount--------------------
let num = 1;
function addAmount(){
    num += 1;
    document.querySelector('#amount').innerHTML =  String(num).padStart(2, '0');
}
function minusAmount(){
    if(num > 0){
        num -= 1;
        document.querySelector('#amount').innerHTML =  String(num).padStart(2, '0');
    }
}









// ------------CALL API GET ALL PRODUCTS ----------------
// function getAllProducts(){
//     var promise = axios({
//         url: 'https://shop.cyberlearn.vn/api/Product',
//         method: 'GET',
//         responseType:'json' //Đọc file json,
//     })

//     // Thành công
//     promise.then(function(res){
//         console.log('Kết quả: ', res.data.content);

//         renderTableProductDetail(res.data.content)
//     })
//     // Thất bại 
//     promise.catch(function(err){
//         console.error(err);
//     })
// };

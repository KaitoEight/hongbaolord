const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const imgQr = document.querySelector('.img3');

const okBtn = document.querySelector('.ok');
const noBtn = document.querySelector('.no');

let buttonClicked = false;

let count = 5;

okBtn.onclick = () => {
    img1.style.display = 'none';
    img2.style.display = 'none';
    imgQr.style.display = 'block';
    buttonClicked = true;
}

okBtn.addEventListener("mouseover", function() {
    if(!buttonClicked) {
        img1.style.display = "none";
        img2.style.display = "block";
        imgQr.style.display = "none";
    }
});

okBtn.addEventListener("mouseout", function(){
    if(!buttonClicked) {
        img1.style.display = "block";
        img2.style.display = "none";
    }
    
});
let currentScale = 1;
    okBtn.addEventListener("mouseover", function(){
        const scaleIncrement = 0.3;
        currentScale += scaleIncrement;

        okBtn.style.transform = "scale(" + currentScale + ")";
        while (currentScale > 2)
        {
            currentScale = 1;
        }

    });
    noBtn.addEventListener("mouseout",function(){

    });
    let crs = 1; // Biến để lưu trữ tỉ lệ kích thước hiện tại của nút
    const scaleIncrement = 0.1; // Số lượng tăng hoặc giảm mỗi lần
    
    noBtn.addEventListener("mouseover", function() {
        crs -= scaleIncrement;
    
        // Áp dụng kích thước mới vào nút
        noBtn.style.transform = "scale(" + crs + ")"; 
    });
    
    noBtn.addEventListener("mouseout", function() {
        // Giảm kích thước khi di chuột ra ngoài
        crs -= scaleIncrement;
    
        // Áp dụng kích thước mới vào nút
        noBtn.style.transform = "scale(" + crs + ")"; 
    
        // Đảm bảo kích thước không bao giờ nhỏ hơn 0
        if (crs < 0) {
            crs = 0;
        }
    });
    


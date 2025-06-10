// 初始化購物車資料（從 localStorage 讀取）
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 加入購物車
function addToCart() {
    const select = document.getElementById("specSelect");
    const selectedOption = select.options[select.selectedIndex];
    const [name, price] = selectedOption.value.split("|");

    const item = {
        name: name,
        price: parseInt(price)
    };

    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}

// 清空購物車
function clearCart() {
    if (confirm("確定要清空購物車嗎？")) {
        cart = [];
        localStorage.removeItem("cart");
        updateCartDisplay();
    }
}

// 更新購物車圖示與下拉清單內容
function updateCartDisplay() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");

    // 數字徽章更新
    if (cart.length > 0) {
        cartCount.style.display = "inline-block";
        cartCount.textContent = cart.length;
    } else {
        cartCount.style.display = "none";
    }

    // 清單內容
    cartItems.innerHTML = "";
    if (cart.length === 0) {
        cartItems.innerHTML = "<li>購物車是空的</li>";
    } else {
        cart.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - NT$${item.price}`;
            cartItems.appendChild(li);
        });
    }
}

// 價格同步變動
function updatePrice() {
    const select = document.getElementById("specSelect");
    const selectedOption = select.options[select.selectedIndex];
    const [name, price] = selectedOption.value.split("|");
    document.getElementById("priceDisplay").textContent = `價格：NT$${price}`;
}

// 切換購物車下拉清單顯示/隱藏
document.getElementById("shopping_cart").addEventListener("click", function (e) {
    e.stopPropagation(); // 防止點擊圖示時觸發外部關閉
    const dropdown = document.getElementById("cart-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// 點擊外部區域時關閉購物車
window.addEventListener("click", function (e) {
    const cartContainer = document.getElementById("cart-container");
    if (!cartContainer.contains(e.target)) {
        document.getElementById("cart-dropdown").style.display = "none";
    }
});

// 頁面載入時初始化
window.addEventListener("load", () => {
    updateCartDisplay();
});

// 綁定所有卡片的加入購物車按鈕
document.addEventListener("DOMContentLoaded", function () {
    const cardButtons = document.querySelectorAll(".add-to-cart-btn");
    cardButtons.forEach(button => {
        button.addEventListener("click", function () {
            const name = button.getAttribute("data-name");
            const price = parseInt(button.getAttribute("data-price"));

            const item = {
                name: name,
                price: price
            };

            cart.push(item);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
        });
    });
});



// <!-- 登入畫面 -->


// 自動載入已登入狀態
window.addEventListener("load", function () {
    const rememberMe = localStorage.getItem("rememberMe");
    if (rememberMe === "true") {
        document.getElementById("mail").value = localStorage.getItem("rememberEmail");
        document.getElementById("rememberMe").checked = true;
    }

    updateLoginStatus();
});

// 更新登入按鈕顯示內容
function updateLoginStatus() {
    const loggedInUser = localStorage.getItem("loggedInUser");

    const loginDesktop = document.getElementById("loginStatus");
    const loginMobileItem = document.getElementById("loginMobileItem");

    if (loggedInUser) {
        // 桌面版：改為 dropdown
        if (loginDesktop) {
            loginDesktop.innerHTML = `
                  <div class="custom-dropdown text-light text-decoration-none">
                      <span class="nav-link" style="cursor: pointer;" onclick="toggleDropdown(event)">${loggedInUser}</span>
                      <div class="custom-dropdown-menu">
                          <a href="個人資料.html">個人資料</a>
                          <a href="#" id="logoutBtn">登出</a>
                      </div>
                  </div>
              `;
        }

        // 手機版：改為 dropdown
        if (loginMobileItem) {
            loginMobileItem.innerHTML = `
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" id="loginStatusMobile">${loggedInUser}</a>
                  <ul class="dropdown-menu text-center">
                      <li><a class="dropdown-item" href="個人資料.html">個人資料</a></li>
                      <li><a class="dropdown-item" href="#" id="logoutBtn">登出</a></li>
                  </ul>
              `;
        }

    } else {
        // 桌面版：恢復為單一登入連結
        if (loginDesktop) {
            loginDesktop.innerHTML = `
                  <a href="會員中心.html" class="nav-link" id="loginLink">登入 / 註冊</a>
              `;
        }

        // 手機版：恢復為單一登入連結
        if (loginMobileItem) {
            loginMobileItem.innerHTML = `
                  <a class="nav-link" href="會員中心.html" id="loginStatusMobile">登入 / 註冊</a>
              `;
        }
    }
}
// <!-- 登出 -->

// 登出按鈕點擊事件
document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "logoutBtn") {
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("rememberEmail");
        localStorage.removeItem("rememberMe");

        alert("已登出");
        updateLoginStatus(); // 更新畫面
        window.location.href = "主頁.html";
    }
});
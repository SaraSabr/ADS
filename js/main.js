function toggleMenu() {
    let existingMenu = document.getElementById("offCanvas");

    if (!existingMenu) {
        let menu = document.createElement("div");
        menu.id = "offCanvas";
        menu.className = "off-canvas";

        menu.innerHTML = `
            <span class="close-btn" onclick="toggleMenu()">&times;</span>
            <a href="index.html">الرئيسية</a>
            <a href="من نحن.html">من نحن</a>
            <a href="اتصل بنا.html">اتصل بنا</a>
            <div class="dropdown">
                <a href="#" onclick="toggleDropdown(event)">الخدمات ▼</a>
                <ul class="offcanvas-dropdown">
                    <li><a href="برمجة.html">برمجة</a></li>
                    <li><a href="تصميم مواقع.html">تصميم مواقع</a></li>
                    <li><a href="سيو.html">سيو</a></li>
                    <li><a href="تسويق الكتروني.html">تسويق الكتروني</a></li>
                    <li><a href="اعلانات جوجل.html">اعلانات جوجل</a></li>
                    <li><a href="ايميل ماركتنج.html">ايميل ماركتنج</a></li>
                    <li><a href="انظمة تحليل البيانات.html">انظمة تحليل البيانات</a></li>
                </ul>
            </div>
        `;

        document.body.appendChild(menu);
        document.body.style.overflow = "hidden";
        
        setTimeout(() => {
            menu.style.right = "0px"; 
        }, 10);
    } else {
        existingMenu.style.right = "-250px";
        setTimeout(() => {
            existingMenu.remove();
            document.body.style.overflow = ""; 
        }, 300);
    }
}



// تشغيل الكود بعد تحميل الصفحة بالكامل
window.onload = function () {
    // إخفاء النافذة عند تحميل الصفحة (تأكد أنها مغلقة في البداية)
    document.getElementById("modal").style.display = "none";

    // تحديد جميع الصور داخل المشاريع
    const images = document.querySelectorAll(".project-img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            const imageSrc = this.getAttribute("data-src");
            const title = this.getAttribute("data-title");
            const description = this.getAttribute("data-desc");
            const link = this.getAttribute("data-link");

            document.getElementById("modal-img").src = imageSrc;
            document.getElementById("modal-title").innerText = title;
            document.getElementById("modal-desc").innerText = description;
            document.getElementById("modal-link").href = link;
            document.getElementById("modal").style.display = "flex";
        });
    });

    // إغلاق النافذة عند النقر خارجها
    document.getElementById("modal").addEventListener("click", function (e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

// دالة إغلاق النافذة
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

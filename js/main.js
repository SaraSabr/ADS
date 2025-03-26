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


function toggleDropdown(event) {
    event.preventDefault();
    let dropdownMenu = event.target.nextElementSibling; 
    dropdownMenu.classList.toggle("show");
}




document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalLink = document.getElementById("modal-link");

    // تأكدي أن المودال مخفي عند تحميل الصفحة
    modal.style.display = "none";

    // تحديد جميع المشاريع
    const projects = document.querySelectorAll(".project-img");

    projects.forEach(img => {
        img.addEventListener("click", function () {
            const imageSrc = this.getAttribute("data-src");
            const title = this.getAttribute("data-title");
            const description = this.getAttribute("data-desc");
            const link = this.getAttribute("data-link");

            modalImg.src = imageSrc;
            modalTitle.innerText = title;
            modalDesc.innerText = description;
            modalLink.href = link;

            modal.style.display = "flex"; // فتح المودال
        });
    });

    // إغلاق المودال عند الضغط خارج المحتوى
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // دالة إغلاق المودال
    function closeModal() {
        modal.style.display = "none";
    }

    // زر الإغلاق
    document.querySelector(".close").addEventListener("click", closeModal);
});

// ========================================
// LEAFLET - TOUR USSH TEST
// ========================================


// Tạo bản đồ
var map = L.map('map').setView(
    [10.8701432221591, 106.80092107113529],
    16
);


// ========================================
// BẢN ĐỒ NỀN
// ========================================

L.tileLayer(
    'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors, Tiles style by HOT'
    }
).addTo(map);


// ========================================
// ĐIỂM THAM QUAN USSH
// ========================================

var usshMarker = L.marker(
    [10.8701432221591, 106.80092107113529]
).addTo(map);


// Tên điểm tham quan
usshMarker.bindTooltip(
    'Trường ĐH KHXH&NV, ĐHQG-HCM'
);


// ========================================
// POPUP THÔNG TIN
// ========================================

usshMarker.bindPopup(`
    <div class="ussh-popup">

        <h2 class="ussh-popup-title">
            Trường Đại học Khoa học Xã hội và Nhân văn
        </h2>

        <div class="ussh-popup-subtitle">
            ĐHQG-HCM · USSH-VNUHCM
        </div>


        <!-- GIỚI THIỆU -->

        <h3 class="ussh-section-title">
            GIỚI THIỆU
        </h3>

        <div class="ussh-section-content">

            <p>
                <strong>Trường Đại học Khoa học Xã hội và Nhân văn</strong>
                (University of Social Sciences and Humanities,
                Vietnam National University Ho Chi Minh City –
                <strong>USSH-VNUHCM</strong>) là một thành viên của
                Đại học Quốc gia Thành phố Hồ Chí Minh.
            </p>

            <p>
                Đại học Quốc gia Thành phố Hồ Chí Minh là hệ thống
                đại học được xếp hạng 175 Châu Á theo QS Rankings 2026
                và thuộc TOP 101–150 đại học dưới 50 tuổi theo QS 2021.
            </p>

            <p>
                Trường xếp TOP 501–550 đại học trên thế giới trong lĩnh vực
                Khoa học Xã hội theo QS WUR 2026 và TOP 193 thế giới về
                chất lượng đầu ra của cựu sinh viên theo QS GER 2022.
            </p>

            <p>
                Trường có tiền thân là Đại học Văn khoa/Văn khoa Đại học đường
                (1957–1976, thuộc Viện Đại học Sài Gòn) và Đại học Tổng hợp
                Thành phố Hồ Chí Minh (1976–1996).
            </p>

            <p>
                Hiện nay, Trường là trung tâm nghiên cứu và đào tạo trong
                lĩnh vực khoa học xã hội và nhân văn lớn ở miền Nam Việt Nam.
            </p>

            <p>
                Tháng 10/2021, Trường Đại học Khoa học Xã hội và Nhân văn
                chính thức công bố lộ trình tự chủ trong chiến lược phát triển
                Nhà trường.
            </p>

        </div>


        <!-- KHÔNG GIAN THAM QUAN -->

        <h3 class="ussh-section-title">
            KHÔNG GIAN THAM QUAN
        </h3>

        <div class="ussh-section-content">

            <p>
                <strong>Phiên bản thử nghiệm</strong> hiện giới thiệu
                một tuyến tham quan 360° gồm:
            </p>

            <div class="tour-route">

                <div class="tour-stop">
                    <span class="tour-number">1</span>
                    <span>Nhà điều hành</span>
                </div>

                <div class="tour-arrow">↓</div>

                <div class="tour-stop">
                    <span class="tour-number">2</span>
                    <span>
                        Trung tâm học tập
                        Triết lý Kinh tế Vừa đủ
                    </span>
                </div>

                <div class="tour-arrow">↓</div>

                <div class="tour-stop">
                    <span class="tour-number">3</span>
                    <span>Vườn Thái</span>
                </div>

            </div>

        </div>


        <!-- NÚT ĐIỀU HƯỚNG -->

        <button
            class="tour-button"
            onclick="openTour()">

            🧭 Tham quan trường 360°

        </button>

    </div>
`);
// ========================================
// MỞ TOUR MARZIPANO
// ========================================

function openTour() {
    window.location.href =
        "../../TOUR VR360/29-8-2026 tour mau/project-title/app-files/index.html";
}
function FindProxyForURL(url, host) {
    // Luôn trỏ về chính máy mình (Localhost)
    var PROXY_IP = "127.0.0.1";

    // Danh sách các trang web sẽ bị can thiệp
    if (host == "exam.fpt.edu.vn" || 
        host == "lms-hcm.fpt.edu.vn" || 
        host == "example.com" || 
        host == "tech.stromez.tech" || 
        shExpMatch(url, "*analytics/event*") ||
        shExpMatch(url, "*demo-provip*")) {
        return "PROXY " + PROXY_IP + ":8080; DIRECT";
    }

    // Các trang web khác đi trực tiếp
    return "DIRECT";
}

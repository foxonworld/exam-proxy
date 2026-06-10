function FindProxyForURL(url, host) {
    // Tro ve may chu VPS cua ban
    var PROXY_IP = "180.93.43.187";

    // Danh sách các trang web sẽ bị can thiệp
    if (host == "exam.fpt.edu.vn" || 
        host == "lms-hcm.fpt.edu.vn" || 
        host == "example.com" || 
        host == "tech.stromez.tech" || 
        host == "mitm.it" || 
        shExpMatch(url, "*analytics/event*") ||
        shExpMatch(url, "*demo-provip*")) {
        return "PROXY " + PROXY_IP + ":8080; DIRECT";
    }

    // Các trang web khác đi trực tiếp
    return "DIRECT";
}

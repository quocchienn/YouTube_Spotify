/***********************************************
> Tên ứng dụng: Tập lệnh deleteHeader 

> Thời gian cập nhật: 2024-11-11

> Kênh thông báo: https://t.me/shadowrocketunlockproapps

**********************************************/	

const version = 'V1.0.2';


function setHeaderValue(e,a,d){var r=a.toLowerCase();r in e?e[r]=d:e[a]=d}var modifiedHeaders=$request.headers;setHeaderValue(modifiedHeaders,"X-RevenueCat-ETag",""),$done({headers:modifiedHeaders});

/***********************************

> Tên ứng dụng: Nicegram

> Phiên bản phần mềm: 1.8.8

> Các bước mở khóa: https://t.me/shadowrocketunlockproapps

> Hướng dẫn đặc biệt: ⚠️⚠️⚠️

Kịch bản này chỉ dành cho việc học tập và giao tiếp. Việc in lại và bán hàng đều bị cấm.

⚠️⚠️⚠️


[rewrite_local]
  
# > Nicegram☆ Mở khóa quyền thành viên（2024-11-11）
^https?:\/\/nicegram\.cloud\/api\/v\d\/(ai-assistant\/purchase-list|user\/info|telegram\/auth) url script-response-body

[mitm] 

hostname=nicegram.cloud

***********************************/


var body=$response.body.replace(/subscription":\w+/g,'subscription":true');
$done({body});

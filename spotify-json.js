console.log(`spotify-json-2023.06.13`);
let url = $request.url;
// console.log(`Thô sơ url:${url}`);
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
    // console.log(`Thay thế platform:${url}`);
} else {
    console.log('Không cần xử lý');
}
$done({
    url
});

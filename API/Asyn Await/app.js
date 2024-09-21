/*
    Async/Await là cú pháp ngắn gọn hơn của Promise,
    giúp code trông giống như đồng bộ nhưng thực chất vẫn là bất đồng bộ.

    Ưu điểm:
        Code dễ đọc, giống code đồng bộ.
        Dễ dàng sử dụng try/catch để xử lý lỗi.
        Callback: Đơn giản nhưng có thể dẫn đến callback hell.
        Promise: Giải quyết callback hell, nhưng có thể tạo ra chaining.
        Async/Await: Đơn giản hóa Promise chaining, code dễ đọc hơn và xử lý lỗi dễ dàng hơn.
 */

async function fetchData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Dữ liệu đã được tải.");
}

async function handleData() {
  await fetchData();
  console.log("Async/Await đã thực thi sau khi dữ liệu tải.");
}

handleData();

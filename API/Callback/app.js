/*
    Callback là một hàm được truyền vào một hàm khác và được gọi sau khi tác vụ bất đồng bộ hoàn thành.
    Đây là cách phổ biến nhất trước khi JavaScript có Promise và Async/Await.

    Nhược điểm: Khi có nhiều tác vụ cần thực hiện tuần tự, code sẽ rất phức tạp và khó đọc (Callback hell)
        firstTask(function () {
          secondTask(function () {
            thirdTask(function () {
              // ...
            });
          });
        });
*/

function fetchData(callback) {
  setTimeout(() => {
    console.log("Dữ liệu đã được tải.");
    callback();
  }, 1000);
}

fetchData(() => {
  console.log("Callback được gọi sau khi dữ liệu đã tải.");
});

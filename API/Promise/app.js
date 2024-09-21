/*
    Promise là một đối tượng đại diện cho một giá trị sẽ được trả về trong tương lai,
    giúp viết code bất đồng bộ dễ đọc hơn và tránh "callback hell".

    Ưu điểm:
        Tránh callback hell.
        Dễ dàng quản lý lỗi với .catch().
    
    Nhược điểm:
        Dễ dẫn đến "Promise chaining" khi cần thực hiện nhiều tác vụ tuần tự.

        firstTask()
        .then(() => secondTask())
        .then(() => thirdTask())
        .catch(error => console.log(error));
*/
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Dữ liệu đã được tải.");
      resolve();
    }, 1000);
  });
}

fetchData()
  .then(() => {
    console.log("Promise đã được resolved sau khi dữ liệu tải.");
  })
  .catch((error) => {
    console.log(error);
  });

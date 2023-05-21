let dataBlog = [];

function blog(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let content = document.getElementById("description").value;
    let image = document.getElementById("input-blog-image").files;
    let start = document.getElementById("start-date").value;
    let end = document.getElementById("end-date").value;
    let durasi = start % end;

    image = URL.createObjectURL(image[0]);
    console.log(image);

    let blog = {
        title,
        content,
        image,
        start,
        end,
        durasi
    };

dataBlog.push(blog)
console.log(dataBlog);

renderBlog();
}

function renderBlog() {
    document.getElementById("contents").innerHTML = "";
  
  
    for (let index = 0; index < dataBlog.length; index++) {
      document.getElementById("contents").innerHTML += `
      <div class="post" id="contents">
      <div class="anu">
      <div>
          <img src="${dataBlog[index].image}" alt="" style="width: 100%;">
      </div>
          <div class="judul">${dataBlog[index].title}</div>
          <div>Durasi : ${dataBlog[index].durasi} Months </div>
          <div class="description">${dataBlog[index].content}</div>
        <div class="logo">
          <div><i class="fa-brands fa-google-play"></i></div>
          <div style="margin-left: 15px;"><i class="fa-brands fa-android"></i></div>
          <div style="margin-left: 15px;"><i class="fa-brands fa-java"></i></div>
        </div>
        <div>
          <div class="tombol">
              <div>
                  <button class="btn-edit">Edit</button>
              </div>
              <div>
                  <button class="btn-delete">Delete</button>
              </div>
          </div>
          </div>
        </div>
      `;
    }
  }
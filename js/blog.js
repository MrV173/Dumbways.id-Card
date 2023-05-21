// array of object

// let dataCaleg = [
//     { nama: "Joko widodo",alamat: "Solo"},
//     { nama: "Puan", alamat:"jakarta"},
//     { nama: "Prabowo", alamat:"Bandung"}
// ];

// console.log(dataCaleg);

let dataBlog = [];

function blog(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let image = document.getElementById("input-blog-image").files;


    image = URL.createObjectURL(image[0]);
    console.log(image);

    let blog = {
        title,
        content,
        image,
        postAt: "19 may 2023",
        author: "ibnu"
    };

dataBlog.push(blog)
console.log(dataBlog);

renderBlog();
}

function renderBlog() {
    document.getElementById("contents").innerHTML = "";
  
    //   for (let index = 0; index < dataBlog.length; index++) {
    //     console.log(index);
    //   }
  
    for (let index = 0; index < dataBlog.length; index++) {
      document.getElementById("contents").innerHTML += `
          <div class="blog-list-item">
              <div class="blog-image">
                  <img src="${dataBlog[index].image}" alt="blog_img" />
              </div>
              <div class="blog-content">
              <div class="btn-group">
                  <button class="btn-edit">Edit Post</button>
                  <button class="btn-delete">Delete Post</button>
              </div>
              <h1>
                  <a href="blog-detail.html" target="_blank"
                  >${dataBlog[index].title}</a
                  >
              </h1>
              <div class="detail-blog-content">
                  ${dataBlog[index].postAt} | ${dataBlog[index].author}
              </div>
              <p>
                  ${dataBlog[index].content}
              </p>
              </div>
          </div>
      `;
    }
  }

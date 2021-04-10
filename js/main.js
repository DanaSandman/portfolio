console.log('Starting up');

$(document).ready(initPage)
$(document).ready(initModal)

var gProjs = [{
  id: "minesweeper",
  name: "minesweeper",
  title: "Better push those boxes",
  desc: "lorem ipsum lorem ipsum lorem ipsum",
  url: "projs/minesweeper",
  publishedAt: 1448693940000,
  labels: ["Matrixes", "keyboard events"],
},{
  id: "bookshop",
  name: "bookshop",
  title: "Better push those boxes",
  desc: "lorem ipsum lorem ipsum lorem ipsum",
  url: "projs/bookshop",
  publishedAt: 1448693940000,
  labels: ["Matrixes", "keyboard events"],
},{
  id: "inpicture",
  name: "inpicture",
  title: "Better push those boxes",
  desc: "lorem ipsum lorem ipsum lorem ipsum",
  url: "projs/inpicture",
  publishedAt: 1448693940000,
  labels: ["Matrixes", "keyboard events"],
},{
  id: "pacman",
  name: "pacman",
  title: "Better push those boxes",
  desc: "lorem ipsum lorem ipsum lorem ipsum",
  url: "projs/pacman",
  publishedAt: 1448693940000,
  labels: ["Matrixes", "keyboard events"],
},{
  id: "touchnums",
  name: "touchnums",
  title: "Better push those boxes",
  desc: "lorem ipsum lorem ipsum lorem ipsum",
  url: "projs/touchnums",
  publishedAt: 1448693940000,
  labels: ["Matrixes", "keyboard events"],
},{
  id: "ballboard",
  name: "ballboard",
  title: "Better push those boxes",
  desc: "lorem ipsum lorem ipsum lorem ipsum",
  url: "projs/ballboard",
  publishedAt: 1448693940000,
  labels: ["Matrixes", "keyboard events"],
}
];


function initPage() {

  var strHTML =

    gProjs.map(function (proj) {
      return `
  <div class="col-md-4 col-sm-6 portfolio-item">
  <a class="portfolio-link" data-toggle="modal" href="#${proj.id}">
    <div class="portfolio-hover">
      <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
      </div>
    </div>
    <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
  </a>
  <div class="portfolio-caption">
    <h4>${proj.name}</h4>
    <p class="text-muted">Illustration</p>
  </div>
</div>`
    });
  document.querySelector('.proj').innerHTML = strHTML.join('');

}


function initModal() {

  var strHTML =

    gProjs.map(function (proj) {
      return `
  <div class="portfolio-modal modal fade" id="${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.jpg" alt="">
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
                  dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                  maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                  <li><a href="${proj.url}">Open Here</a></li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`

    })

  document.querySelector('.b-modal').innerHTML += strHTML.join('');
}

function onSubmit() {
  var elEmail = document.getElementById('email');
  var elSubject = document.getElementById('subject');
  var elMsgBody = document.getElementById('mbody');

  window.location.assign(`https://mail.google.com/mail/?view=cm&fs=1&to=${elEmail.value}&su=${elSubject.value}&body=${elMsgBody.value}`)
}
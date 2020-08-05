var anchors = document.querySelectorAll('.nav-menu');

for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', handler, false);
}

function handler() {
    this.removeClass('fa-compass');
    this.addClass('fa-times');
}
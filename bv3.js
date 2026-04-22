// 获取DOM元素
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('expandedImg');
const captionText = document.getElementById('imgCaption');
const closeBtn = document.getElementsByClassName('close')[0];

// 获取所有缩略图
const thumbnails = document.querySelectorAll('.thumbnail');

// 为每个缩略图添加点击事件
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    modal.style.display = 'flex';
    modalImg.src = this.src;
    captionText.innerHTML = this.getAttribute('data-caption') || this.alt;
  });
});

// 点击关闭按钮关闭模态框
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// 点击模态框背景关闭模态框
modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// 按ESC键关闭模态框
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    modal.style.display = 'none';
  }
});
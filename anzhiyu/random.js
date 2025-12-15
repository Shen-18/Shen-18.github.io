var posts=["2025/12/15/第一篇文章/","2025/12/15/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
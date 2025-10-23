// Facebook-style Comment System
const profilePic = "https://pix1.wapkizfile.info/download/7b933f2052b646e7648d100e0b041708/csm-mohasin-alam+wapkizs+com/me-jpg-(csm-mohasin-alam.wapkizs.com).jpg";

function timeAgo(time) {
  const seconds = Math.floor((new Date() - time) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) return interval + " year ago";
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return interval + " month ago";
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return interval + " day ago";
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return interval + " hour ago";
  interval = Math.floor(seconds / 60);
  if (interval >= 1) return interval + " min ago";
  return "Just now";
}

function loadComments() {
  const comments = JSON.parse(localStorage.getItem("comments") || "[]");
  const commentBox = document.getElementById("comments");
  commentBox.innerHTML = "";
  comments.forEach(c => {
    const div = document.createElement("div");
    div.style = "display:flex;align-items:flex-start;margin:10px 0;padding:8px;border-radius:10px;background:#f5f6f7;";
    div.innerHTML = `
      <img src="${profilePic}" style="width:40px;height:40px;border-radius:50%;margin-right:8px;">
      <div style="background:#fff;padding:8px 12px;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.1);">
        <strong>${c.name}</strong><br>
        <span>${c.comment}</span>
        <div style="font-size:12px;color:gray;margin-top:4px;">
          Like · Reply · ${timeAgo(new Date(c.time))}
        </div>
      </div>
    `;
    commentBox.appendChild(div);
  });
}

function postComment() {
  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();
  if (!name || !comment) return alert("দয়া করে নাম ও মন্তব্য লিখুন!");

  const comments = JSON.parse(localStorage.getItem("comments") || "[]");
  comments.unshift({ name, comment, time: new Date() });
  localStorage.setItem("comments", JSON.stringify(comments));

  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
  loadComments();
}

window.onload = loadComments;

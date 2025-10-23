function postComment() {
  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();
  if (!name || !comment) return alert("নাম ও মন্তব্য লিখুন!");

  const comments = document.getElementById("comments");
  const div = document.createElement("div");
  div.innerHTML = `
    <div style="display:flex;align-items:flex-start;margin:10px 0;">
      <img src="https://pix1.wapkizfile.info/download/7b933f2052b646e7648d100e0b041708/csm-mohasin-alam+wapkizs+com/me-jpg-(csm-mohasin-alam.wapkizs.com).jpg" style="width:40px;height:40px;border-radius:50%;margin-right:8px;">
      <div style="background:#f0f2f5;padding:8px 12px;border-radius:12px;max-width:300px;">
        <b>${name}</b><br>${comment}
      </div>
    </div>
  `;
  comments.prepend(div);
  document.getElementById("comment").value = "";
}

// 顯示指定題目的詳細內容
function showQuestion(id) {
  const q = questions[id];
  if (!q) {
    alert(`找不到題號：${id}`);
    return;
  }

  const main = document.getElementById("change");
  document.querySelector(".problem-list").style.display = 'none';
  main.innerHTML = `
    <div class="question-container">
      <h2>${id}: ${q.title}</h2>
      <h3>📘 題目描述</h3>
      <p>${q.description}</p>

      <h3>📥 輸入說明</h3>
      <p>${q.input}</p>

      <h3>📤 輸出說明</h3>
      <p>${q.output}</p>

      ${q.samples.map((s, i) => `
        <h3>🔢 Sample Input ${i + 1}</h3>
        <pre>${s.input}</pre>
        <h3>✅ Sample Output ${i + 1}</h3>
        <pre>${s.output}</pre>
      `).join("")}

      <button class="return-button" onclick="goBack()">回到題目列表</button>
    </div>
  `;
}

// 頁面載入時綁定每個題目卡片的點擊事件
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".problem-card");
  cards.forEach(card => {
    const id = card.textContent.split(":")[0].trim();
    card.onclick = () => showQuestion(id);
  });
});

function goBack(){
  document.querySelector(".problem-list").style.display = 'grid';
  document.getElementById("change").innerHTML = '';
  window.scrollTo(0, 0);
}

function signIn() {
  if(user) return;
  // 建立遮罩背景
  const overlay = document.createElement('div');
  overlay.className = 'popupOverlay';

  // 建立彈窗
  const popup = document.createElement('div');
  popup.className = 'popupCSS';

  // 標題
  const title = document.createElement('h1');
  title.textContent = '帳號登入';
  popup.appendChild(title);

  // 帳號欄位
  const label1 = document.createElement('label');
  label1.textContent = '帳號';
  const input1 = document.createElement('input');
  input1.type = 'text';
  input1.className = 'popupInput';
  label1.appendChild(input1);

  // 密碼欄位
  const label2 = document.createElement('label');
  label2.textContent = '密碼';
  const input2 = document.createElement('input');
  input2.type = 'password';
  input2.className = 'popupInput';
  label2.appendChild(input2);

  const error = document.createElement('p');
  error.textContent = '帳號密碼錯誤';
  error.style.color = 'red';
  error.style.display = 'none';

  // 按鈕容器
  const btnContainer = document.createElement('div');
  btnContainer.className = 'popupBtnGroup';

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = '取消';
  cancelBtn.className = 'popupBtn cancel';

  const confirmBtn = document.createElement('button');
  confirmBtn.textContent = '確認';
  confirmBtn.className = 'popupBtn confirm';

  btnContainer.appendChild(cancelBtn);
  btnContainer.appendChild(confirmBtn);

  // 插入元素
  popup.appendChild(label1);
  popup.appendChild(label2);
  popup.appendChild(error);
  popup.appendChild(btnContainer);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  // 關閉彈窗函式
  function closePopup() {
    document.body.removeChild(overlay);
  }

  function ensure(){
    if(input1.value in password && password[input1.value]===input2.value){
      closePopup();
      document.getElementById('signIn').textContent = `🧑‍💻${input1.value}`;
      user = input1.value;
      showCards();
      showEnvelope();
    }
    else{
      error.style.display = 'block';
    }
  }

  // 事件監聽
  cancelBtn.addEventListener('click', closePopup);

  confirmBtn.addEventListener('click', () => {
    ensure();
  });

  overlay.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
      closePopup();
    }
    else if (e.key === 'Enter') {
      ensure();
    }
  });

  // 聚焦第一個輸入框並啟用鍵盤監聽
  input1.focus();
  overlay.tabIndex = -1;
  overlay.focus();
}

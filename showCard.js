const questions = {
  A001: {
    title: "變數宣告與輸出",
    description: "宣告兩個整數變數，分別賦值，並輸出它們的和。",
    input: "無輸入。",
    output: "輸出兩個變數的和。",
    samples: [{ input: "", output: "7" }]
  },
  A002: {
    title: "常數使用",
    description: "定義一個常數 PI，並輸出 PI 乘以 2 的結果。",
    input: "無輸入。",
    output: "輸出常數 PI 乘以 2 的值（保留小數點後兩位）。",
    samples: [{ input: "", output: "6.28" }]
  },
  A003: {
    title: "整數與浮點數加法",
    description: "輸入一個整數與一個浮點數，計算它們的和並輸出。",
    input: "一個整數和一個浮點數，中間以空白分隔。",
    output: "輸出它們的和，保留小數點後兩位。",
    samples: [{ input: "3 4.5", output: "7.50" }]
  },
  A004: {
    title: "簡單溫度轉換",
    description: "將攝氏溫度轉換為華氏溫度，公式為 F = C × 9/5 + 32。",
    input: "輸入一個攝氏溫度（整數）。",
    output: "輸出對應的華氏溫度（整數）。",
    samples: [{ input: "25", output: "77" }]
  },
  A005: {
    title: "交換兩個變數值",
    description: "輸入兩個整數，輸出交換後的值。",
    input: "兩個整數，以空白分隔。",
    output: "輸出兩個整數，先輸出原本第二個，再輸出原本第一個，中間空白分隔。",
    samples: [{ input: "3 7", output: "7 3" }]
  },
  A006: {
    title: "整數乘法",
    description: "輸入兩個整數，輸出它們的乘積。",
    input: "輸入兩個整數 a 和 b，範圍為 -1000 到 1000。",
    output: "輸出 a × b 的結果。",
    samples: [{ input: "4 5", output: "20" }, { input: "-3 6", output: "-18" }]
  },
  A007: {
    title: "整除與餘數",
    description: "輸入兩個正整數，輸出它們的整除結果與餘數。",
    input: "兩個正整數 a 和 b，保證 b 不為 0。",
    output: "輸出整除結果 a // b 與餘數 a % b，中間以空白分隔。",
    samples: [{ input: "17 5", output: "3 2" }, { input: "10 2", output: "5 0" }]
  },
  A008: {
    title: "多變數計算",
    description: "程式中宣告三個變數 x、y、z 並給定整數值，計算 x + y - z 並輸出結果。",
    input: "無輸入，變數請在程式中定義為 x=5, y=8, z=3。",
    output: "輸出 x + y - z 的結果。",
    samples: [{ input: "", output: "10" }]
  },
  A009: {
    title: "浮點數格式化輸出",
    description: "輸入一個浮點數，輸出其保留小數點後三位的結果。",
    input: "一個浮點數。",
    output: "保留三位小數的輸出結果（包含尾端 0）。",
    samples: [{ input: "3.1415926", output: "3.142" }, { input: "5.1", output: "5.100" }]
  },
  A010: {
    title: "變數簡單運算",
    description: "程式中定義變數 a=10，b=2，c=4，輸出 (a + b) * c 的結果。",
    input: "無輸入。",
    output: "輸出對應的整數結果。",
    samples: [{ input: "", output: "48" }]
  },
  A011: {
    title: "溫度平均",
    description: "宣告三個變數來儲存三天的氣溫，並計算平均溫度。",
    input: "無輸入，三天的氣溫請寫死在程式中，分別為 25, 28, 30。",
    output: "輸出平均溫度（保留小數點後一位）。",
    samples: [{ input: "", output: "27.7" }]
  },
  A012: {
    title: "變數重新指派",
    description: "程式中宣告一個變數 x 並指派 5，接著重新指派為 x + 3，再輸出 x。",
    input: "無輸入。",
    output: "輸出變數 x 的最終值。",
    samples: [{ input: "", output: "8" }]
  },
  A013: {
    title: "圓面積計算",
    description: "輸入圓的半徑 r，計算其面積。公式為 πr²，π 請使用 3.14。",
    input: "輸入一個整數 r。",
    output: "輸出圓面積（保留兩位小數）。",
    samples: [{ input: "3", output: "28.26" }, { input: "5", output: "78.50" }]
  },
  A014: {
    title: "簡單利息計算",
    description: "輸入本金與年利率（％），計算一年後的本利和（單利）。",
    input: "兩個浮點數，分別代表本金與年利率。",
    output: "輸出一年後的本利和（保留小數點後兩位）。",
    samples: [{ input: "1000 2.5", output: "1025.00" }, { input: "2000 3", output: "2060.00" }]
  },
  A015: {
    title: "攝氏轉華氏（浮點）",
    description: "輸入攝氏溫度 C，輸出對應的華氏溫度（浮點數，保留一位小數）。F = C × 9/5 + 32",
    input: "一個浮點數 C。",
    output: "對應華氏溫度（保留一位小數）。",
    samples: [{ input: "0", output: "32.0" }, { input: "37", output: "98.6" }]
  },
  B001: {
    title: "讀取一行文字",
    description: "輸入一行文字，請將該文字原封不動輸出。",
    input: "一行字串，長度不超過 100。",
    output: "輸出該字串。",
    samples: [{ input: "Python is fun!", output: "Python is fun!" }, { input: "Hello World", output: "Hello World" }]
  },
  B002: {
    title: "整數輸入與輸出",
    description: "輸入一個整數，輸出該整數乘以 2 的結果。",
    input: "一個整數。",
    output: "該整數乘以 2 的結果。",
    samples: [{ input: "6", output: "12" }, { input: "-3", output: "-6" }]
  },
  B003: {
    title: "多個輸入",
    description: "輸入三個整數，請依序輸出它們。",
    input: "三個整數，以空白分隔。",
    output: "輸出三個整數，各佔一行，順序不變。",
    samples: [{ input: "1 2 3", output: "1\n2\n3" }, { input: "-1 0 5", output: "-1\n0\n5" }]
  },
  B004: {
    title: "輸出格式練習",
    description: "輸入一個浮點數，請輸出其四種格式：整數、小數一位、小數兩位、科學記號。",
    input: "一個浮點數。",
    output: "依序輸出四行：整數、小數點後一位、小數點後兩位、科學記號。",
    samples: [{ input: "12.3456", output: "12\n12.3\n12.35\n1.23e+01" }]
  },
  B005: {
    title: "輸出星星",
    description: "輸入一個整數 n，輸出 n 顆星星。",
    input: "一個正整數 n。",
    output: "一行，包含 n 個星號（*）。",
    samples: [{ input: "3", output: "***" }, { input: "5", output: "*****" }]
  },
  B006: {
    title: "換行與間隔",
    description: "輸入一個字串，請輸出該字串兩次，第一個在一行，第二個在下一行，並加上感嘆號。",
    input: "一行字串。",
    output: "兩行，第一行為原字串，第二行為原字串加上驚嘆號。",
    samples: [{ input: "Hello", output: "Hello\nHello!" }]
  },
  B007: {
    title: "多行輸入",
    description: "輸入三行字串，請將它們合併為一行輸出，中間以空白分隔。",
    input: "三行，每行一個字串。",
    output: "一行，將三個字串用空格串接。",
    samples: [{ input: "apple\nbanana\ncat", output: "apple banana cat" }]
  },
  B008: {
    title: "格式化整數輸出",
    description: "輸入一個整數，請將其輸出為 5 位數，不足的前面補 0。",
    input: "一個非負整數，小於 100000。",
    output: "5 位數字，前面補 0。",
    samples: [{ input: "42", output: "00042" }, { input: "9876", output: "09876" }]
  },
  B009: {
    title: "數字轉換為字串",
    description: "輸入一個整數，請輸出 '你輸入的數字是：' 加上該整數。",
    input: "一個整數。",
    output: "一行文字，內容為：你輸入的數字是：X（X 為輸入的整數）。",
    samples: [{ input: "7", output: "你輸入的數字是：7" }]
  },
  B010: {
    title: "換行符號處理",
    description: "輸入一行包含 \\n 的文字，請將其實際換行顯示。",
    input: "一行字串，可能包含 '\\n'。",
    output: "將 \\n 替換為換行，輸出多行文字。",
    samples: [{ input: "Line1\\nLine2", output: "Line1\nLine2" }]
  },
  D001: {
    title: "字串長度",
    description: "輸入一個字串，輸出其長度。",
    input: "一行非空字串，長度不超過 1000。",
    output: "該字串的長度（整數）。",
    samples: [{ input: "Hello", output: "5" }, { input: "OpenAI", output: "6" }]
  },
  D002: {
    title: "數字倒轉",
    description: "輸入一個整數，輸出其數字倒過來的結果。",
    input: "一個整數 n，可能為負數，範圍為 -10^9 到 10^9。",
    output: "n 倒轉後的整數（保留符號）。",
    samples: [{ input: "123", output: "321" }, { input: "-456", output: "-654" }]
  },
  D003: {
    title: "字串中大寫轉小寫",
    description: "輸入一個字串，將其中所有大寫字母轉換成小寫字母後輸出。",
    input: "一個字串。",
    output: "輸出全部轉成小寫的字串。",
    samples: [
      { input: "Hello World", output: "hello world" },
      { input: "OPENai", output: "openai" }
    ]
  },

  D004: {
    title: "刪除字串中的空白",
    description: "輸入一個字串，刪除所有空白字元後輸出。",
    input: "一個字串。",
    output: "輸出刪除空白後的字串。",
    samples: [
      { input: "a b c d e", output: "abcde" },
      { input: " Hello  World ", output: "HelloWorld" }
    ]
  },

  D005: {
    title: "字串替換",
    description: "輸入一個字串與兩個字元 c1 與 c2，將字串中所有 c1 替換成 c2，並輸出結果。",
    input: "字串以及兩個字元 c1 和 c2，中間以空白分隔。",
    output: "輸出替換後的字串。",
    samples: [
      { input: "banana a o", output: "bonono" },
      { input: "apple p b", output: "abble" }
    ]
  },

  D006: {
    title: "計算字串中某字元出現次數",
    description: "輸入一個字串及一個字元，計算該字元在字串中出現的次數。",
    input: "字串與字元，以空白分隔。",
    output: "輸出該字元出現的次數。",
    samples: [
      { input: "hello l", output: "2" },
      { input: "mississippi s", output: "4" }
    ]
  },

  D007: {
    title: "判斷字串是否只包含數字",
    description: "輸入一個字串，判斷是否只包含數字字符，輸出 'Yes' 或 'No'。",
    input: "一個字串。",
    output: "只含數字輸出 'Yes'，否則輸出 'No'。",
    samples: [
      { input: "12345", output: "Yes" },
      { input: "abc123", output: "No" }
    ]
  },
  D008: {
    title: "字串反轉",
    description: "輸入一個字串，輸出該字串的反轉結果。",
    input: "一個字串。",
    output: "輸出反轉後的字串。",
    samples: [
      { input: "abcdef", output: "fedcba" },
      { input: "OpenAI", output: "IAnepO" }
    ]
  },

  D009: {
    title: "移除字串首尾空白",
    description: "輸入一個字串，移除首尾所有空白字元後輸出。",
    input: "一個字串。",
    output: "輸出移除首尾空白後的字串。",
    samples: [
      { input: "  hello world  ", output: "hello world" },
      { input: "  OpenAI  ", output: "OpenAI" }
    ]
  },

  D010: {
    title: "判斷字串是否為英文字母",
    description: "輸入一個字串，判斷是否全由英文字母組成，輸出 'Yes' 或 'No'。",
    input: "一個字串。",
    output: "全為英文字母輸出 'Yes'，否則輸出 'No'。",
    samples: [
      { input: "OpenAI", output: "Yes" },
      { input: "AI2023", output: "No" }
    ]
  },

  D011: {
    title: "字串重複輸出",
    description: "輸入一個字串與一個正整數 n，輸出該字串重複 n 次的結果。",
    input: "字串與正整數 n，中間以空白分隔。",
    output: "輸出字串重複 n 次的字串。",
    samples: [
      { input: "Hi 3", output: "HiHiHi" },
      { input: "abc 2", output: "abcabc" }
    ]
  },

  D012: {
    title: "計算字串中大寫字母數量",
    description: "輸入一個字串，計算其中大寫字母的數量並輸出。",
    input: "一個字串。",
    output: "輸出大寫字母的數量。",
    samples: [
      { input: "HelloWorld", output: "2" },
      { input: "openAI", output: "2" }
    ]
  },

  D013: {
    title: "字串中所有字母排序",
    description: "輸入一個字串，將其中所有字母按字母序排序後輸出（保留原非字母字元位置）。",
    input: "一個字串。",
    output: "輸出字母排序後的字串，非字母字元位置不變。",
    samples: [
      { input: "b3a1c", output: "a3b1c" },
      { input: "d!c@b#a", output: "a!b@c#d" }
    ]
  },

  D014: {
    title: "字串中重複字元刪除",
    description: "輸入一個字串，刪除所有重複出現的字元，只保留第一次出現的字元。",
    input: "一個字串。",
    output: "輸出刪除重複字元後的字串。",
    samples: [
      { input: "banana", output: "ban" },
      { input: "abracadabra", output: "abrcd" }
    ]
  },

  D015: {
    title: "字串交錯合併",
    description: "輸入兩個字串，將它們交錯合併（先取第一字串的第一字元，再取第二字串的第一字元，如此交替），較長字串的剩餘字元接在末尾。",
    input: "兩個字串，中間以空白分隔。",
    output: "輸出交錯合併後的字串。",
    samples: [
      { input: "abc xyz", output: "axbycz" },
      { input: "hello world!", output: "hweolrllod!" }
    ]
  },

  D016: {
    title: "找出字串中出現最多次的字元",
    description: "輸入一個字串，找出出現次數最多的字元（若有多個，輸出字元序最小者）及其次數。",
    input: "一個字串。",
    output: "輸出字元與次數，中間以空白分隔。",
    samples: [
      { input: "banana", output: "a 3" },
      { input: "aabbcc", output: "a 2" }
    ]
  },

  D017: {
    title: "字串編碼轉換（ROT13）",
    description: "輸入一個字串，將其中英文字母進行 ROT13 編碼（即字母往後移 13 個字母，超過 Z 從頭開始），非字元不變。",
    input: "一個字串。",
    output: "輸出 ROT13 編碼後的字串。",
    samples: [
      { input: "Hello, World!", output: "Uryyb, Jbeyq!" },
      { input: "OpenAI", output: "BcraNV" }
    ]
  },

  E001: {
    title: "計算兩數四則運算",
    description: "輸入兩個整數 a、b，分別計算並輸出 a+b、a-b、a*b、a/b（整除）。",
    input: "兩個整數 a 和 b，以空白分隔，且 b ≠ 0。",
    output: "四個整數結果，以空白分隔，依序為加、減、乘、除（整除）。",
    samples: [
      { input: "10 3", output: "13 7 30 3" },
      { input: "7 2", output: "9 5 14 3" }
    ]
  },

  E002: {
    title: "判斷兩數是否相等及大小比較",
    description: "輸入兩個整數 a、b，輸出是否相等（Yes/No）、a 是否大於 b（True/False）、a 是否小於 b（True/False）。",
    input: "兩個整數 a 和 b，以空白分隔。",
    output: "三個結果，以空白分隔，依序為是否相等、a > b 判斷、a < b 判斷。",
    samples: [
      { input: "5 5", output: "Yes False False" },
      { input: "3 7", output: "No False True" }
    ]
  },

  E003: {
    title: "邏輯運算 AND、OR、XOR",
    description: "輸入兩個布林值（0 表示 False，1 表示 True），分別輸出 a AND b、a OR b、a XOR b 的結果（0 或 1）。",
    input: "兩個布林值 a 和 b（0 或 1），以空白分隔。",
    output: "三個布林結果，以空白分隔，依序為 AND、OR、XOR。",
    samples: [
      { input: "1 0", output: "0 1 1" },
      { input: "1 1", output: "1 1 0" }
    ]
  },

  E004: {
    title: "判斷整數是否為偶數且大於 10",
    description: "輸入一個整數，判斷它是否同時為偶數且大於 10，輸出 Yes 或 No。",
    input: "一個整數。",
    output: "符合條件輸出 Yes，否則輸出 No。",
    samples: [
      { input: "12", output: "Yes" },
      { input: "7", output: "No" }
    ]
  },

  E005: {
    title: "判斷字串長度是否大於指定值",
    description: "輸入一個字串及一個整數 n，判斷該字串長度是否大於 n，輸出 True 或 False。",
    input: "字串與整數 n，中間以空白分隔。",
    output: "長度大於 n 輸出 True，否則輸出 False。",
    samples: [
      { input: "Hello 3", output: "True" },
      { input: "Hi 5", output: "False" }
    ]
  },

  E006: {
    title: "計算三個數字的平均並判斷是否及格",
    description: "輸入三個整數分數，計算平均分數，判斷是否及格（平均分數 >= 60）。",
    input: "三個整數分數，以空白分隔。",
    output: "平均分數（取整數）與判斷結果（Pass/Fail），以空白分隔。",
    samples: [
      { input: "70 80 90", output: "80 Pass" },
      { input: "50 55 60", output: "55 Fail" }
    ]
  },

  E007: {
    title: "判斷三角形類型",
    description: "輸入三邊長，判斷是否能構成三角形，若能，判斷是等邊、等腰或不等邊三角形。",
    input: "三個正整數邊長，以空白分隔。",
    output: "若不能成三角形輸出 No Triangle，否則輸出三角形類型（Equilateral/Isosceles/Scalene）。",
    samples: [
      { input: "3 3 3", output: "Equilateral" },
      { input: "3 4 4", output: "Isosceles" },
      { input: "3 4 5", output: "Scalene" },
      { input: "1 2 3", output: "No Triangle" }
    ]
  },

  E008: {
    title: "邏輯判斷是否可乘坐遊樂設施",
    description: "輸入身高(cm)與是否有成人陪同（0或1），判斷是否可乘坐遊樂設施（身高>=120 或 有成人陪同）。",
    input: "整數身高與布林成人陪同（0或1），以空白分隔。",
    output: "符合條件輸出 Yes，否則輸出 No。",
    samples: [
      { input: "130 0", output: "Yes" },
      { input: "110 1", output: "Yes" },
      { input: "110 0", output: "No" }
    ]
  },

  E009: {
    title: "判斷年份是否為閏年",
    description: "輸入一個年份，判斷是否為閏年（符合閏年規則則輸出 Yes，否則 No）。",
    input: "一個整數年份。",
    output: "閏年輸出 Yes，否則 No。",
    samples: [
      { input: "2020", output: "Yes" },
      { input: "2019", output: "No" }
    ]
  },

  E010: {
    title: "判斷數字是否同時為正數且是偶數",
    description: "輸入一個整數，判斷該數字是否同時為正數且為偶數，輸出 True 或 False。",
    input: "一個整數。",
    output: "符合條件輸出 True，否則輸出 False。",
    samples: [
      { input: "8", output: "True" },
      { input: "-2", output: "False" },
      { input: "7", output: "False" }
    ]
  },

  E011: {
    title: "複合條件判斷：身高與年齡限制",
    description: "輸入身高（cm）與年齡，判斷是否符合遊樂設施乘坐規定：身高必須 ≥ 140 且年齡介於 8 到 60 歲（含），符合輸出 Yes，否則 No。",
    input: "兩個整數，身高與年齡，以空白分隔。",
    output: "符合條件輸出 Yes，否則 No。",
    samples: [
      { input: "150 10", output: "Yes" },
      { input: "130 12", output: "No" },
      { input: "160 65", output: "No" }
    ]
  },

  E012: {
    title: "判斷字串中是否含有特定字元且長度大於指定值",
    description: "輸入一個字串和一個整數 n，判斷該字串是否包含字元 'a' 且長度大於 n，符合條件輸出 True，否則 False。",
    input: "字串與整數 n，以空白分隔。",
    output: "符合條件輸出 True，否則 False。",
    samples: [
      { input: "banana 5", output: "True" },
      { input: "apple 10", output: "False" },
      { input: "test 3", output: "False" }
    ]
  },

  E013: {
    title: "三數排序並判斷是否為嚴格遞增",
    description: "輸入三個整數，判斷它們排序後是否嚴格遞增（a < b < c），輸出 Yes 或 No。",
    input: "三個整數，以空白分隔。",
    output: "嚴格遞增輸出 Yes，否則 No。",
    samples: [
      { input: "1 2 3", output: "Yes" },
      { input: "3 2 1", output: "No" },
      { input: "2 2 3", output: "No" }
    ]
  },

  E014: {
    title: "判斷是否為三位數回文數",
    description: "輸入一個三位數整數，判斷該數是否為回文數，輸出 Yes 或 No。",
    input: "一個三位數整數。",
    output: "回文數輸出 Yes，否則 No。",
    samples: [
      { input: "121", output: "Yes" },
      { input: "123", output: "No" }
    ]
  },

  E015: {
    title: "複合邏輯運算判斷登入權限",
    description: "輸入三個布林值（0 或 1）：是否為管理員、是否為已驗證使用者、是否在允許的登入時間（工作日 9:00-18:00）。只有三者皆為真才允許登入，輸出 Allow，否則 Deny。",
    input: "三個布林值，以空白分隔。",
    output: "符合條件輸出 Allow，否則 Deny。",
    samples: [
      { input: "1 1 1", output: "Allow" },
      { input: "1 0 1", output: "Deny" },
      { input: "0 1 1", output: "Deny" }
    ]
  },

  F001: {
    title: "最大值與最小值",
    description: "輸入一串整數，找出其中的最大值與最小值。",
    input: "一串由空格分隔的整數，數量介於 1 到 100。",
    output: "兩個整數，分別為最大值與最小值。",
    samples: [{ input: "3 5 2 8 1", output: "8 1" }, { input: "-1 -99 0 100", output: "100 -99" }]
  },
  F002: {
    title: "計算串列中所有數字的總和",
    description: "輸入一串整數，計算並輸出它們的總和。",
    input: "一串由空白分隔的整數。",
    output: "輸出整數總和。",
    samples: [
      { input: "1 2 3 4 5", output: "15" },
      { input: "-1 0 1", output: "0" }
    ]
  },

  F003: {
    title: "找出串列中的最大值與最小值",
    description: "輸入一串整數，找出其中最大值與最小值並輸出。",
    input: "一串由空白分隔的整數。",
    output: "最大值與最小值，中間以空白分隔。",
    samples: [
      { input: "3 7 1 9 2", output: "9 1" },
      { input: "-5 0 5", output: "5 -5" }
    ]
  },

  F004: {
    title: "串列元素反轉輸出",
    description: "輸入一串整數，將串列反轉後輸出。",
    input: "一串由空白分隔的整數。",
    output: "反轉後的串列，以空白分隔。",
    samples: [
      { input: "1 2 3 4", output: "4 3 2 1" },
      { input: "5 6 7", output: "7 6 5" }
    ]
  },

  F005: {
    title: "串列元素去除重複並輸出",
    description: "輸入一串整數，去除重複元素後輸出（保持原順序）。",
    input: "一串由空白分隔的整數。",
    output: "去除重複元素後的串列，以空白分隔。",
    samples: [
      { input: "1 2 2 3 1", output: "1 2 3" },
      { input: "4 4 4 4", output: "4" }
    ]
  },

  F006: {
    title: "串列中偶數元素的平方和",
    description: "輸入一串整數，計算其中所有偶數元素的平方和。",
    input: "一串由空白分隔的整數。",
    output: "偶數元素平方和的整數結果。",
    samples: [
      { input: "1 2 3 4", output: "20" },  // 2² + 4² = 4 + 16 = 20
      { input: "5 7 9", output: "0" }
    ]
  },

  F007: {
    title: "串列元素累加直到超過指定值",
    description: "輸入一串正整數與一個閾值 n，依序累加串列元素直到總和超過 n，輸出累加的元素個數。",
    input: "一串正整數與一個正整數閾值 n，最後一個數為 n，其餘為串列元素，皆以空白分隔。",
    output: "累加至超過 n 的元素個數。",
    samples: [
      { input: "1 2 3 4 5 7", output: "4" }, // 1+2+3+4=10 > 7
      { input: "5 10 15 20 25 30 50", output: "3" }
    ]
  },

  F008: {
    title: "刪除串列中指定數字的所有出現",
    description: "輸入一串整數與一個目標數字，刪除串列中所有該數字後輸出剩餘元素。",
    input: "一串整數，最後一個為要刪除的目標數字，皆以空白分隔。",
    output: "刪除目標數字後的串列，以空白分隔；若全刪除則輸出空行。",
    samples: [
      { input: "1 2 3 2 4 2 2", output: "1 3 4" },
      { input: "5 5 5 5 5", output: "" }
    ]
  },

  F009: {
    title: "計算串列中元素的中位數",
    description: "輸入一串整數，計算並輸出中位數（奇數長度為中間值，偶數長度為中間兩數平均）。",
    input: "一串整數，長度至少 1，皆以空白分隔。",
    output: "中位數（若為小數，保留一位小數）。",
    samples: [
      { input: "1 3 2", output: "2" },
      { input: "1 2 3 4", output: "2.5" }
    ]
  },

  F010: {
    title: "將串列中所有負數變成零",
    description: "輸入一串整數，將所有負數改為 0 後輸出。",
    input: "一串整數，皆以空白分隔。",
    output: "負數改為 0 後的串列，以空白分隔。",
    samples: [
      { input: "3 -1 5 -7 0", output: "3 0 5 0 0" },
      { input: "-5 -10 -3", output: "0 0 0" }
    ]
  },

  F011: {
    title: "找出串列中第一個大於目標值的元素位置",
    description: "輸入一串整數與一個目標值，輸出串列中第一個大於目標值的元素的索引（從 0 開始），找不到則輸出 -1。",
    input: "一串整數，最後一個為目標值，皆以空白分隔。",
    output: "第一個大於目標值的元素索引，找不到輸出 -1。",
    samples: [
      { input: "1 3 5 7 9 6", output: "3" },  // 7 是第一個 > 6 的元素，索引 3
      { input: "1 2 3 4 5 10", output: "-1" }
    ]
  },

  F012: {
    title: "計算串列中所有奇數的個數",
    description: "輸入一串整數，計算並輸出其中奇數的個數。",
    input: "一串整數，以空白分隔。",
    output: "奇數的個數。",
    samples: [
      { input: "1 2 3 4 5", output: "3" },
      { input: "2 4 6 8", output: "0" }
    ]
  },

  F013: {
    title: "將串列中的元素全部乘以指定倍數",
    description: "輸入一串整數與一個倍數，將串列中的每個元素乘以該倍數後輸出。",
    input: "一串整數，最後一個為倍數，皆以空白分隔。",
    output: "每個元素乘以倍數後的串列，以空白分隔。",
    samples: [
      { input: "1 2 3 2", output: "2 4 6" },
      { input: "4 5 6 3", output: "12 15 18" }
    ]
  },

  F014: {
    title: "串列元素依奇偶分類並輸出",
    description: "輸入一串整數，先輸出所有奇數，再輸出所有偶數，中間以空白分隔。",
    input: "一串整數，以空白分隔。",
    output: "先奇數後偶數的串列，以空白分隔。",
    samples: [
      { input: "1 2 3 4 5", output: "1 3 5 2 4" },
      { input: "2 4 6", output: "2 4 6" }
    ]
  },

  F015: {
    title: "找出串列中第二大的數字",
    description: "輸入一串整數，找出並輸出第二大的數字。保證串列長度至少 2 且元素不全相同。",
    input: "一串整數，以空白分隔。",
    output: "第二大的數字。",
    samples: [
      { input: "1 3 2 4 5", output: "4" },
      { input: "10 20 20 5", output: "20" }
    ]
  },

  F016: {
    title: "串列元素累加並輸出中間累積和",
    description: "輸入一串整數，計算並輸出每個位置的累積和。",
    input: "一串整數，以空白分隔。",
    output: "每個位置的累積和，以空白分隔。",
    samples: [
      { input: "1 2 3 4", output: "1 3 6 10" },
      { input: "5 0 2", output: "5 5 7" }
    ]
  },

  F017: {
    title: "尋找串列中長度最長的連續遞增子序列長度",
    description: "輸入一串整數，找出其中長度最長的連續遞增子序列長度並輸出。",
    input: "一串整數，以空白分隔。",
    output: "最長連續遞增子序列的長度。",
    samples: [
      { input: "1 2 2 3 4 1 2 3 4 5", output: "5" },
      { input: "5 4 3 2 1", output: "1" }
    ]
  },

  F018: {
    title: "串列元素循環左移 k 位",
    description: "輸入一串整數與一個整數 k，將串列元素向左循環移動 k 位後輸出。",
    input: "一串整數，最後一個為 k，皆以空白分隔。",
    output: "左移 k 位後的串列，以空白分隔。",
    samples: [
      { input: "1 2 3 4 5 2", output: "3 4 5 1 2" },
      { input: "10 20 30 1", output: "20 30 10" }
    ]
  },

  F019: {
    title: "判斷串列是否為對稱序列（回文）",
    description: "輸入一串整數，判斷該串列是否為對稱（回文）序列，輸出 Yes 或 No。",
    input: "一串整數，以空白分隔。",
    output: "回文輸出 Yes，否則 No。",
    samples: [
      { input: "1 2 3 2 1", output: "Yes" },
      { input: "1 2 3 4", output: "No" }
    ]
  },

  F020: {
    title: "串列元素分組求和",
    description: "輸入一串整數和一個分組大小 k，將串列元素依序分組，每組求和並輸出。最後一組不足 k 則直接求和。",
    input: "一串整數，最後一個為分組大小 k，皆以空白分隔。",
    output: "每組和，以空白分隔。",
    samples: [
      { input: "1 2 3 4 5 2", output: "3 7 5" },  // (1+2) (3+4) (5)
      { input: "10 20 30 40 3", output: "60 40" }
    ]
  },

  F021: {
    title: "刪除串列中所有重複出現的元素，僅保留首次出現的",
    description: "輸入一串整數，刪除所有重複出現的元素，只保留第一次出現的元素並輸出。",
    input: "一串整數，以空白分隔。",
    output: "去重後的串列，以空白分隔。",
    samples: [
      { input: "1 2 3 2 1 4 5 4", output: "1 2 3 4 5" },
      { input: "5 5 5 5", output: "5" }
    ]
  },

  G001: {
    title: "判斷奇偶",
    description: "輸入一個整數，判斷它是奇數或偶數。",
    input: "一個整數 n，範圍為 -10^9 到 10^9。",
    output: "若為奇數輸出 Odd，偶數則輸出 Even。",
    samples: [{ input: "7", output: "Odd" }, { input: "12", output: "Even" }]
  },
  G002: {
    title: "質數判斷",
    description: "輸入一個大於 1 的整數，判斷是否為質數。",
    input: "一個整數 n，2 ≤ n ≤ 10^6。",
    output: "若為質數輸出 Yes，否則輸出 No。",
    samples: [{ input: "7", output: "Yes" }, { input: "9", output: "No" }]
  },
  G003: {
    title: "判斷正負數",
    description: "輸入一個整數，判斷它是正數、負數或零，並輸出對應結果。",
    input: "一個整數 n。",
    output: "若 n > 0，輸出 'Positive'；n < 0，輸出 'Negative'；n = 0，輸出 'Zero'。",
    samples: [
      { input: "10", output: "Positive" },
      { input: "-5", output: "Negative" },
      { input: "0", output: "Zero" }
    ]
  },

  G004: {
    title: "成績等級判斷",
    description: "輸入一個 0 到 100 的分數，輸出對應等級 A, B, C, D 或 F。",
    input: "一個整數分數。",
    output: "90 以上輸出 'A'，80-89 輸出 'B'，70-79 輸出 'C'，60-69 輸出 'D'，60 以下輸出 'F'。",
    samples: [
      { input: "85", output: "B" },
      { input: "92", output: "A" },
      { input: "59", output: "F" }
    ]
  },

  G005: {
    title: "判斷閏年",
    description: "輸入年份，判斷是否為閏年，輸出 'Leap Year' 或 'Common Year'。",
    input: "一個整數年份。",
    output: "能被 4 整除但不能被 100 整除，或能被 400 整除的是閏年。",
    samples: [
      { input: "2024", output: "Leap Year" },
      { input: "1900", output: "Common Year" },
      { input: "2000", output: "Leap Year" }
    ]
  },

  G006: {
    title: "比較三個數字的最大值",
    description: "輸入三個整數，找出其中最大的一個並輸出。",
    input: "三個整數，以空白分隔。",
    output: "最大整數。",
    samples: [
      { input: "3 7 5", output: "7" },
      { input: "10 2 8", output: "10" }
    ]
  },

  G007: {
    title: "判斷是否為三角形",
    description: "輸入三個邊長，判斷是否能構成有效三角形。",
    input: "三個正整數，分別為三角形三邊長。",
    output: "若任兩邊之和大於第三邊，輸出 'Valid'，否則輸出 'Invalid'。",
    samples: [
      { input: "3 4 5", output: "Valid" },
      { input: "1 2 3", output: "Invalid" }
    ]
  },

  G008: {
    title: "判斷是否為偶數",
    description: "輸入一個整數，判斷是否為偶數。",
    input: "一個整數 n。",
    output: "若為偶數輸出 'Even'，否則輸出 'Odd'。",
    samples: [
      { input: "4", output: "Even" },
      { input: "7", output: "Odd" }
    ]
  },

  G009: {
    title: "簡單三分法判斷",
    description: "輸入一個整數，判斷是否小於 10、介於 10 到 20（含）或大於 20。",
    input: "一個整數 n。",
    output: "小於 10 輸出 'Small'，10 到 20 輸出 'Medium'，大於 20 輸出 'Large'。",
    samples: [
      { input: "5", output: "Small" },
      { input: "15", output: "Medium" },
      { input: "30", output: "Large" }
    ]
  },

  G010: {
    title: "判斷身高類別",
    description: "輸入身高（公分），判斷身高類別。",
    input: "一個整數身高（公分）。",
    output: "身高 ≥ 180 輸出 'Tall'，160 ≤ 身高 < 180 輸出 'Average'，身高 < 160 輸出 'Short'。",
    samples: [
      { input: "182", output: "Tall" },
      { input: "170", output: "Average" },
      { input: "150", output: "Short" }
    ]
  },

  G011: {
    title: "判斷是否及格",
    description: "輸入分數，判斷是否及格（60分為及格標準）。",
    input: "一個整數分數。",
    output: "分數 ≥ 60 輸出 'Pass'，否則輸出 'Fail'。",
    samples: [
      { input: "75", output: "Pass" },
      { input: "59", output: "Fail" }
    ]
  },

  G012: {
    title: "判斷字串長度是否合格",
    description: "輸入一個字串，判斷長度是否在 5 到 10 字元之間（含）。",
    input: "一個字串。",
    output: "長度介於 5 到 10 輸出 'Valid'，否則輸出 'Invalid'。",
    samples: [
      { input: "Hello", output: "Valid" },
      { input: "Hi", output: "Invalid" },
      { input: "HelloWorld!", output: "Invalid" }
    ]
  },

  G013: {
    title: "判斷身分證字號首字母是否有效",
    description: "輸入一個台灣身分證字號的首字母，判斷是否為有效英文字母 (A-Z)，有效輸出 'Valid'，否則輸出 'Invalid'。",
    input: "一個英文字母。",
    output: "輸出 'Valid' 或 'Invalid'。",
    samples: [
      { input: "A", output: "Valid" },
      { input: "Z", output: "Valid" },
      { input: "1", output: "Invalid" }
    ]
  },

  G014: {
    title: "判斷輸入年份是否為世紀閏年",
    description: "輸入一個年份，判斷是否為世紀閏年（能被400整除且是世紀年份）。是輸出 'Century Leap Year'，否則輸出 'Not Century Leap Year'。",
    input: "一個整數年份。",
    output: "判斷是否為世紀閏年。",
    samples: [
      { input: "2000", output: "Century Leap Year" },
      { input: "1900", output: "Not Century Leap Year" },
      { input: "2024", output: "Not Century Leap Year" }
    ]
  },

  G015: {
    title: "判斷一個三位數是否為水仙花數",
    description: "輸入一個三位數整數，判斷該數字是否等於其各位數字的立方和，是則輸出 'Yes'，否則 'No'。",
    input: "一個三位數整數。",
    output: "輸出 'Yes' 或 'No'。",
    samples: [
      { input: "153", output: "Yes" },
      { input: "370", output: "Yes" },
      { input: "123", output: "No" }
    ]
  },

  G016: {
    title: "判斷輸入的時間是否合法",
    description: "輸入兩個整數表示小時（0~23）與分鐘（0~59），判斷時間是否合法。合法輸出 'Valid Time'，否則 'Invalid Time'。",
    input: "兩個整數，分別為小時和分鐘，以空白分隔。",
    output: "輸出時間是否合法。",
    samples: [
      { input: "13 30", output: "Valid Time" },
      { input: "25 00", output: "Invalid Time" },
      { input: "12 60", output: "Invalid Time" }
    ]
  },

  G017: {
    title: "計算稅額級距",
    description: "輸入收入金額，根據以下規則計算稅率：收入 ≤ 50000 稅率 5%，收入 50001-100000 稅率 10%，超過 100000 稅率 15%。輸出應繳稅額（收入 × 稅率），保留整數。",
    input: "一個整數收入。",
    output: "輸出應繳稅額整數。",
    samples: [
      { input: "40000", output: "2000" },
      { input: "75000", output: "7500" },
      { input: "120000", output: "18000" }
    ]
  },

  H001: {
    title: "計算 1 到 n 的總和",
    description: "輸入一個正整數 n，使用 while 迴圈計算並輸出 1 到 n 的所有整數和。",
    input: "一個正整數 n。",
    output: "輸出從 1 加到 n 的總和。",
    samples: [
      { input: "5", output: "15" },
      { input: "10", output: "55" }
    ]
  },

  H002: {
    title: "判斷質數",
    description: "輸入一個整數 n，使用 while 迴圈判斷 n 是否為質數，輸出 'Yes' 或 'No'。",
    input: "一個大於 1 的整數 n。",
    output: "輸出 'Yes' 表示質數，'No' 表示非質數。",
    samples: [
      { input: "7", output: "Yes" },
      { input: "10", output: "No" }
    ]
  },

  H003: {
    title: "反轉整數",
    description: "輸入一個整數，使用 while 迴圈反轉該整數並輸出。",
    input: "一個整數。",
    output: "輸出反轉後的整數。",
    samples: [
      { input: "12345", output: "54321" },
      { input: "-678", output: "-876" }
    ]
  },

  H004: {
    title: "計算階乘",
    description: "輸入一個非負整數 n，使用 while 迴圈計算 n 的階乘。",
    input: "一個非負整數 n。",
    output: "輸出 n 的階乘結果。",
    samples: [
      { input: "5", output: "120" },
      { input: "0", output: "1" }
    ]
  },

  H005: {
    title: "找出第一個大於 n 的質數",
    description: "輸入一個整數 n，使用 while 迴圈尋找並輸出第一個大於 n 的質數。",
    input: "一個整數 n。",
    output: "輸出第一個大於 n 的質數。",
    samples: [
      { input: "10", output: "11" },
      { input: "20", output: "23" }
    ]
  },

  H006: {
    title: "計算平方和",
    description: "輸入一個正整數 n，使用 while 迴圈計算 1^2 + 2^2 + ... + n^2 的和。",
    input: "一個正整數 n。",
    output: "輸出平方和。",
    samples: [
      { input: "3", output: "14" },
      { input: "5", output: "55" }
    ]
  },

  H007: {
    title: "印出倒數字串",
    description: "輸入一個整數 n，使用 while 迴圈從 n 倒數到 1，每個數字輸出一行。",
    input: "一個正整數 n。",
    output: "從 n 到 1，每行一個數字。",
    samples: [
      { input: "5", output: "5\n4\n3\n2\n1" }
    ]
  },

  H008: {
    title: "計算數字位數",
    description: "輸入一個正整數 n，使用 while 迴圈計算並輸出該數字的位數。",
    input: "一個正整數 n。",
    output: "輸出數字的位數。",
    samples: [
      { input: "12345", output: "5" },
      { input: "9", output: "1" }
    ]
  },

  H009: {
    title: "判斷是否為迴文數",
    description: "輸入一個正整數，使用 while 迴圈判斷該數是否為迴文數（正讀反讀都相同），輸出 'Yes' 或 'No'。",
    input: "一個正整數。",
    output: "是迴文數輸出 'Yes'，否則輸出 'No'。",
    samples: [
      { input: "121", output: "Yes" },
      { input: "123", output: "No" }
    ]
  },

  H010: {
    title: "計算最大公因數",
    description: "輸入兩個正整數，使用 while 迴圈求其最大公因數（GCD）。",
    input: "兩個正整數，以空白分隔。",
    output: "輸出兩數的最大公因數。",
    samples: [
      { input: "12 18", output: "6" },
      { input: "100 25", output: "25" }
    ]
  },

  H011: {
    title: "費氏數列第 n 項",
    description: "輸入一個正整數 n，使用 while 迴圈計算並輸出費氏數列第 n 項（F1=1, F2=1）。",
    input: "一個正整數 n。",
    output: "輸出第 n 項費氏數列數字。",
    samples: [
      { input: "5", output: "5" },
      { input: "10", output: "55" }
    ]
  },

  H012: {
    title: "找出 n 以內所有質數",
    description: "輸入一個正整數 n，使用 while 迴圈找出並輸出所有小於或等於 n 的質數，數字間用空白分隔。",
    input: "一個正整數 n。",
    output: "輸出所有質數，空白分隔。",
    samples: [
      { input: "10", output: "2 3 5 7" },
      { input: "20", output: "2 3 5 7 11 13 17 19" }
    ]
  },

  H013: {
    title: "倒數計時器",
    description: "輸入一個正整數 n，使用 while 迴圈從 n 倒數到 0，每秒輸出一個數字（可模擬），最後輸出 '倒數結束'。",
    input: "一個正整數 n。",
    output: "輸出從 n 到 0 的數字，每行一個，最後一行為 '倒數結束'。",
    samples: [
      { input: "3", output: "3\n2\n1\n0\n倒數結束" }
    ]
  },

  H014: {
    title: "數字反轉後判斷質數",
    description: "輸入一個正整數，將數字反轉後判斷該數是否為質數，輸出 'Yes' 或 'No'。",
    input: "一個正整數。",
    output: "反轉後數字為質數輸出 'Yes'，否則 'No'。",
    samples: [
      { input: "13", output: "Yes" },  // 反轉為 31，31 是質數
      { input: "10", output: "No" }
    ]
  },

  H015: {
    title: "計算一個數字的所有因數之和",
    description: "輸入一個正整數 n，使用 while 迴圈計算並輸出所有正因數（包含 1 和 n）之和。",
    input: "一個正整數 n。",
    output: "輸出所有正因數之和。",
    samples: [
      { input: "6", output: "12" },  // 因數為 1, 2, 3, 6
      { input: "10", output: "18" }  // 因數為 1, 2, 5, 10
    ]
  },

  I001: {
    title: "計算 1 到 n 的總和",
    description: "輸入一個正整數 n，使用 for 迴圈計算並輸出 1 到 n 的所有整數和。",
    input: "一個正整數 n。",
    output: "輸出從 1 加到 n 的總和。",
    samples: [
      { input: "5", output: "15" },
      { input: "10", output: "55" }
    ]
  },

  I002: {
    title: "列印九九乘法表",
    description: "使用 for 迴圈列印 1 到 9 的乘法表，每行格式為 'a * b = c'。",
    input: "無輸入。",
    output: "輸出九九乘法表，共 81 行。",
    samples: [
      { input: "", output: "1 * 1 = 1\n1 * 2 = 2\n...\n9 * 9 = 81" }
    ]
  },

  I003: {
    title: "印出指定字串 n 次",
    description: "輸入一個字串和一個正整數 n，使用 for 迴圈將字串印出 n 次，每次一行。",
    input: "一個字串與一個正整數 n，以空白分隔。",
    output: "輸出字串 n 行。",
    samples: [
      { input: "Hello 3", output: "Hello\nHello\nHello" }
    ]
  },

  I004: {
    title: "計算列表中所有數字的乘積",
    description: "輸入一串用空白分隔的整數，使用 for 迴圈計算並輸出這些數字的乘積。",
    input: "一串整數，以空白分隔。",
    output: "輸出所有數字的乘積。",
    samples: [
      { input: "1 2 3 4", output: "24" },
      { input: "5 6 0", output: "0" }
    ]
  },

  I005: {
    title: "反向列印字串",
    description: "輸入一個字串，使用 for 迴圈從最後一個字元開始倒序輸出整個字串。",
    input: "一個字串。",
    output: "輸出倒序的字串。",
    samples: [
      { input: "abcde", output: "edcba" }
    ]
  },

  I006: {
    title: "判斷字串中有多少個元音字母",
    description: "輸入一個字串，使用 for 迴圈計算字串中有多少個元音字母 (a, e, i, o, u，不分大小寫)。",
    input: "一個字串。",
    output: "輸出元音字母的數量。",
    samples: [
      { input: "Hello World", output: "3" },
      { input: "OpenAI", output: "4" }
    ]
  },

  I007: {
    title: "計算數字列表中偶數的總和",
    description: "輸入一串整數，使用 for 迴圈計算所有偶數的總和。",
    input: "一串整數，以空白分隔。",
    output: "輸出偶數的總和。",
    samples: [
      { input: "1 2 3 4 5 6", output: "12" },
      { input: "7 9 11", output: "0" }
    ]
  },

  I008: {
    title: "找出列表中最大與最小的數字",
    description: "輸入一串整數，使用 for 迴圈找出並輸出最大值和最小值，兩數以空白分隔。",
    input: "一串整數，以空白分隔。",
    output: "輸出最大值和最小值，以空白分隔。",
    samples: [
      { input: "3 5 1 8 2", output: "8 1" },
      { input: "-1 -5 0", output: "0 -5" }
    ]
  },

  I009: {
    title: "判斷字串是否為迴文",
    description: "輸入一個字串，使用 for 迴圈判斷字串是否為迴文，輸出 'Yes' 或 'No'。",
    input: "一個字串。",
    output: "是迴文輸出 'Yes'，否則輸出 'No'。",
    samples: [
      { input: "level", output: "Yes" },
      { input: "hello", output: "No" }
    ]
  },

  I010: {
    title: "計算階乘",
    description: "輸入一個非負整數 n，使用 for 迴圈計算 n 的階乘。",
    input: "一個非負整數 n。",
    output: "輸出 n 的階乘結果。",
    samples: [
      { input: "5", output: "120" },
      { input: "0", output: "1" }
    ]
  },

  I011: {
    title: "判斷列表中質數的個數",
    description: "輸入一串正整數，使用 for 迴圈判斷並計算列表中質數的數量。",
    input: "一串正整數，以空白分隔。",
    output: "輸出質數的個數。",
    samples: [
      { input: "2 3 4 5 6 7", output: "4" },
      { input: "10 12 15", output: "0" }
    ]
  },

  I012: {
    title: "字串中大寫字母轉小寫計數",
    description: "輸入一個字串，使用 for 迴圈計算其中有多少個大寫字母，並輸出該數字。",
    input: "一個字串。",
    output: "輸出大寫字母的數量。",
    samples: [
      { input: "Hello World", output: "2" },
      { input: "PYTHON", output: "6" }
    ]
  },

  I013: {
    title: "求列表中相鄰元素差的最大值",
    description: "輸入一串整數，使用 for 迴圈計算相鄰兩元素的差的絕對值，並輸出最大值。",
    input: "一串整數，以空白分隔。",
    output: "輸出相鄰差的最大絕對值。",
    samples: [
      { input: "1 3 7 2 9", output: "7" },
      { input: "10 10 10", output: "0" }
    ]
  },

  I014: {
    title: "將字串中所有字母反轉位置",
    description: "輸入一個字串，使用 for 迴圈將字串中的所有字母反轉，非字母保持原位，輸出結果。",
    input: "一個字串。",
    output: "輸出字母反轉後的字串。",
    samples: [
      { input: "a,b$c", output: "c,b$a" },
      { input: "Ab,c,de!$", output: "ed,c,bA!$" }
    ]
  },

  I015: {
    title: "計算列表中所有質數的總和",
    description: "輸入一串正整數，使用 for 迴圈計算並輸出其中所有質數的和。",
    input: "一串正整數，以空白分隔。",
    output: "輸出質數的總和。",
    samples: [
      { input: "2 3 4 5 6 7", output: "17" },
      { input: "10 12 15", output: "0" }
    ]
  },

  J001: {
    title: "尋找串列中第一個負數位置（使用 break）",
    description: "輸入一串整數，輸出第一個出現的負數索引（從0開始），若無負數則輸出 -1。",
    input: "一串整數，以空白分隔。",
    output: "第一個負數索引，找不到輸出 -1。",
    samples: [
      { input: "3 5 -2 7", output: "2" },
      { input: "1 2 3 4", output: "-1" }
    ]
  },

  J002: {
    title: "輸出串列中所有正數，遇到第一個負數停止（使用 break）",
    description: "輸入一串整數，依序輸出正數元素，遇到第一個負數時停止輸出。",
    input: "一串整數，以空白分隔。",
    output: "正數元素，以空白分隔，遇負數停止。",
    samples: [
      { input: "1 3 5 -2 7", output: "1 3 5" },
      { input: "2 4 6 8", output: "2 4 6 8" }
    ]
  },

  J003: {
    title: "計算串列中非零元素的總和（使用 continue 跳過零）",
    description: "輸入一串整數，計算非零元素的總和，遇到零則跳過不計算。",
    input: "一串整數，以空白分隔。",
    output: "非零元素總和。",
    samples: [
      { input: "1 0 2 0 3", output: "6" },
      { input: "0 0 0", output: "0" }
    ]
  },

  J004: {
    title: "輸出串列中所有非負數（使用 continue 跳過負數）",
    description: "輸入一串整數，輸出所有非負數元素（包含零），跳過負數。",
    input: "一串整數，以空白分隔。",
    output: "非負數元素，以空白分隔。",
    samples: [
      { input: "3 -1 0 5 -2", output: "3 0 5" },
      { input: "-3 -2 -1", output: "" }
    ]
  },

  J005: {
    title: "輸出串列中第一個大於目標值的元素（使用 break）",
    description: "輸入一串整數與一個目標值，輸出串列中第一個大於目標值的元素，找不到則輸出 None。",
    input: "一串整數，最後一個為目標值，皆以空白分隔。",
    output: "第一個大於目標值的元素或 None。",
    samples: [
      { input: "1 3 5 7 4", output: "5" },
      { input: "1 2 3 4 10", output: "None" }
    ]
  },

  J006: {
    title: "跳過串列中所有偶數，輸出剩餘元素（使用 continue）",
    description: "輸入一串整數，跳過所有偶數元素，只輸出奇數元素。",
    input: "一串整數，以空白分隔。",
    output: "奇數元素，以空白分隔。",
    samples: [
      { input: "1 2 3 4 5 6", output: "1 3 5" },
      { input: "2 4 6 8", output: "" }
    ]
  },

  J007: {
    title: "遇到串列中元素大於 100 即停止輸出（使用 break）",
    description: "輸入一串整數，依序輸出元素，遇到大於 100 的元素即停止輸出。",
    input: "一串整數，以空白分隔。",
    output: "依序輸出的元素，遇大於100停止。",
    samples: [
      { input: "10 50 101 20 30", output: "10 50" },
      { input: "1 2 3 4 5", output: "1 2 3 4 5" }
    ]
  },

  J008: {
    title: "計算串列中所有非負偶數的和（使用 continue 跳過不符條件）",
    description: "輸入一串整數，計算所有非負且為偶數元素的和，跳過其他元素。",
    input: "一串整數，以空白分隔。",
    output: "符合條件元素總和。",
    samples: [
      { input: "2 3 4 -6 0 7", output: "6" },  // 2+4+0=6
      { input: "-2 -4 -6", output: "0" }
    ]
  },

  J009: {
    title: "從串列中輸出首個非零元素，若無則輸出 None（使用 break）",
    description: "輸入一串整數，輸出第一個非零元素，若無非零元素則輸出 None。",
    input: "一串整數，以空白分隔。",
    output: "第一個非零元素或 None。",
    samples: [
      { input: "0 0 3 4", output: "3" },
      { input: "0 0 0", output: "None" }
    ]
  },

  J010: {
    title: "跳過串列中所有負數，輸出剩餘元素的平方（使用 continue）",
    description: "輸入一串整數，跳過所有負數，將剩餘元素平方後輸出。",
    input: "一串整數，以空白分隔。",
    output: "非負元素平方，以空白分隔。",
    samples: [
      { input: "3 -1 2 -5", output: "9 4" },
      { input: "-3 -2 -1", output: "" }
    ]
  },

  J011: {
    title: "尋找串列中首個質數，遇到非質數繼續尋找，找不到則輸出 None（使用 continue 和 break）",
    description: "輸入一串整數，依序尋找第一個質數並輸出，若無質數輸出 None。",
    input: "一串整數，以空白分隔。",
    output: "第一個質數或 None。",
    samples: [
      { input: "4 6 9 11 15", output: "11" },
      { input: "4 6 8 10", output: "None" }
    ]
  },

  J012: {
    title: "輸出串列中首個連續兩個元素和大於目標值的位置（使用 break）",
    description: "輸入一串整數與目標值，找出第一組連續兩元素和大於目標值的起始索引，無則輸出 -1。",
    input: "一串整數，最後一個為目標值，皆以空白分隔。",
    output: "起始索引或 -1。",
    samples: [
      { input: "1 2 3 4 5 7", output: "3" }, // 4+5=9 >7
      { input: "1 1 1 1 1 5", output: "-1" }
    ]
  },

  J013: {
    title: "跳過串列中所有重複元素，只輸出首次出現的元素（使用 continue）",
    description: "輸入一串整數，輸出去除重複後的元素序列（保持原順序）。",
    input: "一串整數，以空白分隔。",
    output: "去重後的元素，以空白分隔。",
    samples: [
      { input: "1 2 2 3 4 3 5", output: "1 2 3 4 5" },
      { input: "5 5 5 5", output: "5" }
    ]
  },

  J014: {
    title: "輸出串列中不連續的元素（相鄰兩元素差值大於 1）（使用 continue）",
    description: "輸入一串整數，輸出所有與前一元素差值大於1的元素，首元素必輸出。",
    input: "一串整數，以空白分隔。",
    output: "符合條件的元素，以空白分隔。",
    samples: [
      { input: "1 2 4 5 7 8", output: "1 4 7" },
      { input: "3 4 5 6", output: "3" }
    ]
  },

  J015: {
    title: "尋找串列中首個兩倍於前一元素的元素位置（使用 break）",
    description: "輸入一串整數，找出第一個元素是前一元素兩倍的索引（從1開始），找不到輸出 -1。",
    input: "一串整數，以空白分隔。",
    output: "符合條件的元素索引，找不到輸出 -1。",
    samples: [
      { input: "1 2 3 6 12", output: "1" }, // 2 是 1 的兩倍，索引從1開始
      { input: "1 3 5 7", output: "-1" }
    ]
  },

  K001: {
    title: "建立元組並輸出指定元素",
    description: "輸入一串整數，建立元組後輸出第2個元素（索引從0開始）。",
    input: "一串整數，以空白分隔。",
    output: "元組中第2個元素。",
    samples: [
      { input: "10 20 30 40", output: "20" },
      { input: "5 15 25", output: "15" }
    ]
  },

  K002: {
    title: "元組合併與長度計算",
    description: "輸入兩串整數，分別建立兩個元組，合併後輸出新元組長度。",
    input: "兩行輸入，分別為兩串整數，以空白分隔。",
    output: "合併後元組長度（整數）。",
    samples: [
      { input: "1 2 3\n4 5", output: "5" },
      { input: "10 20\n30 40 50", output: "5" }
    ]
  },

  K003: {
    title: "元組中最大值與最小值",
    description: "輸入一串整數建立元組，輸出最大值與最小值，以空白分隔。",
    input: "一串整數，以空白分隔。",
    output: "最大值 最小值。",
    samples: [
      { input: "3 5 1 9", output: "9 1" },
      { input: "-2 0 7 4", output: "7 -2" }
    ]
  },

  K004: {
    title: "元組元素計數",
    description: "輸入一串整數建立元組，輸出指定整數在元組中出現的次數。",
    input: "第一行為整數序列，第二行為欲計數的整數。",
    output: "指定整數出現次數。",
    samples: [
      { input: "1 2 3 2 2 4\n2", output: "3" },
      { input: "5 5 5 5\n3", output: "0" }
    ]
  },

  K005: {
    title: "元組元素索引查找",
    description: "輸入一串整數建立元組，輸出指定整數在元組中第一次出現的索引，找不到輸出 -1。",
    input: "第一行為整數序列，第二行為欲查找的整數。",
    output: "指定整數索引或 -1。",
    samples: [
      { input: "4 7 9 7\n7", output: "1" },
      { input: "1 2 3 4\n5", output: "-1" }
    ]
  },

  K006: {
    title: "元組切片輸出",
    description: "輸入一串整數建立元組，輸出從索引 1 到 3（含）的子元組元素，以空白分隔。",
    input: "一串整數，以空白分隔。",
    output: "子元組元素，以空白分隔。",
    samples: [
      { input: "10 20 30 40 50", output: "20 30 40" },
      { input: "5 6 7 8", output: "6 7 8" }
    ]
  },

  K007: {
    title: "元組反轉",
    description: "輸入一串整數建立元組，輸出反轉後的元組元素，以空白分隔。",
    input: "一串整數，以空白分隔。",
    output: "反轉後的元組元素，以空白分隔。",
    samples: [
      { input: "1 2 3 4", output: "4 3 2 1" },
      { input: "5 6 7", output: "7 6 5" }
    ]
  },

  K008: {
    title: "判斷元素是否存在於元組中",
    description: "輸入一串整數建立元組，及一個整數，判斷該整數是否存在元組中，存在輸出 Yes，否則 No。",
    input: "第一行為整數序列，第二行為欲判斷的整數。",
    output: "Yes 或 No。",
    samples: [
      { input: "10 20 30 40\n20", output: "Yes" },
      { input: "1 2 3 4\n5", output: "No" }
    ]
  },

  K009: {
    title: "將元組轉換為字串並輸出",
    description: "輸入一串整數建立元組，將其元素用逗號連接成字串輸出。",
    input: "一串整數，以空白分隔。",
    output: "用逗號連接的字串。",
    samples: [
      { input: "1 2 3", output: "1,2,3" },
      { input: "5 10 15", output: "5,10,15" }
    ]
  },

  K010: {
    title: "多個元組合併後排序輸出",
    description: "輸入兩行，每行為一串整數，分別建立兩個元組，合併後排序並輸出，以空白分隔。",
    input: "兩行輸入，分別為兩串整數，以空白分隔。",
    output: "合併排序後的元素，以空白分隔。",
    samples: [
      { input: "3 1 4\n2 5", output: "1 2 3 4 5" },
      { input: "10 7\n9 8", output: "7 8 9 10" }
    ]
  },

  K011: {
    title: "元組中查找所有指定元素的索引",
    description: "輸入一串整數建立元組，及一個整數，輸出該整數在元組中所有出現的索引（以空白分隔），若無則輸出 None。",
    input: "第一行為整數序列，第二行為欲查找的整數。",
    output: "所有索引或 None。",
    samples: [
      { input: "1 2 3 2 4 2\n2", output: "1 3 5" },
      { input: "5 6 7 8\n9", output: "None" }
    ]
  },

  K012: {
    title: "元組與列表互換及元素修改",
    description: "輸入一串整數建立元組，將元組轉為列表後，將索引為2的元素加10，再輸出轉回元組後的所有元素（空白分隔）。",
    input: "一串整數，以空白分隔，長度至少3。",
    output: "修改後的元組元素，以空白分隔。",
    samples: [
      { input: "5 10 15 20", output: "5 10 25 20" },
      { input: "1 2 3", output: "1 2 13" }
    ]
  },

  K013: {
    title: "判斷元組是否為回文",
    description: "輸入一串整數建立元組，判斷該元組是否正反相同，是則輸出 Yes，否則 No。",
    input: "一串整數，以空白分隔。",
    output: "Yes 或 No。",
    samples: [
      { input: "1 2 3 2 1", output: "Yes" },
      { input: "1 2 3", output: "No" }
    ]
  },

  K014: {
    title: "將元組中元素以指定間隔取出",
    description: "輸入一串整數建立元組，及一個整數間隔 k，輸出從索引 0 開始每隔 k 個元素取出來的子元組（空白分隔）。",
    input: "第一行為整數序列，第二行為間隔 k。",
    output: "子元組元素，以空白分隔。",
    samples: [
      { input: "10 20 30 40 50 60\n2", output: "10 30 50" },
      { input: "1 2 3 4 5\n3", output: "1 4" }
    ]
  },

  K015: {
    title: "元組中所有元素累積乘積",
    description: "輸入一串整數建立元組，輸出所有元素的累積乘積。",
    input: "一串整數，以空白分隔。",
    output: "累積乘積（整數）。",
    samples: [
      { input: "2 3 4", output: "24" },
      { input: "5 1 2", output: "10" }
    ]
  },

  L001: {
    title: "建立字典並查詢鍵值",
    description: "輸入多組鍵值對（鍵為字串，值為整數），建立字典，輸出指定鍵的值，找不到輸出 None。",
    input: "第一行為鍵值對數量 n，接下來 n 行每行包含一個鍵和值（空白分隔），最後一行為查詢鍵。",
    output: "查詢鍵對應的值或 None。",
    samples: [
      { input: "3\napple 5\nbanana 3\norange 7\nbanana", output: "3" },
      { input: "2\nkey1 100\nkey2 200\nkey3", output: "None" }
    ]
  },

  L002: {
    title: "字典新增或更新鍵值",
    description: "輸入多組鍵值對建立字典，輸入一個鍵與值，如鍵存在則更新值，否則新增，最後輸出字典中該鍵的值。",
    input: "第一行為鍵值對數量 n，接下來 n 行每行為鍵和值（空白分隔），最後一行為欲新增或更新的鍵和值（空白分隔）。",
    output: "該鍵更新後的值。",
    samples: [
      { input: "2\na 1\nb 2\na 10", output: "10" },
      { input: "1\nx 5\ny 7", output: "7" }
    ]
  },

  L003: {
    title: "字典鍵值對數量",
    description: "輸入多組鍵值對建立字典，輸出字典中鍵值對的數量。",
    input: "第一行為鍵值對數量 n，接下來 n 行為鍵和值（空白分隔）。",
    output: "字典鍵值對數量（整數）。",
    samples: [
      { input: "3\na 1\nb 2\nc 3", output: "3" },
      { input: "0", output: "0" }
    ]
  },

  L004: {
    title: "輸出字典所有鍵與值（排序鍵）",
    description: "輸入多組鍵值對建立字典，輸出所有鍵與值，鍵按字母排序，每行格式為 key:value。",
    input: "第一行為鍵值對數量 n，接下來 n 行為鍵和值（空白分隔）。",
    output: "每行一個鍵值對，格式為 key:value，鍵排序。",
    samples: [
      { input: "3\nbanana 5\napple 3\norange 7", output: "apple:3\nbanana:5\norange:7" }
    ]
  },

  L005: {
    title: "計算字典中所有值的總和",
    description: "輸入多組鍵值對建立字典，計算所有值的總和並輸出。",
    input: "第一行為鍵值對數量 n，接下來 n 行為鍵和值（空白分隔）。",
    output: "所有值的總和（整數）。",
    samples: [
      { input: "3\na 10\nb 20\nc 30", output: "60" },
      { input: "2\nx 5\ny 7", output: "12" }
    ]
  },

  L006: {
    title: "字典中查找最大值對應的鍵",
    description: "輸入多組鍵值對建立字典，輸出值最大的鍵，若有多個最大值鍵，輸出字母序最小的。",
    input: "第一行為鍵值對數量 n，接下來 n 行為鍵和值（空白分隔）。",
    output: "值最大鍵（字串）。",
    samples: [
      { input: "3\na 10\nb 20\nc 20", output: "b" },
      { input: "2\nx 5\ny 7", output: "y" }
    ]
  },

  L007: {
    title: "刪除字典中指定鍵",
    description: "輸入多組鍵值對建立字典，輸入一個鍵，刪除該鍵（若存在），輸出刪除後字典大小。",
    input: "第一行為鍵值對數量 n，接下來 n 行為鍵和值（空白分隔），最後一行為欲刪除的鍵。",
    output: "刪除後字典中鍵值對數量（整數）。",
    samples: [
      { input: "3\na 1\nb 2\nc 3\nb", output: "2" },
      { input: "1\nx 5\ny", output: "1" }
    ]
  },

  L008: {
    title: "判斷字典中是否有指定值",
    description: "輸入多組鍵值對建立字典，輸入一個整數，判斷該值是否存在字典的值中，存在輸出 Yes，否則 No。",
    input: "第一行為鍵值對數量 n，接下來 n 行為鍵和值（空白分隔），最後一行為欲查找的整數值。",
    output: "Yes 或 No。",
    samples: [
      { input: "3\na 10\nb 20\nc 30\n20", output: "Yes" },
      { input: "2\nx 5\ny 7\n9", output: "No" }
    ]
  },

  L009: {
    title: "字典鍵轉為列表排序輸出",
    description: "輸入多組鍵值對建立字典，輸出所有鍵排序後，以空白分隔。",
    input: "第一行為鍵值對數量 n，接下來 n 行為鍵和值（空白分隔）。",
    output: "排序後鍵列表，以空白分隔。",
    samples: [
      { input: "3\nbanana 5\napple 3\norange 7", output: "apple banana orange" }
    ]
  },

  L010: {
    title: "字典中值翻倍後輸出所有鍵值對",
    description: "輸入多組鍵值對建立字典，將所有值乘以2後，輸出所有鍵值對，格式 key:value，鍵排序，每行一組。",
    input: "第一行為鍵值對數量 n，接下來 n 行為鍵和值（空白分隔）。",
    output: "乘2後的鍵值對，每行 key:value，鍵排序。",
    samples: [
      { input: "2\nx 3\ny 4", output: "x:6\ny:8" }
    ]
  },

  L011: {
    title: "字典多鍵值合併求和",
    description: "輸入多組鍵值對建立字典，若同鍵重複出現則累加其值，最後輸出所有鍵值對，鍵排序，每行格式 key:value。",
    input: "第一行為鍵值對數量 n，接下來 n 行為鍵和值（空白分隔）。",
    output: "合併後鍵值對，每行 key:value，鍵排序。",
    samples: [
      { input: "5\na 10\nb 5\na 15\nc 7\nb 3", output: "a:25\nb:8\nc:7" }
    ]
  },

  L012: {
    title: "字典鍵值反轉輸出",
    description: "輸入多組鍵值對建立字典，將字典反轉成以值為鍵、鍵為值的字典，若值重複則用逗號串接鍵，最後輸出所有鍵值對，鍵排序，每行 key:value。",
    input: "第一行為鍵值對數量 n，接下來 n 行為鍵和值（空白分隔）。",
    output: "反轉後鍵值對，每行 key:value，鍵排序。",
    samples: [
      { input: "4\na 1\nb 2\nc 1\nd 3", output: "1:a,c\n2:b\n3:d" }
    ]
  },

  L013: {
    title: "字典依值排序輸出鍵值對",
    description: "輸入多組鍵值對建立字典，依值由大到小排序輸出所有鍵值對，每行格式為 key:value。",
    input: "第一行為鍵值對數量 n，接下來 n 行為鍵和值（空白分隔）。",
    output: "依值排序的鍵值對，每行 key:value。",
    samples: [
      { input: "3\na 10\nb 30\nc 20", output: "b:30\nc:20\na:10" }
    ]
  },

  L014: {
    title: "字典合併多個輸入並去除重複鍵",
    description: "輸入多組鍵值對建立字典，之後再輸入第二組多組鍵值對，合併兩字典，後者重複鍵會覆蓋前者，輸出合併後字典大小。",
    input: "第一行為第一組鍵值對數量 n，接下來 n 行為鍵和值，接著一行為第二組鍵值對數量 m，接著 m 行鍵和值。",
    output: "合併後字典鍵值對數量（整數）。",
    samples: [
      { input: "2\na 10\nb 20\n3\nb 30\nc 40\nd 50", output: "4" }
    ]
  },

  L015: {
    title: "字典鍵值條件篩選與輸出",
    description: "輸入多組鍵值對建立字典，輸出值大於指定整數的所有鍵值對，鍵排序，每行格式 key:value，若無則輸出 None。",
    input: "第一行為鍵值對數量 n，接下來 n 行為鍵和值（空白分隔），最後一行為判斷閾值（整數）。",
    output: "符合條件鍵值對，或 None。",
    samples: [
      { input: "4\na 10\nb 20\nc 30\nd 40\n25", output: "c:30\nd:40" },
      { input: "3\nx 5\ny 10\nz 15\n20", output: "None" }
    ]
  },

  M001: {
    title: "撰寫計算平方的函式",
    description: "請撰寫一個函式，輸入一個整數，回傳其平方值。",
    input: "一個整數。",
    output: "該整數的平方值（整數）。",
    samples: [
      { input: "5", output: "25" },
      { input: "-3", output: "9" }
    ]
  },

  M002: {
    title: "判斷質數的函式",
    description: "撰寫一個函式，輸入一個整數，回傳是否為質數（是回傳 True，否則 False）。",
    input: "一個大於 1 的整數。",
    output: "True 或 False。",
    samples: [
      { input: "7", output: "True" },
      { input: "9", output: "False" }
    ]
  },

  M003: {
    title: "計算列表元素總和的函式",
    description: "撰寫一個函式，輸入整數列表，回傳所有元素的總和。",
    input: "一行以空白分隔的整數列表。",
    output: "列表元素總和（整數）。",
    samples: [
      { input: "1 2 3 4 5", output: "15" },
      { input: "-1 0 1", output: "0" }
    ]
  },

  M004: {
    title: "將攝氏溫度轉換為華氏的函式",
    description: "撰寫一個函式，輸入攝氏溫度，回傳華氏溫度（浮點數，保留一位小數）。",
    input: "一個浮點數攝氏溫度。",
    output: "對應華氏溫度（保留一位小數）。",
    samples: [
      { input: "0", output: "32.0" },
      { input: "37", output: "98.6" }
    ]
  },

  M005: {
    title: "計算階乘的函式",
    description: "撰寫一個函式，輸入非負整數，回傳其階乘。",
    input: "一個非負整數。",
    output: "該整數的階乘（整數）。",
    samples: [
      { input: "5", output: "120" },
      { input: "0", output: "1" }
    ]
  },

  M006: {
    title: "判斷字串是否為迴文的函式",
    description: "撰寫一個函式，輸入一個字串，回傳該字串是否為迴文（是回傳 True，否則 False）。",
    input: "一個字串。",
    output: "True 或 False。",
    samples: [
      { input: "level", output: "True" },
      { input: "hello", output: "False" }
    ]
  },

  M007: {
    title: "計算兩數最大公因數的函式",
    description: "撰寫一個函式，輸入兩個整數，回傳它們的最大公因數（GCD）。",
    input: "兩個整數，以空白分隔。",
    output: "最大公因數（整數）。",
    samples: [
      { input: "12 18", output: "6" },
      { input: "7 13", output: "1" }
    ]
  },

  M008: {
    title: "將列表所有元素平方並回傳的新列表函式",
    description: "撰寫一個函式，輸入整數列表，回傳一個新列表，其中每個元素是原列表元素的平方。",
    input: "一行以空白分隔的整數列表。",
    output: "以空白分隔的新列表，元素為平方值。",
    samples: [
      { input: "1 2 3", output: "1 4 9" },
      { input: "-1 0 2", output: "1 0 4" }
    ]
  },

  M009: {
    title: "判斷輸入年份是否為閏年的函式",
    description: "撰寫一個函式，輸入一個年份，判斷是否為閏年（是回傳 True，否則 False）。",
    input: "一個整數年份。",
    output: "True 或 False。",
    samples: [
      { input: "2020", output: "True" },
      { input: "1900", output: "False" }
    ]
  },

  M010: {
    title: "計算費氏數列第 n 項的函式",
    description: "撰寫一個函式，輸入非負整數 n，回傳費氏數列第 n 項（0 項為 0，1 項為 1）。",
    input: "非負整數 n。",
    output: "費氏數列第 n 項（整數）。",
    samples: [
      { input: "0", output: "0" },
      { input: "5", output: "5" }
    ]
  },

  M011: {
    title: "判斷字串中是否包含所有母音的函式",
    description: "撰寫一個函式，輸入一個字串，判斷該字串是否包含全部 a, e, i, o, u 母音（忽略大小寫），是回傳 True，否則 False。",
    input: "一個字串。",
    output: "True 或 False。",
    samples: [
      { input: "Education", output: "True" },
      { input: "Hello", output: "False" }
    ]
  },

  M012: {
    title: "計算列表中最大連續遞增子序列長度的函式",
    description: "撰寫一個函式，輸入整數列表，回傳最大連續遞增子序列的長度。",
    input: "以空白分隔的整數列表。",
    output: "最大連續遞增子序列長度（整數）。",
    samples: [
      { input: "1 2 2 3 4 1 2 3 4 5", output: "5" },
      { input: "5 4 3 2 1", output: "1" }
    ]
  },

  M013: {
    title: "遞迴實作二分搜尋的函式",
    description: "撰寫一個遞迴函式，在已排序的整數列表中搜尋指定目標值，回傳該值的索引，找不到回傳 -1。",
    input: "第一行為已排序整數列表（空白分隔），第二行為目標整數。",
    output: "目標索引（整數），找不到為 -1。",
    samples: [
      { input: "1 3 5 7 9\n7", output: "3" },
      { input: "2 4 6 8 10\n5", output: "-1" }
    ]
  },

  M014: {
    title: "判斷括號是否配對正確的函式",
    description: "撰寫一個函式，輸入由 () [] {} 組成的字串，判斷括號是否正確配對（是回傳 True，否則 False）。",
    input: "由括號組成的字串。",
    output: "True 或 False。",
    samples: [
      { input: "()[]{}", output: "True" },
      { input: "([)]", output: "False" }
    ]
  },

  M015: {
    title: "計算兩數最大公因數與最小公倍數的函式",
    description: "撰寫一個函式，輸入兩個正整數，回傳最大公因數（GCD）與最小公倍數（LCM）。",
    input: "兩個正整數，以空白分隔。",
    output: "GCD 與 LCM，以空白分隔。",
    samples: [
      { input: "12 18", output: "6 36" },
      { input: "7 13", output: "1 91" }
    ]
  },

  N001: {
    title: "使用 lambda 計算平方",
    description: "撰寫一個 lambda 表達式，輸入一個整數，回傳該整數的平方。",
    input: "一個整數。",
    output: "該整數的平方（整數）。",
    samples: [
      { input: "4", output: "16" },
      { input: "-5", output: "25" }
    ]
  },

  N002: {
    title: "使用 lambda 過濾偶數列表",
    description: "撰寫一個 lambda 函式，用於過濾列表中的偶數元素，回傳新列表。",
    input: "以空白分隔的整數列表。",
    output: "過濾後只包含偶數的新列表，空白分隔。",
    samples: [
      { input: "1 2 3 4 5 6", output: "2 4 6" },
      { input: "7 9 11 13", output: "" }
    ]
  },

  N003: {
    title: "使用 lambda 計算兩數和",
    description: "撰寫一個 lambda 表達式，輸入兩個整數，回傳它們的和。",
    input: "兩個整數，以空白分隔。",
    output: "兩數之和（整數）。",
    samples: [
      { input: "3 5", output: "8" },
      { input: "-2 7", output: "5" }
    ]
  },

  N004: {
    title: "使用 lambda 計算列表中所有元素的平方和",
    description: "撰寫一個 lambda 函式，計算列表中所有元素平方的總和。",
    input: "以空白分隔的整數列表。",
    output: "所有元素平方和（整數）。",
    samples: [
      { input: "1 2 3", output: "14" },
      { input: "0 4 5", output: "41" }
    ]
  },

  N005: {
    title: "使用 lambda 排序字串列表（依長度）",
    description: "撰寫一個 lambda 函式，用於排序字串列表，依字串長度由短至長排序。",
    input: "以空白分隔的字串列表。",
    output: "排序後的字串列表，空白分隔。",
    samples: [
      { input: "apple cat banana dog", output: "cat dog apple banana" },
      { input: "hi hello a ab", output: "a hi ab hello" }
    ]
  },

  N006: {
    title: "使用 lambda 計算字串中大寫字母數量",
    description: "撰寫一個 lambda 函式，輸入一個字串，回傳其中大寫字母的數量。",
    input: "一個字串。",
    output: "大寫字母數量（整數）。",
    samples: [
      { input: "Hello World", output: "2" },
      { input: "python", output: "0" }
    ]
  },

  N007: {
    title: "使用 lambda 過濾字串列表中包含指定字母的元素",
    description: "撰寫一個 lambda 函式，過濾列表中包含字母 'a' 的字串。",
    input: "以空白分隔的字串列表。",
    output: "包含字母 'a' 的字串列表，空白分隔。",
    samples: [
      { input: "apple banana cat dog", output: "apple banana cat" },
      { input: "elephant tiger lion", output: "elephant" }
    ]
  },

  N008: {
    title: "使用 lambda 計算列表中奇數元素的平方和",
    description: "撰寫一個 lambda 函式，計算列表中所有奇數元素的平方和。",
    input: "以空白分隔的整數列表。",
    output: "奇數元素平方和（整數）。",
    samples: [
      { input: "1 2 3 4 5", output: "35" },
      { input: "6 8 10", output: "0" }
    ]
  },

  N009: {
    title: "使用 lambda 對字串列表依字母序反向排序",
    description: "撰寫一個 lambda 函式，對字串列表進行反向字母序排序。",
    input: "以空白分隔的字串列表。",
    output: "反向排序後的字串列表，空白分隔。",
    samples: [
      { input: "apple banana cat dog", output: "dog cat banana apple" },
      { input: "elephant tiger lion", output: "tiger lion elephant" }
    ]
  },

  N010: {
    title: "使用 lambda 對數字列表進行奇偶分組",
    description: "撰寫一個 lambda 函式，將列表中的數字分成奇數和偶數兩組，並回傳包含兩個子列表的列表。",
    input: "以空白分隔的整數列表。",
    output: "包含兩個子列表的列表，第一個是偶數列表，第二個是奇數列表。",
    samples: [
      { input: "1 2 3 4 5", output: "[[2,4],[1,3,5]]" },
      { input: "6 8 10", output: "[[6,8,10],[]]" }
    ]
  },

  N011: {
    title: "使用 lambda 及 filter 找出質數列表",
    description: "撰寫一個 lambda 函式搭配 filter，輸入一串整數，回傳所有質數的列表。",
    input: "以空白分隔的整數列表。",
    output: "質數列表（空白分隔）。",
    samples: [
      { input: "2 3 4 5 6 7 8 9", output: "2 3 5 7" },
      { input: "10 11 12 13", output: "11 13" }
    ]
  },

  N012: {
    title: "使用 lambda 和 reduce 計算列表中元素的乘積",
    description: "撰寫一個 lambda 函式搭配 reduce，計算整數列表中所有元素的乘積。",
    input: "以空白分隔的整數列表。",
    output: "所有元素的乘積（整數）。",
    samples: [
      { input: "1 2 3 4", output: "24" },
      { input: "5 6 7", output: "210" }
    ]
  },

  N013: {
    title: "使用 lambda 配合 map 將字串列表轉為其長度列表",
    description: "撰寫一個 lambda 函式搭配 map，輸入字串列表，回傳一個包含每個字串長度的列表。",
    input: "以空白分隔的字串列表。",
    output: "字串長度列表（空白分隔）。",
    samples: [
      { input: "apple cat banana", output: "5 3 6" },
      { input: "hi hello a", output: "2 5 1" }
    ]
  },

  N014: {
    title: "使用 lambda 過濾並排序列表中大於指定值的元素",
    description: "撰寫一個 lambda 函式，輸入整數列表與閾值，回傳所有大於閾值的元素並排序。",
    input: "第一行：整數列表（空白分隔）；第二行：閾值整數。",
    output: "排序後的大於閾值的元素列表（空白分隔）。",
    samples: [
      { input: "3 5 1 8 7\n4", output: "5 7 8" },
      { input: "10 2 15 6\n10", output: "15" }
    ]
  },

  N015: {
    title: "使用 lambda 搭配 sorted 對字典依值排序並回傳鍵列表",
    description: "撰寫一個 lambda 函式，輸入字典（鍵為字串，值為整數），回傳依值排序後的鍵列表。",
    input: "字典以 JSON 格式輸入，如 {\"a\":3,\"b\":1,\"c\":2}。",
    output: "依值排序後的鍵列表（空白分隔）。",
    samples: [
      { input: "{\"a\":3,\"b\":1,\"c\":2}", output: "b c a" },
      { input: "{\"x\":10,\"y\":5,\"z\":20}", output: "y x z" }
    ]
  }



};

function showCards() {
  const content = document.querySelector('.problem-list');
  content.innerHTML = '';
  let currentSection = '';  // 用來記錄上一張卡片的章節字母

  for (let id in questions) {
    const section = id[0];  // A, B, C...
    
    // 如果章節字母變了，就插入分隔線（但不在最前面）
    if (currentSection && section !== currentSection) {
      const divider = document.createElement('hr');
      divider.classList.add('section-divider');
      content.appendChild(divider);
    }
    currentSection = section;

    // 建立題目卡片
    const card = document.createElement('div');
    card.classList.add('problem-card');

    // 題號+標題
    const text = document.createElement('span');
    text.textContent = `${id}: ${questions[id].title}`;
    card.appendChild(text);

    // 已做勾勾
    if (user && userInfo[user]?.ac.includes(id)) {
      const check = document.createElement('span');
      check.textContent = '✔';
      check.classList.add('check-icon');
      card.appendChild(check);
    }

    // 綁定點擊顯示題目
    card.onclick = () => showQuestion(id);

    content.appendChild(card);
  }
}

document.addEventListener("DOMContentLoaded", showCards);




showCards();
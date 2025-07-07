let user = null;
const password = {
  'tommy' : '0705',
  'mcWhite0863' : 'Jerry1108',
  'Brian' : '1229'
};

const userInfo = {
  'tommy' : {
    'ac' : ['A001','B001'],
    'message' : {'sca':'ugtvg'}
  },
  'mcWhite0863' : {
    'ac' : ['A001','A002','A005','A006','E002'],
    'message' : []
  },
  'Brian' : {
    'ac' : ['A001'],
    'message' : {
      'A001' : {
        'correction':true,
        'description':'程式正確。首先有清楚記得建立變數的公式【名稱 = 值】。其次有正確使用print輸出，計算出兩變數的和。',
        'samplesCode': '<無>'
      },
      'B001' : {
        'correction':false, 
        'description':'程式錯誤之處為：題目敘述【輸入一行文字】，而不是請你宣告，因此應使用輸入語法【名稱 = input()】來定義str變數(字串)，最後使用print語法輸出。要注意的是，輸出時由於是輸出【變數】，因此不需要使用單引號或是雙引號將其包住喔。<br>(有問題可以使用表單打下你的問題，沒有問題看懂的話請記得在下次上課前再次繳交改正的程式碼，重新繳交的程式碼不能和範例程式碼相同，要自己再寫一遍。)',
        'samplesCode': 'name = input\nprint(name)'
      },
      'D001' : {
        'correction':false, 
        'description':'程式錯誤之處和B001相同：題目敘述【輸入一個字串】，因此應使用輸入語法【名稱 = input()】來定義str變數。你有正確使用len函式去計算字串的長度非常好，一點小小的問題再改更一下。<br>(有問題可以使用表單打下你的問題，沒有問題看懂的話請記得在下次上課前再次繳交改正的程式碼，重新繳交的程式碼不能和範例程式碼相同，要自己再寫一遍。)',
        'samplesCode': 'name = input\nprint(len(name))'
      },
      
    }
  }
}

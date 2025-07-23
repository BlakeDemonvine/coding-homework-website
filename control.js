let user = null;
const password = {
  'tommy' : '0705',
  'mcWhite0863' : 'Jerry1108',
  'Brian' : '1229',
  'Justin' : '0323'
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
    'ac' : ['A001','A011','B001','B002','D001'],
    'message' : {
         'A002' : {
            'correction':true,
            'description':'程式正確。使用到上課還沒說過的f-string（格式化字串）。下次可以試看看上課學到的round(), Math.ceil(), Math.floor()',
            'samplesCode': 'PI=3.257\nprint(round(PI*2,2))'
          },
          'B003' : {
            'correction':false,
            'description':'程式錯誤。並沒有使用到input()去輸入。正確應該要使用.split()去分開輸入之後依次輸出',
            'samplesCode': 'a,b,c = input().split()\nprint(a)\nprint(b)\nprint(c)'
          },
    }
  },
  'Justin' : {
    'ac' : ['A001'],
    'message' : {
      'A001' : {
        'correction':true,
        'description':'程式正確。首先有清楚記得建立變數的公式【名稱 = 值】。其次有正確使用print輸出，計算出兩變數的和。',
        'samplesCode': '<無>'
      },
    }
  },
}

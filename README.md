# Todoアプリ
[アプリはこちら](https://yk-port-react-todo.firebaseapp.com/)
- localStorage を使って一時的に情報を保存
- React Hooks API を使って状態管理
- デザインフレームワークは material-ui を使用

***

## state構成
```
state = {
  groupList: [
    { id: '1', label: '全て' },
    { id: '2', label: '優先度：高' },
    { id: '3', label: '優先度：中' },
    { id: '4', label: '優先度：低' },
  ],
  selectedGroup: 1,
  todoList: {
    '全て': [
      { id: 1, label: 'Todo1', flag: 'high', completed: false },
      { id: 2, label: 'Todo2', flag: 'mid', completed: false },
      { id: 3, label: 'Todo3', flag: 'row', completed: false },
    ],
    '優先度：高': [
      { id: 1, label: 'Todo1', flag: 'high', completed: false },
    ],
    '優先度：中': [
      { id: 2, label: 'Todo2', flag: 'mid', completed: false },
    ]
    '優先度：低': [
      { id: 3, label: 'Todo3', flag: 'row', completed: false },
    ]
  },
}
```

## Actions
```
ADD_TODO
EDIT_TODO
COMPLETE_TODO
DELETE_TODO

ADD_GROUP
EDIT_GROUP
DELETE_GROUP
SELECT_GROUP
```

## Reducers
`todoReducer`
| ADD_TODO | EDIT_TODO | COMPLETE_TODO | DELETE_TODO |
| :------: | :-------: | :-----------: | :---------: |
| todoオブジェクトを追加 | 選択されたidのlabelを変更 | 選択されたidのcompleteのbooleanを切替 | 選択されたidのオブジェクトを削除 |

`groupReducer`
| ADD_GROUP | EDIT_GROUP | SELECT_GROUP | DELETE_GROUP |
| :-------: | :--------: | :----------: | :----------: |
| groupオブジェクトを追加 | 選択されたidのlabelを変更 | selectedGroupの値を選択されたidに変更 | 選択されたidのオブジェクトを削除 |

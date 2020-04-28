# Todoアプリ
[アプリはこちら](https://yk-port-react-todo.firebaseapp.com/)
- localStorage を使って一時的に情報を保存
- React Hooks API を使って状態管理
- デザインフレームワークは material-ui を使用

***

## state構成
### groupState
```
const groupState = {
  groupList: [
    { id: '1', label: '全て' },
    { id: '2', label: '優先度：高' },
    { id: '3', label: '優先度：中' },
    { id: '4', label: '優先度：低' },
  ],
  selectedGroup: 1,
}
```

### todoState
```
const todoState = {
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

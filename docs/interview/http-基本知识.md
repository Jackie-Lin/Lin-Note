## 1. 现代浏览器为何要禁用第三方 cookie

- 为了用户的安全 (安全和隐私是浏览器永恒的话题)
- 第三方 cookie 会记录用户的行为和数据, 方便做广告
- 有些浏览器默认禁止, Chrome 增加了 SameSite (谷歌有广告)



## 2. 实现心跳检验 - 用于短线重连

```javascript
function Heartbeaet() {
    let timer = 0
    function fn() {
        console.log('hello')
        timer = setTimeout(fn, 1000) // “心跳” 经量避免使用 setInterval
    }
    timer = setTimeout(fn, 1000)
    
    return () => {
        console.log('销毁成功')
        clearTimeout(timer) // 组件销毁
    }
}
```



## 3. https 的加密


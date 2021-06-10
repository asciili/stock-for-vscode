# Stock for VSCode

## summary

extension which can shwo `realtime stock price`,`balance`,`alarm`

## description

when enabled, show below information on `statusBar`：

```
💰 28.57 「500ETF」7.44 0.26% 34.23% 28.57 「300ETF」4.81 -0.37%
```


## config

### config method

config in user settings by `cmd + shift + p` type Setting and select.

### config example

```javascript
{
  "stock-for-vscode": {
    "api": "netease",

    "interval": 10,

    "up_color": "#ffffff",

    "down_color": "#000000",

    "up_percent": 0.5, 

    "down_percent": -0.5, 

    "stocks": [
      {
        "name": "500ETF",

        // symbol，exchange+code
        // exchange: SH,SZ,HK,US
        "code": "SH510500",
      },
      {
        "name": "300ETF",
        "code": "SH510300",
      },
    ]
  }
}
```


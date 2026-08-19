# AboutMe

李冠霖的個人履歷網站，以 [Create React App](https://github.com/facebook/create-react-app) 建置，版型改編自 Styleshout 的 Ceevee 主題。

線上網址：https://youmu257.github.io/AboutMe/

## 本機開發

```bash
npm install
npm start
```

開發伺服器會在 [http://localhost:3000](http://localhost:3000) 啟動，存檔會自動重新整理。

## 測試

```bash
npm test
```

## 建置

```bash
npm run build
```

輸出到 `build/` 資料夾，`package.json` 裡的 `homepage` 欄位會讓資源路徑正確對應到 `/AboutMe` 這個子路徑。

## 部署

推送到 `master` 分支會觸發 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)：自動跑測試、build，再部署到 GitHub Pages。

第一次設定時，需要到 repo 的 **Settings → Pages → Build and deployment → Source** 手動切成「**GitHub Actions**」，之後每次推 `master` 就會自動更新線上版本。

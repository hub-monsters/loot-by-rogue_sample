# loot-by-rogue_sample
Loot By Rogue NFTとの連携について、簡単に検証するために作成

# 実行手順
1. ライブラリのインストール
   ```
    npm install
    ```


2. 環境変数の設定
   .envファイルを作成し、下記値を設定
    ```
    PRIVATE_KEY=<秘密鍵>
    API_URL_MCH="..."
    API_URL_SHIBUYA=""..."
    API_KEY_SHIBUYA="..."
    API_URL_MUMBAI=<RPC URL *AlchemyやInfuraで取得>
    API_KEY_MUMBAI=<API KCY *Polygonsacan等で取得>
    ```

3. コントラクトをデプロイ
   ```
   npx hardhat run scrits/deploy.ts --network mumbai
   ```
   ※上記コマンド実行後に表示されるコントラクトアドレスを控える

4. 手順3でデプロイしたコントラクトでsafeMint関数を実行し、Loot NFTを取得する
   1. scripts/safeMint.ts を変更する
        ```
        const hre = require("hardhat");
        const { ethers } = require('hardhat');
        const LootNFTAddress = <手順3で控えたアドレス>;

        ...
        ``` 
   2. 下記コマンドを実行し、safeMint関数を実行する
        ``` 
        npx hardhat run scripts/safeMint.ts --network mumbai
        ``` 
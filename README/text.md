
# WSL 環境構築：
1. Install Node
```
sudo apt install nodejs npm
npm --version
```
2. Install TypeScript
```
sudo npm install -g typescript ts-node
tsc --version
```
https://qiita.com/pgDora56/items/1459bb83e3bc6ba84a9e

===

0. yarnのインストール
```
manager@MasayaIwamoto:~/App/TodoApp$ npm install -g yarn

added 1 package in 951ms
```


1. yarnコマンドでpackage.jsonファイルの作成
```
manager@MasayaIwamoto:~/App/TodoApp/App/server$ yarn init -y
yarn init v1.22.22
warning The yes flag has been set. This will automatically answer yes to all questions, which may have security implications.
success Saved package.json
Done in 0.04s.
```
2. tsconfig.jsonファイルの作成
```
manager@MasayaIwamoto:~/App/TodoApp/App/server$ yarn add -D typescript @types/node
yarn add v1.22.22
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 3 new dependencies.
info Direct dependencies
├─ @types/node@25.0.3
└─ typescript@5.9.3
info All dependencies
├─ @types/node@25.0.3
├─ typescript@5.9.3
└─ undici-types@7.16.0
Done in 2.38s.
```
3. tsconfig.jsonの作成
```
manager@MasayaIwamoto:~/App/TodoApp/App/server$ yarn tsc --init
yarn run v1.22.22
$ /home/manager/App/TodoApp/App/server/node_modules/.bin/tsc --init

Created a new tsconfig.json                                                                                             
                                                                                                                     TS 
You can learn more at https://aka.ms/tsconfig
Done in 0.23s.
```

4. Expressの追加
```
manager@MasayaIwamoto:~/App/TodoApp/App/server$ yarn add express
yarn add v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 45 new dependencies.
info Direct dependencies
└─ express@5.2.1
info All dependencies
├─ accepts@2.0.0
├─ body-parser@2.2.1
├─ bytes@3.1.2
├─ call-bind-apply-helpers@1.0.2
├─ content-disposition@1.0.1
├─ cookie-signature@1.2.2
├─ cookie@0.7.2
├─ depd@2.0.0
├─ dunder-proto@1.0.1
├─ ee-first@1.1.1
├─ es-define-property@1.0.1
├─ es-object-atoms@1.1.1
├─ express@5.2.1
├─ finalhandler@2.1.1
├─ forwarded@0.2.0
├─ get-intrinsic@1.3.0
├─ get-proto@1.0.1
├─ has-symbols@1.1.0
├─ hasown@2.0.2
├─ http-errors@2.0.1
├─ iconv-lite@0.7.1
├─ inherits@2.0.4
├─ ipaddr.js@1.9.1
├─ is-promise@4.0.0
├─ math-intrinsics@1.1.0
├─ media-typer@1.1.0
├─ merge-descriptors@2.0.0
├─ mime-db@1.54.0
├─ negotiator@1.0.0
├─ once@1.4.0
├─ path-to-regexp@8.3.0
├─ proxy-addr@2.0.7
├─ raw-body@3.0.2
├─ router@2.2.0
├─ safer-buffer@2.1.2
├─ send@1.2.1
├─ serve-static@2.2.1
├─ setprototypeof@1.2.0
├─ side-channel-list@1.0.0
├─ side-channel-weakmap@1.0.2
├─ side-channel@1.1.0
├─ toidentifier@1.0.1
├─ unpipe@1.0.0
├─ vary@1.1.2
└─ wrappy@1.0.2
Done in 1.99s.
```
5. Typescriptを使用するためのコマンドを追加
```
yarn add -D @types/express

manager@MasayaIwamoto:~/App/TodoApp/App/server$ yarn add -D @types/express
yarn add v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 9 new dependencies.
info Direct dependencies
└─ @types/express@5.0.6
info All dependencies
├─ @types/body-parser@1.19.6
├─ @types/connect@3.4.38
├─ @types/express-serve-static-core@5.1.0
├─ @types/express@5.0.6
├─ @types/http-errors@2.0.5
├─ @types/qs@6.14.0
├─ @types/range-parser@1.2.7
├─ @types/send@1.2.1
└─ @types/serve-static@2.2.0
Done in 1.18s.
```

6. CORSのインストール：
```
yarn add cors @types/cors
anager@MasayaIwamoto:~/App/TodoApp/App/server$ yarn add cors @types/cors
yarn add v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
success Saved 3 new dependencies.
info Direct dependencies
├─ @types/cors@2.8.19
└─ cors@2.8.5
info All dependencies
├─ @types/cors@2.8.19
├─ cors@2.8.5
└─ object-assign@4.1.1
Done in 1.00s.
```

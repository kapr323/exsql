# Stack
- React
- Electron.js
- Vite
- SQL Engine (vlastní?)
- Typescript, Javascript, CommonJS

- Do frontend/src/components/ přesunuj UI bloky jako tlačítka, formuláře, tabulky.
- Do backend/engine/ dáš parser SQL dotazů, plánovač, executor apod.
- Do shared/ přesouvej vše, co se bude používat napříč – třeba typy tabulek, formát dat apod.


# Struktura projektu
```
exsql/
│
├── package.json
├── tsconfig.json
├── start-dev.ts
├── main.cjs              ← Electron main process
├── preload.js
├── index.html            ← použití pro build
│
├── frontend/             ← React / Vite aplikace
│   ├── src/
│   │   ├── components/   ← znovupoužitelné UI komponenty
│   │   ├── pages/        ← jednotlivé „obrazovky“
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── vite.config.ts    ← můžeš sem přesunout později
│
├── backend/              ← vlastní SQL engine, logika
│   ├── engine/
│   │   ├── parser.ts
│   │   ├── executor.ts
│   │   └── ...
│   └── storage/          ← ukládání dat (JSON / binárky / atd.)
│
├── shared/               ← společné typy, utils, šifrování atp.
│   ├── types.ts
│   ├── utils.ts
│   └── constants.ts
```

# Zásady vývoje
- Používej relativní cesty
    - např. ```path.join(__dirname, "data", "mydb.sql");```
- Nepoužívej Windows-only příkazy ve start-dev.ts
    - Např. start, dir, cls – místo toho npx, node, rm -rf (nebo použij rimraf pro mazání).
- Využívej balíčky, které myslí na cross-platform
    - electron-builder – pro build a balíčkování aplikací pro Win/Mac/Linux
    - cross-env – pro definování proměnných v scripts
    - rimraf – cross-platform náhrada rm -rf
- V package.json používej cross-env

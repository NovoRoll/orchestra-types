# How to add types

1. If src folder does not exist - create it in the root
2. Add your source typescript files into src folder
3. Launch $ npm run lint
4. If linter output has errors - fix it
5. Launch $ npm run build. Typescript will generate declaration files into dist folder. Each source file will correspond to similar declaration file.
6. If you add new namespace - create new sub directory in the lib.
7. Replace declaration files to lib.

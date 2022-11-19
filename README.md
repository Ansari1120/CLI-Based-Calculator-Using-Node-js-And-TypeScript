# CLI-Based-Calculator-Using-Node-js-And-TypeScript
this is the Source code of Node js and Typescript Based Calculator Runs on the Command line Interface , its package Also published at NPM Marketplace.
to run calculator do : npm i npm i project-04-cli-based-calculator-node-and-typescript and npx CalCli

1) added an cli User Input with package Prompt Sync from NPM 


2) initialized typescript enviroment through npx tsc -init


3) intialized node js enviroment npm init -yes



4)Add .js file with this at top :
#! /usr/bin/env node


5)setup Json file(example) : 

"bin": {
	"multiply": "bin/index.js"
},



6)Test package locally(for example : 

npx multiply


7)Add Dependencies and import it to your main file : 

npm i prompt-sync


8)create or login your npm account

npm login


9)publish your package

npm publish



10) added calculator basic opetaions features - , + , * , /


11) taking user input with strict checkings (empty inputs , only one input , aplphabet input instead of numeric).

#!/usr/bin/env node

import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

let ballanceVlad = 1000;
let ballanceNat = 10;
let qVlad;
let qNat;
let qUser;
let WDVlad;
let yN;
let qq3;
let q3;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.neon("WELCOME to my ATM \n");

  await sleep();
  rainbowTitle.stop();
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner("Checking answer...").start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Welcome to My ATM` });
  } else {
    spinner.error({ text: `please register ` });
    process.exit(1);
  }
}

async function question1() {
  const answers = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "Hello, please enter your Name\n",
    choices: ["Vladimir", "Natasha"],
  });
  qUser = answers.question_1;
}

async function ifqUser() {
  if ((qUser = "Vladimir")) {
    return questVlad();
  } else {
    return questNat();
  }
}

async function questVlad() {
  const answers = await inquirer.prompt({
    name: "question_Vlad",
    type: "list",
    message: "What do you want to do\n",
    choices: ["Check Ballance", "Deposit", "Withdraw"],
  });
  qVlad = answers.question_Vlad;
  await ifquestVlad();
}

async function questNat() {
  const answers = await inquirer.prompt({
    name: "question_Nat",
    type: "list",
    message: "What do you want to do\n",
    choices: ["Check Ballance", "Deposit", "Withdraw"],
  });
  qNat = answers.question_Nat;
  await ifquestNat();
}
// async function gate() {
//   if (questNat()) {
//     return ifquestNat();
//   } else {
//     return ifquestVlad();
//   }
// }

async function helloUser() {
  const spinner = createSpinner("please wait...").start();
  await sleep();
  spinner.stop();
  console.log(`Hallo ${qUser}\n`);
}

async function ifquestVlad() {
  if (qVlad === "Deposit") {
    return qDepositVlad();
  }
  if (qVlad === "Check Ballance") {
    return checkBallanceVlad();
  } else {
    return qwithDrawVlad();
  }
}

async function ifquestNat() {
  if (qNat === "Deposit") {
    return qDepositNat();
  }
  if (qNat === "Check Ballance") {
    return checkBallanceNat();
  } else {
    return qwithDrawNat();
  }
}

async function checkBallanceVlad() {
  const spinner = createSpinner("please wait...").start();
  await sleep();
  spinner.stop();
  console.log(`your Ballance is ${ballanceVlad}`);
}
async function checkBallanceNat() {
  const spinner = createSpinner("please wait...").start();
  await sleep();
  spinner.stop();
  console.log(`your Ballance is ${ballanceNat}`);
}

async function qwithDrawVlad() {
  const answers = await inquirer.prompt({
    name: "question_WDVlad",
    type: "input",
    message: "Enter the ammount \n",
  });
  const spinner = createSpinner("please wait...").start();
  await sleep();
  spinner.stop();
  WDVlad = answers.question_WDVlad;
  const wdNow = parseInt(WDVlad);
  const WD = ballanceVlad - wdNow;
  console.log(`jumlah uang yang anda tarik sejumlah ${wdNow}\n`);
  console.log(`jumlah uang anda sekarang adalah ${WD}\n`);
}
async function qwithDrawNat() {
  const answers = await inquirer.prompt({
    name: "question_WDNat",
    type: "input",
    message: "Enter the ammount \n",
  });
  const spinner = createSpinner("please wait...").start();
  await sleep();
  spinner.stop();
  const wdNow = parseInt(answers.question_WDNat);
  const WDNat = ballanceNat - wdNow;
  console.log(`jumlah uang yang anda tarik sejumlah ${wdNow}\n`);
  console.log(`jumlah uang anda sekarang adalah ${WDNat}\n`);
}

async function qDepositVlad() {
  const answers = await inquirer.prompt({
    name: "question_DepVlad",
    type: "input",
    message: "masukan jumlah yang anda inginkan\n",
  });
  const spinner = createSpinner("please wait...").start();
  await sleep();
  spinner.stop();
  q3 = answers.question_DepVlad;
  const Quest3 = parseInt(q3);
  const balNow = ballanceVlad + Quest3;
  qq3 = balNow;
  console.log(`jumlah saldo anda adalah ${balNow}\n`);
}
async function qDepositNat() {
  const answers = await inquirer.prompt({
    name: "question_DepNat",
    type: "input",
    message: "masukan jumlah yang anda inginkan\n",
  });
  const spinner = createSpinner("please wait...").start();
  await sleep();
  spinner.stop();
  const Quest3 = parseInt(answers.question_DepNat);
  const balNow = ballanceNat + Quest3;
  qq3 = balNow;
  console.log(`jumlah saldo anda adalah ${balNow}\n`);
}

async function yesNo() {
  const answers = await inquirer.prompt({
    name: "question_YN",
    type: "list",
    message: "Would you like to Exit\n",
    choices: ["Yes", "No"],
  });
  yN = answers.question_YN;
}

async function exit() {
  if (yN === "Yes") {
    process.exit(0);
  } else {
    return question1();
  }
}

await welcome();
await question1();
await helloUser();
await ifqUser();
// await gate();
await yesNo();
await exit();

#!/usr/bin/env node

import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

import { createSpinner } from "nanospinner";

const users = [
  {
    username: "reandy",
    password: "123",
    role: "admin",
  },
  {
    username: "romeo",
    password: "password123member",
    role: "member",
  },
];

// console.log(users[0].username);
var ballance = 0;
let q2;
let q3;
let qq3;
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

async function checkBallance() {
  const spinner = createSpinner("please wait...").start();
  await sleep();
  spinner.stop();
  console.log(`your Ballance is ${ballance}`);
}

async function question1() {
  const answers = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "Enter your Name\n",
    choices: ["Vladimir", "Natasha"],
  });
  return handleAnswer(answers.question_1 === "Vladimir");
}

async function question2() {
  const answers = await inquirer.prompt({
    name: "question_2",
    type: "list",
    message: "What do you want to do\n",
    choices: ["Check Ballance", "Deposit", "Withdraw"],
  });
  q2 = answers.question_2;
}

async function ifquestion() {
  if (q2 === "Deposit") {
    return qDeposit();
  }
  if (q2 === "Check Ballance") {
    return checkBallance();
  } else {
    return qwithDraw();
  }
}

async function qwithDraw() {
  const answers = await inquirer.prompt({
    name: "question_3",
    type: "input",
    message: "Enter the ammount \n",
  });
  const spinner = createSpinner("please wait...").start();
  await sleep();
  spinner.stop();
  const wdNow = parseInt(answers.question_3);
  const WD = qq3 - wdNow;
  console.log(`jumlah uang yang anda tarik sejumlah ${wdNow}\n`);
  const spinner2 = createSpinner("please wait...").start();
  await sleep();
  spinner.stop();
  console.log(`jumlah uang anda sekarang adalah ${WD}\n`);
}

async function qDeposit() {
  const answers = await inquirer.prompt({
    name: "question_3",
    type: "input",
    message: "masukan jumlah yang anda inginkan\n",
  });
  const spinner = createSpinner("please wait...").start();
  await sleep();
  spinner.stop();
  q3 = answers.question_3;
  const Quest3 = parseInt(q3);
  const balNow = ballance + Quest3;
  qq3 = balNow;
  console.log(`jumlah saldo anda adalah ${balNow}\n`);
}

await welcome();
await question1();
await question2();
// await createspinconsole.log(q2);
await ifquestion();
await question2();
await ifquestion();

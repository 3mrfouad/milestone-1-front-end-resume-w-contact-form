/* cSpell:disable */
/*
----------------------------
Front-End Project DOCSTRING
----------------------------
Title: Front-End Project
Purpose:Resume with Validating Contact Form
Author: Amr Fouad
Date of last edit: september xx, 2020 xx:xx am
*/
/*
*===============================================
                HTML STRUCTURE
*===============================================
*/
/*
------------------------------------------------ 
Define document elements (Tags)
------------------------------------------------
*/
/* Divisions */
/* Footer */
/* Generic breakline */
/* Headers */
/* Form */
/* Wrong Char List */
/* Paragraphs */
/* Images */
/* 
------------------------------------------------
Assign elements parameters 
------------------------------------------------
*/
/* Elements IDs */
/* Elements Text Content */
/* Others */
/*
------------------------------------------------ 
Layout he page structure (skeleton)
------------------------------------------------
*/
/* HTML Body */
/* HTML DIVs */
/* HTML Forms */
/* HTML UL */
/* HTML Footer */
/*
*==================================================
                JS Logic
*==================================================
*/
/* Global Variables */
/* Start */
/* Event listener */
/* Functions*/

/*
*==================================================
            GLOBAL VARIABLES DEFINITION
*==================================================
*/

const getInTouchForm = document.getElementById("contact-form");
const name = document.getElementById("name");
const emailID = document.getElementById("emailid");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const nameErrorMsg = document.getElementById("nameerror");
const emailErrorMsg = document.getElementById("emailerror");
const subjectErrorMsg = document.getElementById("subjecterror");
const messageErrorMsg = document.getElementById("messageerror");
const swearWordErrorMsg = document.getElementById("swearworderror");
const emailFormatErrorMsg = document.getElementById("emailformaterror");

/*
*==================================================
            ON LOAD INITIALIZATION LOGIC
*==================================================
*/

document.body.onload = InitializePage();

/*
*==================================================
                CARDS ACCORDION LOGIC
*==================================================
*/

document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("accordion-btn-active");
  });
});

/*
*==================================================
            MAILTO VIA CONTACT FORM LOGIC
*==================================================
*/

getInTouchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (GetInTouchFormValidation() == 0) {
    const emailSubjectMod = `${subject.value} [From: ${name.value}]`;
    window.location.href = `mailto:${emailID.value}&subject=${emailSubjectMod}&body=${message.value}`;
  }
});

/*
*==================================================
            ON LOAD INITIALIZATION FUNCTION
*==================================================
*/
function InitializePage() {
  name.value = "";
  emailID.value = "";
  subject.value = "";
  message.value = "";
}

/*
*==================================================
            FORM VALIDATION FUNCTION
*==================================================
*/
function GetInTouchFormValidation() {
  const swearWords = ["feldercarb", "frack", "skinjob", "vulgacarb"];
  let errorsCntr = 0;
  let swearingCntr = 0;

  if (name.value == "") {
    nameErrorMsg.style.display = "block";
    errorsCntr++;
  } else {
    nameErrorMsg.style.display = "none";
  }
  if (emailID.value == "") {
    emailErrorMsg.style.display = "block";
    errorsCntr++;
  } else {
    emailErrorMsg.style.display = "none";
  }
  if (subject.value == "") {
    subjectErrorMsg.style.display = "block";
    errorsCntr++;
  } else {
    subjectErrorMsg.style.display = "none";
  }
  if (message.value == "") {
    messageErrorMsg.style.display = "block";
    errorsCntr++;
  } else {
    messageErrorMsg.style.display = "none";
  }

  for (word of swearWords) {
    if (
      message.value.includes(word)||
      name.value.includes(word)||
      emailID.value.includes(word)||
      subject.value.includes(word)
    ) {
      swearingCntr++;
    }
  }
  if (swearingCntr != 0) {
    swearWordErrorMsg.style.display = "block";
    confirm(
      "This is a professional website, and use of inappropriate words won't be tolerated"
    );
    errorsCntr++;
  }
  else{
    swearWordErrorMsg.style.display = "none";
  }
  if(!ValidateEmail()){
    emailFormatErrorMsg.style.display = "block";
    errorsCntr++;
  }
  else{
    emailFormatErrorMsg.style.display = "none";
  }
  return errorsCntr;
}

/*
*==================================================
          EMAIL FORMAT VALIDATION FUNCTION
*==================================================
*/

function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailID.value))
  {
    return (true)
  }
    return (false)
}

/**
 * Citation: Borrowed code to validate the email ID format.
 * Source: https://www.w3resource.com/javascript/form/email-validation.php
 * Reason: I didn't know a straight forward method and while researching found this simple solution.
 * How it works? It compares the two email id parts around the @ symbol. 
 * the id part may be up to 64 characters long and domain name may be up to 253 characters. 
 * 
 * The function checks the id part if contains the following ASCII characters:
 * Uppercase (A-Z) and lowercase (a-z) English letters.
 * Digits (0-9).
 * Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
 * Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
 * 
 * The domain name [for example com, org, net, in, us, info] part contains letters, digits, hyphens, and dots. 
 * 
 */



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
*==================================================
            GLOBAL VARIABLES DEFINITION
*==================================================
*/

/* DOM ELEMENTS DEFINITION */
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

/* EVENT LISTENER */
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

/* EVENT LISTENER */
getInTouchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (GetInTouchFormValidation()) {
    const emailSubjectMod = `${subject.value} __ From: ${name.value}`;
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
  /* EMPTY FORM FIELDS VALIDATION */
  if (name.value == "") {
    nameErrorMsg.style.display = "block";
    name.classList.add("empty-field-error");
    errorsCntr++;
  } else {
    nameErrorMsg.style.display = "none";
    name.classList.remove("empty-field-error");
  }
  if (emailID.value == "") {
    emailErrorMsg.style.display = "block";
    emailID.classList.add("empty-field-error");
    errorsCntr++;
  } else {
    emailErrorMsg.style.display = "none";
    emailID.classList.remove("empty-field-error");
  }
  if (subject.value == "") {
    subjectErrorMsg.style.display = "block";
    subject.classList.add("empty-field-error");
    errorsCntr++;
  } else {
    subjectErrorMsg.style.display = "none";
    subject.classList.remove("empty-field-error");
  }
  if (message.value == "") {
    messageErrorMsg.style.display = "block";
    message.classList.add("empty-field-error");

    errorsCntr++;
  } else {
    messageErrorMsg.style.display = "none";
    message.classList.remove("empty-field-error");
  }
  /* TEXT CONTAINS SWEARWORDS VALIDATION */
  for (word of swearWords) {
    if (
      message.value.includes(word) ||
      name.value.includes(word) ||
      emailID.value.includes(word) ||
      subject.value.includes(word)
    ) {
      swearingCntr++;
    }
  }
  if (swearingCntr != 0) {
    swearWordErrorMsg.style.display = "block";
    alert(
      "This is a professional website, and use of inappropriate words won't be tolerated",
      "Warning"
    );
    errorsCntr++;
  } else {
    swearWordErrorMsg.style.display = "none";
  }
  /* EMAIL ID FORMAT VALIDATION */
  if (!ValidateEmail()) {
    emailFormatErrorMsg.style.display = "block";
    emailID.classList.add("empty-field-error");
    errorsCntr++;
  } else {
    emailFormatErrorMsg.style.display = "none";
    emailID.classList.remove("empty-field-error");
  }
  return Boolean(errorsCntr == 0);
}

/*
*==================================================
          EMAIL FORMAT VALIDATION FUNCTION
*==================================================
*/

function ValidateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailID.value)) {
    return true;
  }
  return false;
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
 * Character . ( period, dot or full-stop) provided that it is not the first or last character and it will not come one after the other.
 *
 * The domain name [for example com, org, net, in, us, info] part contains letters, digits, hyphens, and dots.
 *
 * More details: I tried to understand more about regular expressions but apparently it is a mini programming
 * language by itself, I have skimmed through O'REILLY book called "Introducing Regular Expressions" and I got the
 * primary idea, I guess I will need more time if mastering regular expressions so I can write codes on my own.
 *
 * Alternative solution: I could have written alternative code to validate the email ID using regular JavaScript
 * loops and decision syntax but it would have been much longer of a code.
 */

/*
*==================================================
            OVERLAY NAV MENU LOGIC
*==================================================
*/

const closeBtn = document.getElementById("closebtn");
const openBtn = document.getElementById("openbtn");

closeBtn.addEventListener("click", closeNav);
openBtn.addEventListener("click", openNav);

function closeNav() {
  document.getElementById("overlay-nav").style.height  = "0%";
}
function openNav() {
  document.getElementById("overlay-nav").style.height  = "100%";
}

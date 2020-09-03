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
                CARDS ACCORDION LOGIC
*==================================================
*/

document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("accordion-btn-active");
  });
});

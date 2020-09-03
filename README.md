/* cspell:disable */
#Aug 28, 2020 Milestone 1: Front-End Project (Resume with Validating Contact Form)
==============================================================================================

Title: Front-End Project
Purpose:Resume with Validating Contact Form
Author: Amr Fouad

==============================================================================================

Assignment: https://docs.google.com/document/d/1rTWkjAguu10WuYsdmlIpvv5Ukd0pZWbzlbpNctVKN4M/edit?usp=sharing

Trello board: https://trello.com/b/AFdr0k2a

GitHub Repo: https://github.com/TECHCareers-by-Manpower/milestone-1-front-end-resume-w-contact-form-3mrfouad.git

#Resources: The following weblinks has been referenced during the project execution. If any code snippet is used, a citation would be added to the corresponding code.

==============================================================================================

Citation:

(1) File Name: main.css

Code Borrowed and sing @ Import in "main.css" to include "normalize.css" that resets the browser defaults. 

Purpose: Include "initialize.css" rests the browsers' defaults and give better handle on the CSS sytling and layout.
Source:
https://www.w3schools.com/cssref/pr_import_rule.asp (guide on using @import)
https://necolas.github.io/normalize.css/ (link to download normalize.css)

==============================================================================================

(2) File Name: main.css

 Citation: Css code that must be in the project folders per FontAwesome documentation.
 
 Source: https://fontawesome.com
 
 Reason: Import FontAwesome icons into the project to fulfill the requirements/challanges
  
==============================================================================================

(3) File Name: scripts.js

 Borrowed code to validate the email ID format.
 
 Source: https://www.w3resource.com/javascript/form/email-validation.php
 
 Reason: I didn't know a straight forward method and while researching found this simple solution.
 How it works? It compares the two email id parts around the @ symbol.
 the id part may be up to 64 characters long and domain name may be up to 253 characters.
 
 The function checks the id part if contains the following ASCII characters:
 Uppercase (A-Z) and lowercase (a-z) English letters.
 Digits (0-9).
 Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
 Character . ( period, dot or full-stop) provided that it is not the first or last character and it will not come one after the other.
 
 The domain name [for example com, org, net, in, us, info] part contains letters, digits, hyphens, and dots.
 
 More details: I tried to understand more about regular expressions but apparently it is a mini programming
 language by itself, I have skimmed through O'REILLY book called "Introducing Regular Expressions" and I got the
 primary idea, I guess I will need more time if mastering regular expressions so I can write codes on my own.
 
 Alternative solution: I could have written alternative code to validate the email ID using regular JavaScript
 loops and decision syntax but it would have been much longer of a code.
 

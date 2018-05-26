/* 
 * Date: 05/25/2018
 * Author: Tim Jodoin, Justin Wams.
 * Purpose: Reduce the load on webservers loading clones of pages for language.
 * Reason: Becasue this is the proper way to do it. 
 * 
 */

app.factory('translationService', function() {  
    return { translate: translate };
	
	function translate(page) {
		
		var languageFlag = "en"; // I still need to add the language change function 
		
		if(localStorage.getItem("languageFlag") === "fr") {
			languageFlag = "fr";
		} else {
			languageFlag = "en";
		}
		
		if(languageFlag === "en") {
			
			switch(page) {
				
                            case "home.html":
                                return {
                                    titleMain: "Welcome to Correctional Service Canada",
                                    paragraph1: "This is a Paragraph",
                                    button1: "Button1",
                                    textInput1: "Write stuff in here",
                                    textInputPlaceHolder1: "Letters go here",
				}
                            
                            case "Login.html":
                                return {
                                    titleMain: "Welcome to Correctional Service Canada",
                                    paragraph1: "This is a Paragraph",
                                    email: "Email Address",
                                    password: "Password",
				}
                                
                            case "Page1.html":
                                return {
                                    titleMain: "Welcome to Correctional Service Canada",
                                    paragraph1: "This is a Paragraph",
                                    button1: "Button1",
                                    textInput1: "Write stuff in here",
                                    textInputPlaceHolder1: "Letters go here",
				}    
                            
                            default:
                                break;
			}
               
		}
                else if(languageFlag ==='fr'){
                    switch(page) {				
                        case "home.html":
                                return {
                                    titleMain: "Bienvenue au Service correctionnel du Canada",
                                    paragraph1: "Ecrire des choses ici",
                                    button1: "Button1",
                                    textInput1: "Write stuff in here",
                                    textInputPlaceHolder1: "Letters go here",
				}
                            
                            case "Login.html":
                                return {
                                    titleMain: "Bienvenue au Service correctionnel du Canada",
                                    paragraph1: "Ecrire des choses ici",
                                    email: "Adresse e-mail",
                                    password: "mot de passe",
				}
                                
                            case "Page1.html":
                                return {
                                    titleMain: "Bienvenue au Service correctionnel du Canada",
                                    paragraph1: "Ecrire des choses ici",
                                    button1: "Button1",
                                    textInput1: "Write stuff in here",
                                    textInputPlaceHolder1: "Letters go here",
				}
                                
                        default:
                            break;
                    }
                }
	}
});


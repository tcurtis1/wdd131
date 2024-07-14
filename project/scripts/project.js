
// Make sure doc loads and is parsed before we run.
document.addEventListener("DOMContentLoaded", function() {
    
    
    // Get the current year - 
    const currentYear = new Date().getFullYear();
    //  alert("Current year is: " + currentYear);
    // Get the last modified date
    const lastModifiedDate = document.lastModified;
    
    // Find the footer paragraphs
    const footerParagraphs = document.querySelectorAll("footer p");
    
    // Set the current year in the first paragraph
    // I'm checking if there is at least 1 p tag in the foter then adding current year to the first instance of p
    if (footerParagraphs.length > 0) {
        footerParagraphs[0].innerHTML += ` ${currentYear}`;
    }
    
    // Set the last modified date in the second paragraph
    // Now i'm making sure we have a second p and if we do, i add last modified date to second instance of p.
    //  pretty cool actually :-)
    if (footerParagraphs.length > 1) {
        footerParagraphs[1].innerHTML += ` ${lastModifiedDate}`;
    }
});

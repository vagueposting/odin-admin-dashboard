// 1. Get the template element you want to clone (the div with class projectButtons)
const buttonTemplate = document.querySelector('.projectButtons');

// Check if the template exists
if (buttonTemplate) {
    // Get all the target elements with the specified class
    const targetDivs = document.querySelectorAll('.card');

    // 2. Iterate over the target divs
    targetDivs.forEach(targetDiv => {
        
        // *** THE FIX: Create a DEEP clone inside the loop ***
        // We clone the ENTIRE template div and its contents (the SVGs).
        // The 'true' argument is essential for a "deep" clone.
        const newButtonsClone = buttonTemplate.cloneNode(true);

        // *** Crucial step: Remove the 'display: none' style or make the buttons visible ***
        // Since we are cloning the template, the clone will inherit the 'style="display: none;"'.
        // We remove the inline style so the buttons show up.
        newButtonsClone.style.display = ''; // or 'flex', 'block', etc., based on your CSS needs
        newButtonsClone.classList.add('cloned-buttons'); // Optional: Add a new class for specific styling
        
        // 4. Append the new clone to the current target div
        targetDiv.appendChild(newButtonsClone);
    });
}
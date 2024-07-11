
document.addEventListener('DOMContentLoaded', function() {
    // Country Selector
    const countrySelector = 'select[name="country"]';

    // Set The Domestic Country from the global variable
    const domesticCountry = window.domesticCountry || 'US'; // Default to 'US' if not set

    // Function to update product selection based on country
    function updateProductSelection(selectedCountry, secondProductCheckboxSelector, thirdProductCheckboxSelector) {
        if (selectedCountry === domesticCountry) {
            selectProduct(secondProductCheckboxSelector);
        } else {
            selectProduct(thirdProductCheckboxSelector);
        }
    }

    // Function to find and click product checkbox
    function selectProduct(checkboxSelector) {
        const productCheckbox = document.querySelector(checkboxSelector);
        if (productCheckbox && !productCheckbox.checked) {
            productCheckbox.click();
        }
    }

    // Function to handle step 2 transition
    function handleStep2Transition() {
        const countrySelect = document.querySelector(countrySelector);
        if (countrySelect) {
            const selectedCountry = countrySelect.value;
            localStorage.setItem('selectedCountry', selectedCountry); // Store selected country

            // Wait for step 2 to load (adjust timeout as needed)
            setTimeout(() => {
                updateProductSelection(selectedCountry, window.secondProductCheckboxSelector, window.thirdProductCheckboxSelector);
            }, 3000); // Adjust timing as per your application's needs
        }
    }

    // Trigger product selection when step 2 is loaded (assuming it's triggered by a button click with class '.form-btn')
    document.querySelector('.form-btn').addEventListener('click', function() {
        handleStep2Transition();
    });

    // Initial check if step 2 is already loaded (for testing purposes)
    const step2Loaded = document.querySelector('.step-2');
    if (step2Loaded) {
        const storedCountry = localStorage.getItem('selectedCountry');
        if (storedCountry) {
            updateProductSelection(storedCountry, window.secondProductCheckboxSelector, window.thirdProductCheckboxSelector);
        }
    }
});

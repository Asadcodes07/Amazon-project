```javascript
// ============================================
// AMAZON CLONE - JAVASCRIPT
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    // ============================================
    // 1. SELECT IMPORTANT HTML ELEMENTS
    // ============================================

    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-icon");
    const cart = document.querySelector(".nav-cart");
    const backToTop = document.querySelector(".foot-panel1");
    const locationBox = document.querySelector(".nav-address");
    const signInBox = document.querySelector(".nav-signin");
    const returnBox = document.querySelector(".nav-return");
    const allButton = document.querySelector(".panel-all");

    const productBoxes = document.querySelectorAll(".box");
    const seeMoreButtons = document.querySelectorAll(".box-content p");

    const panelOptions = document.querySelectorAll(".panel-ops p");


    // ============================================
    // 2. CART SYSTEM
    // ============================================

    let cartCount = 0;

    // Create cart counter
    const cartCounter = document.createElement("span");

    cartCounter.textContent = "0";

    cartCounter.style.marginLeft = "5px";
    cartCounter.style.backgroundColor = "#ff9900";
    cartCounter.style.color = "#111";
    cartCounter.style.padding = "2px 6px";
    cartCounter.style.borderRadius = "50%";
    cartCounter.style.fontSize = "12px";
    cartCounter.style.fontWeight = "bold";

    cart.appendChild(cartCounter);


    // ============================================
    // 3. ADD PRODUCTS TO CART
    // ============================================

    productBoxes.forEach(function (box) {

        const seeMore = box.querySelector(".box-content p");

        if (seeMore) {

            seeMore.style.cursor = "pointer";

            seeMore.addEventListener("click", function () {

                cartCount++;

                cartCounter.textContent = cartCount;

                const productName =
                    box.querySelector("h2").textContent;

                showMessage(
                    productName + " added to cart!"
                );

            });

        }

    });


    // ============================================
    // 4. CART CLICK
    // ============================================

    cart.addEventListener("click", function () {

        if (cartCount === 0) {

            showMessage("Your cart is empty.");

        } else {

            showMessage(
                "You have " +
                cartCount +
                " item(s) in your cart."
            );

        }

    });


    // ============================================
    // 5. SEARCH FUNCTION
    // ============================================

    function performSearch() {

        const searchValue =
            searchInput.value.trim().toLowerCase();

        if (searchValue === "") {

            showMessage("Please enter something to search.");

            searchInput.focus();

            return;
        }


        let foundProduct = false;

        productBoxes.forEach(function (box) {

            const productName =
                box.querySelector("h2").textContent.toLowerCase();

            if (productName.includes(searchValue)) {

                foundProduct = true;

                box.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        });


        if (foundProduct) {

            showMessage(
                "Product found: " + searchValue
            );

        } else {

            showMessage(
                "No product found for: " + searchValue
            );

        }

    }


    // Search button
    searchButton.addEventListener("click", performSearch);


    // Search using Enter key
    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            performSearch();

        }

    });


    // ============================================
    // 6. BACK TO TOP
    // ============================================

    backToTop.style.cursor = "pointer";

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // ============================================
    // 7. DELIVERY LOCATION
    // ============================================

    locationBox.style.cursor = "pointer";

    locationBox.addEventListener("click", function () {

        const newLocation =
            prompt("Enter your delivery location:");

        if (newLocation !== null) {

            const locationText =
                locationBox.querySelector(".add-second");

            if (newLocation.trim() !== "") {

                locationText.textContent =
                    newLocation.trim();

                showMessage(
                    "Delivery location updated."
                );

            }

        }

    });


    // ============================================
    // 8. SIGN IN
    // ============================================

    signInBox.style.cursor = "pointer";

    signInBox.addEventListener("click", function () {

        showMessage(
            "Sign-in page is not connected yet."
        );

    });


    // ============================================
    // 9. RETURNS & ORDERS
    // ============================================

    returnBox.style.cursor = "pointer";

    returnBox.addEventListener("click", function () {

        showMessage(
            "Returns & Orders page is not connected yet."
        );

    });


    // ============================================
    // 10. ALL MENU
    // ============================================

    allButton.style.cursor = "pointer";

    allButton.addEventListener("click", function () {

        showMessage(
            "All categories menu opened."
        );

    });


    // ============================================
    // 11. PANEL NAVIGATION
    // ============================================

    panelOptions.forEach(function (option) {

        option.style.cursor = "pointer";

        option.addEventListener("click", function () {

            const optionName =
                option.textContent.trim();

            showMessage(
                optionName + " selected."
            );

        });

    });


    // ============================================
    // 12. SEE MORE BUTTONS
    // ============================================

    seeMoreButtons.forEach(function (button) {

        button.addEventListener("mouseenter", function () {

            button.style.textDecoration = "underline";

        });

        button.addEventListener("mouseleave", function () {

            button.style.textDecoration = "none";

        });

    });


    // ============================================
    // 13. NOTIFICATION SYSTEM
    // ============================================

    function showMessage(message) {

        // Remove existing notification
        const oldMessage =
            document.querySelector(".js-message");

        if (oldMessage) {
            oldMessage.remove();
        }


        // Create notification
        const notification =
            document.createElement("div");

        notification.className = "js-message";

        notification.textContent = message;


        // Notification styling
        notification.style.position = "fixed";
        notification.style.bottom = "25px";
        notification.style.left = "50%";
        notification.style.transform = "translateX(-50%)";
        notification.style.backgroundColor = "#131921";
        notification.style.color = "white";
        notification.style.padding = "12px 20px";
        notification.style.borderRadius = "5px";
        notification.style.fontSize = "14px";
        notification.style.zIndex = "9999";
        notification.style.boxShadow =
            "0 4px 12px rgba(0, 0, 0, 0.3)";


        document.body.appendChild(notification);


        // Remove after 2.5 seconds
        setTimeout(function () {

            notification.remove();

        }, 2500);

    }


    // ============================================
    // 14. SEARCH INPUT FOCUS
    // ============================================

    searchInput.addEventListener("focus", function () {

        searchInput.style.outline = "none";

    });


    // ============================================
    // 15. SHOP DEALS IN ELECTRONICS
    // ============================================

    const panelDeals =
        document.querySelector(".panel-deals");

    panelDeals.style.cursor = "pointer";

    panelDeals.addEventListener("click", function () {

        showMessage(
            "Electronics deals selected."
        );

    });


    // ============================================
    // 16. PAGE LOAD MESSAGE IN CONSOLE
    // ============================================

    console.log(
        "Amazon Clone JavaScript loaded successfully."
    );

});
```

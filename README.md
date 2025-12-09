I built a simple weather application using HTML, CSS, and JavaScript.
Instead of using an external API, I created a predefined list of cities and stored their weather information inside a JavaScript object.
When the user enters a city name, my code checks whether that city exists in the list.
If it matches, I fetch the weather details from the object and display them dynamically on the screen.
If the city isn’t available, I show a proper error message.

Even though the data is static, the logic is very similar to how real-world APIs work — the flow stays the same: input → validation → data lookup → display.



# Responisve-Navbar-SimpleWay
# The Main goal is to Understand The Logic How it is working.
# Open project code one side and this readme another side to better understand what I'm trying to say.
Check out Demo: https://simplifiedweb.github.io/Responisve-Navbar-SimpleWay/

Element Selection:

show refers to an HTML element with the ID show.

list refers to an HTML element with the ID list.

Function Explanation (showList):

The showList function is designed to toggle the visibility of a list when a button (element with ID show) is clicked. 

The idea is to control the visibility of the list element using the active class and the display property.

Function Logic:

The function starts by checking if the show element has the class active using the .classList.contains("active") method.

If the active class is not present, meaning the list is currently not displayed:

The function adds the active class to the show element using .classList.add("active"). This could be used to style the button in some way to indicate that the list is active.

The list element's style.display property is set to "block", making the list visible by changing its display property.

Toggling Behavior:

If the show element already has the class active, indicating that the list is currently visible:

The function removes the active class from the show element using .classList.remove("active").

The list element's style.display property is set to "none", hiding the list by changing its display property.

Result:

When the button with the ID show is clicked, the showList function is called.

The function first checks whether the list is currently visible.

If the list is not visible, the function displays the list by adding the active class to the button and setting the list element's display property to "block".

If the list is already visible, the function hides the list by removing the active class from the button and setting the list element's display property to "none".

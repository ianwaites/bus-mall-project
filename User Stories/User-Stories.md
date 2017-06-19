# User Stories

## As the marketing team
We would like an application to present a series of products to a user. The application will be web-based and styled in a way to attract the user.

Within the application the user will be presented with 3 images of a product. The user will have the option to select with product they want and after each select be presented with 3 more choices (for a total of 25 choices). We would like to prevent the products from directly repeating in the series of choices.

Our goal is to capture the total number of times an image was clicked and compare those numbers at the end of the 25 clicks.

## As the marketing team

We want to present users with a web site that presents them with a series of products. The user will then select one of the products they are most attracted to and then be presented with a new series of 3 products.

The website should have a brief description of the requirements for the user.

We want to make sure the images are random, while they can repeat, they should not directly repeat each other.

We would like to see how many times an image was clicked.

## As the marketing team

We would like to track the statistics on products. We would like an easy to use website that will display a series of 3 products to a user.

The user will select a product they like the best out of the 3 displayed and then be presented with 3 more images. The user will have a total of 25 selections.

The images should not repeat themselves, however they can re-appear along the way.

We want to be able to see the total number of times an image was clicked and compare the total numbers in a table of data for all images.

## As the marketing team

We would like a developer to create an application that presents a user with 3 images of products. The user will select the product of their choice and then be presented with 3 new ones. Do not have the images repeat themselves, but the images can repeat throughout the 25 total choices.

We would like to store the number of times and image was clicked and compare the numbers to the other images.

Having the data stored in a table or graph would be preferred.

## As the marketing team

We want the developer to create an application that presents 3 products to a user. The user will then select their favorite product out of the 3 choices, and then be presented with 3 more choices. We want to gather the users choices over a total of 25 selections and store this data in a graph or table to viewed later on.

++++++++++++++++++++++++++++++++++++++++++++

## As a Developer

I will want to create a beautiful site that is easy for a user to navigate. The site will be displaying a series of 3 images, after an image is clicked, the user will be presented with 3 more images. I will want to make sure only the images can be clicked. For every image that is clicked we will want to keep a count of how many times it has been clicked.

It is also very important to make sure the images do not directly repeat themselves in the next series of images.

We will use a global array to hold the image names. The image names will be stored in a constructor with properties for the image path and the tally of clicks.

We will control the images on the page using Event Handlers. The handlers will take all user interaction and record the clicks to control the images being displayed and the total tally's for each image.

Since the user only gets 25 clicks we will need to create a button that appears letting them know they have reached the end of their selections with the option to view the statistics.

## As a Developer

I want to build a simple website. The site should consist of a couple pages. One page will display the users instructions and the series of product images. The next page will display the results of how many times an image was clicked. The results page will be optional - the user will be displayed with a button to view the results.

## As a developer

I want to present the user with instructions on selecting a product of their choice, out of 3 possible choices. The 3 choices will be displayed in images and they will have a total of 25 choices.

Every time they make a selection, they will be presented with 3 more choices to choose from.

Make the images random. Though they can repeat throughout the 25 choices, they cannot repeat back-to-back.

Track the total number of times an image was clicked and how many times an image appeared.

Store the data in table data for the marketing team to review.

## as a Developer

I want to render 3 images to a web page. When the user selects one of the images, I will store the number of times the image was clicked (in total) and how many times it appeared over all. The user will be given a total of 25 selections and the marketing will like to compare the total number an image was clicked compared to the others.

I will need to inform the user when their 25 selections are up and make sure they cannot click more than 25 times.

I will also need to make sure the images do not directly repeat themselves.

## As a developer

Create a clean, easy to use, interface that presents the users with instructions telling them to select their favorite image of a product. There will be 3 products displayed and when the user makes a selection 3 new choices will be displayed. The user will have a total of 25 selections.

The images should not repeat.

I will need to store the images in an array and have a function that uses a random number to select the images out of the array.

When the images are selected from the array they will be displayed on the DOM.

I will need to use even listeners to capture which image the user clicks and count the number of times that image has been clicked.

I will need to make sure to allow the images to be clicked 25 times and then shut down the event listener. 

I will need to store the totals in a table or graph for the marketing team to review.

++++++++++++++++++++++++++++++++++++++++++++

## As a user

I want to be presented with a clean, easy to use and functioning site/application. I want direction of the application to be clear, with an understanding of what is needed from me.

I want to be displayed with three images of products I may like. With each series of images I want to select one and then be presented with 3 more. I do understand that I may see the same image more than once, but that shouldn't be a problem as long as they aren't directly repeated.

I would like to know how many choices I get, it would nice to know how many choices I have left, and it would be nice to know what my favorite product was when I am done making my selections.

## As a user

I want clear and concise instructions with an easy to use interface. It would be nice to know how many more times I am able to make a selection and a notification for when I am done.

## As a user

I would like the application to be working as expected and have clear instructions on whats needed from me.

As I click through the images I would like to be presented with new choices of products to choose from. I should be able to click my favorite and move on to the next 3 choices.

## As a user

I do not want to messy looking site to work with. I want to make sure I am doing exactly what the marketing team expects of me.

## As a user

I want to select the product of my choice out of 3 possible choices. When I make that choices I want to see another set of 3 products and choose a new one. I understand that I have 25 total selections and some of the images might repeat over time.

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Bookmark'd PART 2. ( MINI PROJECT )

![](https://fthmb.tqn.com/N8UHZxApLqho5sUDbpSRyEy1tV8=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bookmarks-56d0cca45f9b5879cc7123a4.jpg)

Your goal for this week's homework is to build a bookmark app that lets users add a title and a link to save websites in one neat list.

#### Prerequisites

- Git
- JavaScript
- Node / Express
- Mongo / Mongoose
- React

---

## The Bookmarks App

You will be building an app that lets users add a title and a link to save websites in one neat list. When users click on a title, it should take them to the linked website. 

> :exclamation: GOTCHA - when testing it out, note that your links must start with http or https or else it will error!

_Example:_

![](https://i.imgur.com/yq9Ygeu.png)

✨ Fun Fact: This homework was inspired by a coding challenge used during a company's hiring process. So, treat it like you're trying to get that job!

## MVP 

Listed below is the basic required functionality that your Bookmark'd app should have. Some of the user stories are purposefully ambiguous to allow you all to ‘solve’ the problems in a way that is intuitive and makes sense to you, as opposed to just checking off specific steps from homework. 

#### Express API
  - You should have a model for bookmarks that has the following schema:
      ```
      title: string
      url: string
       ```
   - You should have routes for...
      - Index: Getting all bookmarks
      - Create: Posting a new bookmark
      - Delete: Deleting a bookmark
      - Update: Updating a bookmark
      - **Make sure you TEST ALL ROUTES with postman or CURL BEFORE you move onto creating the frontend!** 

#### React Frontend User Stories
  - As a user, I can see a list of all my bookmarks when I visit the page
  - As a user, I can click on one of my bookmarks and have it take me to the linked website
  - As a user, I can create a new bookmark and see that it immediately loads on the page so that I know I successfully added a bookmark
  - As a user, I can delete a bookmark so I can keep my list relevant
  - As a user, I can update a bookmark in case I made a typo or the URL changed

#### Additional Requirements
- Your app must have styling! If you're maxing out on your 4 hours per night, spend 10 minutes adding some basic styling just so we know you know how, and leave a note in your git issue. If you're not maxing out on your 4 hours per night, your app should have portfolio quality styling or basic styling and H4M attempts. 

:red_circle: **Remember to commit often!**
Because your workflow & the way you decide to tackle finishing this app is up to you, it's also up to you what you commit! Commit often and write helpful commit messages. 

## Hungry for More?

  - Make a searchbox that will filter the bookmark titles
  - Order the bookmarks alphabetically by title using mongoose or react
  - Make it so that the form clears after submit
  - Add an array of tags to the schema so you can organize your bookmarks by tags
  - As a user, I should not be able to add a duplicate bookmark so I can keep my list clean
  - Add some authorization to your app. Some possible user stories you can try:
      - As a user, I can only use the app if I am logged in
      - As a user, I can see everyone's bookmarks
      - As a user, I can only update/delete my own bookmarks

---

## Deliverables

A completed bookmarks app that meets all the MVP requirements outlined above by the dates below.

## Technical Requirements

1. Your app (both back and frontend) MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong
  
---

*Copyright 2020, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*

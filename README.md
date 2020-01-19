# ClockWork

A web app created for the 8th annual WINFO Hackathon.

[Link to GitHub Pages](https://locksleylk.github.io/winfoHackathon2020/index.html)

# Introduction

Did you know ¾ of the approximate 36 million people worldwide living with Alzheimer’s disease don’t know they have it? That is 27 million people!

To combat this problem, we created ClockWork, a website that uses the scientifically proven method of drawing a clock face, to test for Alzheimer’s Disease. 

If you can draw a clock face with hands and numbers in the right place, you likely do not have Alzheimer’s. If you cannot remember where to place the numbers or hands, then you likely have Alzheimer’s. In other words, our algorithm does not test for artistic skill; it tests for memory. 

Our goal is to help users target Alzheimer’s Disease early to increase their access to treatment to live longer with a higher quality of life.

# About Our Project

After drawing a clock face, the website returns a percentage determining your likelihood of testing positive or negative for Alzheimer’s disease.

In the case of a positive test, we want to emphasize that our users should not panic! They could have simply gotten a false positive. We urge our users to retake the test at least five times, contact their doctor for a medical diagnosis, and read our provided resources going into more depth on Alzheimer’s, current treatments, potential cures, and how to live a fulfilling life with the disease.

Currently, our algorithm takes in 40 examples of negative tests and 40 examples of positive tests. Although Azure Custom Vision indicates that we are currently running with a 100% precision, we would want to increase our data to over 1,000 examples of each before making it public.

In addition to increasing our dataset, we want to create a login feature so people can track their drawn clockfaces over time. Similar to cancer, Alzheimer’s comes in multiple stages of severity, and we also want to inform users what stage they are at, instead of simply giving them a yes or no answer.

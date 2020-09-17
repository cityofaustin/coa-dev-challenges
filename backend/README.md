# Backend Challenge

### Challenge

Your task is to create an API that serves Austin transit data. This is an open‐ended challenge, so feel free to show off your creativity.

To complete this challenge you'll need to learn about [GTFS (General Transit Feed Specification)](https://developers.google.com/transit/gtfs/). A GTFS feed is a group of text files that contains infrequently changing transit data, like stops, routes, trips, and other schedule data. Transit agencies typically update their GTFS feed every few months.

For your convenience, we've checked in a [GTFS feed CapMetro published in June 2018](./data). But, you can use [the latest GTFS feed from CapMetro](https://data.texas.gov/capital-metro) if you prefer.

Your challenge will be to figure out how to query the `.txt` files in [`data`](./data) and then build an API that serves that data.

You should be able to complete this challenge without using any transit specific libraries, but feel free to use one if you'd like. [awesome-transit](https://github.com/CUTR-at-USF/awesome-transit) is a community curated list of tools that can help you understand how to work with GTFS data.

### Get started

Our instructions are written using pipenv, but feel free to use whichever python virtualization tool you're most comfortable with. If you use a different tool, please include instructions for us to test/run your code.

- Install dependencies with `pipenv install --dev`.
- Run the app with `pipenv run python src/main.py`.
- Run tests with `pipenv run pytest src/tests.py`.

## The API

You're free to create your API queries using whatever method/database/library you prefer. We've hired developers who've solved this challenge multiple ways: via sqlite database or by reading the txt files directly. We've included some boilerplate code for your convenience, feel free to use it or ignore it. Chose whichever method you're most comfortable with and will showcase your abilities at their best.

Your API must provide a way to fetch the following data:

- List the available routes. You can fetch this data by querying `routes.txt`.
- List the trips for a specified route. You can fetch this data by querying `trips.txt`.
- List the next five trips arriving at a particular stop. Specify the `stop_id` and `time`. You can fetch this data by querying `stop_times.txt` and `trips.txt`.
- Please write tests for your endpoints. They don't need to be extensive, just check the basics. For example, does the routes query return more than 1 route?

## How to share

- Upload your completed challenge to a Private github repo.
- We'll send you a list of the github members to add as collaborators.

## Some Hints & Guidelines

- You must work on this alone. Do not share the code challenge with others.
- Write clean code.
- Build your API and queries using any frameworks, databases, tools, or libraries you like. We've hired developers who've solved this challenge multiple ways: via sqlite database or by parsing the txt files directly. We've included some boilerplate code for your convenience, feel free to use it or ignore it.
- Don't spend more than 1-2 hours on the challenge.
- Bonus points for deploying your API

## Resources

- GTFS (General Transit Feed Specification): https://developers.google.com/transit/gtfs/
- CapMetro Open Data: https://data.texas.gov/capital-metro
- awesome-transit: https://github.com/CUTR-at-USF/awesome-transit
- Us. If you are stuck, or need guidance, leave a comment to a line of code in Github or email us.

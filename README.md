# toggl-mongo-wt

This application is a simple webtask I hacked together in a few hours.  The webtask stores data from the elegant time tracking and productivity application toggl (www.toggl.io) to an mLab Mongo database.  I used Zapier to create a new Zap which is triggered whenever a new time entry is stored in toggl.  The action for this Zap is a webhook which sends a simple GET request to my webtask endpoint with parameters passed from the toggl API.

## Stored Data

Currently, the webtask stores project name, task description, and task duration for each task entered in toggl.  The webtask also generates a timestamp and stores that as well.

## Future Improvements

When I originally came up with the idea for this tool, I thought it would be awesome to craft an Amazon Alexa app which can access the stored data from MongoDB to quickly read off the tasks which the user completed that day.  I think this would be a helpful way to quickly review daily productivity before bed, and to be mindful of how priorities should shift heading into the next work day.

## Contributing

Feel free to fork this repo and do cool things with it!!




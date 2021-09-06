## Take Home Homework (Day 4)

Create a new application using Create React App with the following pages:

1. Login page at path `/login`.

2. Register page at path `/register`.

13. Home page: shows list of movies.

4. Movie details page at path `/movie/<movieId>`:
-- Show the details and comments for the movie.</li>
-- Users that are logged in are allowed to add comment for the movie.</li>

5. Movie comment can be deleted by the user that created it.

# Notes:

- To register, use `https://<your-service>.herokuapp.com/docs/#/auth/register`

- To login, use `https://<your-service>.herokuapp.com/docs/#/auth/login`

- All the operations related to movies and their comments are available at
`https://<your-service>.herokuapp.com/docs/#/movie`

- To know if a comment is created by the user, check the userId property on the 
comment and the userId of the user, which can be retrieved from
`https://<your-service>.herokuapp.com/docs/#/auth/getProfile`

# Other requirements:
1. You should have at least 3 tests.

1. The comment form should be validated.

1. The movie listing should have Next and Prev button to show more movies.

1. You should deploy your application to Netlify and submit the URL together with your code.

1. There is no requirements on the actual design and look and field, you can design yourself 
or get inspiration from Dribble: `https://dribbble.com/tags/tmdb`

# Notes:
- In order for Netlify to always serve index.html file, you need to add a 
`_redirects` file in public folder.  See [Netlify docs](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/?_ga=2.249985294.969834175.1629299695-714944149.1629299695).


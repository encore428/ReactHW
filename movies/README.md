## Take Home Homework (Day 4)

Create a new application using Create React App with the following pages:

1. Login page at path `/login`.

2. Register page at path `/register`.

3. Home page: shows list of movies.

4. Movie details page at path `/movie/<movieId>`:

- Show the details and comments for the movie.

- Users that are logged in are allowed to add comment for the movie.

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

# Testing

1. Open the URL: http://localhost:3000/
   See home page, and 5 movies, with title, release date, backdrop picture
2. Click on any one movie 
   URL chjanges to http://localhost:3000/movie/{movieId}
   move old title, title, release date. poster, overview
   Reviews (no review is found).
3. Click Login
   URL change to http://localhost:3000/login
4. Click Register new user button
   URL change to http://localhost:3000/register
5. Enter invalid Email, click Register
   Name is mandatory.
6. Enter name as encore7, click Register
   Email is invalid
7. Enter email encore7@gmail.com, click Register
   Password is required
8  Enter 1234 as password, click Register
   Password2 is required
9  Enter 1234 as password2, click Register
   Error message appears on top "Minimum password length is 8 characters, try again."
10 Enter 12345678 as password, click Register
   Error message appears on top "Password do not match, try again."
11 Enter 12345678 as password2, click Register
   Registration successful, URL changes to http://localhost:3000/login, at login screen
12 Enter email encore7@gmail.com, click Login
   Password is required
13 Enter 1234 as password, click Login.
   Error message appears on top "Fail to login."
14 Enter 12345678 as password, click Login.
   URL changes to http://localhost:3000/movie/{movieId} where
   movieId correspond to the one before clicking Login.
15 Create a 4 star review.
   Revnew appears below movie details, submitted by encore7.

1. Open another browser, enter URL http://localhost:3000/register
   On register screen
2. enter encore7, encore7@gmail.com, abcdefgh, abcdefgh, click Register
   Error message appears on top "Email encore7@gmail.com already registered"
3. enter encore8, encore8@gmail.com, 12345678, 12345678, click Register
   Registration successful, URL changes to http://localhost:3000/login, at login screen
4. Enter email encore8@gmail.com, password 12345678, click Login
   URL changes to http://localhost:3000/movie, a list of 5 movies are displayed.
5. change URL to http://localhost:3000/movie/{movieId} where movieId is from the encore7 test.
   The same move details are shown, with the comment posted by encore7.
6. Post a 2 star review.
   Review added.  Only review by encore8 has the delete button.

7. Go to browser of encore7, refresh page.
   Stay on the same movie page, two reviews are visible, only review by encore7 has delete button.
8. encore7 delete own review.
   Stay on the same movie page, review by encore7 disappears.

9. Go to browser of encore8.
   On the same movie page, both reviews are still visible, only review by encore8 has delete button.
10 Refresh page.
   On the same movie page, reviews by encore7 disappears, review by encore8 re still visible and with delete button.
11 Click "React Homework - day 4"
   URL changes to http://localhost:3000/
   5 moves visible on screen
12 click "Movies"
   URL changes to http://localhost:3000/movie
   another 5 movies visible on screen
13 click "Prev" button
   nothing happens.
14 click "Next" button
   another 5 movies visible on screen
15 click "Prev" button
   another 5 movies visible on screen
16 change URL to http://localhost:3000/movie/{movieId} where movieId is from the encore7
   The same move details are shown, with the comment posted by encore8 appearing with delete button.
17 Click Logout button
   On the same movie page, review input form disappears, reviews by encore8 stays but without delete button.
18 Click Login button (any one of the two)
   URL changes to http://localhost:3000/login, at login screen
19 Enter email encore8@gmail.com, password 12345678, click Login
   URL changes to http://localhost:3000/movie/{movieId} where movie is the one on screen before clicking Login.
   The same move details are shown, review input form reapperas, 
   comment posted by encore8 appears with delete button.
20 Delete the review.
   Review disappears.

21 Go to browser of encore7.
   The same movie shown on the screen, with review by encore8 still visible.
22 Click Logout.
   The same movie shown on the screen, review input form disappears, review by encore8 still visible.
23 Refresh page
   The same movie shown on the screen, review by encore8 disappears.


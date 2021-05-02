Ghaith Haddad - Comments & Suggestions:

From what I understand from the code & UI is that, this is basically a flight planner & scheduler that allows travellers plan their flights and see
how much would it cost in both time and money.(Please correct me if im wrong)


Comments: 

- Major issues found include:
    * The CSS crashed a couple of times while testing the app and it cause the header logo to enlarge greatly, taking most of the screen width 
      and height with it. And that caused the rest of the pages CSS to not display the way it should. Only fix for the was to stop and restart the 
      server. 
    * Every button action taken on the app causes the entire app to re-render all the pages & api's which also adds to network bandwidth used and in turn
      time complexity (app is very slow) -> which will lead to user dis-satisfaction. 
- the UI is implemented in a professional way, atleast codewise. it could use some more eye catching & user friendly features, eg:
    * fonts & colours
    * show loading gif/window after submitting anything
    * forms can be implemented/styled abit better
- the backend is also implemented correctly but it's a bit too complex for the scope of the app (not considering production level). there's 
  no need for the '/pages' directory and any of its files as that adds alot of time usage to every action taken on the app. The add/delete/edit options
  can be coded in a much simpler way especially if using a cloud service provider instead of hosted locally or on a private server; thus reducing
  costs in many different ways.
- Improvements/Recommendations: 
    * Use a cloud service provider for DB.
    * Reduce the number of re-renders by re-implementing the functions in the './pages' directory
    * Add user authContext to keep track of user session and to stop user from gaining access to other users sessions/data/etc..
    * Try to seperate the functionality from UI components, and keep functionality in middle or back end. This automatically adds a good layer of
      security to the app. 

















# Skyscanner Full-Stack Recruitment Test

This a full-stack application utilizing Next.js. The frontend is styled with Material-UI components, and MongoDB is used to serve as the database. 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Testing

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

To test the database Schemas:
```bash
npm run test
```

## Usage

Users can view a list of flight itineraries from the root page. Each `Itinerary` is made up of `Legs` (or flights) with the corresponding data:
- departureTime
- arrivalTime
- departureAirport
- arrivalAirport
- duration
- stops (potentially)
- airline (name & ID)

Each `Itinerary` includes: 
- 2 `Legs`
- price
- flight agent
- agent's rating

In the top navbar, there are two `Links`: 
- Add Leg
- Add Itinerary

User input is required for these two pages. After filling out the form, pressing the `Submit` button adds a leg or itinerary to the database. 

On the main admin page, the user can filter the list of itineraries based on the agent. In doing so, the `Total Price` and `Average Price` for all itineraries displayed will change.

Each leg and itinerary has an edit or delete button. If the `Edit` button is pressed (Pen Icon), then the user is taken to an `Edit` page for either Legs or Itineraries. Data for each leg or itinerary is pre-populated with the current selections, but modifications can be made. Pressing the `Submit` button again `PUTS` a modified leg or itinerary to the database. If the `Delete` button is pressed (Trash Icon), then the user will be shown the selected leg or itinerary. Another `Delete` button is provided. If pressed, the corresponding leg or itinerary is deleted from the database. If a leg is deleted, and there exists an itinerary that includes that leg, the corresponding itinerary will be deleted as well.





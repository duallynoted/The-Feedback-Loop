### The Feedback Loop

This is The Feedback Loop. It is designed to allow participants of a program, class, organization, etc., to give feedback about that day's events and how it affected them personally.

The app begins on the home("/start") page by introducing the user to what The Feedback Loop is and allows the user to begin the form with how they are feeling in the field "feeling." Then, using programmatic navigation, the user can either click "NEXT" or hit "enter" to move to the next field, "understanding." It is then on to "support," and finally "comments." In "comments," users have a text box in which they can use to write additional comments. 

When the user hits "submit," it sends the information to the database where it is stored. The app navigates to a page which thanks the user for submitting, and gives an option to leave further feedback. Also, in the AppBar at the top of the page, there is a button to return to the home page anytime. There is an option to view the database of feedback in a table on "/admin." There is a Snackbar dialog box which holds the link for that page. User authentication can be added to ensure that it is an eyes-only page. The administrator has the ability to view the feedback in the order it was recieved. They also have the ability to delete the feedback from the database. An alert will appear upon click of "DELETE" to remind the administrator that this action is irrevocable.

### Technologies Utilized

- [x] React
- [x] Redux
- [x] Material UI
- [x] Node
- [x] Express
- [x] SweetAlert

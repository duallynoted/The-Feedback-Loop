-- Database should be named: prime_feedback
CREATE DATABASE "prime_feedback";

--one to one table
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback items
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (8, 8, 10, 'Doing Great!');

INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (3, 2, 3, 'Meh. Not a great day.');


INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (2, 2, 9, 'why is there no option for "ready to set myself on fire"???');

INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (9, 8, 10, 'Thanks for all your help today. It was a pretty great day. I particularly enjoyed integrating material-ui into my project. I am not sure I have ever gotten this far on a project.');

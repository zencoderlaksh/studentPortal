1. Models Breakdown
   We’ll need the following models:

User Model
Instructor Model
Course Model
Lesson Model
Progress Model 2. Explanation of Each Model and Its Relations

1. User Model
   Fields:

name: The name of the user.
email: The email address (unique).
password: The encrypted password.
role: The role of the user, which can be either "student" or "instructor".
enrolledCourses: Array of course IDs, representing the courses the user has enrolled in.
Relation:

Role-based access: Determines whether the user is a student or an instructor.
Progress Tracking: A user can have progress records associated with courses they’re enrolled in. 2. Instructor Model
Instructors are a special type of user, who can create and manage courses and lessons.
In some cases, you may choose to separate the instructor as a distinct model, but it can also be a part of the User model with a flag (role).
Fields:

userId: A reference to the User model, as an instructor is a user.
bio: A description of the instructor (optional).
Relation:

Instructors create and manage Courses.
An instructor is essentially a User but with additional permissions and capabilities. 3. Course Model
Fields:

title: Title of the course.
description: A detailed description of what the course is about.
instructor: Reference to the Instructor (or User if Instructor is a role).
lessons: Array of lesson IDs, representing the lessons in the course.
studentsEnrolled: Array of user IDs representing the students enrolled in the course.
Relation:

A Course is created by an Instructor (one-to-many relationship).
A Course contains multiple Lessons (one-to-many).
A Course can be enrolled by multiple Users (students). 4. Lesson Model
Fields:

title: Title of the lesson.
content: The content of the lesson (e.g., video, text, assignment, etc.).
courseId: Reference to the Course this lesson belongs to.
order: The sequence in which the lesson appears in the course.
Relation:

A Lesson is part of a Course (many-to-one relationship).
Lessons contain the educational content that students will interact with. 5. Progress Model
Fields:

userId: Reference to the User (Student) who is tracking progress.
courseId: Reference to the Course the student is enrolled in.
completedLessons: Array of lesson IDs, representing which lessons the user has completed.
status: The status of the course (e.g., in progress, completed).
Relation:

A Progress entry tracks the progress of a User (Student) in a Course.
The Progress model helps monitor which lessons a student has completed. 3. Relationship Between Models
User and Progress:

A User (Student) has a Progress object that tracks which lessons they have completed in a specific course.
Instructor and Course:

An Instructor (or User with instructor role) can create and manage Courses.
The Instructor is the creator of the course, and the course can have many students enrolled.
Course and Lesson:

A Course contains multiple Lessons. Each lesson has its own content (video, text, etc.).
User and Course:

A User can enroll in multiple Courses, and a Course can have many enrolled Users (students).
Progress and Lesson:

Progress records track which Lessons the student has completed within a specific course. 4. Backend Flow
Now, let's explain the flow of how each model interacts in the backend:

User Registration/Authentication:

The user signs up via /api/users/register, providing necessary information (name, email, password).
The password is encrypted and stored in the User model.
On successful login (via /api/users/login), a JWT token is generated and returned to the user, allowing access to protected routes.
Instructor Creating Courses:

An Instructor (User with role instructor) creates a course by sending a POST request to /api/courses with course details.
The course is saved in the Course model, with a reference to the Instructor.
Lesson Creation:

An Instructor can create lessons for their course by sending a POST request to /api/lessons with lesson details.
Each lesson is associated with a Course via the courseId reference.
User Enrolls in Course:

A User (student) can enroll in a course by sending a POST request to /api/courses/enroll.
The Course model is updated with the user ID in the studentsEnrolled array.
The User model is updated with the course ID in the enrolledCourses array.
Tracking Progress:

As a User completes lessons in a course, their progress is updated in the Progress model.
Each time a user completes a lesson, their progress is saved (e.g., adding the lesson ID to completedLessons).
Course/Progress Reporting:

The user can view their progress for a specific course by querying the Progress model.
The system can show the overall progress (e.g., percentage completed) based on the lessons marked as completed.
Summary of the Flow:
User Registration/Login: User can register/login, getting a JWT token.
Instructor Creates Course: Instructor creates courses and adds lessons.
User Enrolls: User enrolls in a course and starts tracking progress.
Lesson Completion: User completes lessons, updating progress.
Progress Tracking: User's progress is stored in the Progress model for each course.

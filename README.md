# Blueprint Project

_May 2023_

[Hosted on Heroku](https://mileszs-blueprint-project.herokuapp.com)

The goal of this project—as described in detail [here](https://github.com/blueprinthq/coding-exercise)—is to provide patients with a general screening assessment that will provide enough information to determine automatically what subsequent assessments should be given. 

The solution I have provided here is a React.js front-end within a Ruby on Rails app that makes requests to the Rails back-end API (particularly to get the up front information about this general assessment, and eventually to submit the answers for scoring to determine the recommendation for future assessments). There are some departures from the given instructions that I will discuss below, as well.

## Tech choices

I would've loved to match tech with Blueprint and choose Node, React, all in TypeScript. However, that would've unnecessarily delayed completion of the project. I would have needed to quickly re-learn Node.js and/or a given framework's conventions, and learn TypeScript for the first time. I have no doubt I can learn those things quickly, but felt the delay wasn't worth the payoff in this case. I hope you will trust my ability and willingness to be constantly learning!

My previous employer's tech stack did not include React, so there was a little cognitive overhead of re-learning it. When I last used React, we were still working to convert our codebase to take full advantage of hooks. It was enjoyable to get to dive back into React, which I continue to prefer over other frameworks I've used. (Vue.js, for instance, which has a few aspects that trigger specific ancient PHP memories for me—ha!)

Within the React ecosystem, I enjoyed using [React Hook Form](https://react-hook-form.com/). I will admit that I have allowed it to change my implementation of the UI/X from what was dictated in the exercise description. More on that later.

## Tradeoffs

### No styling

I did not bother with any CSS at all. I was sorely tempted to dabble with Tailwind, or bring in a React-adjacent library with opinionated styles. However, I felt that it would be a distraction from the parts of the project that prove my value as software engineer. Even right now, I know I could add a few rules and do a little bit of `flexbox` fiddling and it would look significantly better. I'm not going to do it! (I might eventually do it. I would like to keep this project here in my GitHub profile as an example or possible focus for discussion with others in the future.)

### Answers Are Not Buttons

> All answer options for the given assessment, as buttons that just display the answer title as text

I did not make each answer a button. In a real world scenario, I would have worked with stakeholders, PMs, designers, etc to discuss this user experience decision. Perhaps as likely, I might've been involved in the discussions early on and would have already been onboard with this approach as the best option for our customers' patients. I can see great arguments for it!

The primary bit of functionality I wanted to demonstrate was the "Previous" functionality. Perhaps due to my own anxieties, I would be inclined to want to review my answers or change my answers as I continued to mull the earlier questions. There are other solutions for that—like an explicit back button somewhere. Selfishly, I also wanted to see React Hook Form's validations in action, and I wanted to lean on React Hook Form for functionality. I also wanted to reduce complexity to getting something into the hands of customers—or in this case my interviewers. 

The result is that answers are classic radio button groups. For what it's worth, it is also worth considering accessibility of buttons for radio buttons for this specific purpose. I am no accessibility expert—far from it. Nor am I a UX expert generally speaking. However, there are a lot of shenanigans folks do with using HTML elements unconventionally, or hiding elements in favor of others, etc, that can give screen readers, for instance, a really hard time. 

### No Progress Bar

I did not build a progress bar. No CSS in the first place as a deliberate tradeoff is part of why. However, I still could've built an ASCII art style progress bar. This is one I simply left out as ultimately I don't think you'll learn much about my ability as an engineer by my ability to build a pleasing progress bar. 

### Not Production Ready

This is not production-ready in so many ways. It makes me itch to think about. My biggest hang up during this entire project has been trying to build something in a reasonable amount of time while reasonably addressing requirements and advice in the exercise description such as:

> The goal of this code exercise is to help us identify what you consider production-ready code. You should consider this code ready for final review with your colleague, i.e. this would be the last step before deploying to production.

I would not let this work product go to production if I were responsible for reviewing it. 

#### Security and Privacy

There are obvious reasons that this is not production-ready that were not requirements in the project itself, like authentication and authorization and security and privacy concerns that are not addressed. It is hosted on Heroku today, which is fine for quickly getting things deployed and scaling up to a certain point. However, at its cheapest levels it is _certainly_ no where near reasonably HIPAA secured, let alone certifiably HITRUST. Dealing with health data, I would prefer to be aiming at a base level of HIPAA "compliance". 

#### SRE Concerns

Before going to production, I would to ensure we had the telemetry to know if/when something is going wrong, and the ability to recover very quickly. Heroku can handle a lot of the latter, but there would be more to do for the former. That could be as simple as choosing a cheap log aggregator, or it could be setting up DataDog with monitoring and alerts. (We used DataDog at both DriverReach and Olio, but I can't deny that it can get expensive for a startup!)

There are some other more generally DevOps things I would want to do around automating CI/D, too, of course.

#### Code

Aside from the tradeoffs I already mentioned, I think `AssessmentSection.jsx` could use some refactoring. It's doing too much, I think. I believe my rustiness with React has likely lead to me writing some of my components in either an old-school way or in a way that shows I've written more Ruby over the past two years than I have React. I would want to work with a teammate who is well-versed in the latest React conventions to make sure my style is inline with best practices. 

I would want to convert it to TypeScript. Of course. :-)

I would like to ensure I can get environment variables during the JS build process for use especially to determine the `baseUrl` based on environment. Hard-coding the URL makes me gag.

On the back-end, nothing is being saved to the database at the moment. Not a requirement, but is strange.

I'm not very happy with `app/models/assessment.rb`. It does its job, but the methods are messier than I would prefer. I think there's a good argument that each method represents a possible value object that could be extracted. (Some folks would _hate_ that, as it can initially feel much more complex than what you see today, May 24th, 2023. Ultimately, it can be very easy to read and very easy to change. I would lean toward a heavy refactoring that direction.)

Links
There are some other more generally DevOps things I would want to do around automating CI/D, too, of course.

#### Code

Aside from the tradeoffs I already mentioned, I think `AssessmentSection.jsx` could use some refactoring. It's doing too much, I think. I believe my rustiness with React has likely lead to me writing some of my components in either an old-school way or in a way that shows I've written more Ruby over the past two years than I have React. I would want to work with a teammate who is well-versed in the latest React conventions to make sure my style is inline with best practices. 

I would want to convert it to TypeScript. Of course. :-)

I would like to ensure I can get environment variables during the JS build process for use especially to determine the `baseUrl` based on environment. Hard-coding the URL makes me gag.

On the back-end, nothing is being saved to the database at the moment. Not a requirement, but is strange.

I'm not very happy with `app/models/assessment.rb`. It does its job, but the methods are messier than I would prefer. I think there's a good argument that each method represents a possible value object that could be extracted. (Some folks would _hate_ that, as it can initially feel much more complex than what you see today, May 24th, 2023. Ultimately, it can be very easy to read and very easy to change. I would lean toward a heavy refactoring that direction.)

## Links

Per the exercises description, a couple links:

[WickedPDF](https://github.com/mileszs/wicked_pdf)

I would not necessarily say I am proud of the code in this library specifically, but I am proud of how many people have found it useful. It is a Ruby on Rails library that makes it easy to generate a PDF from an HTML-based view.

[LinkedIn](https://www.linkedin.com/in/mileszs/)
[mileszs.com](http://mileszs.com)
# Cerveja

This is a project for Coyotiv School of Software Engineering.
It is based on current apps Untappd and Beer with me.

## Description of the project Cerveja

### UI

Check the [interfaces](https://balsamiq.cloud/syhk4l0/pkg14vw/r9402?f=N4IgUiBcCMA0IDkpxAYWfAMhkAhHAsjgFpQAM8A0lANoC6AvkA%3D%3D) planned to be build.

How can you better visualize and play around in case balsamiq do not open on full screen mode?

1. Find the button "Full Screen Presentation" and click on it.
1. A dialog named "Full Screen Presentation Settings" should open, then select the checkbox zoom.
1. You should see the first wireframe get larger on the background, click on close and play around.
   To exit at any moment the full screen, press esc on your keyboard.

### UX

Check the hypotheses planned to be fullfilled as MVP. Based on the [Lean UX Canvas](https://jeffgothelf.com/blog/leanuxcanvas-v2/).

- **Business Problem**, what is the problem this ~~business~~ project is trying to solve?
  Evaluate beers in a platform so users can keep track of when and where a beer was tasted.
- **Business Outcomes**, how will you know you solved the ~~business~~ project problem? what will you measure?
  As a learning project, users share their knowledge and can check trends within their community. If this app is in the future for profit, breweries can also be users and collect feedback.

1. Number of users as retention rate.
1. Number of photos as metrics to customer success.

- **Users**, define a persona, what type of users and customers the ~~business~~ project should focus first?:

1.  Beers lovers usually have friends who understand about the topic, but these beer lovers do not want to bother to ask for recommendations.
1.  If this app is in the future for profit, breweries can collect feedback from beer lovers.

- **User Outcomes & Benefits**, why users will seek out the offer of this ~~business~~ project product or service, what benefit would they gain from using it?
  Cerveja is a social media platform to collect feedback of beers, so beer lovers can get recommendations and also share their knowledge. Beer lovers can interact within their community.
- **Solutions**, what is the solution that solve the ~~business~~ project problem and meet the needs of the customers:
  Transform these evaluations in a social platform where users can interact checking someone else's evaluations.

1.  Access a platform to upload pictures and evaluate beers.
1.  Users can ~~like~~ toast a ~~picture~~ beer. (Untappd)
1.  Users can list their top beers. (Untappd)
1.  A user can tag other users to invite them over to taste a beer in some specific location. (Beer with me)

**Hypotheses** combine the above on a phrase: "we believe that **business outcome** will be achieved if **user** attains **benefit** with **features**."

1. I believe that **users will share their evaluation** if **beer lovers** attains **feedback of beers** with **the implementation of this project, where beer lovers can access the platform, upload pictures and evaluate beers**.
1. I believe that **users will check trends within their community** if **beer lovers** attains **interactions within their community** with **the implementation of a list of top beers, toast functionality and tag functionality**.

The learning process of the topics listed on [these steps](#steps-of-the-project-cerveja) will be based on the development of these two hypotheses. Further features presented on the UI will be implemented later to reinforce not only development, but also operations within a project.

## Table of Contents
1. [Description of the project Cerveja](#description-of-the-project-cerveja)
   1. [UI](#ui)
   1. [UX](#ux)
1. [Getting started](#getting-started)
1. [License](#license)
1. [Steps of the project Cerveja](#steps-of-the-project-cerveja)
   1. [Introduction to software engineering](#introduction-to-software-engineering)
   1. [Node.js and Plugins](#nodejs-and-plugins)
   1. [OOP](#oop)

## Getting Started

Install cerveja locally via npm:

```bash
npm install
```

## LICENSE

```
MIT LICENSE

Copyright (c) 2022 gf-85

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Steps of the project Cerveja

Steps of what needs to be done are listed according to classes at the Coyotiv School of Software Engineering.
These are also my main notes, to get back and review all important concepts.

### Introduction to Software Engineering

1. Create this repository on Git, clone it and write this README with LICENSE based on [markdown documentation](https://www.markdownguide.org/).
1. Design wireframes on Balsamiq, focus on UI. Wireframes are used to visualize and focus on possible parent child relationships. It also helps to apply the [lean methodology](https://theleanstartup.com/) based on a possible [minimum viable product or MVP](https://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp).
1. Follow best practices about Git:
   1. Pull requests must be done only when there is a significant change on the project.
   1. Commit must always communicate context about a change. Always describe what and why, never how. Commit history must be readable, and follow the [7 rules listed here](https://cbea.ms/git-commit/).
   1. Work in a [linear workflow](https://arm.ag/how-to-manage-git-workflow-and-stay-sane-e32405e9dbf0), always rebase before merging changes.
1. Follow best practices about coding standards:
   1. Plan your code, code your plan and only implement what you really need it, do not overcomplicate: "Simplicity is the ultimate sophistication".
   1. Apply the concept that the simplest explanation is most likely the right one, based on [Occam's Razor](https://en.wikipedia.org/wiki/Occam%27s_razor).
   1. Apply the DRY principle which means don't repeat yourself, based on [KISS, Keep it simple stupid](https://en.wikipedia.org/wiki/KISS_principle#In_software_development) principles.
   1. When naming do not use abbreviations! And apply the following casing conventions:
   1. `kebab-case` for files file-name.js.
   1. `PascalCase` for classes ClassName.
   1. `camelCase`for variables, methods, functions functionName.
   1. `YELLING_CASE` for constants CONSTANT_VALUE.
   1. Add descriptions on the code when needed using `/** description */` [based on JSDoc](standardjs@com).
   1. Follow these [13 points from JavaScript Style Guide](https://www.freecodecamp.org/news/google-publishes-a-javascript-style-guide-here-are-some-key-lessons-1810b8ad050b/):
Use TWO spaces for indentation, instead of tabs.
Every statement must have a semicolon at the end. On this project this practice will not be followed.
Don't use ES6 modules.
Horizontal alignment is discouraged.
Don't use var, declare variables with `const` or `let` keywords.
Arrow functions are preferred, specially for nested functions.
Use template strings `` `instead of concatenation.
Don't use line continuations for long strings.
`for... of` loop is the preferred type between all three types of 'for loops'.
Don't use eval().
Constants should be named in ALL_UPPERCASE, an exception to the rule is function-scoped when is written in camelCase.
One variable per declaration.
Use `'single'` quotes, not `"double"` quotes.

### Node.js and Plugins

1. Apply [Prettier](https://prettier.io/docs/en/configuration.html) and [ESLint](https://eslint.org/docs/latest/use/configure/) for code style.
1. Add [Husky](https://www.npmjs.com/package/husky).
1. Create the explanation on how to install, configure and run the application.

### OOP

1. NEXT Add Classes.
1. NEXT Check SOLID principles, and follow at least the single responsibility and the open close principles.
1. NEXT UML Diagrams.

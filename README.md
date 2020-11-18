A MVP of a task management board similar to Trello and Jira.

## Backlog

The main features of this app are:

- User should be able to add a Card to a column by clicking “Add another card”
- When you add another card, you are able to add in Description Text
- User can edit the text in a Card by hovering over the Card and clicking the Edit pencil
icon (this can just be text)
- When editing a card (Diag. 2, below) the background goes dark and you can edit,
save, and delete the card.

- User can re-arrange the order of the Cards in a Column
- User can also move a Card from one column to another
- User can also edit the Names of the Columns by clicking on the Name

### User stories

The above list of features were breakdown in a set of user stories (or tasks), which were story pointed as below:

| User story | Store Points | Business Value | ROI |
| ---------- | :----------: | :------------: | :------: |
| [Initial UI](https://github.com/landim/task-management-board/issues/1) | 3 | 21 | 7 |
| [Add card](https://github.com/landim/task-management-board/issues/2) | 1 | 5 | 5 |
| [Edit Card](https://github.com/landim/task-management-board/issues/3) | 1 | 3 | 3 |
| [Delete Card](https://github.com/landim/task-management-board/issues/4) | 1 | 5 | 5 |
| [Order Cards](https://github.com/landim/task-management-board/issues/5) | 3 | 8 | 2.6 |
| [Move Card to another Column](https://github.com/landim/task-management-board/issues/6) | 3 | 13 | 4.3 |
| [Edit Column name](https://github.com/landim/task-management-board/issues/7) | 1 | 3 | 3|

The ROI will be used to prioritize the work throughout this project.


## Setup and run

### Requirements

- docker
- docker compose

### Development

Executing for the first time:
`docker build -t tasks:dev .`

This will create the docker instance with a hot reload. So any changes on files will be reflected on the running app.

Open [localhost:3001](http://localhost:3001)

After first run it wont be necessary to build the instance every run:
`docker-compose up`

*if new packages/dependencies are added, it is necessary to rebuild the image*


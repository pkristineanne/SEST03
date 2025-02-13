# Version Control System 
- version 1,2, etc. - going back to different version of the design. 
- keeps track of the changes
- undo mistakes
# Git 
- a version control system. Records updates and changes. Revert back to different versions. Collaborate with other developers.
# Repositories 
- Container of the project 
- special type of folder
- Have to ability to track changes
- Local or Remote - 2 types of repositories
U - untrack - not tracking the changes in the file

# Git 3 Stage Arcchitecture
1. Working Area - SEST03 - modify - where you make changes 
 - red text
2. Staging Area - to move the files from working area to staging area - git add 
- what did modify - preparation stage
- green text
3. Commit Stage - think of it as version of the project or check point 
# Commit
- Snapshots of different stages
- Tou can go back to these snapshots
- Reduce the risk of losing progress
- commit message - what we accomplish - descriptive
# Commit Hash - unique automated set of characters / ID
# Reverting a Commit
 - Reverts a commit to its previous state
 - New Commit that undo teh changes
 - Preserve the original commit
 # Resetting a Commit
 - Moves the pointer to an earler point
 - removes commits from the branch
 - can permanently delete changes
 # Git Init = git initiazile
 Why is it called tree? 
  - think of it as growing plant
What is Branching? 
What is Master/Main Branch? 
 - Stable version of your code
 - Branch that is published
 What is an additional branch?
  - Isolated environment
  - Will not affect the master branch
  - if we want to create a new functionality, we don't want to affect the main branch for bugs or error. 
  What is merging brancges
  - combines one branch into another
  - if the functionality is ok, we can merge this branch to the main branch so that it can be avaiable to the users.
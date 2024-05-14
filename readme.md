# BTS PROJECT

## Intro to git
- git is a version control system

### initialize a git repository
```bash
git init 
```

### Add files to staging area
```bash
git add <filename>
```

### list branchs
```bash
git branch
```
### create a new branch - 1
```bash
git checkout -b <branchname>
```
### return to another branch
```bash
git checkout <branchname>
```
### push commits to origin
```bash
git push origin <branchname>
```
### get latest changes from origin
```bash
git pull
git pull origin <branchname>
```
### view history of commits in the repository
```bash
git log
```
### merge changes from a specified branch into the current branch
```bash
git merge <branch name>
```
### list remote repositories associated with your local repository
```bash
git remote
```
### create a new commit that undoes the changes introduced by a specific commit
```bash
git revert <commit hash>
```
### show the differences between the working directory, staging area, and the last commit
```bash
git diff
```

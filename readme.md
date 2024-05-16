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
### get lastest changes from origin
```bash
git pull
git pull origin <branchname>
```

### View a history of commits in the repository
```bash
git log
```

### Merge changes from a specified branch into the current branch
```bash
git merge <branch name>
```

### List remote repositories associated with your local repository
```bash
git remote
```

### Create a new commit that undoes the changes introduced by a specific commit
```bash
git revert <commit hash>
```

### Show the differences between the working directory, staging area, and the last commit
```bash
git diff
```
### Adding new lines


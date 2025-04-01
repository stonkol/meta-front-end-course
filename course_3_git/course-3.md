# Version Control

In this course, you will learn about how modern software developers collaborate across the world without messing up each other's code. You will look at the different version control systems and how to create an effective software development workflow. You will be introduced to some of the most commonly used Linux commands that you can use to work with files on your hard drive and create powerful workflows that will automate your work, saving you time and effort. Finally, you will see how Git can be used in software development projects to manage team files, you will create a repository that can manage code revisions.

After completing this course, you will be able to:

Implement Version Control systems.
Navigate and configure using the command line.
Manage code revisions.
Create and use a GitHub repository.

## 1. Module One

### 1.1 github-git-cheat-sheet

#### 1.1.1 Configure tooling
Configure user information for all local repositories

```sh
$ git config --global user.name "[name]"
# Sets the name you want attached to your commit transactions

$ git config --global user.email "[email address]"
# Sets the email you want attached to your commit transactions

$ git config --global color.ui auto
# Enables helpful colorization of command line output
```

#### 1.1.2 Branches
Branches are an important part of working with Git. Any commits you make will be made on the branch you're currently “checked out” to. Use `git status` to see which branch that is.

```sh
$ git branch [branch-name] # Creates a new branch

$ git checkout [branch-name]
# Switches to the specified branch and updates the working directory

$ git merge [branch]
# Combines the specified branch’s history into the current branch. This is usually done in pull requests, but is an important Git operation.

$ git branch -d [branch-name]
# Deletes the specified branch
```

#### 1.1.3 Create repositories
When starting out with a new repository, you only need to do it once; either locally, then push to GitHub, or by cloning an existing repository.

```sh
$ git init #Turn an existing directory into a git repository

$ git clone [url] # Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits
```

#### 1.1.4 The .gitignore file

Sometimes it may be a good idea to exclude files from being tracked with Git. This is typically done in a special file named `.gitignore`. You can find helpful templates for `.gitignore` files at [github/gitignore...](github.com/github/gitignore).

#### 1.1.5 Synchronize changes

Synchronize your local repository with the remote repository on [github](GitHub.com)

```sh
$ git fetch
# Downloads all history from the remote tracking branches

$ git merge
# Combines remote tracking branch into current local branch

$ git push
# Uploads all local branch commits to GitHub

$ git pull
# Updates your current local working branch with all new commits from the corresponding remote branch on GitHub. `git pull` is a combination of git fetch and git merge
```

#### 1.1.6 Make changes

Browse and inspect the evolution of project files
```sh
$ git log
# Lists version history for the current branch

$ git log --follow [file]
# Lists version history for a file, including renames

$ git diff [first-branch]...[second-branch]
# Shows content differences between two branches

$ git show [commit]
# Outputs metadata and content changes of the specified commit

$ git add [file]
# Snapshots the file in preparation for versioning

$ git commit -m "[descriptive message]"
# Records file snapshots permanently in version history
```

#### 1.1.7 Redo commits
Erase mistakes and craft replacement history

```sh
$ git reset [commit]
# Undoes all commits after [commit], preserving changes locally

$ git reset --hard [commit]
# Discards all history and changes back to the specified commit
```

#### 1.1.8 Glossary

1. **git**: an open source, distributed version-control system
1. **GitHub**: a platform for hosting and collaborating on Git repositories
1. **commit**: a Git object, a snapshot of your entire repository compressed into a SHA
1. **branch**: a lightweight movable pointer to a commit
1. **clone**: a local version of a repository, including all commits and branches
1. **remote**: a common repository on GitHub that all team member use to exchange their changes
1. **fork**: a copy of a repository on GitHub owned by a different user
1. **pull request**: a place to compare and discuss the differences introduced on a branch with reviews, comments, integrated
tests, and more.
1. **HEAD**: representing your current working directory, the HEAD pointer can be moved to different branches, tags, or commits when using `git checkout`.

### 1.2 Systems of version control

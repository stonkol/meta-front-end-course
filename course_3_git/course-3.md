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

#### 1.2.1 Centralize Version Control System

Centralized version control systems, or *CVCS* for short, contain a server and a client. The server contains the main repository that houses the full history of versions of the code base.

Developers working on projects using a centralized system need to pull down the code from the server to their local machine. This essentially means that viewing the history of changes requires that you are connected to the server in order to retrieve and view them.

#### 1.2.2 Distributed Version Control Systems

*DVCS* for short, are similar to the centralized model. You still need to pull code down from the server to view the latest changes. The key difference is that **every user is a server and not a client**. This means that every time you pull down code from the distributed model, you have the entire history of changes on your local system.

#### 1.2.3 CVCS vs DVCS

CVCS is that they are considered easier to learn than their distributed counterparts and it gives more access controls to users. The disadvantage is that they can be slower given that you need to establish a connection to the server to perform any actions. With DVCS, you don't need to be connected to the server to add your changes or view a file's history. It works as if you are actually connected to the server directly but on your own local machine.


#### 1.2.4 History of version control

Version Control has a long history going back to the 1980s. In fact, version control systems were created before the Internet!

One of the first significant Version Control Systems was the **Concurrent Versions System (CVS)**. It was first developed in 1986 by Walter F. Tichy at Purdue University and released publicly in 1990.

**CVS** stores information about every file in a folder structure, including the name of the file, its location in the folder structure, who last modified it, and when it was last modified. The **CVS** also stores information about folders, including their names and who created them.

##### The main successor to CVS was Subversion (SVN).

CollabNet developed Subversion in 2000 and solved many of the issues present in **CVS**. To ensure data integrity, it included integrity checks in its design. It also supported the versioning of binary files better than **CVS**. Thanks to these improvements, SVN became popular in the open-source community with free hosting being offered for open-source projects by Google and SourceForge.

##### Development of distributed version control systems

However, Subversion used a centralized **VCS** model. This means that all operations have to be done using a centralized server. If the server were down or slow, this would impede development.

In 2005, two new projects were started to develop distributed version control systems; Mercurial and Git. Both projects were created in response to an event involving the Linux kernel development.

Previously, the Linux kernel was using a proprietary **VCS** known as BitKeeper. BitKeeper was one of the first distributed version control systems initially released in 2000. BitKeeper had originally provided a free license to Linus Torvalds to support Linux’s development. However, in 2005, the license was revoked. This controversy led to the creation of the Mercurial and Git projects.

Git was developed by Linus Torvalds to host the Linux kernel’s source code. Like Mercurial, it is a distributed **VCS**. Its first public release came in 2007.

Git became popular in the open-source community due to its distributed **VCS** design and Github offering free Git hosting for open-source projects. Git has since become the selected version control system for many open-source and proprietary software projects.

### 1.3 Version control in professional software development

As a developer, you’ll work with other developers on projects to deliver software to customers. You could be working with a small team of 2 or 3 developers in a single project or a large team spanning multiple projects. In either scenario, Version Control will be a crucial tool to help your team succeed.

However, Version Control must be complemented by other tools and procedures to ensure quality and efficiency throughout the software development process. Here are some of the common tools and strategies developers use in conjunction with Version Control.

#### 1.3.1 Workflow

Using Version Control without a proper workflow is like building a city without traffic lights; without appropriate management, everything will turn into chaos.

##### Example 1: two developers on the same file

What happens if two developers work on the same file and commit the changes at the same time? Now there’s a conflict! How should the conflict be resolved? A good workflow will have a process for resolving conflicts.

##### Example 2: New member

A new member joins your team.  If the project code is used for a critical system, it is risky to allow them to submit code changes directly, so it can be a peer review system where another developer must review code before it can be merged in.

#### 1.3.2 Continuous Integration (CI)

Is used to automate the integration of code changes from multiple developers into a single main stream. Using a workflow whereby small changes are merged frequently, often many times per day, will reduce the number of merge conflicts.

CI is often used to automatically compile the project and run tests on every code change to ensure that the build remains stable and prevent regressions in functionality.

#### 1.3.3 Continuous Delivery (CD)

Continuous Delivery is an advanced practice built on top of **CI**. In this approach, once changes are merged into the main codebase, a **CD** pipeline automates the process of preparing the application for deployment. This process includes tasks like building the application, running tests, and packaging it for deployment to a production-like environment.

The main goal of **CD** is to ensure that the application is always in a deployable state, even after multiple changes by different developers. By automating these steps, **CD** eliminates the risk of human errors during the packaging process and reduces delays in getting the application ready for deployment.

However, **CD** requires manual approval to release the application to the production environment. Although this gives teams greater control over when and how changes are deployed to live systems, **CD** is slower than Continuous Deployment because of this manual step.

#### 1.3.4 Continuous Deployment

Continuous Deployment takes **CD** a step further by automating the actual deployment of the application to production. With this practice, every change that passes through automated tests and validations in the pipeline is automatically deployed to production without the need for manual intervention.

The strategy involves deploying to a staging environment first, where additional checks or validations might occur, and then promoting the changes to the live production environment. Unlike Continuous Delivery, Continuous Deployment eliminates the manual approval step, making it faster and more efficient. This approach ensures that updates, features, and fixes are delivered to customers as soon as they are ready, fostering rapid and iterative delivery. Continuous Deployment is ideal for teams that prioritize speed and frequent releases over manual control.

Automation is the key difference that sets Continuous Deployment apart from Continuous Delivery. These two deployment types can be used together in a pipeline or adopted independently, depending on the organization’s processes and requirements. When used together, the Continuous Delivery steps ensure the code is production-ready after passing all tests and reviews. The Continuous Deployment then automates the final step of deploying production-ready code without manual intervention. Using them together in a production environment provides an additional safety layer but also increases the time required.

#### 1.3.5 Conclusion

With these tools and procedures, it is possible to understand how software starts from a developer writing code to being deployed live for customers to use. Of course, there is much more to running a live software service, but that is a lesson for another day.

### 1.4 Staging vs Production

#### 1.4.1 Development Environments

Every development team prior to releasing their new features or changes needs to verify that the code they do release is not going to cause any issues or bugs. In order to achieve this, they normally set up multiple environments for different ways to test and verify.  A common practice is for teams to have a developer environment, a UAT or QA environment, and a staging environment. The main purpose of this flow is to find any potential issues that may arise due to changes or new features being added to the codebase. The more ways to test the changes the less likely bugs will be introduced.

#### 1.4.2 Staging

The staging environment should mimic your production environment. The reason for this is because you want to test the code in an environment that matches what you have in production. This allows teams to spot or find any potential issues prior to them getting to production. The closer the staging environment is to your production, the more accurate your testing is going to be. Staging environments can also be used for testing and verifying new features and allow other teams including QA or stakeholders to see and use those features as a pre-trial.

Staging should also cover all areas of the architecture of the application including the database and any other services that may be required. Areas that benefit from staging environments include:

##### 1.4.2.1 New Features

Developers submitting new features along with feature flags for turning them on and off should always do a testing round in a staging environment. They allow teams to verify that the feature works, it can be turned on and off via configuration flags and also that it does not break or interfere with existing functionality.

##### 1.4.2.2 Testing

As the staging environment mimics your production environment, it's also a great place to run tests. QA teams will normally use it to verify new features, configuration changes or software updates/patching. The types of testing covered will be Unit testing, Integration testing and performance testing. All except performance testing can also be carried out in production. Performance can also be completed in production but only at specific times - usually out of hours as it will have a drastic effect on the user experience.

Sometimes it is not always feasible to have an exact replication either due to costs or time. Certain areas can be cut back - for example, if your service is load balanced on 10 virtual machines in production, you could still have 4 virtual machines in staging. The underlying architecture is the same but the overall performance may be different.

##### 1.4.2.3 Migrations

Staging is a perfect place to test and verify data migrations. Snapshots can be taken from production and used to test your migration scripts to confirm your changes will not break anything. If in the case it does cause an issue, you simply rollback and try again. Doing something like a migration in production is extremely risky and error-prone.

##### 1.4.2.4 Configuration Changes

Configuration can also cause headaches for teams, especially in a large cloud-based architecture. Having a staging environment will allow you to spot any potential issues or bottlenecks.

#### 1.4.3 Production

Production is live. It's out there for people to see and/or interact with. Any issues or problems you may have had should have been caught and fixed in the staging environment. The staging area gives the team a safety net to catch these possible issues. Any code that is deployed to production should have been tested and verified before the deployment itself.

##### 1.4.3.1 Downtime

Downtime for any service especially customer facing will most likely be revenue impacting. If customers can not access or use your website or app to its full capabilities, it will most likely have a cost involved. Take for example an e-commerce company that allows users to buy goods and services online. If they release a new feature to their shopping cart which actually breaks the payment process, this will have an impact on customers not being able to buy goods online.

##### 1.4.3.2 Vulnerabilities

Cyber-security should also play a big role in what gets released in production. Any updates to software such as patching or moving to the latest version should be checked and verified. This is also the same rule for not upgrading software when critical updates are released.

##### 1.4.3.3 Reputation

Downtime or issues in production is damaging for a company as it does not instill confidence in end users. If something is down or broken it can cause the company to lose potential customers.

### 1.5 Additional Resources

About [Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)

[The benefits](https://about.gitlab.com/topics/version-control/benefits-distributed-version-control-system/) of a distributed version control system

What is [Cloning?](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

## 2. Module 2: Command Line

### 2.1 Introduction

The command line is a very powerful alternative to GUIs because it allows developers to perform tasks quicker and with enough experience, less potential for errors.

#### 2.1.1 What can you do with the command line?

By learning just a few commands, you can perform various tasks, such as:
1. creating new directories
2. creating new files
3. combining directories
4. copying and moving files around different directories
5. searching through files using various criteria and keywords.

As you become more advanced in using the command line, you will be able to perform tasks such as:

1. track software
2. access and control remote servers
3. search for files using specific criteria
4. unzip archives
5. access software manuals and display them in the command line
6. Install, upgrade, and uninstall software
7. mount and unmount computer drives, or check disk space

You can write scripts to automate various tasks, control user access to files and programs, stop, start and restart programs. Create aliases of only a few characters long to initiate very long commands, download files from the Internet, run various software, and finally, run and control self-contained virtual software, which is also known as containerization.

#### 2.1.2 Example of a command workflow

```sh
cd ~/Desktop
mkdir my_jsproject
cd myproject
touch example.js
code example.js     # open file in vscode
```

### 2.2 What is Unix?

Having a grip on UNIX commands specifically is a great skill to have in today's software development world.Unix preceded Linux and was developed by Ken Thompson and Dennis Ritchie and team at AT&T Labs in 1969. Linux came much later on and was originally developed as a hobby by Linus Torvalds, hence the name Linux.

Windows allowed non-technical users to perform tasks without having to learn a list of commands. But you, as an aspiring developer, will get to use Unix commands to develop those tasks.

it's important to note that each command has a set of helper instructions. These helpers give detailed information about how the commands can be run and how something we call flags can be passed. One of these helpers is the `man` command.

#### 2.2.1 Important commands

```sh
cd ~/Desktop    # go Desktop
cd ..           # last directory
cd ../dir2      # go to a sibling folder
touch my.txt    # create a new file
mkdir my_dir    # create a new directory
history         # view command history

man             # display manual pages

ls              # list files and directories
ls -l           # list files and directories with details
ls -a           # list all files and directories including hidden ones
pwd             # print working directory
cp              # copy files and directories
mv              # move files and directories and change file names
cat             # Allows reading or concatenation of a file
wc              # word count
less            # Displays the contents of a file one page at a time. Press [Q] to exit.
grep            # Global regular expression, allows for searching contents of files or folders
chmod [120]     # Change permissions of a file or directory, with 3 digits
```

in the *nix world `Ctrl + C` will stop the current process

#### 2.2.2 Editing files in Bash

There are many options for editing files in Bash. The most common is usually VI or Vim. VI stands for visual editor. It's used for making edits and changes to a file and saving them. It's similar to what you may have used in applications like Word.

VIM is a better version of VI with some improvements - hence its name: visual editor improved.

##### Normal Mode

Default mode when you open a file. In this mode, you can navigate through text, search for words, delete or copy lines, and perform other operations.
```sh
h           # Move left
j           # Move down
k           # Move up
l           # Move right
/[search]   # Search for a word or phrase.
```

### 2.3 Pipes

Pipes allow you to connect the output of one command to the input of another command. This is useful for chaining commands together to perform complex operations.

```sh
ls | wc -w                      # 2 (nm of files)
cat file1.txt | wc -w           # 181 (number of words)
cat file1.txt file.md | wc -w   # 320 (nm words of 2 files)
ls | grep my_file               # list files+dir and then pipe the output to `grep` to search for a specific file/dir
```

### 2.4 Redirection

The basic workflow of any Linux command is that it takes an input and gives an output. The standard input device is the keyboard. The standard output device is the screen.

There are three types of IO or input/output redirections. **Standard input** = `0`, **standard output** = `1`, and **standard error** = `2`.

Redirection allows you to redirect the output of a command to a file or another command.

```sh
ls > file.txt                   # Redirect the output of `ls` to a file named `file.txt`
cat fi.txt file.md > file.txt   # Redirect the output of `cat` to a file named `file.txt`
ls >> file.txt                  # Append the output of `ls` to a file named `file.txt`
cat f1.txt file.md >> file.txt  # Append the output of `cat` to a file named `file.txt`
ls -l /bin 2> error.txt         # Output an error tp error.txt
```

### 2.5 Grep

```sh
less                            # Display a file in a pager
grep Sam name_list.txt          # Display a list of names that begin with "Sam" in the file name_list.txt, it is case sensitive.
grep -i Sam name_list.txt       # Display a list of names that have "Sam" and "sam", using `-i` we ignore case sensitive
grep -w Sam name_list.txt       # Display a list of names that have "Sam" and "sam", using `-w` we match whole words, so only words that only have "Sam" is returned, for example Samantha will not appear.
grep -r my_file /path/to/dir    # Search for a specific word recursively in a directory
```

### 2.6 Additional Resources

[Agile methodologies](https://www.planview.com/resources/guide/agile-methodologies-a-beginners-guide/)


Installing git on mac and windows, [detailed instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

[Bash Reference Manual](https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents)

[Bash Redirections](https://www.gnu.org/software/bash/manual/html_node/Redirections.html#Redirections)

[Bash Cheatsheet](https://devhints.io/bash)


[Grep Cheatsheet](https://devhints.io/grep)


[Grep Manual](https://man7.org/linux/man-pages/man1/grep.1.html)

[History and Timeline of Unix](https://unix.org/what_is_unix/history_timeline.html)

[History of Vim](https://en.wikipedia.org/wiki/Vim_(text_editor))

[How to work with relative and absolute paths](https://www.geeksforgeeks.org/absolute-relative-pathnames-unix/)

[Unix Commands Cheatsheet](https://cheatography.com/jluis/cheat-sheets/bash-and-unix-commands/)


[Vim Cheatsheet](https://vim.rtorr.com/)

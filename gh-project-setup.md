# Getting projects set up in GitHub

All of the commands should be run in the terminal in the directory of your project

## For Projects you already started

##### If you created your project using `create-react-app` then you can skip the first step, as it already did it for you
1. Run the command `git init` - this will create a hidden .git folder, which will keep track of all the git goodness
2. Go to GitHub and create a new empty repo - Make sure you don't add a README.md, you need this project to be empty!
3. Copy the line that starts with `git remote add` from the newly created empty repo
4. Run the copied command in your terminal
5. ACP - the push needs to be `git push -u origin main`, here we are telling the git repo that we always want to push to our `origin` remote and the `main` branch, so next time we can just run `git push`
6. Check your GitHub is up to date with your local repo
7. Profit?

## For Projects that start with the repo on GitHub

1. Create your new repository, and make sure to add at least a README.md, if not also a licence. The main thing is, we don't want it to be empty
2. On the repo, click the "code" button and copy the link it shows
3. Go to your terminal, and in the directory you want your project to be
For example, if you want your path to be `/projects/yourreponame` then make sure you are in the projects direcort in the terminal
4. Run `git clone thelinkyoucopiedfromgithub`
5. Now start working on your project, and ACP to push the code to GitHub

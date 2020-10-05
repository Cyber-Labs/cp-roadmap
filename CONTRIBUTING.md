## How to contribute

### Did you find a bug or want to request a feature ?

- Ensure the bug was not already reported by searching on GitHub under [Issues](https://github.com/Cyber-Labs/cp-roadmap/issues).
- If you're unable to find an open issue addressing the problem, open a new one.
  Be sure to include a title and clear description, as much relevant information as possible.

### Do you want to add more resources on a particular page, already present on the [website](http://cp.cyberlabs.club/) ?

You may chose to update that particular page by either [the website UI](#Sending-a-PR-using-website-UI) or [by using git](#Sending-a-PR-using-git).

### Do you want to add a blog post for the website or want to create a new section in the website ?

You would have to [send a PR using git](#Sending-a-PR-using-website-UI)

### Sending a PR using website UI

1. Open the page, you want to update.
2. Click on the " ![](https://fonts.gstatic.com/s/i/materialicons/create/v4/24px.svg) Edit this page " option at the bottom.
3. Make the required changes and preview them. For markdown syntax, refer [here](https://v2.docusaurus.io/docs/markdown-features/)
4. Add a useful commit message, like "Update binary search problems" and select `Commit changes` option at the bottom.
5. This will create a pull request to this repository. If it is found suitable, it would be merged by the maintainers, within a few days.

### Sending a PR using git

0. If you had already forked and cloned this repository earlier, you may refer [syncing with the main repsitory](#syncing-with-the-main-repository) and then, move to step 3, directly. Otherwise, move to step 1.
1. First fork this repository to your account.
2. Go to the forked repo and clone it to your local machine :

```
git clone https://github.com/<your_username>/cp-roadmap
```

3. Make sure, you are able to run the website locally, by following the instructions given [here](https://github.com/Cyber-Labs/cp-roadmap#running)
4. Edit the required web page and check its preview. If you are not sure about which file to edit / add, refer [file structure](https://github.com/Cyber-Labs/cp-roadmap#file-structure).
   For markdown syntax, you may refer [here](https://v2.docusaurus.io/docs/markdown-features/).

5. Create a branch with a suitable name, related to the page you are working on :

```
git checkout -b <branch-name>
```

6. Commit your changes :

```
git add .
git commit -m "Type any useful commit message here like, updated binary search problems"
```

7. Push to your forked repo :

```
git push origin <branch-name>
```

8. Open your forked repo, in browser. You will find an option to `Create a Pull Request`. Select that option.

9. This will create a pull request to this repository. If it is found suitable, it would be merged by the maintainers, within a few days.

### Syncing with the main repository

1. Run the below command to know the remote URLs of your repository.

```
git remote -v
```

If `upstream` is already set as https://github.com/Cyber-Labs/cp-roadmap, then move to step 3 directly. Otherwise, move to step 2.

2. To add upstream to remote :

```
git remote add upstream https://github.com/Cyber-Labs/cp-roadmap
```

Now, you can again check your remote, by command mentioned in step 1.

3. Move to `master` branch :

```
git checkout master
```

4. Pull/Fetch the latest changes from upstream, to sync your repository :

```
git pull upstream master
```

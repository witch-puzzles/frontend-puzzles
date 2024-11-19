# Frontend of Puzzles Project
The super intuitive frontend for the Puzzles project, made using Svelte/SvelteKit 5.

The backend repository is [here](https://github.com/witch-puzzles/backend-puzzles).

## License

This project is licensed under the `GNU GPL-3.0` license.

Although everything is free to use, modify and distribute, credit is always appreciated.

## Working Structure

### Branching and PR's
We will follow [trunk-based development](https://trunkbaseddevelopment.com/) methods. Please read through the provided link.

**TLDR**: Create and work on short-lived 'feature' branches. Pull requests should target `main` (the stable branch). Release branches named `release-'VERSION'`will be created when deemed fit. These release branches will not be actively worked on once they're created.

### Commits
**Commits**: We are using conventional commits. For more information, check [this site](https://www.conventionalcommits.org/en/v1.0.0/).

Basically, the commit message should be like this: `<type>[optional scope]: <description>`

Use the following types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`.

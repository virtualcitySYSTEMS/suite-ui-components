# VCS ui-components

A set of Vue components based on Vuetify.

## Project setup

1. Create project with vue cli
    - (select sass dart as css-preprocessor (also added by vuetify))
2. `vue add vuetify`
3. `npm i -S @vcsuite/ui-components`


## Running & Writing Tests
To run tests use `npm run test`, or `coverage` for coverage. Tests are run
with [`vitest`](https://vitest.dev/). Use BDD style test definitions.

### Working with snapshots
Snapshots are great for testing UI components. But:
- to create a snapshot, simply use `expect(foo).toMatchSnapshot()` and check in
  the created snapshot file.
- do not run your watched tests with `--update`.
- be sure to only update snapshots you are actually working on.
- to update a snapshot, run `npm run test -- $FILE_NAME --run --update`

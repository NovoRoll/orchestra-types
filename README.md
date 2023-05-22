# How to add or change types

1. Add your types changes to src folder
2. $ npm run build
3. Upload to git

# How to check your changes before publishing to main

1. Create your <feature_branch>
2. Upload your changes to your <feature_branch>
3. Add to your destination package.json dependency specification as github:NovoRoll/orchestra-types#<feature_branch>
4. Reinstall node_modules in your destination repo with updated orchestra-types dependency.
5. If something goes wrong - delete your package-lock.json and reinstall dependencies again

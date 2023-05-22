# How to add or change types

1. Add your types changes to src folder
2. $ npm run build
3. Upload to git

# How to check your changes before publishing to main

1. Create your <feature_branch>
2. Upload your changes to your <feature_branch>
3. Get the last commit hash from your <feature_branch>
4. Add to your destination package.json commit hash as github:NovoRoll/orchestra-types#<commit_hash>
5. Reinstall node_modules in your destination repo with updated orchestra-types dependence.

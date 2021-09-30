# gha-find-replace
Github action to find and replace strings in files.

You specify a json array of `file`, `find` and `replacement` tuples.

Usage:
```
 - name: Find and replace the version tag
   uses: ./.github/actions/gha-find-replace
   with:
     replacements: "[{\"file\": \"linux/proxyapi-linux.go\", \"find\": \"v#.#.#.#\", \"replacement\": \"${{ steps.verstr.outputs.prop }}\"}]"
```

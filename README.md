# gha-find-replace
Github action to find and replace strings in files.

To use:

Pull the action into the workflow:

```yaml
# Checkout github action for find / replace
- name: Checkout ExmosLTD/gha-find-replace
  uses: actions/checkout@v2
  with:
    repository: ExmosLTD/gha-find-replace
    ref: refs/heads/main
    token: ${{ github.token }}
    persist-credentials: false
    path: ./.github/actions/gha-find-replace
```

Then to call this, you specify a json array of `file`, `find` and `replacement` tuples.

Usage:
```yaml
 - name: Finds and replaces the version tag v#.#.#.# with ${{ steps.verstr.outputs.prop }}
   uses: ./.github/actions/gha-find-replace
   with:
     replacements: "[{\"file\": \"linux/proxyapi-linux.go\", \"find\": \"v#.#.#.#\", \"replacement\": \"${{ steps.verstr.outputs.prop }}\"}]"
```

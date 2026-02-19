module.exports = {
  branches: ["master"],
  plugins: [
    ['@semantic-release/commit-analyzer', {
        releaseRules: [
          { types: "fix", release: "patch"},
          { types: "chore", release: "patch"},
          { types: "feat", release: "minor"},
          { types: "feat!", release: "major"}
        ]
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github'
  ]  
}

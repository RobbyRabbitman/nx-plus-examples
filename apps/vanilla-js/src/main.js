import { Grid, html } from "gridjs";

const nxPlusIssues =
  "https://api.github.com/repos/RobbyRabbitman/nx-plus/issues";

new Grid({
  server: {
    url: nxPlusIssues,
    then: (data) =>
      data.map((issue) => ({
        ...issue,
        url: html(
          `<a href='${issue.html_url}' target='_blank'>${issue.number}</a>`
        ),
      })),
  },
  columns: [
    "title",
    "state",
    { id: "created_at", name: "created" },
    { id: "url", name: "#" },
  ],
}).render(document.getElementById("issues"));

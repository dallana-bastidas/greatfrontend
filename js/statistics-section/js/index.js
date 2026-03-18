fetch(
    "https://www.greatfrontend.com/api/projects/challenges/statistics-metrics",
)
    .then((response) => response.JSON())
    .then((data) => {
        console.log(data);
    });

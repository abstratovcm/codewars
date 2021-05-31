SELECT date(created_at) AS date,
       count(created_at) AS count,
       CAST(SUM(COUNT(created_at))  OVER (ORDER BY date(created_at))AS INT) AS total
FROM posts
GROUP BY date
ORDER BY date ASC

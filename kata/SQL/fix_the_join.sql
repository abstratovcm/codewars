SELECT 
  j.job_title,
  CAST(round(SUM(j.salary) / COUNT(p),2) AS FLOAT) AS average_salary,
  COUNT(p.id) as total_people,
  CAST(round(SUM(j.salary),2) AS FLOAT) AS total_salary
FROM people p
LEFT JOIN job j ON j.people_id = p.id 
GROUP BY j.job_title
ORDER BY average_salary DESC

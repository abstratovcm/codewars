SELECT people.id, name, RANK() OVER (ORDER BY sale_count DESC) sale_rank, sale_count
FROM (SELECT people_id, COUNT(sale) AS sale_count
      FROM sales
      GROUP BY people_id
     ) people_count, people
WHERE people.id = people_count.people_id

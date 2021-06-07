WITH RECURSIVE fact_table (n, fact) AS
 (SELECT 0, cast(1 AS BIGINT)
 UNION ALL
  SELECT n + 1, (n + 1) * fact
  FROM fact_table
  WHERE n < 16
 )
 SELECT n, fact
 FROM fact_table;

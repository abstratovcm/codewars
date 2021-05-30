select film.title
from (select film_id, count(actor_id) as c
     from film_actor
     where actor_id in (105, 122)
     group by film_id
     order by c desc) as SidSal,
     film
where film.film_id = SidSal.film_id and c = 2

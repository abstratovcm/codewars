CREATE FUNCTION agecalculator (age date)
RETURNS INT
LANGUAGE plpgsql
AS
$$
DECLARE day_now     INT := date_part('day', now());
        month_now   INT := date_part('month', now());
        year_now    INT := date_part('year', now());
        day_past    INT := date_part('day', age);
        month_past  INT := date_part('month', age);
        year_past   INT := date_part('year', age);
BEGIN 
            
    IF month_now > month_past 
       OR (month_now = month_past
       AND day_now >= day_past)
    THEN RETURN year_now - year_past;
    ELSE RETURN year_now - year_past - 1;
    END IF;
END
$$

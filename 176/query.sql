# Write your MySQL query statement below
select Salary as SecondHighestSalary from Employee union select null order by SecondHighestSalary desc limit 1,1;
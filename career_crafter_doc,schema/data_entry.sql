insert into admins_table(password,first_name,last_name,email,phone_number) 
values ("ram@123","ram","g","ramg@gmail.com","9988776644");

insert into admins_table(password,first_name,last_name,email,phone_number)  
values ("varun@123","varun","b","varun@gmail.com","9988776655");

insert into admins_table(password,first_name,last_name,email,phone_number)  
values ("arun@123","arun","g","arung@gmail.com","9988116655");


insert into job_listing_table (
job_title ,description ,qualifications ,application_instructions ,created_by ,location ,
min_Salary ,max_salary,Company_name) 
values ("Assosiate Software Eng","role is software eng","BE/B.tech","none",100,"hyd",400000,600000,"CGI"),
("Software Eng","role is software eng","BE/B.tech","none",100,"hyd",450000,650000,"CGI"),
("Data Anaylst","role is Analyst","BE/B.tech","none",101,"hyd",420000,620000,"Delloitte");

insert into job_listing_table (
job_title ,description ,qualifications ,application_instructions ,created_by ,location ,
min_Salary ,max_salary,Company_name) 
values ("Software Eng","role is software eng","BE/B.tech","none",102,"chennai",600000,700000,"IBM");

insert into applications_table (job_id,user_id,employer_id) values (1001,101,100);

delete from applications_table where user_id=101;


insert into resume_db (user_id,description, projects, Skills,Certifications, internships, work_experience)
values(101,"I am CSE graduate","amazon clone","Python, AWS","AWS","amazon","2 months as GET at amazon");

update resume_db set resume_file_link="/career_crafter_sample_resume.pdf";
-- file:///C:/Users/durga/Downloads/career_crafter_sample_resume.pdf
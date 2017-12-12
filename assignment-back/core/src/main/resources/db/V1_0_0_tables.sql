--
-- Database: Post Assignments
--

-- ========================================================
-- Main Entity Tables
-- ========================================================

--
-- Table Structure for table assignment
--
CREATE TABLE assignment (
  assignment_id int AUTO_INCREMENT PRIMARY KEY,
  title varchar(128) NOT NULL,
  subject varchar(128) NOT NULL
);

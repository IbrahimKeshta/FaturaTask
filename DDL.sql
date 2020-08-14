-- Start Create Database --
CREATE DATABASE `taskdb` ;
-- End Create Database-- 

-- Start Use Database --
USE `taskdb`;
-- End Use Database --

-- Start Create Category Table--
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `parent_id_idx` (`parent_id`),
  CONSTRAINT `parent_id` FOREIGN KEY (`parent_id`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);
-- End Create Category Table--

-- Start Create Products Table -- 
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `image_uri` varchar(255) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id_idx` (`category_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);
-- End Create Products Table --

-- Start Create Providers Table --
CREATE TABLE `taskdb`.`providers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
-- End Create Providers Table --

-- Start Create product_providers Table --
  CREATE TABLE `product_providers` (
  `products_id` int(11) NOT NULL,
  `providers_id` int(11) NOT NULL,
  `price` double NOT NULL,
  `available` tinyint(1) NOT NULL DEFAULT '1',
  KEY `products_id_idx` (`products_id`),
  KEY `providers_id_idx` (`providers_id`),
  CONSTRAINT `products_id` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `providers_id` FOREIGN KEY (`providers_id`) REFERENCES `providers` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);
-- End Create product_providers Table--
-- 设置编码方式为utf8
SET NAMES UTF8;

-- 查询是否存在 huanlu 数据库，如果存在则删除
DROP DATABASE IF EXISTS huanlu;
-- 创建数据库 huanlu，并将编码方式设置为urf8
CREATE DATABASE huanlu CHARSET=UTF8;

-- 进入huanlu数据库
USE huanlu;

-- 用户表 hl_login
CREATE TABLE hl_login(
  id int(18) PRIMARY KEY AUTO_INCREMENT COLLATE utf8_estonian_ci NOT NULL COMMENT '唯一不重复',
  uname VARCHAR(32) UNIQUE, # 账号
	upwd   VARCHAR(64),  # 密码
  phone  VARCHAR(64),  # 手机号
  email  VARCHAR(64)  # 邮箱
);

CREATE TABLE TABLE_1 ( 
  ID INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT, # ID列为无符号整型，该列值不可以为空，并不可以重复，而且自增。 
  NAME VARCHAR(5) NOT NULL 
) AUTO_INCREMENT = 100000;


INSERT INTO TABLE_1(NAME) VALUE("cxk","cxk","18810766606","123@qq.com");

INSERT INTO hl_login(uname,upwd,phone,email) VALUE("cxk","cxk","18810766606","123@qq.com");
-- 个人资料表 user_info
-- 文章表

-- 友情链接表

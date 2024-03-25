CREATE TABLE products (
    id CHAR(36) NOT NULL,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    category VARCHAR(100) NOT NULL,
    is_available BOOLEAN NOT NULL DEFAULT true,
    PRIMARY KEY (id)
);

INSERT INTO products (id, name, price, category, is_available)
VALUES 
    (uuid_generate_v4(), 'Laptop Lenovo ThinkPad X1 Carbon', 1500, 'Laptop', true),
    (uuid_generate_v4(), 'Samsung Galaxy S21 Ultra', 1200, 'Smartphone', true),
    (uuid_generate_v4(), 'Apple MacBook Pro', 2000, 'Laptop', true),
    (uuid_generate_v4(), 'Dell XPS 13', 1300, 'Laptop', true),
    (uuid_generate_v4(), 'Sony PlayStation 5', 500, 'Gaming Console', true),
    (uuid_generate_v4(), 'Amazon Echo Dot', 50, 'Smart Home', true),
    (uuid_generate_v4(), 'Nike Air Zoom Pegasus 37', 120, 'Shoes', true),
    (uuid_generate_v4(), 'Canon EOS R5', 3500, 'Camera', true),
    (uuid_generate_v4(), 'Logitech MX Master 3', 100, 'Computer Accessories', true),
    (uuid_generate_v4(), 'Samsung 49-inch Curved Gaming Monitor', 700, 'Monitor', true),
    (uuid_generate_v4(), 'Fujifilm Instax Mini 11', 70, 'Camera', true),
    (uuid_generate_v4(), 'Apple iPad Pro', 800, 'Tablet', true),
    (uuid_generate_v4(), 'Bose QuietComfort 35 II', 300, 'Headphones', true),
    (uuid_generate_v4(), 'Nest Learning Thermostat', 250, 'Smart Home', true),
    (uuid_generate_v4(), 'KitchenAid Stand Mixer', 300, 'Kitchen Appliances', true);

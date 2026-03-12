USE PERF_DB;
GO


-- Start MODULE Admin & Permission

-- Start Roles
CREATE TABLE roles (
    id VARCHAR(50) PRIMARY KEY,
    name NVARCHAR(100),
    description NVARCHAR(255)
);
CREATE TABLE permissions (
    id VARCHAR(50) PRIMARY KEY,
    name NVARCHAR(100),
    description NVARCHAR(255)
);
CREATE TABLE role_permissions (
    role_id VARCHAR(50),
    permission_id VARCHAR(50),

    PRIMARY KEY (role_id, permission_id),

    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (permission_id) REFERENCES permissions(id)
);
-- End Roles

-- Start Audit Logs
CREATE TABLE audit_logs (
    id VARCHAR(50) PRIMARY KEY,
    staff_id VARCHAR(50),
    action NVARCHAR(255),
    entity NVARCHAR(100),
    created_at DATETIME DEFAULT GETDATE()
);
-- End Audit Logs

-- End MODULE Admin & Permission

-- Start MODULE Product & Inventory Management

-- Start Product
CREATE TABLE categories (
    id VARCHAR(6) PRIMARY KEY,
    name NVARCHAR(100) NOT NULL,
    slug NVARCHAR(100) UNIQUE,
    created_at DATETIME DEFAULT GETDATE()
);
CREATE TABLE brands (
    id VARCHAR(6) PRIMARY KEY,
    name NVARCHAR(100) NOT NULL,
    slug NVARCHAR(100) UNIQUE
);
CREATE TABLE products (
    id VARCHAR(50) PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    category_id VARCHAR(6),
    brand_id VARCHAR(6),
    price DECIMAL(12,2),
    stock INT,
    description NVARCHAR(MAX),
    image_url NVARCHAR(500),
    created_at DATETIME DEFAULT GETDATE(),

    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (brand_id) REFERENCES brands(id)
);
CREATE TABLE product_specs (
    id VARCHAR(50) PRIMARY KEY,
    product_id VARCHAR(50),
    spec_key NVARCHAR(100),
    spec_value NVARCHAR(255),

    FOREIGN KEY (product_id) REFERENCES products(id)
);
-- End Product

-- Start Suppliers
CREATE TABLE suppliers (
    id VARCHAR(6) PRIMARY KEY,
    name NVARCHAR(255),
    phone NVARCHAR(20),
    email NVARCHAR(255),
    address NVARCHAR(255)
);
-- End Suppliers

-- Start Purchase Orders
CREATE TABLE purchase_orders (
    id VARCHAR(50) PRIMARY KEY,
    supplier_id VARCHAR(6),
    total_price DECIMAL(12,2),
    created_at DATETIME DEFAULT GETDATE(),

    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);
CREATE TABLE purchase_order_items (
    id VARCHAR(50) PRIMARY KEY,
    order_id VARCHAR(50),
    product_id VARCHAR(50),
    quantity INT,
    price DECIMAL(12,2),

    FOREIGN KEY (order_id) REFERENCES purchase_orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
-- End Purchase Orders


-- End MODULE Product & Inventory Management




-- Start MODULE Sales & Orders

-- Start Users
CREATE TABLE users (
    id VARCHAR(6) PRIMARY KEY,
    email NVARCHAR(255) UNIQUE,
    password_hash NVARCHAR(255),
    full_name NVARCHAR(255),
    image_url NVARCHAR(500),
    role NVARCHAR(50),
    created_at DATETIME DEFAULT GETDATE()
);

CREATE TABLE customer_accounts (
    id VARCHAR(50) PRIMARY KEY,
    user_id VARCHAR(6),
    email NVARCHAR(255) UNIQUE,
    password_hash NVARCHAR(255),

    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE addresses (
    id VARCHAR(50) PRIMARY KEY,
    user_id VARCHAR(6),
    phone NVARCHAR(20),
    address_line NVARCHAR(255),
    city NVARCHAR(100),
    district NVARCHAR(100),
    ward NVARCHAR(100),
    is_default BIT,

    FOREIGN KEY (user_id) REFERENCES users(id)
);
-- End Users

-- Start Order
CREATE TABLE orders (
    id VARCHAR(50) PRIMARY KEY,
    user_id VARCHAR(6),
    total_price DECIMAL(12,2),
    status NVARCHAR(50),
    created_at DATETIME DEFAULT GETDATE(),

    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE order_items (
    id VARCHAR(50) PRIMARY KEY,
    order_id VARCHAR(50),
    product_id VARCHAR(50),
    quantity INT,
    price DECIMAL(12,2),

    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
-- End Order

-- Start PC Builds
CREATE TABLE pc_builds (
    id VARCHAR(50) PRIMARY KEY,
    user_id VARCHAR(6),
    name NVARCHAR(255),
    total_price DECIMAL(12,2),
    created_at DATETIME DEFAULT GETDATE(),

    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE pc_build_items (
    id VARCHAR(50) PRIMARY KEY,
    build_id VARCHAR(50),
    product_id VARCHAR(50),

    FOREIGN KEY (build_id) REFERENCES pc_builds(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
-- End PC Builds

-- End MODULE Sales & Orders




-- Start MODULE HR & Payroll

-- Start Staff
CREATE TABLE departments (
    id VARCHAR(50) PRIMARY KEY,
    name NVARCHAR(100) NOT NULL,
    description NVARCHAR(255),
    created_at DATETIME DEFAULT GETDATE()
);
CREATE TABLE staff (
    id VARCHAR(50) PRIMARY KEY,
    full_name NVARCHAR(255),
    phone NVARCHAR(20),
    email NVARCHAR(255),
    image_url NVARCHAR(500),
    position NVARCHAR(100),
    department_id VARCHAR(50),
    hired_date DATETIME,

    FOREIGN KEY (department_id) REFERENCES departments(id)
);
CREATE TABLE staff_accounts (
    id VARCHAR(50) PRIMARY KEY,
    staff_id VARCHAR(50),
    username NVARCHAR(100) UNIQUE,
    password_hash NVARCHAR(255),
    role_id VARCHAR(50),

    FOREIGN KEY (staff_id) REFERENCES staff(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);
-- End Staff

-- Start Shift
CREATE TABLE shifts (
    id VARCHAR(50) PRIMARY KEY,
    name NVARCHAR(100),
    start_time TIME,
    end_time TIME,
    working_hours DECIMAL(4,2)
);
-- End Shift

-- Start employee payroll
CREATE TABLE staff_schedules (
    id VARCHAR(50) PRIMARY KEY,
    staff_id VARCHAR(50),
    shift_id VARCHAR(50),
    work_date DATE,

    FOREIGN KEY (staff_id) REFERENCES staff(id),
    FOREIGN KEY (shift_id) REFERENCES shifts(id)
);
CREATE TABLE attendances (
    id VARCHAR(50) PRIMARY KEY,
    staff_id VARCHAR(50),
    work_date DATE,
    check_in DATETIME,
    check_out DATETIME,
    overtime_hours DECIMAL(4,2),
    status NVARCHAR(50),

    FOREIGN KEY (staff_id) REFERENCES staff(id)
);
CREATE TABLE leave_requests (
    id VARCHAR(50) PRIMARY KEY,
    staff_id VARCHAR(50),
    leave_type NVARCHAR(100),
    start_date DATE,
    end_date DATE,
    status NVARCHAR(50),
    reason NVARCHAR(255),

    FOREIGN KEY (staff_id) REFERENCES staff(id)
);
CREATE TABLE salaries (
    id VARCHAR(50) PRIMARY KEY,
    staff_id VARCHAR(50),
    base_salary DECIMAL(12,2),
    hourly_rate DECIMAL(12,2),
    effective_date DATE,

    FOREIGN KEY (staff_id) REFERENCES staff(id)
);
CREATE TABLE allowances (
    id VARCHAR(50) PRIMARY KEY,
    name NVARCHAR(100),
    amount DECIMAL(12,2),
    description NVARCHAR(255)
);
CREATE TABLE bonuses (
    id VARCHAR(50) PRIMARY KEY,
    staff_id VARCHAR(50),
    amount DECIMAL(12,2),
    reason NVARCHAR(255),
    bonus_date DATE,

    FOREIGN KEY (staff_id) REFERENCES staff(id)
);
CREATE TABLE deductions (
    id VARCHAR(50) PRIMARY KEY,
    name NVARCHAR(100),
    amount DECIMAL(12,2),
    description NVARCHAR(255)
);
CREATE TABLE payrolls (
    id VARCHAR(50) PRIMARY KEY,
    staff_id VARCHAR(50),
    pay_period_start DATE,
    pay_period_end DATE,
    base_salary DECIMAL(12,2),
    overtime_pay DECIMAL(12,2),
    allowance_total DECIMAL(12,2),
    bonus_total DECIMAL(12,2),
    deduction_total DECIMAL(12,2),
    net_salary DECIMAL(12,2),
    created_at DATETIME DEFAULT GETDATE(),

    FOREIGN KEY (staff_id) REFERENCES staff(id)
);
-- End employee payroll

-- End MODULE HR & Payroll


-- Start Promotion

CREATE TABLE promotions (
    id VARCHAR(50) PRIMARY KEY,
    name NVARCHAR(255),
    description NVARCHAR(500),

    discount_type NVARCHAR(50),
    discount_value DECIMAL(10,2),

    start_date DATETIME,
    end_date DATETIME,

    min_order_value DECIMAL(12,2),
    is_active BIT,

    created_at DATETIME DEFAULT GETDATE()
);
CREATE TABLE promotion_products (
    id VARCHAR(50) PRIMARY KEY,
    promotion_id VARCHAR(50),
    product_id VARCHAR(50),

    FOREIGN KEY (promotion_id) REFERENCES promotions(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
CREATE TABLE promotion_categories (
    id VARCHAR(50) PRIMARY KEY,
    promotion_id VARCHAR(50),
    category_id VARCHAR(6),

    FOREIGN KEY (promotion_id) REFERENCES promotions(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
CREATE TABLE coupons (
    id VARCHAR(50) PRIMARY KEY,
    code NVARCHAR(50) UNIQUE,

    promotion_id VARCHAR(50),

    usage_limit INT,
    used_count INT,

    start_date DATETIME,
    end_date DATETIME,

    is_active BIT,

    FOREIGN KEY (promotion_id) REFERENCES promotions(id)
);

ALTER TABLE orders
ADD discount_amount DECIMAL(12,2);

ALTER TABLE orders
ADD final_price DECIMAL(12,2);

ALTER TABLE orders
ADD coupon_id VARCHAR(50);


-- End Promotion












































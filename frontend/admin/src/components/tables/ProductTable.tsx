import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useState } from "react";
import { useRef, useEffect } from "react";
// import Badge from "../../ui/badge/Badge";
import { usePagination } from "../../hooks/usePagination";
import { ArrowRightIcon, ArrowLeftIcon, HorizontaLDots} from "../../icons";
import Button  from "../ui/button/Button";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

interface Product {
    id: number;
    product: {
        image: string;
        name: string;
        price: string;
        stock: number;
        createdAt: string;
    }
    category: string;
    brand: string;
}



const tableData: Product[] = [
    {
        id: 1,
        product: {
            image: "/images/products/product-01.jpg",
            name: "Macbook Pro M2",
            price: "$1,299.00",
            stock: 25,
            createdAt: "2026-03-14",
        },
        category: "Laptop",
        brand: "Apple"
    },
    {
        id: 2,
        product: {
            image: "/images/products/product-02.jpg",
            name: "Apple Watch Ultra",
            price: "$599.00",
            stock: 50,
            createdAt: "2026-03-14",
        },
        category: "Watch",
        brand: "Apple"
    },
    {
        id: 3,
        product: {
            image: "/images/products/product-03.jpg",
            name: "Iphone 16 Pro Max",
            price: "$999.00",
            stock: 80,
            createdAt: "2026-03-14",
        },
        category: "Phone",
        brand: "Apple"
    },
    {
        id: 4,
        product: {
            image: "/images/products/product-04.jpg",
            name: "Dell XPS 13 Laptop",
            price: "$1,299.00",
            stock: 25,
            createdAt: "2026-03-14",
        },
        category: "Laptop",
        brand: "Dell"
    },
    {
        id: 5,
        product: {
            image: "/images/products/product-05.jpg",
            name: "Airpods Pro 2nd Gen",
            price: "$599.00",
            stock: 50,
            createdAt: "2026-03-14",
        },
        category: "Audio",
        brand: "Apple"
    },
    {
        id: 6,
        product: {
            image: "/images/products/product-01.jpg",
            name: "Macbook Pro M2",
            price: "$1,299.00",
            stock: 25,
            createdAt: "2026-03-14",
        },
        category: "Laptop",
        brand: "Apple"
    },
    {
        id: 7,
        product: {
            image: "/images/products/product-02.jpg",
            name: "Apple Watch Ultra",
            price: "$599.00",
            stock: 50,
            createdAt: "2026-03-14",
        },
        category: "Watch",
        brand: "Apple"
    },
    {
        id: 8,
        product: {
            image: "/images/products/product-03.jpg",
            name: "Iphone 16 Pro Max",
            price: "$999.00",
            stock: 80,
            createdAt: "2026-03-14",
        },
        category: "Phone",
        brand: "Apple"
    },
    {
        id: 9,
        product: {
            image: "/images/products/product-04.jpg",
            name: "Dell XPS 13 Laptop",
            price: "$1,299.00",
            stock: 25,
            createdAt: "2026-03-14",
        },
        category: "Laptop",
        brand: "Dell"
    },
    {
        id: 10,
        product: {
            image: "/images/products/product-05.jpg",
            name: "Airpods Pro 2nd Gen",
            price: "$599.00",
            stock: 50,
            createdAt: "2026-03-14",
        },
        category: "Audio",
        brand: "Apple"
    },
    {
        id: 11,
        product: {
            image: "/images/products/product-01.jpg",
            name: "Macbook Pro M2",
            price: "$1,299.00",
            stock: 25,
            createdAt: "2026-03-14",
        },
        category: "Laptop",
        brand: "Apple"
    },
    {
        id: 12,
        product: {
            image: "/images/products/product-02.jpg",
            name: "Apple Watch Ultra",
            price: "$599.00",
            stock: 50,
            createdAt: "2026-03-14",
        },
        category: "Watch",
        brand: "Apple"
    },
    {
        id: 13,
        product: {
            image: "/images/products/product-03.jpg",
            name: "Iphone 16 Pro Max",
            price: "$999.00",
            stock: 80,
            createdAt: "2026-03-14",
        },
        category: "Phone",
        brand: "Apple"
    },
    {
        id: 14,
        product: {
            image: "/images/products/product-04.jpg",
            name: "Dell XPS 13 Laptop",
            price: "$1,299.00",
            stock: 25,
            createdAt: "2026-03-14",
        },
        category: "Laptop",
        brand: "Dell"
    },
    {
        id: 15,
        product: {
            image: "/images/products/product-05.jpg",
            name: "Airpods Pro 2nd Gen",
            price: "$599.00",
            stock: 50,
            createdAt: "2026-03-14",
        },
        category: "Audio",
        brand: "Apple"
    },
]


export default function ProductTable() {
    const {
        currentPage,
        totalPages,
        paginatedData,
        totalItems,
        startItem,
        endItem,
        nextPage,
        prevPage,
        goToPage,
    } = usePagination(tableData, 7);    

    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    const headerCheckboxRef = useRef<HTMLInputElement>(null);

    const isAllSelected = selectedItems.length === tableData.length;
    const isIndeterminate =
        selectedItems.length > 0 && selectedItems.length < tableData.length;

    const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

    function toggleDropdown(id: number) {
        setOpenDropdownId((prev) => {
            console.log("prev:", prev);
            console.log("clicked id:", id);
            const newValue = prev === id ? null : id
            console.log("new value:", newValue);
            return newValue;
        });
    }





    const toggleItem = (id: number) => {
        setSelectedItems((prev) =>
            prev.includes(id)
            ? prev.filter((item) => item !== id)
            : [...prev, id]
        );
    };

    const toggleSelectAll = () => {
        if (selectedItems.length === tableData.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(tableData.map((p) => p.id));
        }
    };

    useEffect(() => {
        if (headerCheckboxRef.current) {
            headerCheckboxRef.current.indeterminate =
            selectedItems.length > 0 &&
            selectedItems.length < tableData.length;
        }
    }, [selectedItems]);


    return (
    <>
        <div className="overflow-x-auto custom-scrollbar">
            <Table className="w-full">
                {/* Table Header */}
                <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                    <TableRow>
                        <TableCell
                           isHeader
                            className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                        >
                            <div className="inline-flex items-center">
                                <label className="flex items-center cursor-pointer relative">
                                    <input 
                                        ref={headerCheckboxRef}
                                        type="checkbox"
                                        checked={isAllSelected}
                                        onChange={toggleSelectAll}
                                        id="checkBoxHeader" 
                                        className={`peer h-5 w-5 cursor-pointer appearance-none rounded shadow border border-slate-300 transition-all
                                        ${isAllSelected || isIndeterminate ? "bg-blue-600 border-blue-600" : ""}`}
                                    />
                                    <span className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        {isAllSelected && (
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                        )}
                                        {isIndeterminate && (
                                            <div className="w-3 h-0.5 bg-white rounded"></div>
                                        )}

                                    </span>
                                </label>
                            </div>
                        </TableCell>
                        <TableCell
                            isHeader
                            className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                        >
                            Products
                        </TableCell>
                        <TableCell
                            isHeader
                            className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                        >
                            Category
                        </TableCell>
                        <TableCell
                            isHeader
                            className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                        >
                            Brand
                        </TableCell>
                        <TableCell
                            isHeader
                            className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                        >
                            Price
                        </TableCell>
                        <TableCell
                            isHeader
                            className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                        >
                            Stock
                        </TableCell>
                        <TableCell
                            isHeader
                            className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                        >
                            Created At
                        </TableCell>
                        <TableCell
                            isHeader
                            className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                        >
                            <span></span>
                        </TableCell>
                    </TableRow>
                </TableHeader>

                {/* Table Body */}
                <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05] border-b border-gray-100 dark:border-white/[0.05]">
                    {paginatedData.map((pro) => (
                    <TableRow key={pro.id} className="hover:bg-gray-100">
                        <TableCell className="px-6 py-4 text-start">
                            <div className="inline-flex items-center">
                                <label className="flex items-center cursor-pointer relative">
                                    <input 
                                        type="checkbox"
                                        checked={selectedItems.includes(pro.id)}
                                        onChange={() => toggleItem(pro.id)}
                                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-blue-600 checked:border-blue-600" 
                                        id={`check-${pro.id}`}
                                    />
                                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                            </div>
                        </TableCell>
                        <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 overflow-hidden rounded">
                            <img
                                width={50}
                                height={50}
                                src={pro.product.image}
                                alt={pro.product.name}
                            />
                            </div>
                            <div>
                            <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                {pro.product.name}
                            </span>
                            {/* <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                {order.user.role}
                            </span> */}
                            </div>
                        </div>
                        </TableCell>
                        <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        {pro.category}
                        </TableCell>
                        <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        {pro.brand}
                        </TableCell>
                        <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        {pro.product.price}
                        </TableCell>
                        <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        {/* <Badge
                            size="sm"
                            color={
                            order.status === "Active"
                                ? "success"
                                : order.status === "Pending"
                                ? "warning"
                                : "error"
                            }
                        >
                            {order.status}
                        </Badge> */}
                        {pro.product.stock}
                        </TableCell>
                        <TableCell className="px-6 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                        {pro.product.createdAt}
                        </TableCell>
                        <TableCell className="relative px-6 py-3 text-gray-500 text-end text-theme-sm dark:text-gray-400">
                            <div className="relative inline-block">
                                <button 
                                    onClick={() => toggleDropdown(pro.id)} 
                                    className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400"
                                >
                                    <HorizontaLDots className="h-4 w-4" />
                                </button>

                                <Dropdown 
                                    isOpen={openDropdownId === pro.id} 
                                    onClose={() => setOpenDropdownId(null)}
                                    className="absolute mt-[10px] flex w-[150px] flex-col rounded-lg border border-gray-200 bg-white p-1.5 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
                                >
                                    <DropdownItem 
                                        tag="a"
                                        to="/product={pro.id}/edit"
                                        className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                                    >
                                        Edit
                                    </DropdownItem>
                                    <DropdownItem 
                                        tag="a"
                                        to="/product={pro.id}/delete"
                                        className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                                    >
                                        Delete
                                    </DropdownItem>
                                </Dropdown>
                            </div>
                            

                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between px-6 py-5 dark:border-gray-800">
            <div>
                showing {startItem} to {endItem} of  {totalItems} products
            </div>
            <div className="flex gap-2">
                <Button onClick={prevPage} variant="outline">
                    <span><ArrowLeftIcon /></span>
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                    key={i}
                    onClick={() => goToPage(i + 1)}
                    className={`h-11 w-11 rounded-lg hover:bg-blue-400 hover:text-white ${
                        currentPage === i + 1 ? "bg-blue-600 text-white" : ""
                    }`}
                    >
                    {i + 1}
                    </button>
                ))}
                <Button onClick={nextPage} variant="outline">
                    <span><ArrowRightIcon /></span>
                </Button>
            </div>
        </div>
    </>
  );
}

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import { usePagination } from "../../hooks/usePagination";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import Button from "../ui/button/Button";
import { ArrowRightIcon, ArrowLeftIcon, HorizontaLDots} from "../../icons";
import { useState } from "react";
import { useRef, useEffect } from "react";

interface Invoice {
    id: number;
    idInvoice: string;
    customer: string;
    creationDate: string;
    dueDate: string;
    total: string;
    status: "Paid" | "Unpaid" | "draft";
}

const tableData: Invoice[] = [
    {
        id: 1,
        idInvoice: "#323534",
        customer: "Lindsey Curtis",
        creationDate: "August 7, 2025",
        dueDate: "September 7, 2025",
        total: "$1,200.00",
        status: "Paid",
    },
    {
        id: 2,
        idInvoice: "#323535",
        customer: "Michael Thompson",
        creationDate: "August 10, 2025",
        dueDate: "September 10, 2025",
        total: "$850.00",
        status: "Unpaid",
    },
    {
        id: 3,
        idInvoice: "#323536",
        customer: "Emily Johnson",
        creationDate: "August 15, 2025",
        dueDate: "September 15, 2025",
        total: "$1,500.00",
        status: "draft",
    },
    {
        id: 4,
        idInvoice: "#323537",
        customer: "David Wilson",
        creationDate: "August 20, 2025",
        dueDate: "September 20, 2025",
        total: "$2,000.00",
        status: "Paid",
    },
    {
        id: 5,
        idInvoice: "#323538",
        customer: "Sophia Martinez",
        creationDate: "August 25, 2025",
        dueDate: "September 25, 2025",
        total: "$1,750.00",
        status: "Unpaid",
    },
    {
        id: 6,
        idInvoice: "#323539",
        customer: "James Anderson",
        creationDate: "August 30, 2025",
        dueDate: "September 30, 2025",
        total: "$900.00",
        status: "draft",
    },
    {
        id: 7,
        idInvoice: "#323540",
        customer: "Olivia Brown",
        creationDate: "September 5, 2025",
        dueDate: "October 5, 2025",
        total: "$1,300.00",
        status: "Paid",
    },
    {
        id: 8,
        idInvoice: "#323541",
        customer: "William Davis",
        creationDate: "September 10, 2025",
        dueDate: "October 10, 2025",
        total: "$1,100.00",
        status: "Unpaid",
    },
    {
        id: 9,
        idInvoice: "#323542",
        customer: "Ava Garcia",
        creationDate: "September 15, 2025",
        dueDate: "October 15, 2025",
        total: "$1,400.00",
        status: "draft",
    },
    {
        id: 10,
        idInvoice: "#323543",
        customer: "Ethan Martinez",
        creationDate: "September 20, 2025",
        dueDate: "October 20, 2025",
        total: "$1,600.00",
        status: "Paid",
    },
    {
        id: 11,
        idInvoice: "#323544",
        customer: "Isabella Rodriguez",
        creationDate: "September 25, 2025",
        dueDate: "October 25, 2025",
        total: "$1,800.00",
        status: "Unpaid",
    },
    {
        id: 12,
        idInvoice: "#323545",
        customer: "Mason Lee",
        creationDate: "September 30, 2025",
        dueDate: "October 30, 2025",
        total: "$1,250.00",
        status: "draft",
    },
    {
        id: 13,
        idInvoice: "#323546",
        customer: "Mia Gonzalez",
        creationDate: "October 5, 2025",
        dueDate: "November 5, 2025",
        total: "$1,700.00",
        status: "Paid",
    },
    {
        id: 14,
        idInvoice: "#323547",
        customer: "Benjamin Wilson",
        creationDate: "October 10, 2025",
        dueDate: "November 10, 2025",
        total: "$1,900.00",
        status: "Unpaid",
    },
    {
        id: 15,
        idInvoice: "#323548",
        customer: "Charlotte Anderson",
        creationDate: "October 15, 2025",
        dueDate: "November 15, 2025",
        total: "$1,350.00",
        status: "draft",
    },
    {
        id: 16,
        idInvoice: "#323549",
        customer: "Logan Thomas",
        creationDate: "October 20, 2025",
        dueDate: "November 20, 2025",
        total: "$1,450.00",
        status: "Paid",
    },
    {
        id: 17,
        idInvoice: "#323550",
        customer: "Amelia Harris",
        creationDate: "October 25, 2025",
        dueDate: "November 25, 2025",
        total: "$1,550.00",
        status: "Unpaid",
    },
    {
        id: 18,
        idInvoice: "#323551",
        customer: "Alexander Clark",
        creationDate: "October 30, 2025",
        dueDate: "November 30, 2025",
        total: "$1,800.00",
        status: "draft",
    },
    {
        id: 19,
        idInvoice: "#323552",
        customer: "Evelyn Lewis",
        creationDate: "November 5, 2025",
        dueDate: "December 5, 2025",
        total: "$1,200.00",
        status: "Paid",
    },
    {
        id: 20,
        idInvoice: "#323553",
        customer: "Daniel Walker",
        creationDate: "November 10, 2025",
        dueDate: "December 10, 2025",
        total: "$1,400.00",
        status: "Unpaid",
    },
    {
        id: 21,
        idInvoice: "#323554",
        customer: "Harper Young",
        creationDate: "November 15, 2025",
        dueDate: "December 15, 2025",
        total: "$1,600.00",
        status: "draft",
    },
    {
        id: 22,
        idInvoice: "#323555",
        customer: "Matthew King",
        creationDate: "November 20, 2025",
        dueDate: "December 20, 2025",
        total: "$1,300.00",
        status: "Paid",
    },
    {
        id: 23,
        idInvoice: "#323556",
        customer: "Abigail Wright",
        creationDate: "November 25, 2025",
        dueDate: "December 25, 2025",
        total: "$1,500.00",
        status: "Unpaid",
    },
    {
        id: 24,
        idInvoice: "#323557",
        customer: "Joseph Scott",
        creationDate: "November 30, 2025",
        dueDate: "December 30, 2025",
        total: "$1,700.00",
        status: "draft",
    },
    {
        id: 25,
        idInvoice: "#323558",
        customer: "Emily Green",
        creationDate: "December 5, 2025",
        dueDate: "January 5, 2026",
        total: "$1,900.00",
        status: "Paid",
    },
    {
        id: 26,
        idInvoice: "#323559",
        customer: "David Adams",
        creationDate: "December 10, 2025",
        dueDate: "January 10, 2026",
        total: "$1,600.00",
        status: "Unpaid",
    },
    {
        id: 27,
        idInvoice: "#323560",
        customer: "Sofia Baker",
        creationDate: "December 15, 2025",
        dueDate: "January 15, 2026",
        total: "$1,800.00",
        status: "draft",
    },
];

export default function InvoiceTable() {
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
                                Invoice Number
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Customer
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Creation Date
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Due Date
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Total
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Status
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
                        {paginatedData.map((inv) => (
                            <TableRow key={inv.id} className="hover:bg-gray-100">
                                <TableCell className="px-6 py-4 text-start">
                                    <div className="inline-flex items-center">
                                        <label className="flex items-center cursor-pointer relative">
                                            <input 
                                                type="checkbox"
                                                checked={selectedItems.includes(inv.id)}
                                                onChange={() => toggleItem(inv.id)}
                                                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-blue-600 checked:border-blue-600" 
                                                id={`check-${inv.id}`}
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
                                        
                                        <div>
                                            <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                {inv.idInvoice}
                                            </span>
                                            
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    {inv.customer}
                                </TableCell>
                                <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    {inv.creationDate}
                                </TableCell>
                                <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    {inv.dueDate}
                                </TableCell>
                                <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    {inv.total}
                                </TableCell>
                                <TableCell className="px-6 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <Badge
                                            size="sm"
                                            color={
                                            inv.status === "Paid"
                                                ? "success"
                                                : inv.status === "Unpaid"
                                                ? "error"
                                                : "warning"
                                            }
                                        >
                                            {inv.status}
                                        </Badge>
                                </TableCell>
                                <TableCell className="relative px-6 py-3 text-gray-500 text-end text-theme-sm dark:text-gray-400">
                                    <div className="relative inline-block">
                                        <button 
                                            onClick={() => toggleDropdown(inv.id)} 
                                            className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400"
                                        >
                                            <HorizontaLDots className="h-4 w-4" />
                                        </button>

                                        <Dropdown 
                                            isOpen={openDropdownId === inv.id} 
                                            onClose={() => setOpenDropdownId(null)}
                                            className="absolute mt-[10px] flex w-[150px] flex-col rounded-lg border border-gray-200 bg-white p-1.5 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
                                        >
                                            <DropdownItem 
                                                tag="a"
                                                to="/invoice={inv.id}/edit"
                                                className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                                            >
                                                Edit
                                            </DropdownItem>
                                            <DropdownItem 
                                                tag="a"
                                                to="/invoice={inv.id}/delete"
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
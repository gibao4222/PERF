import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { PrintIcon } from "../../icons";


interface Product{
    id: number;
    name: string;
    quantity: number;
    unitCost: string;
    discount: string;
    total: string;
}

const tableData: Product[] = [
    {
        id: 1,
        name: "Macbook pro 16 inch",
        quantity: 1,
        unitCost: "$2399",
        discount: "10%",
        total: "$2159.10"
    },
    {
        id: 2,
        name: "Apple iPhone 14 Pro Max",
        quantity: 1,
        unitCost: "$1199",
        discount: "5%",
        total: "$1139.05"
    },
    {
        id: 3,
        name: "Apple Watch Series 7",
        quantity: 1,
        unitCost: "$399",
        discount: "0%",
        total: "$399.00"
    },
    {
        id: 4,
        name: "AirPods Pro",
        quantity: 1,
        unitCost: "$249",
        discount: "15%",
        total: "$211.65"
    },
    {
        id: 5,
        name: "Apple iPad Pro 12.9 inch",
        quantity: 1,
        unitCost: "$1099",
        discount: "20%",
        total: "$879.20"
    },

];

export default function SingleInvoice() {
  return (
    <>
        <PageMeta
            title="Single Invoice"
            description=""
        />
        <PageBreadcrumb pageTitle="Single Invoice" />
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            {/* Card Header */}
            <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
                <div className="">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white/90">
                        Invoice
                    </h3>
                    

                    
                </div>
                <div className="">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white/90">
                        ID : #348
                    </h3>
                </div>
            </div>

            {/* Card Body */}
            <div className="p-5 xl:p-8">
                <div className="flex flex-col gap-6 mb-9 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <span className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">
                            From
                        </span>
                        <h5 className="mb-2 text-base font-semibold text-gray-800 dark:text-white/90">
                            Pimjo LLC
                        </h5>
                        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                            1280, Clair Street, <br/>Massachusetts, New York - 02543
                        </p>
                        <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                            Issued On:
                        </span>
                        <span className="block text-sm text-gray-500 dark:text-gray-400">
                            11 March, 2027
                        </span>
                    </div>
                    <div className="h-px w-full bg-gray-200 dark:bg-gray-800 sm:h-[158px] sm:w-px">
                    </div>
                    <div className="sm:text-right">
                        <span className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">
                            To
                        </span>
                        <h5 className="mb-2 text-base font-semibold text-gray-800 dark:text-white/90">
                            Albert Word
                        </h5>
                        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                            355, Shobe Lane <br/>Colorado, Fort Collins - 80543
                        </p>
                        <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                            Due On:
                        </span>
                        <span className="block text-sm text-gray-500 dark:text-gray-400">
                            16 March, 2027
                        </span>
                    </div>
                </div>
                <div>
                    <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800">
                        <Table className="w-full text-left text-sm text-gray-700 dark:border-gray-800">
                                    {/* Table Header */}
                                    <TableHeader className="bg-gray-100 border-b border-gray-100 dark:border-white/[0.05]">
                                        <TableRow>
                                            <TableCell
                                                isHeader
                                                className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:bg-gray-800 dark:text-gray-400"
                                            >
                                                S. No.
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Product Name
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Quantity
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Unit Cost
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Discount
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Total
                                            </TableCell>
                                            
                                        </TableRow>
                                    </TableHeader>

                                    {/* Table Body */}
                                    <TableBody>
                                        {tableData.map((product) => (
                                            <TableRow key={product.id} className="border-b border-gray-100 dark:border-white/[0.05]">
                                                <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {product.id}
                                                </TableCell>
                                                <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {product.name}
                                                </TableCell>
                                                <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {product.quantity}
                                                </TableCell>
                                                <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {product.unitCost}
                                                </TableCell>
                                                <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {product.discount}
                                                </TableCell>
                                                <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {product.total}
                                                </TableCell>
                                                
                                            </TableRow>
                                        ))}

                                    </TableBody>

                                </Table>
                    </div>
                </div>
                <div className="pb-6 my-6 text-right border-b border-gray-100 dark:border-gray-800">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Sub Total amount: $3,098
                    </p>
                    <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                        Vat (10%): $312
                    </p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white/90">
                        Total : $3,410
                    </p>
                </div>
                <div className="flex items-center justify-end gap-3">
                    <button className="inline-flex items-center justify-center gap-2 rounded-lg transition  px-5 py-3.5 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300 ">
                        Proceed to payment
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 rounded-lg transition  px-5 py-3.5 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">
                        <PrintIcon width={20} height={20} />
                        Print
                    </button>
                </div>
            </div>
        </div>

    </>
  );
}
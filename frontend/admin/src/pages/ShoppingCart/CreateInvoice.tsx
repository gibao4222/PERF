import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { TrashBinIcon, EyeIcon, SaveIcon, InfoBlackIcon } from "../../icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

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


export default function CreateInvoice() {
    return (
        <>
            <PageMeta
                title="Create Invoice"
                description=""
            />
            <PageBreadcrumb pageTitle="Create Invoice" />

                
            <div className=" rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
                {/* Card Header */}
                <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white/90">
                        Create Invoice
                    </h3>
                </div>

                {/* Card Body */}
                <div className="border-b border-gray-200 p-4 sm:p-6 dark:border-gray-800">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Invoice Number
                                </label>
                                <div className="relative">
                                    <input placeholder="INV-001" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text"/>
                                </div>
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Customer Name
                                </label>
                                <div className="relative">
                                    <input placeholder="John Doe" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text"/>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Customer Address
                                </label>
                                <div className="relative">
                                    <input placeholder="Enter customer " className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text"/>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>

                <div className="border-b border-gray-200 p-4 sm:p-8 dark:border-gray-800">
                    <div className="space-y-6">
                        <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
                            <div className="overflow-x-auto custom-scrollbar">
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
                                            <TableCell
                                                isHeader
                                                className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                <span></span>
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
                                                <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    <TrashBinIcon className="hover:text-red-500" />
                                                </TableCell>
                                            </TableRow>
                                        ))}

                                    </TableBody>

                                </Table>
                            </div>
                        </div>
                        <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50 p-4 sm:p-6 dark:border-gray-800 dark:bg-gray-900">
                            <form>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-12">
                                    <div className="w-full lg:col-span-3">
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                            Product Name
                                        </label>
                                        <div className="relative">
                                            <input placeholder="Enter product name" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="text" value="" name="name" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:col-span-3">
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                            Price
                                        </label>
                                        <div className="relative">
                                            <input placeholder="Enter product price" min="0" className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800" type="number" value="" name="price" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:col-span-2">
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                            Quantity
                                        </label>
                                        <div className="flex h-11 divide-x divide-gray-300 overflow-hidden rounded-lg border border-gray-300 dark:divide-gray-800 dark:border-gray-700">
                                            <button type="button" className="inline-flex w-1/3 items-center justify-center bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.66699 12H18.6677" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                            <div className="w-1/3">
                                                <input min="1" className="h-full w-full border-0 bg-white text-center text-sm text-gray-700 outline-none focus:ring-0 dark:bg-gray-900 dark:text-gray-400" type="number" value="1" name="quantity" />
                                            </div>
                                            <button type="button" className="inline-flex w-1/3 items-center justify-center bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.66699 12.0002H18.6677M12.6672 6V18.0007" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full lg:col-span-2">
                                        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                            Discount
                                        </label>
                                        <div className="relative">
                                            <select name="discount" className="dark:bg-dark-900 shadow-theme-xs bg-none appearance-none focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 pr-11 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30">
                                                <option value="0">0%</option>
                                                <option value="10">10%</option>
                                                <option value="20">20%</option>
                                                <option value="50">50%</option>
                                            </select>
                                            <svg className="absolute text-gray-700 dark:text-gray-400 right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.79175 8.02075L10.0001 13.2291L15.2084 8.02075" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-end lg:col-span-2">
                                        <button className="inline-flex items-center justify-center gap-2 rounded-lg transition w-full h-11 px-5 py-3.5 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">
                                            Save Product
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-5 flex max-w-2xl items-center gap-2">
                                <InfoBlackIcon width={20} height={20} />
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    After filling in the product details, press Enter/Return or click 'Save Product' to add it to the list.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-between sm:justify-end">
                            <div className=" w-full space-y-1 text-right sm:w-[220px]">
                                <p className="mb-4 text-left text-sm font-medium text-gray-800 dark:text-white/90">
                                    Order summary
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex justify-between gap-5">
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            Sub Total
                                        </span>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                            $3850.00
                                        </span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            Vat (10%):
                                        </span>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                            $385.00
                                        </span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="font-medium text-gray-700 dark:text-gray-400">
                                            Total
                                        </span>
                                        <span className="text-lg font-semibold text-gray-800 dark:text-white/90">
                                            $4235.00
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 sm:p-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                        <button className="inline-flex items-center justify-center gap-2 rounded-lg transition  px-5 py-3.5 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300 ">
                            <EyeIcon width={20} height={20} />
                            Preview Invoice
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 rounded-lg transition  px-5 py-3.5 text-sm bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">
                            <SaveIcon width={20} height={20} />
                            Save Invoice
                        </button>
                    </div>
                </div>

            </div>

        </>
    );
}
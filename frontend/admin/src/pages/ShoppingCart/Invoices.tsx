import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import {PlusIcon} from "../../icons";
import InvoiceTable from "../../components/tables/InvoiceTable";
export default function Invoices() {
    return (
        <>
            <PageMeta
                title="Invoice"
                description=""
            />
            <PageBreadcrumb pageTitle="Invoices" />

            <div className="space-y-6">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] px-6 py-6">
                    {/* Card Header */}
                    <div className="flex flex-col gap-2 mb-6 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800">
                        <div className="">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-white/90">
                                Overview
                            </h3>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => window.location.href = "/create-invoice"} className="inline-flex items-center justify-center transition gap-2 rounded-lg border border-gray-300 bg-blue-600 px-4 py-3 text-theme-sm font-medium text-white shadow-theme-xs hover:bg-blue-800 hover:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                                <PlusIcon className="w-6 h-6"/>
                                Create an Invoice
                            </button>
                        </div>
                    </div>
                    {/* Card Body */}
                    <div className="grid grid-cols-1 rounded-xl border border-gray-200 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0 dark:divide-gray-800 dark:border-gray-800">
                        <div className="border-b p-5 sm:border-r lg:border-b-0">
                            <p className="mb-1.5 text-sm text-gray-400 dark:text-gray-500">
                                Overdue
                            </p>
                            <h3 className="text-3xl text-gray-800 dark:text-white/90">
                                $120.80
                            </h3>
                        </div>
                        <div className="border-b p-5 lg:border-b-0">
                            <p className="mb-1.5 text-sm text-gray-400 dark:text-gray-500">
                                Due within next 30 days
                            </p>
                            <h3 className="text-3xl text-gray-800 dark:text-white/90">
                                0.00
                            </h3>
                        </div>
                        <div className="border-b p-5 sm:border-r sm:border-b-0">
                            <p className="mb-1.5 text-sm text-gray-400 dark:text-gray-500">
                                Average time to get paid
                            </p>
                            <h3 className="text-3xl text-gray-800 dark:text-white/90">
                                24 days
                            </h3>
                        </div>
                        <div className="p-5">
                            <p className="mb-1.5 text-sm text-gray-400 dark:text-gray-500">
                                Upcoming Payout
                            </p>
                            <h3 className="text-3xl text-gray-800 dark:text-white/90">
                                $3,450.50
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
                    {/* Card Header */}
                    <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
                        <div className="">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-white/90">
                                Invoices
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                Your most recent invoices list
                            </p>

                            
                        </div>
                        <div className="flex gap-3.5">
                            <div className="hidden h-11 items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 lg:inline-flex dark:bg-gray-900">
                                <button className="text-theme-sm h-10 rounded-md px-3 py-2 font-medium hover:text-gray-900 dark:hover:text-white shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800">
                                    All Invoices
                                </button>
                                <button className="text-theme-sm h-10 rounded-md px-3 py-2 font-medium hover:text-gray-900 dark:hover:text-white text-gray-500 dark:text-gray-400">
                                    Unpaid
                                </button>
                                <button className="text-theme-sm h-10 rounded-md px-3 py-2 font-medium hover:text-gray-900 dark:hover:text-white text-gray-500 dark:text-gray-400">
                                    Draft
                                </button>
                            </div>
                            <div className="hidden flex-col gap-3 sm:flex sm:flex-row sm:items-center">
                                <div className="relative">
                                    <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                                        <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" 
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" 
                                                clip-rule="evenodd" 
                                                d="M3.04199 9.37363C3.04199 
                                                5.87693 5.87735 3.04199 9.37533 
                                                3.04199C12.8733 3.04199 15.7087 
                                                5.87693 15.7087 9.37363C15.7087 
                                                12.8703 12.8733 15.7053 9.37533 
                                                15.7053C5.87735 15.7053 3.04199 
                                                12.8703 3.04199 9.37363ZM9.37533 
                                                1.54199C5.04926 1.54199 1.54199 
                                                5.04817 1.54199 9.37363C1.54199 
                                                13.6991 5.04926 17.2053 9.37533 
                                                17.2053C11.2676 17.2053 13.0032 
                                                16.5344 14.3572 15.4176L17.1773 
                                                18.238C17.4702 18.5309 17.945 
                                                18.5309 18.2379 18.238C18.5308 
                                                17.9451 18.5309 17.4703 18.238 
                                                17.1773L15.4182 14.3573C16.5367 
                                                13.0033 17.2087 11.2669 17.2087 
                                                9.37363C17.2087 5.04817 13.7014 
                                                1.54199 9.37533 1.54199Z" 
                                                fill="">
                                            </path>
                                        </svg>
                                    </span>
                                    <input placeholder="Search..." className="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 
                                        focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 
                                        bg-transparent py-2.5 pr-4 pl-11 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 
                                        focus:outline-hidden xl:w-[300px] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30" 
                                        type="text" value=""/>
                                </div>
                                <div className="relative">
                                    <button className="shadow-theme-xs flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white 
                                        px-4 py-2.5 text-sm font-medium text-gray-700 sm:w-auto sm:min-w-[100px] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400" 
                                        type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M14.6537 5.90414C14.6537 4.48433 13.5027 3.33331 12.0829 3.33331C10.6631 3.33331 
                                                9.51206 4.48433 9.51204 5.90415M14.6537 5.90414C14.6537 7.32398 13.5027 8.47498 12.0829 
                                                8.47498C10.663 8.47498 9.51204 7.32398 9.51204 5.90415M14.6537 5.90414L17.7087 5.90411M9.51204 
                                                5.90415L2.29199 5.90411M5.34694 14.0958C5.34694 12.676 6.49794 11.525 7.91777 11.525C9.33761 
                                                11.525 10.4886 12.676 10.4886 14.0958M5.34694 14.0958C5.34694 15.5156 6.49794 16.6666 7.91778 
                                                16.6666C9.33761 16.6666 10.4886 15.5156 10.4886 14.0958M5.34694 14.0958L2.29199 14.0958M10.4886 
                                                14.0958L17.7087 14.0958" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                            </svg>
                                        Filter
                                    </button>
                                </div>
                                <button className="shadow-theme-xs flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 
                                bg-white px-4 py-[11px] text-sm font-medium text-gray-700 sm:w-auto dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.6671 13.3333V15.4166C16.6671 16.1069 16.1074 16.6666 15.4171 16.6666H4.58301C3.89265 
                                        16.6666 3.33301 16.1069 3.33301 15.4166V13.3333M10.0013 3.33325L10.0013 13.3333M6.14553 7.18708L9.99958 
                                        3.33549L13.8539 7.18708" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                    </svg>
                                    Export
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Card Body */}
                    <InvoiceTable />

                </div>
            </div>


        </>
    );
}